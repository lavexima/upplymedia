"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const features = [
    {
      title: "Instagram Hesap Kurtarma",
      description:
        "Kapanan, şikayetle giden veya çalınan Instagram hesaplarını geri getiriyoruz. Tüm süreci biz yönetiyoruz, siz sadece sonucu görüyorsunuz.",
    },
    {
      title: "Kalıcı Hesap Kapatma Desteği",
      description:
        "Kendi isteğiyle hesap kapatmak isteyenler için hızlı ve kesin çözümler sunuyoruz. Tıklayıp siteden talep oluşturmanız yeterli.",
    },
    {
      title: "Güvenlik ve Gizlilik Danışmanlığı",
      description:
        "Instagram’da çalınma, sızılma veya stalk sorunlarına karşı koruma sağlıyoruz. Hesabınızı koruma altına alıyor, kontrol sizde kalıyor.",
    },
    {
      title: "Instagram Yönetimi & Sistemli Büyüme",
      description:
        "İçerik üretmek değil, sistemli şekilde büyümek istiyorsanız doğru yerdesiniz. Stratejik paylaşım planları, algoritma odaklı hareket, organik büyüme.",
    },
    {
      title: "Web Site Kurulumu ve Dijital Kimlik",
      description:
        "Size özel web sitesi tasarımı, kurumsal mail, domain ve Google harita kaydı gibi tüm dijital varlıklar tek elden hazırlanır.",
    },
    {
      title: "İtibar Koruma ve Şikâyet Çözümü",
      description:
        "Hedefli spam saldırılar, sahte şikâyetler, yanlış cezalara karşı adım adım çözüm sunuyoruz. İtibarınızı geri kazanmanız için arka planda biz çalışıyoruz.",
    },
    {
      title: "Sosyal Medya Stratejisi",
      description:
        "Hedef kitlenize uygun içerik ve stratejilerle organik büyüme ve etkileşim sağlıyoruz.",
    },
    {
      title: "SEO ve Dijital Pazarlama",
      description:
        "Web sitenizin görünürlüğünü artırmak için arama motoru optimizasyonu ve dijital pazarlama çözümleri sunuyoruz.",
    },
    {
      title: "Marka ve İtibar Yönetimi",
      description:
        "Markanızın dijital dünyadaki itibarını korumak ve güçlendirmek için kapsamlı danışmanlık sağlıyoruz.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <SiteHeader />

      <main className="px-6 sm:px-12 md:px-20 py-20 max-w-6xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-center mb-4 text-orange-500">
          Hizmetlerimiz
        </h1>
        <p className="text-center text-slate-300 text-lg mb-12">
          Dijital dünyada büyümenize ve başarıya ulaşmanıza destek olacak kapsamlı çözümler.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
