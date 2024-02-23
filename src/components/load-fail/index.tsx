import LazyImage from '@/components/lazy-image'
import { oss_svg_image_domain_address } from '@/constants/oss'

export default function LoadFail({ name }: { name?: string }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <LazyImage src={`${oss_svg_image_domain_address}load_fail_icon`} imageName={name || '404~'} hasTheme />
    </div>
  )
}
