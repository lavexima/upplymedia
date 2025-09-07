"use client";

import { motion } from "framer-motion";
import React from "react";

function ExampleSection() {
  return (
    <section className="py-10 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-12 items-center">
          <motion.div
            className="bg-slate-800 p-6 shadow-4xl backdrop-blur bg-transparent mt-8 md:mt-0 hidden lg:flex rounded-xl justify-start"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <svg
              width="400"
              height="400"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="neon shield icon"
              className="mx-0"
            >
              <defs>
                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="shieldGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#FF3300" />
                </linearGradient>
              </defs>

              {/* Outer Shield */}
              <path
                d="M60 10 L30 35 V65 Q30 90 60 105 Q90 90 90 65 V35 L60 10 Z"
                fill="none"
                stroke="url(#shieldGradient)"
                strokeWidth="6"
                filter="url(#neonGlow)"
                strokeLinejoin="round"
              />

              {/* Inner Soft Fill */}
              <path
                d="M60 14 L34 38 V64 Q34 84 60 97 Q86 84 86 64 V38 L60 14 Z"
                fill="#111111"
                stroke="url(#shieldGradient)"
                strokeWidth="1.5"
                filter="url(#neonGlow)"
              />
            </svg>
          </motion.div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 text-center md:text-left mb-4 md:mb-6 relative left-0 md:left-[-0px]">
              Dijital Kimliğinizi Hemen Koruyun
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8 text-center md:text-left">
              Hesap kurtarma, itibar yönetimi ve dijital güvenlik alanında profesyonel çözümler sunuyoruz.
              Uzman ekibimizle sürecin her aşamasını hızlı ve şeffaf bir şekilde yönetiyor, size zaman kazandırıyoruz.
              Size özel stratejilerle dijital varlığınızı koruyor ve en iyi sonucu garanti ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleSection;
