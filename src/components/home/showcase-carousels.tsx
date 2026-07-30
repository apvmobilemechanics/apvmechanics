"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Eye, Heart, MessageCircle, Repeat2, ShoppingCart, Star } from "lucide-react";
import { useRef } from "react";
import { SectionHeading } from "@/components/common/section-heading";
import { ThemeButton } from "@/components/common/button";
import { useCommerce } from "@/components/commerce/commerce-provider";

const A = "/assets/images";

const products = [
  ["performance-tire", "Care tires", "shop-one-img-1-3.jpg", "$14.2", "$19.00"],
  ["spark-plugs", "Spark plugs", "shop-one-img-1-4.jpg", "$143.2", "$189.00"],
  ["cordless-drill", "Electric drill", "shop-one-img-1-5.jpg", "$143.2", "$179.00"],
  ["tool-set", "Car keys", "shop-one-img-1-6.jpg", "$103.2", "$169.00"],
  ["car-battery", "Car battery", "shop-one-img-1-7.jpg", "$132.5", "$188.00"],
  ["socket-wrench", "Gear shift knob", "shop-one-img-1-8.jpg", "$92.6", "$119.00"],
] as const;

const people = [
  ["Henry Joseph", "Brake Repairer", 2],
  ["Daniel Robert", "Trolley Engine", 3],
  ["William Henry", "Load Carrier Engine", 1],
  ["Henry Joseph", "Brake Repairer", 2],
  ["Daniel Robert", "Trolley Engine", 3],
  ["William Henry", "Load Carrier Engine", 1],
] as const;

function move(ref: React.RefObject<HTMLDivElement | null>, direction: number) {
  const card = ref.current?.firstElementChild as HTMLElement | null;
  ref.current?.scrollBy({ left: direction * ((card?.offsetWidth ?? 300) + 30), behavior: "smooth" });
}

export function HomeShop() {
  const track = useRef<HTMLDivElement>(null);
  const { addToCart, toggleWishlist, wishlist } = useCommerce();
  return (
    <section className="shop-one-clone" id="shop">
      <div className="container">
        <SectionHeading eyebrow="THIS IS THE OFFICIAL SHOP" title={<>Trusted Car Repair Shop</>} center />
        <div className="clone-carousel product-carousel" ref={track}>
          {products.map(([id,name,image,price,oldPrice],index) => (
            <article className="clone-product" key={`${name}-${index}`} data-reveal>
              <div className="clone-product__image">
                <Image src={`${A}/shop/${image}`} alt={name} fill sizes="300px" />
                <b>20% Off</b>
                <div className="clone-product__actions">
                  <button className={wishlist.includes(id) ? "active" : ""} type="button" onClick={() => toggleWishlist(id)} aria-label={`Add ${name} to wishlist`}><Heart fill={wishlist.includes(id) ? "currentColor" : "none"}/></button>
                  <button type="button" onClick={() => addToCart(id)} aria-label={`Add ${name} to cart`}><ShoppingCart/></button>
                  <Link href={`/product-details?product=${id}`} aria-label={`Quick view ${name}`}><Eye/></Link>
                  <Link href="/shop" aria-label={`Compare ${name}`}><Repeat2/></Link>
                </div>
              </div>
              <div className="clone-product__content">
                <div className="stars">{[1,2,3,4].map(n=><Star key={n} fill="currentColor"/>)}<Star/></div>
                <h3>{name}</h3>
                <p><strong>{price}</strong><del>{oldPrice}</del></p>
                <Link href={`/product-details?product=${id}`} aria-label={`View ${name}`}><ChevronRight/></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-controls"><button onClick={()=>move(track,-1)} aria-label="Previous products"><ChevronLeft/></button><button onClick={()=>move(track,1)} aria-label="Next products"><ChevronRight/></button></div>
      </div>
    </section>
  );
}

export function HomeTeam({ inner = false }: { inner?: boolean }) {
  const track = useRef<HTMLDivElement>(null);
  return (
    <section className={`team-one-clone ${inner ? "team-one-clone--inner" : ""}`} id="team">
      <div className="container">
        <div className="heading-row team-clone-heading"><SectionHeading eyebrow="OUR TRUSTED TEAM" title={<>Latest Expert Team Members</>} /><ThemeButton href="/about#team">All Team Members</ThemeButton></div>
        <div className="clone-carousel team-carousel" ref={track}>
          {people.map(([name,role,n],index) => (
            <article className="clone-team-card" key={`${name}-${index}`} data-reveal>
              <div className="clone-team-card__side"><span>{role}</span><strong>{name}</strong></div>
              <div className="clone-team-card__photo"><Image src={`${A}/team/team-v1-${n}.jpg`} alt={name} fill sizes="270px"/></div>
              <div className="clone-team-card__social"><MessageCircle/><Camera/><ArrowRight/></div>
            </article>
          ))}
        </div>
        <div className="carousel-controls"><button onClick={()=>move(track,-1)} aria-label="Previous team members"><ChevronLeft/></button><button onClick={()=>move(track,1)} aria-label="Next team members"><ChevronRight/></button></div>
      </div>
    </section>
  );
}
