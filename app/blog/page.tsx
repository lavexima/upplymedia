"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const blogPosts = [
  {
    title: "Instagram Hesap Güvenliği İçin 5 İpucu",
    date: "01 Eylül 2025",
    summary:
      "Hesabınızı korumak için almanız gereken basit ama etkili önlemler. Güçlü şifreler, iki faktörlü kimlik doğrulama ve daha fazlası.",
  },
  {
    title: "Sosyal Medyada Marka Yönetimi",
    date: "05 Eylül 2025",
    summary:
      "Markanızı sosyal medyada büyütmek için uygulayabileceğiniz stratejiler ve en iyi uygulamalar hakkında detaylı rehber.",
  },
  {
    title: "Instagram Kapatma ve Açma Süreci",
    date: "10 Eylül 2025",
    summary:
      "Instagram hesabınızı geçici olarak kapatma ve tekrar açma süreçlerinde dikkat etmeniz gerekenler.",
  },
  {
    title: "Sosyal Medya Hesap Kurtarma Yöntemleri",
    date: "12 Eylül 2025",
    summary:
      "Hesabınızın hacklenmesi durumunda hızlıca kurtarmak için izleyebileceğiniz adımlar.",
  },
  {
    title: "Dijital İtibar Yönetimi Nedir?",
    date: "15 Eylül 2025",
    summary:
      "Online dünyada itibarınızı nasıl koruyup geliştirebileceğinize dair temel bilgiler.",
  },
  {
    title: "Sosyal Medyada Güvenlik Açıkları",
    date: "18 Eylül 2025",
    summary:
      "En yaygın sosyal medya güvenlik açıkları ve bunlardan nasıl korunabileceğiniz üzerine ipuçları.",
  },
  {
    title: "Hesap Güvenliği İçin Parola Yönetimi",
    date: "20 Eylül 2025",
    summary:
      "Güçlü parolalar oluşturmanın yolları ve parola yöneticileri kullanmanın avantajları.",
  },
  {
    title: "Sosyal Medya Botları ve Riskleri",
    date: "22 Eylül 2025",
    summary:
      "Botların sosyal medya üzerindeki etkileri ve nasıl ayırt edileceği hakkında bilgiler.",
  },
  {
    title: "İki Faktörlü Doğrulama (2FA) Neden Önemli?",
    date: "24 Eylül 2025",
    summary:
      "2FA'nın ne olduğu, neden kullanmanız gerektiği ve hangi uygulamalarda aktif hale getirebileceğiniz.",
  },
  {
    title: "Dijital Gizlilik Ayarları Nasıl Yapılır?",
    date: "26 Eylül 2025",
    summary:
      "Sosyal medya hesaplarınızda gizliliğinizi artırmak için yapmanız gereken ayarlar ve ipuçları.",
  },
  {
    title: "Sosyal Medya Hesaplarının Çalınmasını Önleme",
    date: "28 Eylül 2025",
    summary:
      "Hesaplarınızın kötü niyetli kişilerce ele geçirilmesini önlemek için alınabilecek önlemler.",
  },
  {
    title: "Sosyal Medyada Etkili İçerik Stratejileri",
    date: "30 Eylül 2025",
    summary:
      "Takipçi sayınızı artırmak ve etkileşimleri yükseltmek için uygulanabilir içerik stratejileri.",
  },
  {
    title: "Instagram Reklamlarının Gücü",
    date: "02 Ekim 2025",
    summary:
      "Doğru reklam stratejileri ile Instagram’da nasıl daha fazla müşteri kazanabilirsiniz?",
  },
  {
    title: "Sosyal Medyada Kriz Yönetimi",
    date: "05 Ekim 2025",
    summary:
      "Markanız için olumsuz durumları nasıl yöneteceğiniz ve itibarınızı nasıl koruyacağınız üzerine rehber.",
  },
  {
    title: "Dijital Pazarlamada Yeni Trendler",
    date: "07 Ekim 2025",
    summary:
      "2025 yılında dijital pazarlamada öne çıkan yeni trendler ve nasıl adapte olabilirsiniz.",
  },
  {
    title: "Sosyal Medya Hesapları için Güvenlik Araçları",
    date: "09 Ekim 2025",
    summary:
      "Hesaplarınızı korumak için kullanabileceğiniz ücretsiz ve ücretli güvenlik araçları.",
  },
  {
    title: "Instagram Algoritması Nasıl Çalışır?",
    date: "11 Ekim 2025",
    summary:
      "Instagram’ın içerik sıralama algoritmasını anlamak ve içeriğinizi optimize etmek için ipuçları.",
  },
  {
    title: "Sosyal Medya Takipçi Analizi",
    date: "13 Ekim 2025",
    summary:
      "Takipçi kitlenizi analiz ederek içerik stratejinizi nasıl geliştirebilirsiniz?",
  },
  {
    title: "Sosyal Medyada İçerik Takvimi Oluşturma",
    date: "15 Ekim 2025",
    summary:
      "Düzenli ve etkili paylaşım yapmak için nasıl içerik takvimi oluşturulur, örnekler ve öneriler.",
  },
  {
    title: "Dijital Dünyada Kişisel Marka İnşası",
    date: "17 Ekim 2025",
    summary:
      "Kişisel markanızı sosyal medya ve dijital platformlarda nasıl güçlendirebilirsiniz?",
  },
  {
    title: "Sosyal Medya Paylaşımlarında Telif Hakları",
    date: "19 Ekim 2025",
    summary:
      "Paylaşımlarınızda dikkat etmeniz gereken telif hakları ve yasal sorumluluklar hakkında bilgiler.",
  },
  {
    title: "Sosyal Medyada Etkileşimi Artırmanın Yolları",
    date: "21 Ekim 2025",
    summary:
      "Takipçilerinizle daha fazla etkileşim kurmak için pratik öneriler ve teknikler.",
  },
  {
    title: "Instagram Story Kullanım Rehberi",
    date: "23 Ekim 2025",
    summary:
      "Hikaye özelliğini etkin kullanarak marka bilinirliğinizi nasıl artırabilirsiniz?",
  },
  {
    title: "Sosyal Medyada Kripto Para ve NFT’ler",
    date: "25 Ekim 2025",
    summary:
      "Kripto para ve NFT trendlerinin sosyal medyaya etkisi ve bu alanda nasıl yer alabilirsiniz.",
  },
  {
    title: "Sosyal Medya İçeriklerinin SEO’ya Etkisi",
    date: "27 Ekim 2025",
    summary:
      "Paylaşımlarınızın arama motorlarındaki görünürlüğünü artırmak için SEO ipuçları.",
  },
  {
    title: "Dijital Dünyada Siber Zorbalıkla Mücadele",
    date: "29 Ekim 2025",
    summary:
      "Siber zorbalıkla karşılaştığınızda nasıl korunabilir ve yardım alabilirsiniz?",
  },
  {
    title: "Sosyal Medya Kampanyalarında Başarı Ölçümü",
    date: "31 Ekim 2025",
    summary:
      "Yaptığınız kampanyaların etkisini nasıl ölçer, analiz eder ve geliştirirsiniz?",
  },
  {
    title: "Sosyal Medya Güvenliği için En İyi Uygulamalar",
    date: "02 Kasım 2025",
    summary:
      "Hesaplarınızı güvende tutmak için benimsemeniz gereken en iyi güvenlik uygulamaları.",
  },
  {
    title: "Instagram Hesap Kurtarma Süreci",
    date: "04 Kasım 2025",
    summary:
      "Hacklenen veya erişim sorunu yaşayan Instagram hesaplarını kurtarmak için yapılması gerekenler.",
  },
  {
    title: "Sosyal Medyada Etkileyici Olmanın Yolları",
    date: "06 Kasım 2025",
    summary:
      "Markanız veya kişisel hesabınız için sosyal medyada nasıl daha etkili ve etkileyici olabilirsiniz?",
  },
  {
    title: "Sosyal Medya Takipçi Satın Almanın Riskleri",
    date: "08 Kasım 2025",
    summary:
      "Takipçi satın almanın zararları ve doğal büyümenin önemi üzerine bir analiz.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <div className="relative z-10">
        <SiteHeader />

        <main className="px-6 sm:px-12 md:px-20 py-20 max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-center mb-12 text-orange-500">Blog</h1>

          {blogPosts.map(({ title, date, summary }, i) => (
            <article
              key={i}
              className="bg-gray-800 bg-opacity-80 p-6 rounded-xl backdrop-blur-md shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-1 hover:text-orange-400 cursor-pointer">
                {title}
              </h2>
              <time className="block text-gray-400 text-sm mb-3">{date}</time>
              <p className="text-gray-300">{summary}</p>
            </article>
          ))}
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
