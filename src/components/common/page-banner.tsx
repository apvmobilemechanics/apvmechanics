"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageBanner({ title }: { title: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduceMotion = useReducedMotion();
  const shouldReduceMotion = mounted ? Boolean(reduceMotion) : false;

  return (
    <section className="page-header" aria-labelledby="page-title">
      <div className="container page-header__inner">
        {/* Title animation */}
        <motion.h1
          id="page-title"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb navigation animation */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.15 }}
        >
          <Link href="/">Home</Link>
          <span>{"//"}</span>
          <b>{title}</b>
        </motion.nav>
      </div>
    </section>
  );
}
