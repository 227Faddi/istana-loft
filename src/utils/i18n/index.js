import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocales from "./locales/en/en.json";
import itLocales from "./locales/it/it.json";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      otherLng: 'IT',
      photos: "Photos",
      reviews: "Reviews",
      location: "Location",
      contact: "Contact",
      bookNow: "Book Now",
      mainTitle1: "Discover Your Perfect",
      mainTitle2: "Coastal Retreat",
      mainSubTitle1: "With a combines style and comfort, ensuring",
      mainSubTitle2: "a cozy and rejuvenating stay in Sardinia's coastal paradise.",
      mainButton: "Reserve Your Stay",
      infoTitle1: "Everything You Need for",
      infoTitle2: "a Perfect Stay",
      infoSubTitle1: "Inspired by Bali’s relaxed vibes, located on the hill",
      infoSubTitle2: "just above the enchanting beach of Porto Istana.",
      checkIn: "Self check-in",
      checkInText1: "Enjoy quick and easy arrivals with our simple",
      checkInText2: "self check-in process.",
      beach: "Just a Step from the Beach",
      beachText1: "Enjoy easy access to the wonderful",
      beachText2: "Porto Istana beach.",
      relax: "Relax in Comfort",
      relaxText1: "Perfect for two, it features a double bed, indoor and",
      relaxText2: "outdoor showers, and essentials",
      gallery: "Gallery",
      galleryTitle: "Step Into Paradise",
      exterior: "Exterior",
      interior: "Interior",
      reviewsTitle1: "What Our Guests",
      reviewsTitle2: "Are Saying",
      reviewsComment1: "Giulios loft is super cute with some bali vibes :) we had a great time in Porto Istana! But keep in mind that you definitely need a car. We would come back ☺️",
      reviewsComment2: "This loft is wonderful. Very stylish with a beach-tropical theme. Amazing shower and bath sink. You will love this place!",
      reviewsComment3: "Great studio ideally located to explore the region. Giulio was great and even sorted out the logistics to pick up a parcel we got sent to his place. Recommend it!",
      reviewsFrom: "From Airbnb",
      locationTitle: "Discover Your Peaceful Getaway",
      faqTitle: "Questions & Answers",
      faqItem1Title: "What amenities are included?",
      faqItem1Text: "The property includes air conditioning, free WiFi, a hair dryer, in and outdoor shower, hot water, shower gel, cotton linens, hangers, a Klarstein refrigerator, and an espresso machine.",
      faqItem2Title: "Is there public transportation nearby?",
      faqItem2Text: "Yes, buses run from Porto Istana to Olbia, but they are infrequent. For a better beach experience along the coast, we recommend renting a car.",
      faqItem3Title: "How can I make a reservation?",
      faqItem3Text: "To make a reservation, simply visit our listing on the Airbnb site. Select your desired dates, check availability, and follow the prompts to complete your booking.",
      faqItem4Title: "How far is the beach from the loft?",
      faqItem4Text: "It’s approximately a 16-minute walk or a 4-minute drive. We're also planning to offer electric bikes for a more convenient ride!",
      faqContact: "Didn’t find the answer you are looking for?",
      contactUs: "Contact Us!",
      book: "Book",
      rights: "© Istana Loft 2024, All rights reserved.",
      develop: "Develop by",

      contactTitle: "Get in Touch with Giulio",
      contactName: "Giulio",
      contactRole: "Owner",
      contactBio: "My name is Giulio, and I’m an anaesthetist based in Olbia, on the beautiful island of Sardinia. I work in a hospital and air rescue services, and I have a great passion for surfing, sailing, climbing, and alpine skiing. With my friends, I explore the island in search of the best waves, traveling, and discovering new experiences.",
      contactSubTitle: "Have questions or need assistance?",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      submit: "Submit",

      pageNotFound: "Page not found",
      pageNotFoundMessage: "Sorry, we couldn’t find the page you’re looking for.",
      pageNotFoundButton: "Go Back to the Homepage",
    }
  },
  it: {
    translation: {
      otherLng: 'EN',
      photos: "Foto",
      reviews: "Recensioni",
      location: "Posizione",
      contact: "Contatta",
      bookNow: "Prenota Adesso",
      mainTitle1: "Scopri il tuo perfetto",
      mainTitle2: "Rifugio costiero",
      mainSubTitle1: "Con uno stile e comfort combinati, garantendo",
      mainSubTitle2: "un soggiorno accogliente e rigenerante nel paradiso costiero della Sardegna.",
      mainButton: "Prenota il tuo soggiorno",
      infoTitle1: "Tutto ciò di cui hai bisogno per",
      infoTitle2: "un soggiorno perfetto",
      infoSubTitle1: "Ispirato alle vibe di Bali, situato sulla collina",
      infoSubTitle2: "proprio sopra l'incantevole spiaggia di Porto Istana.",
      checkIn: "Self check-in",
      checkInText1: "Goditi arrivi rapidi e facili con il nostro semplice",
      checkInText2: "processo di self check-in.",
      beach: "A pochi passi dalla spiaggia",
      beachText1: "Goditi un facile accesso alla meravigliosa",
      beachText2: "spiaggia di Porto Istana.",
      relax: "Rilassati nel comfort",
      relaxText1: "Perfetto per due, è dotato di un letto matrimoniale, docce interne e",
      relaxText2: "esterne, e comfort essenziali.",
      gallery: "Galleria",
      galleryTitle: "Entra nel Paradiso",
      exterior: "Esterno",
      interior: "Interno",
      reviewsTitle1: "Cosa Dicono",
      reviewsTitle2: "i Nostri Ospiti",
      reviewsComment1: "Il loft di Giulio è super carino con un po' di vibe balinesi :) ci siamo divertiti molto a Porto Istana! Ma tieni presente che hai sicuramente bisogno di un'auto. Torneremo ☺️",
      reviewsComment2: "Questo loft è meraviglioso. Molto elegante con un tema beach-tropical. Doccia e lavabo fantastici. Amerai questo posto!",
      reviewsComment3: "Ottimo studio situato in posizione ideale per esplorare la regione. Giulio è stato fantastico e ha persino sistemato la logistica per ritirare un pacco che abbiamo inviato a casa sua. Lo raccomando!",
      reviewsFrom: "Da Airbnb",
      locationTitle: "Scopri la Tua Oasi di Pace",
      faqTitle: "Domande & Risposte",
      faqItem1Title: "Quali servizi sono inclusi?",
      faqItem1Text: "La struttura include aria condizionata, WiFi gratuito, un asciugacapelli, doccia interna ed esterna, acqua calda, gel doccia, lenzuola in cotone, appendiabiti, un frigorifero Klarstein e una macchina da caffè espresso.",
      faqItem2Title: "C'è un trasporto pubblico nelle vicinanze?",
      faqItem2Text: "Sì, ci sono autobus che collegano Porto Istana a Olbia, ma sono poco frequenti. Per un'esperienza migliore sulle spiagge lungo la costa, ti consigliamo di noleggiare un'auto.",
      faqItem3Title: "Come posso effettuare una prenotazione?",
      faqItem3Text: "Per effettuare una prenotazione, visita semplicemente il nostro annuncio sul sito di Airbnb. Seleziona le date desiderate, controlla la disponibilità e segui le istruzioni per completare la tua prenotazione.",
      faqItem4Title: "Quanto dista la spiaggia dal loft?",
      faqItem4Text: "Sono circa 16 minuti a piedi o 4 minuti in auto. Stiamo anche pianificando di offrire biciclette elettriche per un viaggio più conveniente!",
      faqContact: "Non hai trovato la risposta che cercavi?",
      contactUs: "Contattaci!",
      book: "Prenota",
      rights: "© Istana Loft 2024, Tutti i diritti riservati.",
      develop: "Sviluppato da",

      contactTitle: "Contatta Giulio",
      contactName: "Giulio",
      contactRole: "Proprietario",
      contactBio: "Mi chiamo Giulio, sono un medico anestesista rianimatore a Olbia, nel nord della splendida Sardegna. Lavoro in ospedale e nel servizio di elisoccorso, e ho una grande passione per il surf, la vela, l'arrampicata e lo sci alpino. Con gli amici, esploro l'isola alla ricerca delle migliori onde, viaggiando e scoprendo nuove esperienze.",
      contactSubTitle: "Hai domande o hai bisogno di assistenza?",
      formName: "Nome",
      formEmail: "Email",
      formMessage: "Messaggio",
      submit: "Invia",

      pageNotFound: "Pagina non trovata",
      pageNotFoundMessage: "Spiacenti, non siamo riusciti a trovare la pagina che stai cercando.",
      pageNotFoundButton: "Torna alla Homepage",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: "it", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;