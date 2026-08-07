import Image from "next/image";
import { MARQUEE_ITEMS } from "@/constants";

export function MarqueeTicker() {
  return (
    <div className="marquee" aria-label="Our services">
      <div>
        {MARQUEE_ITEMS.map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <Image src="/assets/images/icon/icon-1.png" alt="" width={36} height={40} />
          </span>
        ))}
      </div>
    </div>
  );
}

export const Marquee = MarqueeTicker;
export const InnerMarquee = MarqueeTicker;
