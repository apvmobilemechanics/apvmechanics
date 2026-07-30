import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts=[
  "Top Car Repair Tips to Extend Your Vehicle’s Life",
  "Car Repair & Maintenance Tips for Safe Driving",
  "Understanding Their Role in Engine Performance",
  "How to Keep Your Vehicle Running Smoothly",
  "Expert Advice for Better Fuel Efficiency",
  "Important Checks Before a Long Journey",
];

export function BlogGrid() {
  return <section className="section blog blog-page-content"><div className="container"><div className="blog-grid blog-grid--six">{posts.map((title,i)=><article key={title}><div><Image src={`/assets/images/blog/blog-1-${i+1}.jpg`} alt={title} fill sizes="390px"/><span>May {10+i}, 2026</span></div><p>CAR REPAIR&nbsp;&nbsp; / &nbsp;&nbsp;BY ADMIN</p><h3>{title}</h3><Link href="/blog-details">Read More <ArrowRight/></Link></article>)}</div><nav className="pagination" aria-label="Blog pages"><Link className="active" href="/blog">1</Link><Link href="/blog-standard">2</Link><Link href="/blog-standard">›</Link></nav></div></section>;
}
