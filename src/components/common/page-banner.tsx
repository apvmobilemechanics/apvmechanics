import Image from "next/image";
import Link from "next/link";

export function PageBanner({ title }: { title: string }) {
  return (
    <section className="page-header" aria-labelledby="page-title">
      <Image className="page-header__car" src="/assets/images/resources/page-header-img1.png" alt="" width={606} height={332} priority />
      <Image className="page-header__shape page-header__shape--one" src="/assets/images/shapes/page-header-shape1.png" alt="" width={186} height={186} />
      <Image className="page-header__shape page-header__shape--two" src="/assets/images/shapes/page-header-shape2.png" alt="" width={246} height={147} />
      <div className="container page-header__inner">
        <h1 id="page-title">{title}</h1>
        <nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>{"//"}</span><b>{title}</b></nav>
      </div>
    </section>
  );
}
