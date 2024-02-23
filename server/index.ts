import express from 'express'
import cookieParser from 'cookie-parser'
import { renderPage } from 'vite-plugin-ssr'
import httpDevServer from 'vavite/http-dev-server'
import { I18nsEnum } from '@/constants/i18n'
import { envIsBuild, envIsDev, port, WebUrl } from '@/helper/env'
import { extractLocale, getFirstLang, localeDefault } from '@/helper/i18n'
import { ThemeColorEnum, ThemeEnum } from '@/constants/base'
import { securityUtils } from '@/nbit'

const outDir = `dist`

async function startServer() {
  const app = express()
  if (envIsBuild) {
    app.use(express.static(`${outDir}/client`, { maxAge: 3600000 }))
  }
  app.use(cookieParser())

  app.get('*', async (req, res, next) => {
    let urlOriginal = securityUtils.getSecurityUrl(req.originalUrl)
    // host: 'web.nbttfc365.com'
    let { host, 'user-agent': userAgent } = req.headers // eg:127.0.0.1:4000
    if (!userAgent) {
      userAgent = ''
    }
    userAgent = userAgent.toLowerCase()
    if (!/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
      /** 判断是否是融合商户* */
      const { refreshToken, businessId, h5AccessKey, webAccessKey, webUrl: mergeWebUrl } = req.query
      const isMerge = refreshToken && businessId && h5AccessKey
      let webRedirectUrl = `${req.protocol}://${new URL(WebUrl).host}${urlOriginal}`
      /** 融合模式下使用融合路由* */
      if (isMerge) {
        const originUrl = `?refreshToken=${refreshToken}&businessId=${businessId}&webAccessKey=${webAccessKey}`
        webRedirectUrl = `${mergeWebUrl}${originUrl}`
      }
      // return res.redirect(307, webRedirectUrl)
      if (!envIsDev) {
        // TODO: 动态拿地址
        // let updatedHost = host.replace(new URL(H5Url).host, new URL(WebUrl).host)
        return res.redirect(307, webRedirectUrl)
      }
    }
    const { theme, themeColor, token, locale: cookieLocale, bid } = securityUtils.getSecuritySingleMap(req.cookies)
    let { urlWithoutLocale, locale } = extractLocale(urlOriginal)
    let nbLang = userAgent?.match?.(/nblang\/(\S*)/)?.[1]
    const firstLang = getFirstLang(nbLang, cookieLocale, req.headers?.['accept-language'])
    if (!locale) {
      locale = localeDefault
    }
    function redirectLang(res, firstLang, locale, urlWithoutLocale) {
      res.cookie('locale', firstLang, { maxAge: 9000000 })
      if (locale !== firstLang) {
        if (firstLang === I18nsEnum['en-US']) {
          return true
        }
        res.redirect(307, `/${firstLang}${urlWithoutLocale}`)
        return false
      }
      return true
    }
    const resRedirect = redirectLang(res, firstLang, locale, urlWithoutLocale)
    if (!resRedirect) {
      return
    }
    let newTheme = theme
    let newThemeColor = themeColor
    /** webView 环境下获取 App 端主题和语言的值 */
    if (userAgent.includes('nbtheme/')) {
      const uaTheme = userAgent.match(/nbtheme\/(\S*)\s/)?.[1] || ''
      if (ThemeEnum[uaTheme]) {
        newTheme = uaTheme
      }
    }
    if (userAgent.includes('nbtheme-color/')) {
      const uaThemeColor = userAgent.match(/nbtheme-color\/(\S*)\s/)?.[1] || ''
      if (ThemeColorEnum[uaThemeColor]) {
        newThemeColor = ThemeColorEnum[uaThemeColor]
      }
    }

    urlOriginal = urlWithoutLocale
    let path
    if (urlOriginal === '/index.pageContext.json') {
      path = '/'
    } else {
      path = urlOriginal.replace('/index.pageContext.json', '')
    }

    const pageContextInit = {
      urlOriginal,
      locale,
      host,
      theme: newTheme,
      themeColor: newThemeColor,
      path,
      businessId: req.query?.businessId || bid,
      userAgent,
      headers: { token },
    }
    try {
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse, errorWhileRendering } = pageContext
      if (errorWhileRendering) {
        console.error(errorWhileRendering, 'errorWhileRendering<<<============')
      }
      if (!httpResponse) return next()
      const { statusCode, contentType } = pageContext.httpResponse
      res.set({
        'content-type': contentType,
        'Cache-Control': 'public, max-age=3600',
      })
      res.statusCode = statusCode
      httpResponse.pipe(res)
    } catch (error) {
      console.log(error, 'init-renderPage-error-----')
    }
  })
  if (envIsBuild) {
    app.listen(port)
    // eslint-disable-next-line no-console
    console.log(`Server running at http://localhost:${port}`)
  } else {
    httpDevServer!.on('request', app)
  }
}

startServer()
