function fetchData() {
  return Promise.resolve({
    title: 'home',
  })
}

export async function onBeforeRender(pageContext) {
  const response = await fetchData()
  return {
    pageContext: {
      // unAuthTo: '/login?redirect=/',
      redirect: '/',
      pageProps: response,
      layoutParams: {
        footerShow: true, // 是否需要 footer
        headerShow: true,
        disableTransition: true,
      },
    },
  }
}
