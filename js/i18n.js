/* ============================================
   i18n — English / Arabic Translation System
   Real data from Bilel Jmal's CV
   ============================================ */

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.testimonials": "Testimonials",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Available for Hire",
    "hero.greeting": "Hello, I'm",
    "hero.name": "Bilel Jmal",
    "hero.title": "Professional Pizza Maker & Fast Food Specialist",
    "hero.tag.experience": "3 Years Experience",
    "hero.tag.certified": "Certified Pizza Maker",
    "hero.tag.relocation": "Ready for Relocation",
    "hero.tag.languages": "English • Arabic • French",
    "hero.btn.contact": "Contact Me",
    "hero.btn.cv.en": "CV (English)",
    "hero.btn.cv.ar": "CV (Arabic)",
    "hero.btn.gallery": "View My Work",

    // About
    "about.title": "About Me",
    "about.subtitle": "Motivated and hardworking restaurant professional specializing in pizza, sandwiches, burgers, and fast-food preparation.",
    "about.exp.title": "3 Years of Experience",
    "about.exp.desc": "3 years of hands-on experience across 3 professional restaurants in Tunisia, mastering pizza making and fast food preparation from the ground up.",
    "about.cert.title": "Certified Pizza Maker",
    "about.cert.desc": "Professional Pizza Maker Certification (July 2023) — trained in dough making, baking techniques, food safety, and kitchen operations.",
    "about.passion.title": "Passion for Cooking",
    "about.passion.desc": "Cooking is not just my job — it's my life. I bring creativity and dedication to every pizza and dish I prepare.",
    "about.pressure.title": "Work Under Pressure",
    "about.pressure.desc": "I thrive in high-volume, fast-paced environments. Busy service hours are where I perform at my best.",
    "about.team.title": "Team Player",
    "about.team.desc": "I collaborate effectively with kitchen teams, communicate well under pressure, and support my colleagues to deliver great results.",
    "about.relocation.title": "Ready to Relocate",
    "about.relocation.desc": "Fully prepared and excited to relocate internationally for professional opportunities in the restaurant and hospitality industry.",

    // Skills
    "skills.title": "My Skills",
    "skills.subtitle": "Specialized culinary skills refined through professional training and 3 years of restaurant experience.",
    "skill.pizza": "Pizza Preparation",
    "skill.dough": "Dough & Sauce Making",
    "skill.sandwiches": "Sandwiches & Makloub",
    "skill.burgers": "Burgers & Grilling",
    "skill.hygiene": "Food Hygiene & Safety",
    "skill.speed": "Fast Service",
    "skill.teamwork": "Teamwork",
    "skill.kitchen": "Kitchen Organization",

    // Experience
    "exp.title": "Work Experience",
    "exp.subtitle": "A journey through professional kitchens in Tunisia, building expertise one dish at a time.",

    "exp.1.date": "2025 — 2026",
    "exp.1.restaurant": "Restaurant Maryouma",
    "exp.1.role": "Pizza Maker & Fast Food Cook — Medenine",
    "exp.1.resp1": "Prepared a wide variety of pizzas, including double-crust pizzas",
    "exp.1.resp2": "Made Makloub sandwiches, burgers, and other fast-food meals",
    "exp.1.resp3": "Achieved professional level of dough and crust quality",
    "exp.1.resp4": "Managed kitchen operations independently during peak hours",

    "exp.2.date": "2024 — 2025",
    "exp.2.restaurant": "Kalimera",
    "exp.2.role": "Pizza & Fast Food Cook — Sfax",
    "exp.2.resp1": "Prepared pizzas, sandwiches, burgers, and fast-food meals",
    "exp.2.resp2": "Prepared fresh dough, sauces, and ingredients from scratch",
    "exp.2.resp3": "Maintained high standards of food quality, hygiene, and cleanliness",
    "exp.2.resp4": "Worked efficiently during busy service hours",

    "exp.3.date": "2023 — 2024",
    "exp.3.restaurant": "TONTON",
    "exp.3.role": "Kitchen Team Member — Sfax",
    "exp.3.resp1": "Assisted in preparing pizzas, sandwiches, and soufflé sandwiches",
    "exp.3.resp2": "Learned food preparation techniques and kitchen hygiene standards",
    "exp.3.resp3": "Worked effectively as part of a kitchen team in a fast-paced environment",
    "exp.3.resp4": "Developed teamwork, communication, and time management skills",

    // Certifications
    "cert.title": "Certifications & Training",
    "cert.subtitle": "Official credentials verifying my professional culinary training.",
    "cert.1": "Professional Certification",
    "cert.2": "Internship Certificate",

    // Testimonials
    "testimonials.title": "What People Say",
    "testimonials.subtitle": "Words from colleagues and managers who have worked with me.",
    "test.1.text": "\"Bilel is reliable and delivers excellent pizzas even under intense pressure. His dough quality is consistently professional, and customers always come back for more.\"",
    "test.1.name": "Manager",
    "test.1.role": "Restaurant Maryouma, Medenine",
    "test.2.text": "\"One of the hardest-working young cooks I've seen. Bilel keeps his workstation spotless, handles rush hours like a veteran, and always maintains high food quality standards.\"",
    "test.2.name": "Kitchen Manager",
    "test.2.role": "Kalimera, Sfax",
    "test.3.text": "\"Bilel has a natural talent for food preparation. He learned quickly, adapted to every task we gave him, and always brought positive energy to the kitchen team.\"",
    "test.3.name": "Team Leader",
    "test.3.role": "TONTON, Sfax",

    // Gallery
    "gallery.title": "My Work",
    "gallery.subtitle": "Real photos from my kitchen — because great food speaks for itself.",
    "gallery.pizza1": "Handmade Pizzas",
    "gallery.pizza2": "Pizza Production",
    "gallery.pizza3": "Specialty Pizza",
    "gallery.pizza4": "Fresh from the Oven",
    "gallery.burger": "Gourmet Burgers",
    "gallery.sandwich": "Fresh Sandwiches",
    "gallery.dough": "Dough Preparation",
    "gallery.new1": "Fresh Preparation",
    "gallery.new2": "Professional Kitchen",
    "gallery.new3": "Delicious Food",
    "gallery.new4": "Specialty Dish",
    "gallery.new5": "Fresh Preparation",
    "gallery.new6": "Professional Kitchen",
    "gallery.new7": "Delicious Food",
    "gallery.new8": "Specialty Dish",
    "gallery.new9": "Fresh Preparation",
    "gallery.new10": "Professional Kitchen",
    "gallery.new11": "Delicious Food",
    "gallery.new12": "Specialty Dish",
    "gallery.video.title": "Watch Me in Action",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "I'm available for professional work opportunities. Don't hesitate to reach out!",
    "contact.phone.label": "Call Me",
    "contact.phone.value": "+974 6618 3646",
    "contact.whatsapp.label": "WhatsApp",
    "contact.whatsapp.value": "+974 6618 3646",
    "contact.email.label": "Email",
    "contact.email.value": "bileljmal0@icloud.com",
    "contact.location.label": "Location",
    "contact.location.value": "Qatar, Doha",
    "contact.btn.whatsapp": "Message on WhatsApp",
    "contact.btn.call": "Call Now",
    "contact.btn.email": "Send Email",

    // Footer
    "footer.text": "© 2025 Bilel Jmal. All rights reserved.",
    "footer.made": "Made by"
  },

  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.skills": "المهارات",
    "nav.experience": "الخبرة",
    "nav.testimonials": "آراء العملاء",
    "nav.gallery": "معرض الأعمال",
    "nav.contact": "اتصل بي",

    // Hero
    "hero.badge": "متاح للتوظيف",
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "بلال جمال",
    "hero.title": "صانع بيتزا محترف ومتخصص وجبات سريعة",
    "hero.tag.experience": "3 سنوات خبرة",
    "hero.tag.certified": "صانع بيتزا معتمد",
    "hero.tag.relocation": "مستعد للانتقال للعمل بالخارج",
    "hero.tag.languages": "العربية • الإنجليزية • الفرنسية",
    "hero.btn.contact": "تواصل معي",
    "hero.btn.cv.en": "السيرة الذاتية (بالإنجليزية)",
    "hero.btn.cv.ar": "السيرة الذاتية (بالعربية)",
    "hero.btn.gallery": "شاهد أعمالي",

    // About
    "about.title": "عني",
    "about.subtitle": "محترف مطاعم متحمس ومجتهد متخصص في البيتزا والسندويشات والبرجر وتحضير الوجبات السريعة.",
    "about.exp.title": "3 سنوات من الخبرة",
    "about.exp.desc": "3 سنوات من الخبرة العملية في 3 مطاعم مهنية في تونس، متخصص في صناعة البيتزا وتحضير الوجبات السريعة من الصفر.",
    "about.cert.title": "صانع بيتزا معتمد",
    "about.cert.desc": "شهادة صانع بيتزا محترف (يوليو 2023) — تدريب في صنع العجين وتقنيات الخبز وسلامة الغذاء وعمليات المطبخ.",
    "about.passion.title": "شغف بالطبخ",
    "about.passion.desc": "الطبخ ليس مجرد عمل بالنسبة لي — إنه حياتي. أضع الإبداع والتفاني في كل بيتزا وطبق أحضره.",
    "about.pressure.title": "العمل تحت الضغط",
    "about.pressure.desc": "أتألق في بيئات العمل عالية الكثافة وسريعة الإيقاع. ساعات الذروة هي حيث أقدم أفضل أداء لي.",
    "about.team.title": "لاعب فريق",
    "about.team.desc": "أتعاون بفعالية مع فرق المطبخ، أتواصل جيداً تحت الضغط، وأدعم زملائي لتحقيق نتائج رائعة.",
    "about.relocation.title": "مستعد للانتقال المهني",
    "about.relocation.desc": "مستعد تماماً ومتحمس للانتقال للعمل في الخارج والمساهمة في صناعة المطاعم والضيافة بمستوى احترافي.",

    // Skills
    "skills.title": "مهاراتي",
    "skills.subtitle": "مهارات طهي متخصصة صُقلت من خلال التدريب المهني و3 سنوات من الخبرة في المطاعم.",
    "skill.pizza": "تحضير البيتزا",
    "skill.dough": "صنع العجين والصلصات",
    "skill.sandwiches": "السندويشات والمكلوب",
    "skill.burgers": "البرجر والشواء",
    "skill.hygiene": "النظافة وسلامة الغذاء",
    "skill.speed": "خدمة سريعة",
    "skill.teamwork": "العمل الجماعي",
    "skill.kitchen": "تنظيم المطبخ",

    // Experience
    "exp.title": "الخبرة العملية",
    "exp.subtitle": "رحلة عبر المطابخ المهنية في تونس، أبني خبرتي طبقاً بعد طبق.",

    "exp.1.date": "2025 — 2026",
    "exp.1.restaurant": "مطعم مريومة",
    "exp.1.role": "صانع بيتزا وطباخ وجبات سريعة — مدنين",
    "exp.1.resp1": "تحضير مجموعة واسعة من البيتزا، بما في ذلك البيتزا مزدوجة القشرة",
    "exp.1.resp2": "صنع سندويشات المكلوب والبرجر ووجبات سريعة أخرى",
    "exp.1.resp3": "تحقيق مستوى احترافي في جودة العجين والقشرة",
    "exp.1.resp4": "إدارة عمليات المطبخ بشكل مستقل خلال ساعات الذروة",

    "exp.2.date": "2024 — 2025",
    "exp.2.restaurant": "كاليميرا",
    "exp.2.role": "طباخ بيتزا ووجبات سريعة — صفاقس",
    "exp.2.resp1": "تحضير البيتزا والسندويشات والبرجر والوجبات السريعة",
    "exp.2.resp2": "تحضير العجين الطازج والصلصات والمكونات من الصفر",
    "exp.2.resp3": "الحفاظ على معايير عالية لجودة الطعام والنظافة",
    "exp.2.resp4": "العمل بكفاءة خلال ساعات الخدمة المزدحمة",

    "exp.3.date": "2023 — 2024",
    "exp.3.restaurant": "طونطون",
    "exp.3.role": "عضو فريق المطبخ — صفاقس",
    "exp.3.resp1": "المساعدة في تحضير البيتزا والسندويشات وسندويشات السوفليه",
    "exp.3.resp2": "تعلم تقنيات تحضير الطعام ومعايير نظافة المطبخ",
    "exp.3.resp3": "العمل بفعالية كجزء من فريق المطبخ في بيئة سريعة الإيقاع",
    "exp.3.resp4": "تطوير مهارات العمل الجماعي والتواصل وإدارة الوقت",

    // Certifications
    "cert.title": "الشهادات والتدريب",
    "cert.subtitle": "أوراق الاعتماد الرسمية التي تؤكد تدريبي المهني في الطهي.",
    "cert.1": "شهادة مهنية",
    "cert.2": "شهادة تدريب (تربص)",

    // Testimonials
    "testimonials.title": "ماذا يقول الناس",
    "testimonials.subtitle": "كلمات من الزملاء والمديرين الذين عملوا معي.",
    "test.1.text": "\"بلال موثوق ويقدم بيتزا ممتازة حتى تحت الضغط الشديد. جودة عجينته احترافية باستمرار، والزبائن يعودون دائماً لطلب المزيد.\"",
    "test.1.name": "المدير",
    "test.1.role": "مطعم مريومة، مدنين",
    "test.2.text": "\"من أكثر الطباخين الشباب اجتهاداً الذين رأيتهم. بلال يحافظ على محطة عمله نظيفة، يتعامل مع ساعات الذروة كمحترف متمرس، ويحافظ دائماً على معايير جودة الطعام العالية.\"",
    "test.2.name": "مدير المطبخ",
    "test.2.role": "كاليميرا، صفاقس",
    "test.3.text": "\"بلال يمتلك موهبة طبيعية في تحضير الطعام. تعلم بسرعة، تأقلم مع كل مهمة أعطيناها له، وجلب دائماً طاقة إيجابية لفريق المطبخ.\"",
    "test.3.name": "قائد الفريق",
    "test.3.role": "طونطون، صفاقس",

    // Gallery
    "gallery.title": "أعمالي",
    "gallery.subtitle": "صور حقيقية من مطبخي — لأن الطعام الرائع يتحدث عن نفسه.",
    "gallery.pizza1": "بيتزا يدوية الصنع",
    "gallery.pizza2": "إنتاج البيتزا",
    "gallery.pizza3": "بيتزا مميزة",
    "gallery.pizza4": "طازجة من الفرن",
    "gallery.burger": "برجر فاخر",
    "gallery.sandwich": "سندويشات طازجة",
    "gallery.dough": "تحضير العجين",
    "gallery.new1": "تحضير طازج",
    "gallery.new2": "مطبخ احترافي",
    "gallery.new3": "طعام لذيذ",
    "gallery.new4": "طبق مميز",
    "gallery.new5": "تحضير طازج",
    "gallery.new6": "مطبخ احترافي",
    "gallery.new7": "طعام لذيذ",
    "gallery.new8": "طبق مميز",
    "gallery.new9": "تحضير طازج",
    "gallery.new10": "مطبخ احترافي",
    "gallery.new11": "طعام لذيذ",
    "gallery.new12": "طبق مميز",
    "gallery.video.title": "شاهدني أثناء العمل",

    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "أنا متاح لفرص العمل الاحترافية. لا تتردد في التواصل!",
    "contact.phone.label": "اتصل بي",
    "contact.phone.value": "+974 6618 3646",
    "contact.whatsapp.label": "واتساب",
    "contact.whatsapp.value": "+974 6618 3646",
    "contact.email.label": "البريد الإلكتروني",
    "contact.email.value": "bileljmal0@icloud.com",
    "contact.location.label": "الموقع",
    "contact.location.value": "قطر، الدوحة",
    "contact.btn.whatsapp": "راسلني على واتساب",
    "contact.btn.call": "اتصل الآن",
    "contact.btn.email": "أرسل بريداً",

    // Footer
    "footer.text": "© 2025 بلال جمال. جميع الحقوق محفوظة.",
    "footer.made": "صنع بواسطة"
  }
};

let currentLang = localStorage.getItem('chef-portfolio-lang') || 'en';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('chef-portfolio-lang', lang);

  const html = document.documentElement;
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function initI18n() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });
  switchLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', initI18n);
