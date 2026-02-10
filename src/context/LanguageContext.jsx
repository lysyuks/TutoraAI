import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      experience: 'Experience',
      cases: 'Case Studies',
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
      downloadCV: 'Download CV',
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
      jobs: [
        {
          title: 'AI Product Manager',
          company: 'UserWay',
          location: 'Prague, Czechia',
          period: 'May 2023 - Present',
          highlight: '1.5M+ installs',
          description: [
            'Scaled AI accessibility platform from MVP to 1.5M+ widget installs worldwide',
            'Owned roadmap and OKRs for LangChain-powered RAG features with Qdrant vector databases',
            'Drove 10% MoM ARR growth, closed six-figure deals, and landed Google\'s largest 2024 accessibility contract',
          ],
          technologies: ['LangChain', 'LangGraph', 'VectorDB (Qdrant)', 'RAG', 'PostgreSQL', 'Redis'],
        },
        {
          title: 'Technical Product Manager',
          company: 'BlueYonder',
          location: 'Remote',
          period: 'May 2019 - Apr 2023',
          highlight: '400+ engineers',
          description: [
            'Product-managed company-wide Design System / Common Component Library adopted by 400+ engineers',
            'Owned CCL roadmap (v3 → v4) aligned with OKRs, business goals, and Material 3 guidelines',
            'Led cross-team initiatives—Playwright/WDIO test harness, GitHub Actions CI/CD—reducing release time 30%',
          ],
          technologies: ['React', 'TypeScript', 'MUI v5', 'Shadcn', 'Rollup', 'Webpack', 'Storybook'],
        },
        {
          title: 'Product Manager',
          company: 'EPAM / Evri (Hermes)',
          location: 'Remote',
          period: 'Apr 2018 - Apr 2019',
          highlight: '$70M+ revenue',
          description: [
            'Worked for Evri (formerly Hermes), Europe\'s #1 parcel-delivery network — 52 countries, 12M DAU',
            'Owned three cross-functional squads (30+ FTEs) delivering enterprise CMS digital-transformation',
            'Led end-to-end CMS migration that unlocked $70M+ new annual revenue',
          ],
          technologies: ['AWS', 'Prismic', 'SonarQube', 'Jenkins', 'Jira'],
        },
        {
          title: 'Product Manager',
          company: 'Sapien Wallet',
          location: 'Remote',
          period: '2017 - 2018',
          highlight: '100K users',
          description: [
            'Developed from scratch a crypto wallet with post-transaction human rating system',
            'Attracted 100K users in the first month of launch',
            'Integrated blockchain technologies including Solidity, IPFS, and Chainlink oracles',
          ],
          technologies: ['Solidity', 'IPFS', 'Chainlink', 'React Native'],
        },
        {
          title: 'Chief Executive Officer',
          company: 'Eatsmart',
          location: 'Kyiv, Ukraine',
          period: 'Dec 2012 - Feb 2016',
          highlight: 'Forbes Featured',
          description: [
            'Built restaurant reservation platform from scratch — 800+ restaurants, 50K+ downloads, featured by Forbes',
            'Led Seed, Series A & B fundraising; managed 5 engineers, 4 marketing, 2 sales across Scrum delivery',
            'Drove product-market fit, unit economics, and full-funnel growth (ASO, paid UA, influencer campaigns)',
          ],
          technologies: ['iOS', 'Android', 'Firebase', 'Mixpanel', 'Agile/Scrum'],
        },
      ],
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
    // Cases
    cases: {
      label: '',
      title: 'Case Studies',
      description: 'Real projects, real solutions — from concept to deployment.',
      items: [
        {
          title: "Weight Loss Clinic Intake Form",
          description: "Built a full-cycle digital intake system for Health Company. Multi-step patient onboarding form with real-time validation, conditional logic, and automated PDF generation — replacing paper forms entirely.",
          image: "/cases/casestudy33.jpg",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PDF Generation", "Vercel"],
          link: "https://medicare-intake-form.vercel.app"
        }
      ],
    },
  },
  ua: {
    // Header
    nav: {
      about: 'Про мене',
      experience: 'Досвід',
      cases: 'Кейси',
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
      downloadCV: 'Завантажити CV',
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
      jobs: [
        {
          title: 'AI Продакт-менеджер',
          company: 'UserWay',
          location: 'Прага, Чехія',
          period: 'Травень 2023 - Теперішній час',
          highlight: '1.5M+ встановлень',
          description: [
            'Масштабував AI платформу доступності від MVP до 1.5M+ встановлень віджетів по всьому світу',
            'Відповідав за roadmap та OKR для RAG функцій на базі LangChain з векторними базами Qdrant',
            'Забезпечив 10% MoM зростання ARR, закрив шестизначні угоди та отримав найбільший контракт Google 2024 року з доступності',
          ],
          technologies: ['LangChain', 'LangGraph', 'VectorDB (Qdrant)', 'RAG', 'PostgreSQL', 'Redis'],
        },
        {
          title: 'Технічний продакт-менеджер',
          company: 'BlueYonder',
          location: 'Віддалено',
          period: 'Травень 2019 - Квітень 2023',
          highlight: '400+ інженерів',
          description: [
            'Керував продуктом Design System / Common Component Library, який використовують 400+ інженерів',
            'Відповідав за roadmap CCL (v3 → v4) відповідно до OKR, бізнес-цілей та Material 3',
            'Очолив крос-командні ініціативи — Playwright/WDIO тестування, GitHub Actions CI/CD — скоротивши час релізу на 30%',
          ],
          technologies: ['React', 'TypeScript', 'MUI v5', 'Shadcn', 'Rollup', 'Webpack', 'Storybook'],
        },
        {
          title: 'Продакт-менеджер',
          company: 'EPAM / Evri (Hermes)',
          location: 'Віддалено',
          period: 'Квітень 2018 - Квітень 2019',
          highlight: '$70M+ доходу',
          description: [
            'Працював для Evri (раніше Hermes), #1 мережі доставки посилок в Європі — 52 країни, 12M DAU',
            'Керував трьома крос-функціональними командами (30+ FTE) для enterprise CMS трансформації',
            'Очолив end-to-end міграцію CMS, що відкрила $70M+ нового річного доходу',
          ],
          technologies: ['AWS', 'Prismic', 'SonarQube', 'Jenkins', 'Jira'],
        },
        {
          title: 'Продакт-менеджер',
          company: 'Sapien Wallet',
          location: 'Віддалено',
          period: '2017 - 2018',
          highlight: '100K користувачів',
          description: [
            'Розробив з нуля криптогаманець з системою оцінки користувачів після транзакцій',
            'Залучив 100K користувачів за перший місяць після запуску',
            'Інтегрував блокчейн технології включаючи Solidity, IPFS та Chainlink oracles',
          ],
          technologies: ['Solidity', 'IPFS', 'Chainlink', 'React Native'],
        },
        {
          title: 'Генеральний директор',
          company: 'Eatsmart',
          location: 'Київ, Україна',
          period: 'Грудень 2012 - Лютий 2016',
          highlight: 'Forbes Featured',
          description: [
            'Побудував платформу бронювання ресторанів з нуля — 800+ ресторанів, 50K+ завантажень, згадка у Forbes',
            'Очолив Seed, Series A та B раунди; керував 5 інженерами, 4 маркетологами, 2 sales за Scrum',
            'Забезпечив product-market fit, юніт-економіку та повну воронку росту (ASO, paid UA, influencer кампанії)',
          ],
          technologies: ['iOS', 'Android', 'Firebase', 'Mixpanel', 'Agile/Scrum'],
        },
      ],
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
    // Cases
    cases: {
      label: '',
      title: 'Кейс-стаді',
      description: 'Реальні проекти, реальні рішення — від концепції до деплою.',
      items: [
        {
          title: "Weight Loss Clinic Intake Form",
          description: "Розробив повноцінну цифрову систему прийому для Health Company. Багатокрокова форма онбордингу пацієнтів з валідацією в реальному часі, умовною логікою та автоматичною генерацією PDF — повністю замінивши паперові форми.",
          image: "/cases/casestudy33.jpg",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PDF Generation", "Vercel"],
          link: "https://medicare-intake-form.vercel.app"
        }
      ],
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
