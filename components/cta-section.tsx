import React from "react";
import Link from "next/link";

function CTASection() {
  return (
    <section className="py-20 sm:py-32 mb-20 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-6">
          Zaman Kaybetmeden Bizimle İletişime Geçin
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Dijital sorunlar zaman kaybına gelmez. Size özel hızlı ve güvenli çözümler için uzman ekibimizle her an hazırız. Hemen iletişime geçin, süreci biz başlatalım.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* WhatsApp Link */}
          <Link
            href="https://wa.me/9050506415703?text=Merhaba%20Upply%20Media,%20yardımcı%20olur%20musunuz?"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold h-12 px-8 rounded-lg inline-flex items-center justify-center transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
