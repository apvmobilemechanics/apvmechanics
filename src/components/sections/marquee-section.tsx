import Image from "next/image";
import { MARQUEE_ITEMS } from "@/constants/navigation.constants";
import { ASSET_PREFIX } from "@/constants/site.constants";

export function MarqueeSection() {
  return (
    <div className="marquee" aria-label="Our services">
      <div>
        {MARQUEE_ITEMS.map((x, i) => (
          <span key={i}>
            {x}
            <Image src={`${ASSET_PREFIX}/icon/icon-1.png`} alt="" width={36} height={40} />
          </span>
        ))}
      </div>
    </div>
  );
}
