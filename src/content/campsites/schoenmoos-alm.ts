import type { CampsiteConfig } from "../types";

/**
 * Naturcamping Schönmoos Alm — Krimml, Salzburger Land.
 * Camping- & Vanlife-Spot an der Gerlos Alpenstraße (Kehre 7), Nationalpark Hohe Tauern,
 * mit der urigen Schönmoos Alm (Almküche, Kamin, Sonnenterrasse, Sauna) direkt am Platz.
 * Inhalte zu 100 % aus der eigenen Quelle (raw/digest). Bilder ausschließlich von diesem Platz.
 */
const IMG = "/campsites/schoenmoos-alm";

const schoenmoosAlm: CampsiteConfig = {
  name: "Naturcamping Schönmoos Alm",
  shortName: "Schönmoos",
  slug: "schoenmoos-alm",
  ort: "Krimml",
  region: "Salzburger Land",
  brandKind: "Camping & Vanlife",
  regionLong: "Nationalpark Hohe Tauern · Krimml · Salzburger Land",

  theme: "schiefer",
  heroVariant: "left",

  claim: "Camping mitten im Nationalpark Hohe Tauern",
  claimEmphasis: "Nationalpark Hohe Tauern",
  intro:
    "Du stellst dich mit Camper, Van oder Zelt auf eine Almwiese an der Gerlos Alpenstraße — rundum Wälder und Berge, und mit der urigen Schönmoos Alm liegen Almküche, Sauna und Sonnenterrasse nur wenige Schritte vom Vorzelt entfernt.",

  statement: {
    text: "Wenige Schritte vom Stellplatz wartet die Alm — mit Schmankerlküche, offenem Kamin und Sonnenterrasse.",
    emphasis: "Wenige Schritte",
  },

  pillars: [
    {
      title: "Mitten im Nationalpark",
      text: "Dein Platz liegt in Kehre 7 der Gerlos Alpenstraße, umgeben von Wiesen, Wäldern und der Bergkulisse der Hohen Tauern.",
      image: { src: `${IMG}/gallery-9cea32c1e2.webp`, alt: "Schönmoos Alm an der Gerlosstraße mit Sonnenterrasse und Bergkulisse" },
    },
    {
      title: "Schmankerlküche am Platz",
      text: "Regionale Spezialitäten in gemütlicher Almatmosphäre — vom Frühstück bis zum à-la-carte-Abendessen, nur wenige Schritte vom Stellplatz.",
      image: { src: `${IMG}/gallery-9bf7483c82.webp`, alt: "Deftiger Grillteller in der Schönmoos Alm" },
    },
    {
      title: "Urig & gemütlich",
      text: "Drinnen erwarten dich Holzstuben, Bar und Kaminecke — der wettersichere Rückzugsort nach dem Tag draußen.",
      image: { src: `${IMG}/gallery-540e8d8496.webp`, alt: "Urige Gaststube mit Bar in der Schönmoos Alm" },
    },
  ],

  usps: [
    "Camper, Vans & Zelte",
    "Almküche & Frühstück",
    "Sauna & Duschen",
    "Hunde willkommen",
    "Keine Stornogebühr",
    "Gästekarte inklusive",
  ],

  trust: {
    heading: "Berge, Kehren und eine warme Stube",
    headingEmphasis: "eine warme Stube",
    intro:
      "Die Schönmoos Alm liegt auf halber Strecke zwischen den weltberühmten Krimmler Wasserfällen und Königsleiten. Mit der Gästekarte gibt es Ermäßigungen in der Region — und nach dem Camptag wartet die Almküche.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-d7cfa11f4e.webp`, alt: "Luftaufnahme: Stellplätze des Naturcamping Schönmoos Alm an der Gerlosstraße" },
  },

  breather: {
    image: { src: `${IMG}/gallery-4c93b476fb.webp`, alt: "Schönmoos Alm an einer Kehre des Gerlospasses im Sommer" },
    line: "Zwischen den schönsten Kurven und Kehren des Gerlospasses.",
  },

  camping: {
    heading: "Camping an der Schönmoos Alm",
    intro:
      "Stellplätze für Camper, Wohnmobile, Autos mit Dachzelt, Vans und Zelte — ruhig gelegen, mit der Alm und ihren Annehmlichkeiten gleich nebenan.",
    features: [
      {
        title: "Sonnenterrasse mit Panorama",
        text: "Im Sommer entspannst du auf der großen Sonnenterrasse mit weitem Blick auf die Berge — Tisch und Bergkulisse inklusive.",
        image: { src: `${IMG}/gallery-349fc2a578.webp`, alt: "Sonnenterrasse der Schönmoos Alm mit Bergblick" },
      },
      {
        title: "Abende am offenen Kamin",
        text: "Wird es kühl, sitzt du drinnen im urigen Ambiente am offenen Kamin — knisterndes Feuer statt Lagerfeuer am Platz.",
        image: { src: `${IMG}/gallery-1c73964d20.webp`, alt: "Offener Kamin in der Stube der Schönmoos Alm" },
      },
      {
        title: "Original Schweizer Raclette",
        text: "Geschmolzener Käse, direkt aufs Bauernbrot abgezogen, dazu Pfannenkartoffel und Zwiebelmarmelade — Schweiz auf deinem Teller.",
        image: { src: `${IMG}/gallery-504b8c5e2a.webp`, alt: "Original Schweizer Raclette wird in der Schönmoos Alm aufgezogen" },
      },
      {
        title: "Tataren-Hut Fondue",
        text: "Beim Hut-Fondue garst du Rinder- und Putenmedaillons am Tataren-Hut — ein geselliges Festmahl für den ganzen Tisch.",
        image: { src: `${IMG}/gallery-a2b76f5509.webp`, alt: "Tataren-Hut Fondue am Tisch in der Schönmoos Alm" },
      },
      {
        title: "Sommer- & Wintercamping",
        text: "Ob auf der grünen Almwiese oder im tief verschneiten Tauern-Panorama — dein Campingspot ist Sommer wie Winter geöffnet.",
        image: { src: `${IMG}/gallery-8d97fab6ea.webp`, alt: "Schönmoos Alm im Winter vor verschneiten Bergen" },
      },
      {
        title: "Gemütliche Stuben",
        text: "Rustikales Holz, warmes Licht und urige Deko: drinnen findest du genug Platz für ein kühles Bier oder einen Kaiserschmarren.",
        image: { src: `${IMG}/gallery-a4dd8b3552.webp`, alt: "Gemütliche Stube mit Bar und rustikaler Holzdeko in der Schönmoos Alm" },
      },
    ],
  },

  kinder: {
    heading: "Platz zum Austoben",
    intro:
      "Während die Erwachsenen auf der Sonnenterrasse entspannen, toben sich die Kinder direkt unterhalb der Alm aus.",
    features: [
      {
        title: "Spielplatz unter der Alm",
        text: "Hüpfburg und Spielplatz liegen direkt unterhalb der Schönmoos Alm — die Kinder spielen, du hast sie im Blick.",
        image: { src: `${IMG}/kids-6136cb859e.webp`, alt: "Spielplatz mit Hüpfburg unterhalb der Schönmoos Alm" },
      },
      {
        title: "Almwiese mit Bergblick",
        text: "Rund um die Alm gibt es viel Wiese und frische Bergluft — Raum genug für einen unbeschwerten Familientag im Grünen.",
        image: { src: `${IMG}/gallery-1840a2220f.webp`, alt: "Almwiese und Spielbereich rund um die Schönmoos Alm im Sommer" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt über den Gerlospass",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Gerlos Alpenstraße (B 165) erreichst du den Platz in Kehre 7 oberhalb von Krimml — von Zell am See ebenso wie aus dem Tiroler Zillertal.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Krimml (Pinzgauer Lokalbahn) bzw. Zell am See im Salzburger Land; die letzten Kilometer auf den Pass legst du mit Auto oder Bus zurück.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke von der Alm",
    headingEmphasis: "von der Alm",
    intro: "Sommerwiese und Winterzauber, Almküche und Kaiserschmarren — ein paar Eindrücke von der Schönmoos Alm.",
    tag: "Sommer & Winter",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-3279a3afee.webp`, alt: "Schönmoos Alm im Winter vor blauem Himmel" },
      { src: `${IMG}/gallery-3f3a755835.webp`, alt: "Frisch gemachter Kaiserschmarren in der Schönmoos Alm" },
      { src: `${IMG}/gallery-f205eb754a.webp`, alt: "Deftiger Schweinsbraten mit Bratkartoffeln in der Schönmoos Alm" },
      { src: `${IMG}/gallery-d397f3ba3d.webp`, alt: "Gemütliche Stube mit Kachelofen in der Schönmoos Alm" },
    ],
  },

  booking: {
    heading: "Dein Stellplatz an der Gerlosstraße",
    headingEmphasis: "an der Gerlosstraße",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns mit deiner Verfügbarkeit. Anmeldung und Check-in direkt in der Schönmoos Alm.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz inkl. 1–2 Personen · Zeltplatz = nur Stellfläche · zzgl. € 10 je Erw. / € 6 je Kind · zzgl. Ortstaxe € 3,90 p. P./Nacht (ab 14 J.) · kein Strom-/Wasseranschluss",
    highlight: { title: "Keine Stornogebühr", text: "Spontan buchen, flexibel bleiben — bei uns fällt keine Stornogebühr an." },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Camper/Van)", perNight: 38, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 10, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.22191, lng: 12.17546 },
    tel: "+43 6564 828262",
    telHref: "tel:+436564828262",
    mail: "welcome@schoenmoos-alm.at",
    facebook: "https://www.facebook.com/dieschoenmoosalm/",
    adresse: "Gerlosstraße 119 · 5743 Krimml · Salzburger Land",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Almküche", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default schoenmoosAlm;
