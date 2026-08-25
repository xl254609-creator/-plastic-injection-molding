/* ============================================================
 * i18n.js - 全站内置多语言翻译（离线，无外部依赖，国内外可用）
 * 语言代码: english/spanish/italian/french/german/portuguese/russian/arabic/chinese_simplified
 *
 * 机制：给元素加 data-i18n="key"，切换语言时按 key 查字典替换文本。
 * 每页正文用 PAGE 命名空间（如 index.title）。
 * ============================================================ */
(function () {
  var LANGS = ['english','spanish','italian','french','german','portuguese','russian','arabic','chinese_simplified'];
  var LANGUAGE_STORAGE_KEY = 'site-language-v2';

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

  var languageNames = {
    english: 'Language', spanish: 'Idioma', italian: 'Lingua', french: 'Langue',
    german: 'Sprache', portuguese: 'Idioma', russian: 'Язык', arabic: 'اللغة',
    chinese_simplified: '语言'
  };

  var TEXT_D = {
    'Precision Plastic Injection Molding & Mold Manufacturing': {
      spanish: 'Moldeo por inyección de plástico de precisión y fabricación de moldes', french: 'Moulage par injection plastique de précision et fabrication de moules', german: 'Präzisions-Kunststoffspritzguss und Formenbau', portuguese: 'Moldagem por injeção de plástico de precisão e fabricação de moldes', chinese_simplified: '精密塑料注塑成型与模具制造'
    },
    'Your Trusted Plastic Injection Molding Manufacturer in China': {
      spanish: 'Su fabricante de confianza de moldeo por inyección de plástico en China', french: 'Votre fabricant de confiance de moulage par injection plastique en Chine', german: 'Ihr zuverlässiger Hersteller für Kunststoffspritzguss in China', portuguese: 'Seu fabricante confiável de moldagem por injeção de plástico na China', chinese_simplified: '您值得信赖的中国注塑成型制造商'
    },
    'About Us': { spanish: 'Sobre Nosotros', french: 'À Propos', german: 'Über Uns', portuguese: 'Sobre Nós', chinese_simplified: '关于我们' },
    'Our Products': { spanish: 'Nuestros Productos', french: 'Nos Produits', german: 'Unsere Produkte', portuguese: 'Nossos Produtos', chinese_simplified: '我们的产品' },
    'Our Services': { spanish: 'Nuestros Servicios', french: 'Nos Services', german: 'Unsere Dienstleistungen', portuguese: 'Nossos Serviços', chinese_simplified: '我们的服务' },
    'Quality Control': { spanish: 'Control de Calidad', french: 'Contrôle Qualité', german: 'Qualitätskontrolle', portuguese: 'Controle de Qualidade', chinese_simplified: '质量控制' },
    'Request a Quote': { spanish: 'Solicitar Presupuesto', french: 'Demander un Devis', german: 'Angebot Anfordern', portuguese: 'Solicitar Orçamento', chinese_simplified: '获取报价' },
    'Explore Services': { spanish: 'Explorar Servicios', french: 'Découvrir les Services', german: 'Dienstleistungen Entdecken', portuguese: 'Explorar Serviços', chinese_simplified: '探索服务' },
    'Who We Are': { spanish: 'Quiénes Somos', french: 'Qui Sommes-Nous', german: 'Wer Wir Sind', portuguese: 'Quem Somos', chinese_simplified: '关于我们' },
    'Our Story': { spanish: 'Nuestra Historia', french: 'Notre Histoire', german: 'Unsere Geschichte', portuguese: 'Nossa História', chinese_simplified: '我们的故事' },
    'Our Values': { spanish: 'Nuestros Valores', french: 'Nos Valeurs', german: 'Unsere Werte', portuguese: 'Nossos Valores', chinese_simplified: '我们的价值观' },
    'Milestones': { spanish: 'Hitos', french: 'Jalons', german: 'Meilensteine', portuguese: 'Marcos', chinese_simplified: '发展历程' },
    'Product Categories': { spanish: 'Categorías de Productos', french: 'Catégories de Produits', german: 'Produktkategorien', portuguese: 'Categorias de Produtos', chinese_simplified: '产品分类' },
    'Our Journey to Excellence': { spanish: 'Nuestro Camino hacia la Excelencia', french: 'Notre Parcours vers l’Excellence', german: 'Unser Weg zur Exzellenz', portuguese: 'Nossa Jornada rumo à Excelência', chinese_simplified: '我们的卓越之路' },
    'Building on 20+ Years of Manufacturing Excellence': { spanish: 'Más de 20 años de excelencia manufacturera', french: 'Plus de 20 ans d’excellence industrielle', german: 'Über 20 Jahre Fertigungsexzellenz', portuguese: 'Mais de 20 anos de excelência na fabricação', chinese_simplified: '积淀二十余年的制造卓越品质' },
    'What Drives Us Every Day': { spanish: 'Lo que nos impulsa cada día', french: 'Ce qui nous motive chaque jour', german: 'Was uns jeden Tag antreibt', portuguese: 'O que nos move todos os dias', chinese_simplified: '驱动我们每天前进的力量' },
    'Explore Our Capabilities': { spanish: 'Explore nuestras capacidades', french: 'Découvrez nos capacités', german: 'Entdecken Sie unsere Möglichkeiten', portuguese: 'Explore nossas capacidades', chinese_simplified: '探索我们的能力' },
    'High-quality injection molded plastic parts for diverse industries worldwide.': { spanish: 'Piezas de plástico moldeadas por inyección de alta calidad para diversas industrias del mundo.', french: 'Pièces en plastique injecté de haute qualité pour diverses industries mondiales.', german: 'Hochwertige spritzgegossene Kunststoffteile für verschiedene Branchen weltweit.', portuguese: 'Peças plásticas moldadas por injeção de alta qualidade para diversos setores em todo o mundo.', chinese_simplified: '为全球各行业提供高质量注塑塑料零件。' },
    'Contact Us': { spanish: 'Contáctenos', french: 'Contactez-Nous', german: 'Kontaktieren Sie Uns', portuguese: 'Fale Conosco', chinese_simplified: '联系我们' },
    'Frequently Asked Questions': { spanish: 'Preguntas Frecuentes', french: 'Questions Fréquentes', german: 'Häufig Gestellte Fragen', portuguese: 'Perguntas Frequentes', chinese_simplified: '常见问题' }
  };

  function applyLanguage(language) {
    if (!D[language]) language = 'english';
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      if (!node.parentElement || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement.tagName)) return;
      var source = node.__siteI18nSource || node.nodeValue.trim();
      if (!source) return;
      node.__siteI18nSource = source;
      var translated = language === 'english' ? source : TEXT_D[source] && TEXT_D[source][language];
      if (translated) node.nodeValue = node.nodeValue.replace(source, translated);
    });
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var value = D[language][element.getAttribute('data-i18n')];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('.nav-links > a, .nav-cta a').forEach(function (element) {
      var href = element.getAttribute('href');
      var key = href === 'index.html' ? 'nav.home' : href === 'about.html' ? 'nav.about' :
        href === 'services.html' ? 'nav.services' : href === 'products.html' ? 'nav.products' :
        href === 'factory.html' ? 'nav.factory' : href === 'quality.html' ? 'nav.quality' :
        href === 'faq.html' ? 'nav.faq' : href === 'contact.html' ?
        (element.classList.contains('btn') ? 'nav.quote' : 'nav.contact') : null;
      if (key && D[language][key]) element.textContent = D[language][key];
    });
    document.querySelectorAll('.lang-label').forEach(function (element) {
      element.textContent = languageNames[language];
    });
    document.querySelectorAll('.lang-menu a[data-lang]').forEach(function (element) {
      element.classList.toggle('lang-active', element.getAttribute('data-lang') === language);
    });
    document.documentElement.lang = language === 'chinese_simplified' ? 'zh-CN' : language;
    document.documentElement.dir = language === 'arabic' ? 'rtl' : 'ltr';
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch (error) { }
  }

  function initLanguageSwitcher() {
    var button = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    var switcher = document.getElementById('langSwitcher');
    if (!button || !menu || !switcher) return;
    var language = 'english';
    try { language = localStorage.getItem(LANGUAGE_STORAGE_KEY) || language; } catch (error) { }
    applyLanguage(language);
    button.addEventListener('click', function (event) {
      event.stopPropagation();
      var open = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a[data-lang]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        applyLanguage(link.getAttribute('data-lang'));
        menu.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (event) {
      if (!switcher.contains(event.target)) {
        menu.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
