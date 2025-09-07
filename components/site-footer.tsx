import Link from "next/link";
import React from "react";

function SiteFooter() {
  return (
    <footer className="bg-slate-900 border-t border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pl-5 ml-5 lg:pl-20 lg:ml-20">
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Kaynaklar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 hover:text-white transition-colors">
                  Destek Merkezi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Şirket
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/905056415703?text=Merhaba%20Upply%20Media,%20iletişime%20geçmek%20istiyorum"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/references" className="text-slate-400 hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">
              Toplum
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://instagram.com/upplymedia" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://facebook.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://tiktok.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  TikTok
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 pl-0 ml-0 lg:pl-20 lg:ml-20">
            © 2025 Easy UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
