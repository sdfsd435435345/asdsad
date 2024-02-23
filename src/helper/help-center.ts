export function handleVideo(ele) {
  ele.setAttribute('x5-video-player-type', 'h5')
  ele.setAttribute('x5-video-player-fullscreen', 'true')
  ele.setAttribute('x5-video-orientation', 'landscape')
  ele.poster = 'https://markcoin.oss-ap-southeast-1.aliyuncs.com/fastpay-h5/image/login_plate.png'
  return ele
}
