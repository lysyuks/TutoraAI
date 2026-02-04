import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    // Hero
    hero: {
      tagline: 'ENGINEERING EXCELLENCE FOR TOMORROW\'S WORLD',
      firstName: 'Serhii',
      lastName: 'Lysiuk',
      title: 'Product Manager | Senior Level Executive',
      description: 'Product Manager with deep expertise in AI, fintech, SaaS, and blockchain domains. 14+ years delivering high-impact products for enterprises and startups.',
      getInTouch: 'Get In Touch',
      viewExperience: 'View Experience',
    },
    // About
    about: {
      label: 'WHO I AM',
      title: 'About Me',
      bio1: 'I\'m a Product Manager originally from Ukraine, now based in Prague, Czech Republic — a city that feels like home since I was born here. After graduating high school in Florida, I eventually found my way into the startup world.',
      bio2: 'My journey started in 2013 with EatSmart, one of Ukraine\'s biggest startups — a restaurant reservation service that ignited my passion for building products people actually use. From there, I built Sapien Wallet from scratch, a crypto wallet with a post-transaction human rating system that attracted 100K users in its first month. I created Jax.network, a blockchain that tackled the blockchain trilemma, and worked on XBO exchange, helping with product segmentation and personalization.',
      bio3: 'My proudest win? Joining UserWay at the MVP stage and scaling it to market leader with 1.5M+ businesses using our AI accessibility platform worldwide.',
      whatIDoTitle: 'What I Do',
      bio4: 'I have deep expertise in AI, blockchain, fintech, and SaaS. Besides that, over these years I\'ve mastered marketing — working with traffic and building communities around technology. I experiment with RAG, LangChain frameworks, and love prototyping with AI. I design at a senior level and can vibecode any SaaS prototype in an evening — turning ideas into tangible products fast.',
      bio5: 'Outside of building, I paint and work out in parks around the world. I\'ve traveled most continents, and each place taught me something new about creating products that resonate across cultures.',
      bio6: 'When people love what they do, great results follow. For me, shaping the future through tech is a true calling.',
      location: 'Location',
      currentRole: 'Current Role',
      experienceLabel: 'Experience',
      certifications: 'Certifications',
      stats: {
        installs: 'Widget Installations',
        years: 'Years Experience',
        revenue: 'Revenue Generated',
        engineers: 'Engineers Supported',
      },
    },
    // Experience
    experience: {
      label: 'CAREER PATH',
      title: 'Experience',
      scrollToExplore: 'Scroll to explore',
    },
    // Skills
    skills: {
      label: 'WHAT I DO',
      title: 'Skills & Expertise',
      technical: 'Technical Skills',
      productManagement: 'Product Management',
      leadership: 'Leadership & Soft Skills',
      technologies: 'Technologies',
      tools: 'Tools',
    },
    // Contact
    contact: {
      label: 'GET IN TOUCH',
      title: 'Let\'s Work Together',
      description: 'Open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out.',
      email: 'Email',
      phone: 'Phone',
      locationLabel: 'Location',
      linkedin: 'LinkedIn',
      connectWithMe: 'Connect with me',
      sendMessage: 'Send a Message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
      errorMessage: 'Failed to send. Please try again or email me directly.',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      title: 'Product Manager | Senior Level Executive',
    },
  },
  ua: {
    // Header
    nav: {
      about: 'Про мене',
      experience: 'Досвід',
      skills: 'Навички',
      contact: 'Контакти',
      hireMe: 'Найняти',
    },
    // Hero
    hero: {
      tagline: 'ПРОДУКТОВІ РІШЕННЯ ДЛЯ СКЛАДНИХ БІЗНЕС-ЗАДАЧ',
      firstName: 'Сергій',
      lastName: 'Лисюк',
      title: 'Продакт-менеджер | Керівник вищого рівня',
      description: 'Продакт менеджер з глибокою експертизою в AI, SaaS, fintech та блокчейні. Більше 14 років створюю продукти для великих ентерпрайзів та стартапів.',
      getInTouch: 'Зв\'язатися',
      viewExperience: 'Переглянути досвід',
    },
    // About
    about: {
      label: 'ХТО Я',
      title: 'Про мене',
      bio1: 'Я продакт-менеджер родом з України, зараз живу в Празі, Чехія — місті, яке відчувається як дім, адже я тут народився. Після закінчення школи у Флориді я знайшов свій шлях у світ стартапів.',
      bio2: 'Мій шлях почався у 2013 році з EatSmart, одного з найбільших українських стартапів — сервісу бронювання ресторанів, який запалив мою пристрасть до створення продуктів, якими люди дійсно користуються. Потім я створив Sapien Wallet з нуля — криптогаманець з системою оцінки транзакцій, який залучив 100K користувачів за перший місяць. Я створив Jax.network — блокчейн, що вирішує трилему блокчейну, та працював над XBO exchange.',
      bio3: 'Моя найбільша перемога? Приєднання до UserWay на стадії MVP та масштабування до лідера ринку з 1.5M+ бізнесами, що використовують нашу AI платформу доступності по всьому світу.',
      whatIDoTitle: 'Що я роблю',
      bio4: 'Маю глибоку експертизу в AI, блокчейні, fintech та SaaS. Окрім того, за ці роки я опанував маркетинг — роботу з трафіком та побудову спільнот навколо технологій. Експериментую з RAG, LangChain фреймворками та люблю прототипувати з AI. Дизайню на senior рівні та можу закодити будь-який SaaS прототип за вечір.',
      bio5: 'Поза роботою я малюю та займаюсь спортом у парках по всьому світу. Я подорожував більшістю континентів, і кожне місце навчило мене чомусь новому про створення продуктів, що резонують з різними культурами.',
      bio6: 'Коли люди люблять те, що роблять, приходять чудові результати. Для мене формування майбутнього через технології — це справжнє покликання.',
      location: 'Локація',
      currentRole: 'Поточна роль',
      experienceLabel: 'Досвід',
      certifications: 'Сертифікати',
      stats: {
        installs: 'Встановлень віджетів',
        years: 'Років досвіду',
        revenue: 'Згенеровано доходу',
        engineers: 'Інженерів підтримано',
      },
    },
    // Experience
    experience: {
      label: 'КАР\'ЄРНИЙ ШЛЯХ',
      title: 'Досвід',
      scrollToExplore: 'Прокрутіть для перегляду',
    },
    // Skills
    skills: {
      label: 'ЩО Я РОБЛЮ',
      title: 'Навички та експертиза',
      technical: 'Технічні навички',
      productManagement: 'Продакт-менеджмент',
      leadership: 'Лідерство та soft skills',
      technologies: 'Технології',
      tools: 'Інструменти',
    },
    // Contact
    contact: {
      label: 'ЗВ\'ЯЗАТИСЯ',
      title: 'Давайте працювати разом',
      description: 'Відкритий до нових можливостей та співпраці. Якщо у вас є проект або просто хочете поспілкуватися — пишіть.',
      email: 'Email',
      phone: 'Телефон',
      locationLabel: 'Локація',
      linkedin: 'LinkedIn',
      connectWithMe: 'Зв\'язатися зі мною',
      sendMessage: 'Надіслати повідомлення',
      yourName: 'Ваше ім\'я',
      yourEmail: 'Ваш Email',
      message: 'Повідомлення',
      send: 'Надіслати',
      sending: 'Надсилаю...',
      successMessage: 'Повідомлення надіслано! Я зв\'яжусь з вами найближчим часом.',
      errorMessage: 'Не вдалося надіслати. Спробуйте ще раз або напишіть мені напряму.',
    },
    // Footer
    footer: {
      rights: 'Всі права захищені.',
      title: 'Продакт-менеджер | Керівник вищого рівня',
    },
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved && translations[saved]) {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ua' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
