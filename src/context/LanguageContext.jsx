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
      description: 'Product Manager with deep expertise in AI, blockchain, legal tech, and supply-chain domains. 14+ years delivering high-impact products for enterprises and startups.',
      getInTouch: 'Get In Touch',
      viewExperience: 'View Experience',
    },
    // About
    about: {
      label: 'WHO I AM',
      title: 'About Me',
      bio1: 'I\'m a Technical Product Manager originally from Ukraine, now based in Prague, Czech Republic — a city that feels like home since I was born here. With deep expertise in AI, blockchain, legal tech, and supply-chain domains, I deliver high-impact products for enterprises and startups.',
      bio2: 'I believe in continuous improvement and follow the Kaizen methodology to grow professionally every day. Outside of work, I stay active with regular workouts — it helps me maintain the energy and focus needed for building great products.',
      bio3: 'When people love what they do, great results follow. For me, shaping the future through tech is a true calling.',
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
      description: 'Продакт-менеджер з глибокою експертизою в AI, блокчейні, legal tech та supply-chain. Чотирнадцять років створення високоефективних продуктів для підприємств та стартапів.',
      getInTouch: 'Зв\'язатися',
      viewExperience: 'Переглянути досвід',
    },
    // About
    about: {
      label: 'ХТО Я',
      title: 'Про мене',
      bio1: 'Я технічний продакт-менеджер родом з України, зараз живу в Празі, Чехія — місті, яке відчувається як дім, адже я тут народився. Маю глибоку експертизу в AI, блокчейні, legal tech та supply-chain, створюю високоефективні продукти для підприємств та стартапів.',
      bio2: 'Вірю в постійне вдосконалення та дотримуюсь методології Кайдзен для щоденного професійного зростання. Поза роботою я активно займаюсь спортом — це допомагає підтримувати енергію та фокус, необхідні для створення чудових продуктів.',
      bio3: 'Коли люди люблять те, що роблять, приходять чудові результати. Для мене формування майбутнього через технології — це справжнє покликання.',
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
