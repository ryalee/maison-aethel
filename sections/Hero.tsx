"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col px-15 inset-0 h-full w-full -z-5 mb-60 md:mb-80">
      <div className="absolute flex inset-0 h-full w-full bg-black/40 -z-5" />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      <div className="z-10 flex flex-col items-start mt-15 md:mt-30 gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="text-7xl md:text-8xl title text-[#efefef]"
        >
          A arte da pele <br /> em seu estado mais puro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.6,
            ease: "easeOut",
          }}
          className="text-lg text-[#ccc]"
        >
          Um santuário dedicado à preservação da juventude e ao refinamento da{" "}
          <br />
          beleza natural através de protocolos científicos e rituais sensoriais.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2.2,
          ease: "easeOut",
        }}
        className="flex flex-col md:flex-row mt-5 gap-6"
      >
        <a
          href="#contato"
          className="bg-[#B08D63] hover:bg-[#C6A77B] transition duration-300 cursor-pointer px-6 py-3 rounded-full text-center"
        >
          Reservar Avaliação
        </a>

        <a
          href="#tratamentos"
          className="group relative flex items-center gap-2 text-[#efefef] hover:text-[#C6A77B] font-medium"
        >
          Ver tratamentos <ArrowRight />
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#C6A77B] transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
      </motion.div>
    </section>
  );
}
