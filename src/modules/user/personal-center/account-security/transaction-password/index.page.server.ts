async function onBeforeRender(pageContext: PageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      pageProps,
      layoutParams,
      documentProps: {
        title: `交易密码`,
      },
    },
  }
}

export { onBeforeRender }
