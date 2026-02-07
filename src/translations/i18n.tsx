import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
const resources = {
  en: {
    translation: {
      contact: {
        title: "Let's Work Together",
        subtitle: "I'm always interested in hearing about new projects and opportunities.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Send Message",
          namePlaceholder: "Your name",
          emailPlaceholder: "someone@example.com",
          messagePlaceholder: "Your message...",
          success: "Message sent successfully!",
          error: "Sorry, failed to send message. Please try again."
        }
      },
      hero: {
        greeting: "Hello, I'm Yibeltal",
        title: "Full Stack Developer",
        description: "Crafting robust and scalable web applications with modern technologies. Passionate about creating exceptional user experiences and efficient backend solutions.",
        downloadCV: "Download CV",
      },
      nav: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        getInTouch: "Get in Touch"
      }
    }
  },
  am: {
    translation: {
      contact: {
        title: "አብረን እንስራ",
        subtitle: "ስለ አዳዲስ ፕሮጀክቶች እና እድሎች መስማት ሁልጊዜ ያስደስተኛል።",
        form: {
          name: "ስም",
          email: "ኢሜይል",
          message: "መልእክት",
          submit: "መልእክት ላክ",
          namePlaceholder: "ስምዎን ያስገቡ",
          emailPlaceholder: "someone@example.com",
          messagePlaceholder: "መልእክትዎን ያስገቡ...",
          success: "መልእክትዎ በተሳካ ሁኔታ ተልኳል!",
          error: "ይቅርታ፣ መልእክትዎን መላክ አልተቻለም። እባክዎ እንደገና ይሞክሩ።"
        }
      },
      hero: {
        greeting: "ሰላም፣ እኔ ይብልጣል እባላለሁ",
        title: "ሙሉ የስራ ዝርዝር ገንቢ",
        description: "በዘመናዊ ቴክኖሎጂዎች ጠንካራ እና ስኬላብል የድር መተግበሪያዎችን እሰራለሁ። ልዩ የተጠቃሚ ተሞክሮዎችን እና ውጤታማ የኋላ-መጨረሻ መፍትሄዎችን ለመፍጠር ጉጉት አለኝ።",
        downloadCV: "ሲቪ አውርድ"
      },
      nav: {
        home: "መነሻ",
        skills: "ክህሎቶች",
        projects: "ፕሮጀክቶች",
        contact: "አድራሻ",
        getInTouch: "አግኙኝ"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'am'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;