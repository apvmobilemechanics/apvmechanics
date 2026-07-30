"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ThemeButton } from "@/components/common/button";
import { VideoModalButton } from "@/components/home/interactive";

const A = "/assets/images";
const premiumEase = [0.16, 1, 0.3, 1] as const;
const galleryReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};
const galleryRevealItem = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

export function PremiumVideoGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.035, 1.085]);

  const revealInitial = reduceMotion ? false : { opacity: 0, y: 38 };
  const revealTransition = { duration: 0.8, ease: premiumEase };

  return (
    <motion.section
      ref={sectionRef}
      className="video-one-clone video-one-clone--motion"
      aria-labelledby="video-gallery-title"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={revealTransition}
    >
      <motion.div
        className="video-one-clone__background"
        aria-hidden="true"
        style={
          reduceMotion
            ? { scale: 1.035 }
            : { y: backgroundY, scale: backgroundScale }
        }
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
        <motion.div
          className="video-one-clone__titles"
          variants={galleryReveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.span variants={galleryRevealItem} aria-hidden="true">
            Car Repair
          </motion.span>
          <h2 id="video-gallery-title">
            <motion.span
              className="video-one-clone__title-line"
              variants={galleryRevealItem}
            >
              <strong>Video</strong>
              <motion.span
                className="video-one-clone__thumbnail"
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.3, ease: premiumEase }}
              >
                <Image
                  src={`${A}/generated/apv-about-workshop.webp`}
                  alt="Mechanic working on a vehicle"
                  fill
                  sizes="132px"
                />
              </motion.span>
            </motion.span>
            <motion.em variants={galleryRevealItem}>Gallery</motion.em>
          </h2>
          <motion.small variants={galleryRevealItem}>
            Expert Videos on
            <br />
            Vehicle Repairs
          </motion.small>
        </motion.div>

        <motion.div
          className="video-one-clone__play"
          initial={revealInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ ...revealTransition, delay: reduceMotion ? 0 : 0.14 }}
        >
          <motion.div
            className="video-one-clone__play-pulse"
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.035, 1] }
            }
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
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-2.5%", "2.5%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.035, 1.075]);
  const revealInitial = reduceMotion ? false : { opacity: 0, y: 34 };

  return (
    <motion.section
      ref={sectionRef}
      className="footer-cta footer-cta--motion"
      aria-label="Get our service"
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: premiumEase }}
    >
      <motion.div
        className="footer-cta__background"
        aria-hidden="true"
        style={
          reduceMotion
            ? { scale: 1.035 }
            : { y: backgroundY, scale: backgroundScale }
        }
      />
      <div className="footer-cta__overlay" aria-hidden="true" />

      <div className="container footer-cta__inner">
        <motion.div
          className="footer-cta__copy"
          initial={revealInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          <span>GET OUR SERVICE</span>
          <h2>
            Trusted Car Repair Experts
            <br />
            Get in Touch Today!
          </h2>
        </motion.div>

        <motion.div
          className="footer-cta__action"
          initial={revealInitial}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { scale: 1.025 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: premiumEase, delay: reduceMotion ? 0 : 0.12 }}
        >
          <ThemeButton href="/contact">Get Details</ThemeButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
