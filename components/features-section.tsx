"use client";

import { motion } from 'framer-motion';
import { Lock, Zap, Shield, Smartphone, Globe, ShieldAlert } from 'lucide-react';
import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 text-center mb-20">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Lock className="h-8 w-8 text-orange-500" />,
              title: "Instagram Hesap Kurtarma",
              description:
                "Kapanan, şikayetle giden veya çalınan Instagram hesaplarını geri getiriyoruz.Tüm süreci biz yönetiyoruz, siz sadece sonucu görüyorsunuz.",
            },
            {
              icon: <Zap className="h-8 w-8 text-orange-500" />,
              title: "Kalıcı Hesap Kapatma Desteği",
              description:
                "Kendi isteğiyle hesap kapatmak isteyenler için hızlı ve kesin çözümler sunuyoruz.Tıklayıp siteden talep oluşturmanız yeterli.",
            },
            {
              icon: <Shield className="h-8 w-8 text-orange-500" />,
              title: "Güvenlik ve Gizlilik Danışmanlığı",
              description:
                "Instagram’da çalınma, sızılma veya stalk sorunlarına karşı koruma sağlıyoruz.Hesabınızı koruma altına alıyor, kontrol sizde kalıyor.",
            },
            {
              icon: <Smartphone className="h-8 w-8 text-orange-500" />,
              title: "Instagram Yönetimi & Sistemli Büyüme",
              description:
                "İçerik üretmek değil, sistemli şekilde büyümek istiyorsanız doğru yerdesiniz.Stratejik paylaşım planları, algoritma odaklı hareket, organik büyüme.",
            },
            {
              icon: <Globe className="h-8 w-8 text-orange-500" />,
              title: "Web Site Kurulumu ve Dijital Kimlik",
              description:
                "Size özel web sitesi tasarımı, kurumsal mail, domain ve Google harita kaydı gibi tüm dijital varlıklar tek elden hazırlanır.",
            },
            {
              icon: <ShieldAlert className="h-8 w-8 text-orange-500" />,
              title: "İtibar Koruma ve Şikâyet Çözümü",
              description:
                "Hedefli spam saldırılar, sahte şikâyetler, yanlış cezalara karşı adım adım çözüm sunuyoruz.İtibarınızı geri kazanmanız için arka planda biz çalışıyoruz.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
