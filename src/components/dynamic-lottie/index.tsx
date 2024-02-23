import Lottie, { LottieComponentProps } from 'lottie-react'
import { useEffect, useState } from 'react'

function DynamicLottie({
  animationData,
  onAnimationDataLoaded,
  ...rest
}: Exclude<LottieComponentProps, 'animationData'> & {
  animationData: () => Promise<{
    default: any
  }>
  onAnimationDataLoaded?: (data: any) => void
}) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    animationData().then(res => {
      onAnimationDataLoaded && onAnimationDataLoaded(res.default)
      setData(res.default)
    })
  }, [animationData])

  return <>{data && <Lottie animationData={data} {...rest} />}</>
}

export default DynamicLottie
