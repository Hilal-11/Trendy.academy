import { HiArrowNarrowRight } from "react-icons/hi";
import { ShimmerButton } from "@/components/ui/shimmer-button";
function Badge({ aboutBadge }: { aboutBadge?: string | undefined }) {
  return (
    <div className="z-10 flex  items-center justify-center">
      <ShimmerButton className="shadow-2xl">
      <p className="text-start text-sm flex items-center gap-2 whitespace-nowrap overflow-hidden lg:w-full md:w-full w-[270px]">
        <span className="flex items-center justify-start bg-orange-500 text-left font-mono text-[11px] px-2 h-[12px] py-px rounded-full text-neutral-800 ">New</span> {aboutBadge}
      </p>
      <span className="pl-2"><HiArrowNarrowRight className="text-xs" /></span>
    </ShimmerButton>
    </div>
  )
}

export default Badge


