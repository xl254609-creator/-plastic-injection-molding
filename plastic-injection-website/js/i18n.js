/* ============================================================
 * i18n.js - 全站内置多语言翻译（离线，无外部依赖，国内外可用）
 * 语言代码: english/spanish/italian/french/german/portuguese/russian/arabic/chinese_simplified
 *
 * 机制：给元素加 data-i18n="key"，切换语言时按 key 查字典替换文本。
 * 每页正文用 PAGE 命名空间（如 index.title）。
 * ============================================================ */
(function () {
  var LANGS = ['english','spanish','italian','french','german','portuguese','russian','arabic','chinese_simplified'];

  var D = {
    english: {
      // 共用导航
      "nav.home":"Home","nav.about":"About Us","nav.services":"Services",
      "nav.products":"Products","nav.factory":"Factory","nav.quality":"Quality Control",
      "nav.faq":"FAQ","nav.contact":"Contact","nav.quote":"Request a Quote","nav.language":"Language",
      // 共用页脚
      "footer.brand":"Your trusted plastic injection molding manufacturer in China. Precision molds, OEM/ODM services and global delivery.",
      "footer.quickLinks":"Quick Links","footer.products":"Products","footer.contact":"Contact",
      "footer.rights":"All Rights Reserved."
    },
    spanish: {
      "nav.home":"Inicio","nav.about":"Sobre Nosotros","nav.services":"Servicios",
      "nav.products":"Productos","nav.factory":"Fábrica","nav.quality":"Control de Calidad",
      "nav.faq":"Preguntas Frecuentes","nav.contact":"Contacto","nav.quote":"Solicitar Presupuesto","nav.language":"Idioma",
      "footer.brand":"Su fabricante de moldes de inyección de plástico de confianza en China. Moldes de precisión, servicios OEM/ODM y entrega global.",
      "footer.quickLinks":"Enlaces Rápidos","footer.products":"Productos","footer.contact":"Contacto",
      "footer.rights":"Todos los derechos reservados."
    },
    italian: {
      "nav.home":"Home","nav.about":"Chi Siamo","nav.services":"Servizi",
      "nav.products":"Prodotti","nav.factory":"Fabbrica","nav.quality":"Controllo Qualità",
      "nav.faq":"FAQ","nav.contact":"Contatti","nav.quote":"Richiedi un Preventivo","nav.language":"Lingua",
      "footer.brand":"Il tuo produttore di stampaggio a iniezione di plastica di fiducia in Cina. Stampi di precisione, servizi OEM/ODM e consegna globale.",
      "footer.quickLinks":"Collegamenti Rapidi","footer.products":"Prodotti","footer.contact":"Contatti",
      "footer.rights":"Tutti i diritti riservati."
    },
    french: {
      "nav.home":"Accueil","nav.about":"À Propos","nav.services":"Services",
      "nav.products":"Produits","nav.factory":"Usine","nav.quality":"Contrôle Qualité",
      "nav.faq":"FAQ","nav.contact":"Contact","nav.quote":"Demander un Devis","nav.language":"Langue",
      "footer.brand":"Votre fabricant de moulage par injection de plastique de confiance en Chine. Moules de précision, services OEM/ODM et livraison mondiale.",
      "footer.quickLinks":"Liens Rapides","footer.products":"Produits","footer.contact":"Contact",
      "footer.rights":"Tous droits réservés."
    },
    german: {
      "nav.home":"Startseite","nav.about":"Über Uns","nav.services":"Dienstleistungen",
      "nav.products":"Produkte","nav.factory":"Fabrik","nav.quality":"Qualitätskontrolle",
      "nav.faq":"FAQ","nav.contact":"Kontakt","nav.quote":"Angebot Anfordern","nav.language":"Sprache",
      "footer.brand":"Ihr vertrauenswürdiger Hersteller für Kunststoff-Spritzguss in China. Präzisionsformen, OEM/ODM-Dienstleistungen und weltweite Lieferung.",
      "footer.quickLinks":"Schnellzugriff","footer.products":"Produkte","footer.contact":"Kontakt",
      "footer.rights":"Alle Rechte vorbehalten."
    },
    portuguese: {
      "nav.home":"Início","nav.about":"Sobre Nós","nav.services":"Serviços",
      "nav.products":"Produtos","nav.factory":"Fábrica","nav.quality":"Controle de Qualidade",
      "nav.faq":"FAQ","nav.contact":"Contato","nav.quote":"Solicitar Orçamento","nav.language":"Idioma",
      "footer.brand":"Seu fabricante confiável de moldagem por injeção de plástico na China. Moldes de precisão, serviços OEM/ODM e entrega global.",
      "footer.quickLinks":"Links Rápidos","footer.products":"Produtos","footer.contact":"Contato",
      "footer.rights":"Todos os direitos reservados."
    },
    russian: {
      "nav.home":"Главная","nav.about":"О Нас","nav.services":"Услуги",
      "nav.products":"Продукция","nav.factory":"Завод","nav.quality":"Контроль Качества",
      "nav.faq":"FAQ","nav.contact":"Контакты","nav.quote":"Запросить Цену","nav.language":"Язык",
      "footer.brand":"Ваш надёжный производитель литья пластмасс под давлением в Китае. Прецизионные формы, услуги OEM/ODM и глобальная доставка.",
      "footer.quickLinks":"Быстрые Ссылки","footer.products":"Продукция","footer.contact":"Контакты",
      "footer.rights":"Все права защищены."
    },
    arabic: {
      "nav.home":"الرئيسية","nav.about":"من نحن","nav.services":"الخدمات",
      "nav.products":"المنتجات","nav.factory":"المصنع","nav.quality":"مراقبة الجودة",
      "nav.faq":"الأسئلة الشائعة","nav.contact":"اتصل بنا","nav.quote":"اطلب عرض سعر","nav.language":"اللغة",
      "footer.brand":"مصنعكم الموثوق لقوالب حقن البلاستيك في الصين. قوالب دقيقة، خدمات OEM/ODM وتوصيل عالمي.",
      "footer.quickLinks":"روابط سريعة","footer.products":"المنتجات","footer.contact":"اتصال",
      "footer.rights":"جميع الحقوق محفوظة."
    },
    chinese_simplified: {
      "nav.home":"首页","nav.about":"关于我们","nav.services":"服务",
      "nav.products":"产品","nav.factory":"工厂","nav.quality":"质量控制",
      "nav.faq":"常见问题","nav.contact":"联系我们","nav.quote":"获取报价","nav.language":"语言",
      "footer.brand":"您值得信赖的中国注塑成型制造商。精密模具、OEM/ODM 服务及全球交付。",
      "footer.quickLinks":"快速链接","footer.products":"产品","footer.contact":"联系我们",
      "footer.rights":"版权所有。"
    }
  };
