"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ThemeButton } from "@/components/common/button";
import { VideoModalButton } from "@/components/home/interactive";

const A = "/assets/images";
const ease = [0.16, 1, 0.3, 1] as const;

/* ─── shared stagger parent ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

/* ─── fade-up child ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

/* ─── fade-right child (for right side elements) ─── */
const fadeRight = {
  hidden: { opacity: 0, x: 50, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

export function PremiumVideoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.1]);

  return (
    <motion.section
      ref={sectionRef}
      className="video-one-clone video-one-clone--motion"
      aria-labelledby="video-gallery-title"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease }}
      data-reveal="up"
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
        {/* LEFT: Staggered text reveal */}
        <motion.div
          className="video-one-clone__titles"
          variants={stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          data-reveal="left"
        >
          {/* "Car Repair" ghost eyebrow */}
          <motion.span variants={fadeUp} aria-hidden="true">
            Car Repair
          </motion.span>

          {/* Heading — "Video [thumbnail] Gallery" */}
          <h2 id="video-gallery-title">
            <motion.span className="video-one-clone__title-line" variants={fadeUp}>
              <strong>Video</strong>
              <motion.span
                className="video-one-clone__thumbnail"
                whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 3 }}
                transition={{ duration: 0.35, ease }}
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

        {/* RIGHT: Play button — fades in from right */}
        <motion.div
          className="video-one-clone__play"
          variants={fadeRight}
          initial={reduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease, delay: reduceMotion ? 0 : 0.2 }}
          data-reveal="right"
        >
          <motion.div
            className="video-one-clone__play-pulse"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{
              duration: 2.2,
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.09]);

  return (
    <motion.section
      ref={sectionRef}
      className="footer-cta footer-cta--motion"
      aria-label="Get our service"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease }}
      data-reveal="up"
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
          viewport={{ once: true, amount: 0.15 }}
          data-reveal="left"
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease, delay: reduceMotion ? 0 : 0.2 }}
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          data-reveal="right"
        >
          <ThemeButton href="/contact">Get Details</ThemeButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
