const setMemberSellProperty = sellCssObj => {
  Object.keys(sellCssObj).forEach(item => {
    document.body.style.setProperty(`--sell_down_${item}`, sellCssObj[item])
  })
}

const setMemberBuyProperty = buyCssObj => {
  Object.keys(buyCssObj).forEach(item => {
    document.body.style.setProperty(`--buy_up_${item}`, buyCssObj[item])
  })
}

export { setMemberSellProperty, setMemberBuyProperty }
