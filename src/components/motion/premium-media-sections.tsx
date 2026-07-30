"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ThemeButton } from "@/components/common/button";
import { VideoModalButton } from "@/components/home/interactive";

const A = "/assets/images";
const ease = [0.22, 1, 0.36, 1] as const;

/* ─── shared stagger parent ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

/* ─── fade-up child (matches WhatsApp video reference timing) ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(3px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease },
  },
};

/* ─── fade-right child (for play button side) ─── */
const fadeRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(2px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease },
  },
};

export function PremiumVideoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.09]);

  return (
    <motion.section
      ref={sectionRef}
      className="video-one-clone video-one-clone--motion"
      aria-labelledby="video-gallery-title"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease }}
    >
      {/* Parallax background */}
      <motion.div
        className="video-one-clone__background"
        aria-hidden="true"
        style={reduceMotion ? { scale: 1.04 } : { y: bgY, scale: bgScale }}
      />
      <div className="video-one-clone__overlay" aria-hidden="true" />
      <Image
        className="video-one-clone__shape"
        src={`${A}/shapes/cta-one-shape-1.png`}
        alt=""
        width={500}
        height={490}
      />

      <div className="container video-one-clone__content">
        {/* LEFT: Staggered text reveal (fade-up, stagger) */}
        <motion.div
          className="video-one-clone__titles"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* "Car Repair" ghost eyebrow — slides up first */}
          <motion.span variants={fadeUp} aria-hidden="true">
            Car Repair
          </motion.span>

          {/* Heading — "Video [thumbnail] Gallery" */}
          <h2 id="video-gallery-title">
            <motion.span className="video-one-clone__title-line" variants={fadeUp}>
              <strong>Video</strong>
              <motion.span
                className="video-one-clone__thumbnail"
                whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: 2 }}
                transition={{ duration: 0.3, ease }}
              >
                <Image
                  src={`${A}/generated/apv-about-workshop.webp`}
                  alt="Mechanic working on a vehicle"
                  fill
                  sizes="132px"
                />
              </motion.span>
            </motion.span>
            <motion.em variants={fadeUp}>Gallery</motion.em>
          </h2>

          {/* Subtitle */}
          <motion.small variants={fadeUp}>
            Expert Videos on
            <br />
            Vehicle Repairs
          </motion.small>
        </motion.div>

        {/* RIGHT: Play button — fades in from right after text stagger */}
        <motion.div
          className="video-one-clone__play"
          variants={fadeRight}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, ease, delay: reduceMotion ? 0 : 0.32 }}
        >
          <motion.div
            className="video-one-clone__play-pulse"
            animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
            transition={{
              duration: 2.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <VideoModalButton />
          </motion.div>
          <b>Watch Video</b>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function PremiumFooterCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.08]);

  return (
    <motion.section
      ref={sectionRef}
      className="footer-cta footer-cta--motion"
      aria-label="Get our service"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease }}
    >
      <motion.div
        className="footer-cta__background"
        aria-hidden="true"
        style={reduceMotion ? { scale: 1.04 } : { y: bgY, scale: bgScale }}
      />
      <div className="footer-cta__overlay" aria-hidden="true" />

      <div className="container footer-cta__inner">
        {/* Left copy — staggered fade-up */}
        <motion.div
          className="footer-cta__copy"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={fadeUp}>GET OUR SERVICE</motion.span>
          <motion.h2 variants={fadeUp}>
            Trusted Car Repair Experts
            <br />
            Get in Touch Today!
          </motion.h2>
        </motion.div>

        {/* Right button — fade-right with slight delay */}
        <motion.div
          className="footer-cta__action"
          variants={fadeRight}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, ease, delay: reduceMotion ? 0 : 0.28 }}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
        >
          <ThemeButton href="/contact">Get Details</ThemeButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
