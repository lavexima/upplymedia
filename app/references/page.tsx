"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function Referanslar() {
  const references = [
    {
      name: "Ahmet K.",
      role: "CEO, Teknoloji A.Ş.",
      comment:
        "Upply Media ile çalışmak işimizi dijital ortamda çok daha güvenli hale getirdi. Hesap kurtarma ve itibar yönetimi konusunda profesyoneller!",
    },
    {
      name: "Elif S.",
      role: "Pazarlama Müdürü, MarkaX",
      comment:
        "Sosyal medya hesaplarımızı güvenle teslim ettik, ekibin profesyonelliği ve hızlı çözümleri gerçekten takdire şayan.",
    },
    {
      name: "Murat D.",
      role: "Freelancer",
      comment:
        "Hesabım çalındığında hemen destek aldım, kısa sürede geri kazanmak çok önemliydi. Upply Media her zaman yanınızda.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      {/* İstersen hareketli arka plan ekleyebilirsin */}

      <div className="relative z-10">
        {/* Header */}
        <SiteHeader />

        {/* İçerik */}
        <main className="px-6 sm:px-12 md:px-20 py-20 max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl font-bold text-center mb-12 text-orange-500">
            Referanslar
          </h1>

          <div className="space-y-12">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-80 p-8 rounded-xl backdrop-blur-md shadow-lg"
              >
                <p className="text-gray-300 italic leading-relaxed mb-4">
                  "{ref.comment}"
                </p>
                <h3 className="text-xl font-semibold text-orange-400">{ref.name}</h3>
                <p className="text-gray-400">{ref.role}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <SiteFooter />
      </div>
    </div>
  );
}
