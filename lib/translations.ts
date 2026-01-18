export const translations = {
  en: {
    // Hero Section
    hero: {
      badge: "Protected by TLS 1.3",
      title: "IRIS",
      subtitle: "Fast and secure VPN. No blocks. Based on",
      protocol: "VLESS",
      protocolSuffix: "",
      getStarted: "Get Started",
      viewLocations: "View Locations",
      stats: {
        servers: "Global Servers",
        protocols: "Main Protocol",
        uptime: "Uptime",
      },
    },
    // Server Locations
    locations: {
      title: "Global Server Network",
      subtitle: "Connect to high-performance servers across multiple continents",
      germany: "Germany",
      finland: "Finland",
      kazakhstan: "Kazakhstan",
      city: {
        frankfurt: "Frankfurt",
        helsinki: "Helsinki",
        almaty: "Almaty",
      },
      datacenter: "Datacenter",
      ping: "Ping",
      status: "Status",
      online: "Online",
    },
    // Protocol Showcase
    protocols: {
      title: "Multi-Protocol Support",
      subtitle: "Powered by",
      subtitleSuffix: "with support for multiple protocols",
      primary: "Primary",
      vlessDesc: "Next-generation protocol with enhanced performance and security",
      otherDesc: "Reliable and secure connection protocol",
      optimized: "Optimized for speed & security",
      whyVless: "Why VLESS?",
      whyVlessDesc:
        "VLESS is a lightweight, high-performance protocol designed for modern VPN needs. It offers superior speed, enhanced security, and minimal overhead compared to traditional protocols.",
    },
    // Features
    features: {
      title: "Cutting-Edge Features",
      subtitle: "Built with the latest technology to provide you with the best VPN experience",
      globalReach: {
        title: "Global Reach",
        description: "Connect to servers across Europe and Asia for optimal performance",
      },
      encryption: {
        title: "TLS Encryption",
        description: "Your data is protected with modern encryption protocols",
      },
      speed: {
        title: "Lightning Fast",
        description: "Experience blazing speeds with our optimized server infrastructure",
      },
      logs: {
        title: "Zero Logs",
        description: "We never track, collect, or share your private data",
      },
      anonymous: {
        title: "Anonymous Browsing",
        description: "Browse the internet without revealing your identity or location",
      },
      performance: {
        title: "High Performance",
        description: "Optimized for streaming, gaming, and bandwidth-intensive tasks",
      },
    },
    // Background Selector
    background: {
      label: "Background Style:",
      waves: "Wave Lines",
      scan: "Scan Lines",
      oscillating: "Oscillating Waves",
      worldMap: "World Map",
    },
    // CTA Section
    cta: {
      title: "Try Free Trial Period",
      subtitle: "No card binding. No registration. No limits",
      button: "Start in Telegram",
    },
  },
  ru: {
    // Hero Section
    hero: {
      badge: "Защищен TLS 1.3",
      title: "IRIS",
      subtitle: "Быстрый и безопасный VPN. Без блокировок. На основе",
      protocol: "VLESS",
      protocolSuffix: "",
      getStarted: "Начать",
      viewLocations: "Посмотреть локации",
      stats: {
        servers: "Глобальных сервера",
        protocols: "Главный протокол",
        uptime: "Время работы",
      },
    },
    // Server Locations
    locations: {
      title: "Глобальная сеть серверов",
      subtitle: "Подключайтесь к высокопроизводительным серверам на разных континентах",
      germany: "Германия",
      finland: "Финляндия",
      kazakhstan: "Казахстан",
      city: {
        frankfurt: "Франкфурт",
        helsinki: "Хельсинки",
        almaty: "Алматы",
      },
      datacenter: "Дата-центр",
      ping: "Пинг",
      status: "Статус",
      online: "Онлайн",
    },
    // Protocol Showcase
    protocols: {
      title: "Поддержка нескольких протоколов",
      subtitle: "Работает на",
      subtitleSuffix: "с поддержкой нескольких протоколов",
      primary: "Основной",
      vlessDesc: "Протокол нового поколения с улучшенной производительностью и безопасностью",
      otherDesc: "Надежный и безопасный протокол подключения",
      optimized: "Оптимизирован для скорости и безопасности",
      whyVless: "Почему VLESS?",
      whyVlessDesc:
        "VLESS — это легкий высокопроизводительный протокол, разработанный для современных VPN. Он обеспечивает превосходную скорость, повышенную безопасность и минимальные накладные расходы по сравнению с традиционными протоколами.",
    },
    // Features
    features: {
      title: "Передовые функции",
      subtitle: "Создан с использованием новейших технологий для лучшего VPN опыта",
      globalReach: {
        title: "Глобальный охват",
        description: "Подключайтесь к серверам в Европе и Азии для оптимальной производительности",
      },
      encryption: {
        title: "TLS шифрование",
        description: "Ваши данные защищены современными протоколами шифрования",
      },
      speed: {
        title: "Молниеносная скорость",
        description: "Испытайте невероятную скорость с нашей оптимизированной инфраструктурой",
      },
      logs: {
        title: "Без логов",
        description: "Мы никогда не отслеживаем, не собираем и не передаем ваши личные данные",
      },
      anonymous: {
        title: "Анонимный просмотр",
        description: "Просматривайте интернет, не раскрывая свою личность или местоположение",
      },
      performance: {
        title: "Высокая производительность",
        description: "Оптимизирован для стриминга, игр и задач с высокой пропускной способностью",
      },
    },
    // Background Selector
    background: {
      label: "Стиль фона:",
      waves: "Волновые линии",
      scan: "Сканирующие линии",
      oscillating: "Колеблющиеся волны",
      worldMap: "Карта мира",
    },
    // CTA Section
    cta: {
      title: "Попробуйте бесплатный пробный период",
      subtitle: "Без привязки карты. Без регистрации. Без ограничений",
      button: "Начать в Telegram",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.en
