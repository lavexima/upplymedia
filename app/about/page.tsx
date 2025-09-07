"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      {/* İstersen buraya AnimatedBackground gibi hareketli arka plan ekleyebilirsin */}

      <div className="relative z-10">
        {/* Header */}
        <SiteHeader />

        {/* Sayfa içeriği */}
        <main className="px-6 sm:px-12 md:px-20 py-20 max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl font-bold text-center mb-12 text-orange-500">
            Hakkımızda
          </h1>

          {/* Biz Kimiz */}
          <section className="bg-gray-800 bg-opacity-80 p-8 rounded-xl backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Biz Kimiz?</h2>
            <p className="text-gray-300 leading-relaxed">
              Upply Media olarak, dijital çağda karşılaşılan karmaşık problemleri çözmek için bir araya gelmiş deneyimli bir ekibiz.
              Sosyal medya hesap kurtarma, itibar yönetimi ve dijital güvenlik alanlarında yılların verdiği tecrübe ile müşterilerimize güvenilir ve hızlı çözümler sunuyoruz.
              Her müşterimizi bir iş ortağı olarak görüyor, sorunlarına özel, kalıcı ve etkili çözümler geliştirmeyi taahhüt ediyoruz.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Teknolojiyi doğru ve etik kullanarak, dijital dünyada yaşanan risklere karşı bireylerin ve kurumların yanında duruyoruz.
              Dijital kimliğinizin her zaman güvende olması için çalışıyor, güveninizi kazanmak için durmadan gelişiyoruz.
            </p>
          </section>

          {/* Misyon */}
          <section className="bg-gray-800 bg-opacity-80 p-8 rounded-xl backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              Dijital dünyanın hızlı ve sürekli değişen dinamiklerinde, kullanıcıların dijital kimliklerini, hesaplarını ve itibarlarını güvence altına almak en öncelikli hedefimizdir.
              Teknolojinin getirdiği tüm risklere karşı kişisel ve kurumsal dijital varlıkların korunmasını sağlamak, güvenli ve şeffaf çözümlerle müşterilerimize destek olmak için buradayız.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Uzman ekibimizle; hesap kurtarma, itibar yönetimi, dijital güvenlik danışmanlığı ve sosyal medya yönetimi alanlarında yenilikçi hizmetler sunuyor, müşterilerimizin her aşamada yanında oluyoruz.
              Dijital dünyada kaybolan veya zarar gören her kimliğin tekrar kazanılması için çalışıyoruz.
            </p>
          </section>

          {/* Vizyon */}
          <section className="bg-gray-800 bg-opacity-80 p-8 rounded-xl backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="text-gray-300 leading-relaxed">
              Dijital güvenlik ve itibar alanında Türkiye’nin öncü kuruluşu olmak, global standartları yakalayan çözümlerle sektörde güvenin simgesi haline gelmektir.
              Müşteri memnuniyetini en üst seviyeye çıkarmak, sürekli gelişen teknolojiye ayak uydurarak en güncel ve etkili çözümleri sunmak en büyük önceliğimizdir.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Aynı zamanda, dijital dünyanın karmaşıklığını sadeleştirerek herkes için erişilebilir ve anlaşılır hale getirmek, dijital varlık yönetiminde şeffaflık ve etik değerleri korumak da vizyonumuzun önemli parçalarıdır.
            </p>
          </section>

          {/* Değerlerimiz */}
          <section className="bg-gray-800 bg-opacity-80 p-8 rounded-xl backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Değerlerimiz</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Güvenilirlik: Müşterilerimizin dijital varlıklarını korumak bizim için birincil önceliktir.</li>
              <li>Şeffaflık: Tüm süreçlerde açık iletişim ve bilgi paylaşımını esas alıyoruz.</li>
              <li>Profesyonellik: Alanında uzman kadromuzla en yüksek kalite standartlarını sunuyoruz.</li>
              <li>Müşteri Memnuniyeti: Hizmetlerimizi müşterilerimizin ihtiyaç ve beklentilerine göre şekillendiriyoruz.</li>
              <li>Yenilikçilik: Teknolojik gelişmeleri yakından takip ederek sürekli gelişim sağlıyoruz.</li>
            </ul>
          </section>
        </main>

        {/* Footer */}
        <SiteFooter />
      </div>
    </div>
  );
}
