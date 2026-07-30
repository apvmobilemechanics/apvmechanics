"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingCart, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { useCommerce } from "@/components/commerce/commerce-provider";
import { products } from "@/lib/site-data";

export function ShopContent({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState("default");
  const { addToCart, toggleWishlist, wishlist } = useCommerce();
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    if (sort === "low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [query, sort]);

  return (
    <section className="section product-page">
      <div className="container shop-page-layout">
        <aside className="shop-sidebar">
          <label className="sidebar-search">
            <input aria-label="Search products" placeholder="Search products" value={query} onChange={(event) => setQuery(event.target.value)} />
            <Search />
          </label>
          <div><h3>Price</h3><div className="price-line"><span/><i/><i/></div><p>$10 — $250</p></div>
          <div><h3>Categories</h3>{["Accessories","Car Care","Engine Parts","Lighting","Tools","Wheels & Tires"].map((item) => <button type="button" key={item}>{item}<span>›</span></button>)}</div>
          <div><h3>Recent Products</h3>{products.slice(0,3).map((product) => <article className="recent-product" key={product.id}><Image src={product.image} alt={product.name} width={70} height={70}/><span><b>{product.name}</b><small>${product.price.toFixed(2)}</small></span></article>)}</div>
          <div><h3>Product Tags</h3><div className="tag-list">{["Brake","Car","Engine","Repair","Tools","Wheels"].map((item) => <span key={item}>{item}</span>)}</div></div>
          <div><h3>Reviews</h3><div className="stars">{[1,2,3,4,5].map((item) => <Star key={item} fill="currentColor"/>)}</div></div>
        </aside>
        <div className="shop-results">
          <div className="sort-bar">
            <p>Showing {visibleProducts.length} of {products.length} results</p>
            <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="default">Default sorting</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
            </select>
          </div>
          <div className="shop-product-grid">
            {visibleProducts.map((product) => (
              <article className="shop-product-card" key={product.id}>
                <div>
                  <Link href={`/product-details?product=${product.id}`} aria-label={`View ${product.name}`}>
                    <Image src={product.image} alt={product.name} fill sizes="270px"/>
                  </Link>
                  <div className="shop-product-actions">
                    <button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => addToCart(product.id)}><ShoppingCart/></button>
                    <button type="button" className={wishlist.includes(product.id) ? "active" : ""} aria-label={`Save ${product.name} to wishlist`} onClick={() => toggleWishlist(product.id)}><Heart fill={wishlist.includes(product.id) ? "currentColor" : "none"}/></button>
                  </div>
                </div>
                <div className="stars">{[1,2,3,4,5].map((item) => <Star key={item} size={13} fill="currentColor"/>)}</div>
                <h3><Link href={`/product-details?product=${product.id}`}>{product.name}</Link></h3>
                <p>${product.price.toFixed(2)}</p>
              </article>
            ))}
          </div>
          {visibleProducts.length === 0 && <div className="empty-state"><Search/><h3>No products found</h3><p>Try a different product name.</p></div>}
        </div>
      </div>
    </section>
  );
}
