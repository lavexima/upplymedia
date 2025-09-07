"use client";

import { motion } from "framer-motion";
import React from "react";

function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-22 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 text-center mb-12">
          Kullanıcı Deneyimleri
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ayşe K.",
              role: "Çalınan hesap kurtarıldı",
              quote:
                "Instagram hesabım çalınmıştı,çok kısa sürede geri aldılar. Gerçekten profesyonel bir ekip.",
              image: "/images/ayse.jpg",
            },
            {
              name: "Burak T.",
              role: "Topluluk ihlaliyle kapanan hesap açıldı",
              quote:
                "Kapanan hesabım için başvurudum 2 gün içinde geri açıldı. Tavsiye ederim,işlerini biliyorlar.",
              image: "/images/burak.jpg",
            },
            {
              name: "Elif M.",
              role: "Spam ve sahte şikayetler temizlendi",
              quote:
                "itibar saldırısına uğradım,kısa sürede her şey temizlendi. Çok teşekkür ediyorum.",
                image: "/images/elif.jpg",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-700 rounded-lg p-6 shadow-lg hover:bg-slate-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-slate-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 bg-slate-600 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
