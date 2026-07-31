"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function PageBanner({ title }: { title: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="page-header" aria-labelledby="page-title">
      {/* Tech gear network watermark background */}
      <motion.div
        className="page-header__watermark"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <Image
          src="/assets/images/shapes/page-header-shape2.png"
          alt=""
          width={560}
          height={560}
          priority
        />
      </motion.div>

      {/* Top-left red gear shape */}
      <motion.div
        className="page-header__shape page-header__shape--one"
        aria-hidden="true"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.5, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.85, ease, delay: 0.08 }}
      >
        <Image
          src="/assets/images/shapes/main-slider-shape-2.png"
          alt=""
          width={110}
          height={110}
        />
      </motion.div>

      {/* Mechanics cutout image (2 mechanics in red uniforms) */}
      <motion.div
        className="page-header__car-wrap"
        initial={reduceMotion ? false : { opacity: 0, x: 50, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.12 }}
      >
        <Image
          className="page-header__car"
          src="/assets/images/resources/page-header-img1.png"
          alt="APV Mobile Mechanics team"
          width={620}
          height={380}
          priority
        />
      </motion.div>

      <div className="container page-header__inner">
        {/* Title animation */}
        <motion.h1
          id="page-title"
          initial={reduceMotion ? false : { opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb navigation animation */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
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
