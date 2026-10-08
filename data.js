// 54 ta Sport Turi bo'yicha to'liq ma'lumotlar bazasi
// Har bir sport turida alohida ma'lumotlar, rasm, murabbiylar (yoshi, tajribasi, sig'imi >= 30, vaqtlari) mavjud.

const SPORTS_DATA = [
  {
    id: 1,
    name: "Futbol",
    category: "To'p o'yinlari",
    icon: "⚽",
    badge: "Ommabop",
    price: "350 000 so'm / oy",
    location: "Milliy Stadion & Bunyodkor Arena akademiyasi",
    ageLimit: "6 - 28 yosh",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
    description: "Futbol — dunyodagi eng mashhur jamoaviy sport turi. To'p bilan muomala qilish, taktik fikrlash, tezlik va jismoniy chidamlilikni rivojlantiradi. Zamonaviy maydonlarda professional darajada mashg'ulotlar olib boriladi.",
    requirements: "Sport kiyimi, butsi (shitiqlar bilan), shaxsiy sochiq va tibbiy ma'lumotnoma.",
    coaches: [
      {
        id: "c-1-1",
        name: "Ravshan Haydarov",
        role: "Bosh murabbiy, PRO litsenziyasi sohibi",
        age: 44,
        experience: "18 yillik murabbiylik tajribasi, Osiyo Chempioni ustozi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki yoshlar guruhi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki asosiy guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "19:00 — 21:00", label: "Kattalar va havaskorlar", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-1-2",
        name: "Sanjar Tursunov",
        role: "Taktik murabbiy, Sobiq terma jamoa a'zosi",
        age: 38,
        experience: "12 yillik tajriba, UEFA A toifali mutaxassis",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "09:00 — 11:00", label: "Ertalabki texnika guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Kechki match-trening", days: "Dushanba, Chorshanba, Juma" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Mini-futbol (futzal)",
    category: "To'p o'yinlari",
    icon: "🥅",
    badge: "Tezkor",
    price: "320 000 so'm / oy",
    location: "Yunusobod Sport Majmuasi Futzal Zali",
    ageLimit: "7 - 35 yosh",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&auto=format&fit=crop&q=80",
    description: "Futzal — yopiq zalda kichik to'p bilan o'ynaladigan o'ta dinamik sport. Qisqa masofada tez qaror qabul qilish, to'pni nazorat qilish va yuqori koordinatsiyani tarbiyalaydi.",
    requirements: "Futzalka (silliq polli krossovka), sport formasi, tizzalik.",
    coaches: [
      {
        id: "c-2-1",
        name: "Bahodir Ahmedov",
        role: "Futzal bo'yicha oliy toifali murabbiy",
        age: 41,
        experience: "15 yillik tajriba, Futzal Oliy Ligasi g'olibi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "08:30 — 10:30", label: "Ertalabki guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:00 — 20:00", label: "Kechki professional guruh", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-2-2",
        name: "Dilshod Irsaliyev",
        role: "Futzal xalqaro sport ustasi",
        age: 36,
        experience: "10 yillik tajriba, Terma jamoa sobiq sardori",
        photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
        capacity: 34,
        enrolled: 21,
        schedule: [
          { time: "10:00 — 12:00", label: "Kunduzgi guruh", days: "Seshanba, Payshanba, Shanba" },
          { time: "19:30 — 21:30", label: "Kechki intensiv guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Basketbol",
    category: "To'p o'yinlari",
    icon: "🏀",
    badge: "Dinamik",
    price: "300 000 so'm / oy",
    location: "Jar Sport Majmuasi Basketbol Markazi",
    ageLimit: "8 - 30 yosh",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80",
    description: "Basketbol — bo'yni o'stirish, sakrash qobiliyati va jamoaviy taktikani rivojlantiruvchi ajoyib o'yin. To'pni savatga aniq tushirish mahorati va jismoniy chaqqonlik o'rgatiladi.",
    requirements: "Maxsus basketbol krossovkasi, qulay triko va futbolka.",
    coaches: [
      {
        id: "c-3-1",
        name: "Timur Xakimov",
        role: "Bosh murabbiy, Sport ustasi",
        age: 39,
        experience: "14 yillik tajriba, Respublika chempionatlari g'olibi",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 36,
        enrolled: 24,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki yoshlar mashg'uloti", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki asosiy tayyorgarlik", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-3-2",
        name: "Elena Denisova",
        role: "Qizlar va o'smirlar bo'yicha murabbiy",
        age: 35,
        experience: "11 yillik tajriba, Basketbol bo'yicha xalqaro hakam",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "14:00 — 16:00", label: "O'smirlar guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Ayollar va qizlar jamoasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Voleybol",
    category: "To'p o'yinlari",
    icon: "🏐",
    badge: "Jamoaviy",
    price: "280 000 so'm / oy",
    location: "Dinamo Voleybol Zallari Majmuasi",
    ageLimit: "9 - 40 yosh",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&auto=format&fit=crop&q=80",
    description: "Voleybol — chaqqonlik, yuqori reaksiyalar va jamoaviy birdamlikni shakllantiradi. Sakrash, blok qo'yish, to'p uzatish va kuchli zarba berish texnikalari o'rgatiladi.",
    requirements: "Zal krossovkasi, tizzalik va sport libosi.",
    coaches: [
      {
        id: "c-4-1",
        name: "Sherzod Jo'rayev",
        role: "Voleybol bo'yicha xizmat ko'rsatgan murabbiy",
        age: 46,
        experience: "20 yillik tajriba, Milliy chempionatlar sovrindori",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 20,
        schedule: [
          { time: "09:00 — 11:00", label: "Ertalabki boshlang'ich guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:00 — 20:00", label: "Kechki professional guruh", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-4-2",
        name: "Malika Umarova",
        role: "Yoshlar toifasi bo'yicha katta murabbiy",
        age: 33,
        experience: "9 yillik tajriba, Xalqaro musobaqalar ishtirokchisi",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "15:00 — 17:00", label: "Qizlar va o'quvchilar guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Kechki taktik guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Gandbol (qo‘l to‘pi)",
    category: "To'p o'yinlari",
    icon: "🤾",
    badge: "Quvvatli",
    price: "290 000 so'm / oy",
    location: "Olimpiya zaxiralari Gandbol Saroyi",
    ageLimit: "8 - 28 yosh",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
    description: "Gandbol — tez yugurish, to'pni kuchli otish va jismoniy kurashga boy sport. O'yinchilarda jasorat, chaqqonlik va yuksak chidamlilikni tarbiyalaydi.",
    requirements: "Sport formasi, gandbol to'pi uchun yopishqoq mastika, krossovka.",
    coaches: [
      {
        id: "c-5-1",
        name: "Farrux Islomov",
        role: "Gandbol bo'yicha xalqaro sport ustasi",
        age: 43,
        experience: "16 yillik murabbiylik amaliyoti",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 21,
        schedule: [
          { time: "08:30 — 10:30", label: "Boshlang'ich mahorat guruhi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki terma jamoa tayyorgarligi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-5-2",
        name: "Nodira Karimova",
        role: "Oliy toifali ayollar murabbiyi",
        age: 37,
        experience: "11 yillik tajriba, Gandbol federatsiyasi instruktori",
        photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Ertalabki o'smirlar guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Kechki taktik mashg'ulot", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Katta tennis",
    category: "To'p o'yinlari",
    icon: "🎾",
    badge: "Elita",
    price: "450 000 so'm / oy",
    location: "Respublika Olimpiya Tennis Maktabi",
    ageLimit: "6 - 45 yosh",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop&q=80",
    description: "Katta tennis — aristokratik sport turi bo'lib, nafis harakat, kuchli zarba, chidamlilik va intellektual fikrlashni talab etadi. Gilam, grunt va xard kortlarda mashg'ulotlar o'tiladi.",
    requirements: "Tennis raketkasi, gilam kortga mos krossovka, tennis to'plari to'plami.",
    coaches: [
      {
        id: "c-6-1",
        name: "Denis Istomin akademiyasi instruktori Alisher Qodirov",
        role: "Katta tennis bo'yicha xalqaro toifali murabbiy",
        age: 40,
        experience: "17 yillik tajriba, ATP musobaqalari qatnashchisi",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 23,
        schedule: [
          { time: "07:30 — 09:30", label: "Ertalabki elita korti", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki professional guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "19:30 — 21:30", label: "VIP individual & guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-6-2",
        name: "Zarina Xoliqova",
        role: "Bolalar va o'smirlar bosh murabbiyi",
        age: 32,
        experience: "9 yillik tajriba, ITF Level 2 sertifikati egasi",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "09:00 — 11:00", label: "Boshlang'ich texnika korti", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:00", label: "O'smirlar raqobat guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Stol tennisi",
    category: "To'p o'yinlari",
    icon: "🏓",
    badge: "Tez reaksiya",
    price: "240 000 so'm / oy",
    location: "Markaziy Ping-Pong Arena",
    ageLimit: "7 - 55 yosh",
    image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=800&auto=format&fit=crop&q=80",
    description: "Stol tennisi — ko'z mushaklarini charxlovchi, miya va qo'l harakatini uyg'unlashtiruvchi tezkor o'yin. Reaksiya, aylantirib zarba berish va chaqqonlikni o'stiradi.",
    requirements: "Stol tennisi raketkasi, krossovka, yengil kiyim.",
    coaches: [
      {
        id: "c-7-1",
        name: "Muhriddin Saidov",
        role: "Stol tennisi bo'yicha O'zbekiston chempioni murabbiyi",
        age: 39,
        experience: "15 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 20,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki sparring guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki professional guruh", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-7-2",
        name: "Go'zal Ro'ziyeva",
        role: "Bolalar toifasi yetakchi ustozi",
        age: 31,
        experience: "8 yillik tajriba, Osiyo turnirlari qatnashchisi",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "10:00 — 12:00", label: "Havaskorlar mashg'uloti", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:00", label: "Texnik nazorat guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Badminton",
    category: "To'p o'yinlari",
    icon: "🏸",
    badge: "Chaqqonlik",
    price: "260 000 so'm / oy",
    location: "Badminton Federatsiyasi O'quv Bazasi",
    ageLimit: "7 - 45 yosh",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&auto=format&fit=crop&q=80",
    description: "Badminton — jahondagi eng chaqqon sport turlaridan biri. Volan bilan 400 km/soatdan ortiq tezlikda harakat qilish, yengil sakrash va nafas tizimini mustahkamlash imkonini beradi.",
    requirements: "Badminton raketkasi, volanlar, sirpanmaydigan poyabzal.",
    coaches: [
      {
        id: "c-8-1",
        name: "Azamat Nurmatov",
        role: "Badminton bo'yicha milliy terma jamoa ustozi",
        age: 42,
        experience: "16 yillik tajriba, BWF xalqaro instruktori",
        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 18,
        schedule: [
          { time: "08:30 — 10:30", label: "Tonggi dinamika guruhi", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:30 — 19:30", label: "Kechki professional mashg'ulot", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-8-2",
        name: "Diana Karimova",
        role: "Yoshlar va fitnes toifasi murabbiyi",
        age: 30,
        experience: "7 yillik amaliy tajriba",
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 14,
        schedule: [
          { time: "10:00 — 12:00", label: "Kunduzgi havaskorlar", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Intensiv tayyorgarlik", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Boks",
    category: "Jang san'ati",
    icon: "🥊",
    badge: "Olimpiya Chempioni",
    price: "350 000 so'm / oy",
    location: "O'zbekiston Boks Federatsiyasi Bosh Zal",
    ageLimit: "9 - 35 yosh",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&auto=format&fit=crop&q=80",
    description: "Boks — O'zbekiston sportining faxri! Jasorat, temir iroda, aniq zarbalar va himoyalanish san'atini shakllantiradi. Ringda o'zingizga bo'lgan ishonchni eng yuqori pog'onaga ko'taring.",
    requirements: "Boks qo'lqopi (12-14 oz), kapa, bint (bintaj), shaxsiy kaska.",
    coaches: [
      {
        id: "c-9-1",
        name: "Rustam To'laganov",
        role: "Olimpiya o'yinlari sovrindori ustozi, Xalqaro sport ustasi",
        age: 45,
        experience: "21 yillik tajriba, AIBA 3-Star oliy murabbiyi",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
        capacity: 40,
        enrolled: 29,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki og'ir mashqlar", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki sparring va texnika", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:30 — 20:30", label: "Kattalar boks klubi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-9-2",
        name: "Farxod Po'latov",
        role: "Yoshlar terma jamoasi murabbiyi",
        age: 37,
        experience: "13 yillik tajriba, Osiyo chempionlari tarbiyachisi",
        photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "09:30 — 11:30", label: "Boshlang'ich jangchilar", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Professional guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Kikboksing",
    category: "Jang san'ati",
    icon: "🥋",
    badge: "Dinamik jang",
    price: "320 000 so'm / oy",
    location: "Qoplon Kikboksing Jang Markazi",
    ageLimit: "10 - 35 yosh",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&auto=format&fit=crop&q=80",
    description: "Kikboksing — qo'l va oyoq zarbalarini uyg'unlashtirgan shiddatli jang san'ati. WAKO qoidalari asosida to'liq kontaktli (Full Contact, Low Kick, K-1) mashg'ulotlar o'tkaziladi.",
    requirements: "Qo'lqop, oyoq qalqoni (shitki), kapa, bint va shortik.",
    coaches: [
      {
        id: "c-10-1",
        name: "Shavkat O'rinov",
        role: "Jahon chempioni, Xalqaro toifadagi instruktor",
        age: 39,
        experience: "15 yillik jangovar va murabbiylik tajribasi",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 24,
        schedule: [
          { time: "08:30 — 10:30", label: "Tonggi k-1 guruh", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:30 — 19:30", label: "Kechki sparring guruh", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-10-2",
        name: "Jamshid Yunusov",
        role: "WAKO sertifikatli trener",
        age: 34,
        experience: "9 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich bosqich", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kattalar kikboksingi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Milliy kurash",
    category: "Jang san'ati",
    icon: "🤼",
    badge: "Milliy meros",
    price: "250 000 so'm / oy",
    location: "Xalqaro Kurash Instituti Zali",
    ageLimit: "7 - 40 yosh",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    description: "O'zbek xalqining ko'p ming yillik faxri bo'lgan halol kurash san'ati! Chala, yonbosh va xalol usullari bilan raqibni yengish texnikasi hamda polvonlik ruhi singdiriladi.",
    requirements: "Yaktak (ko'k va yashil kurash libosi), belbog'.",
    coaches: [
      {
        id: "c-11-1",
        name: "Abdumalik Polvon G'aniyev",
        role: "Kurash bo'yicha mutlaq Jahon chempioni murabbiyi",
        age: 48,
        experience: "24 yillik tajriba, O'zbekiston iftixori faxriy unvoni",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 40,
        enrolled: 27,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi polvonlar maktabi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki gilam bellashuvi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-11-2",
        name: "Sirojiddin Rahmonov",
        role: "Oliy toifali kurash murabbiyi",
        age: 38,
        experience: "14 yillik tajriba, Respublika bosh hakami",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 21,
        schedule: [
          { time: "09:00 — 11:00", label: "O'smirlar toifasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Kattalar bellashuv guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 12,
    name: "Erkin kurash",
    category: "Jang san'ati",
    icon: "🤼‍♂️",
    badge: "Olimpiya",
    price: "280 000 so'm / oy",
    location: "Dinamo Olimpiya Kurash Bazasi",
    ageLimit: "8 - 30 yosh",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80",
    description: "Erkin kurash — oyoqdan ushlash, parterda va tik holatda yuksak texnika ko'rsatish talab etiladigan Olimpiya sporti. Kuch, chidamlilik va egiluvchanlikni shakllantiradi.",
    requirements: "Kurash trikosi (qizil/ko'k), borkalar (maxsus poyabzal).",
    coaches: [
      {
        id: "c-12-1",
        name: "Sobirjon Ro'ziyev",
        role: "Erkin kurash bo'yicha xizmat ko'rsatgan murabbiy",
        age: 46,
        experience: "22 yillik tajriba, Olimpiada ishtirokchilari ustozi",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 36,
        enrolled: 23,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki chidamlilik mashqi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki gilam parteri", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-12-2",
        name: "Akbar Jo'rayev (Katta)",
        role: "Yoshlar murabbiyi, Sport ustasi",
        age: 36,
        experience: "12 yillik amaliyot",
        photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "10:00 — 12:00", label: "O'smirlar guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kechki professional guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Yunon-rum kurashi",
    category: "Jang san'ati",
    icon: "🏛️",
    badge: "Klassik",
    price: "280 000 so'm / oy",
    location: "Respublika Olimpiya Tayyorgarlik Markazi",
    ageLimit: "8 - 30 yosh",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    description: "Klassik yunon-rum kurashida faqat beldan yuqori qism bilan ushlanadi. Kuch, bel mushaklari, ko'krak qafasi va qat'iyatni mukammallashtiruvchi qadimiy Olimpiya sport turi.",
    requirements: "Kurash trikosi, borkalar, tizzalik.",
    coaches: [
      {
        id: "c-13-1",
        name: "Elmurod Toshmurodov",
        role: "Jahon va Osiyo chempioni, Oliy toifali trener",
        age: 39,
        experience: "16 yillik tajriba, Xizmat ko'rsatgan sport ustasi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 34,
        enrolled: 21,
        schedule: [
          { time: "08:30 — 10:30", label: "Ertalabki texnika va siltash", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki gilam jangi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-13-2",
        name: "Kamoliddin Mamadaliyev",
        role: "Bolalar va yoshlar toifasi murabbiyi",
        age: 35,
        experience: "10 yillik murabbiylik faoliyati",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "09:30 — 11:30", label: "Yosh polvonlar tayyorgarligi", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:00", label: "Mahorat darsi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Dzyudo",
    category: "Jang san'ati",
    icon: "🥋",
    badge: "IJF Standart",
    price: "310 000 so'm / oy",
    location: "Dzyudo Federatsiyasi Markaziy Tatamisi",
    ageLimit: "6 - 40 yosh",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    description: "Dzyudo — Yaponiyaning 'yumshoq yo'l' falsafasiga asoslangan buyuk kurash san'ati. Usul yordamida raqib kuchini o'ziga qarshi yo'naltirish, yiqitish va bo'g'ish mahorati o'rgatiladi.",
    requirements: "Dzyudogi (oq yoki ko'k kimono), belbog'.",
    coaches: [
      {
        id: "c-14-1",
        name: "Rishod Sobirov akademiyasi murabbiyi Bekzod To'rayev",
        role: "Dzyudo bo'yicha 6-DAN qora belbog' sohibi",
        age: 42,
        experience: "18 yillik tajriba, Xalqaro toifadagi instruktor",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 25,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi tatami mashg'uloti", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki texnika va randori", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:30 — 20:30", label: "Kattalar dzyudo to'garagi", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-14-2",
        name: "Nargiza Sulaymonova",
        role: "Ayollar va bolalar dzyudosi ustozi",
        age: 34,
        experience: "11 yillik tajriba, Osiyo o'yinlari sovrindori",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich bolalar guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:30 — 18:30", label: "Qizlar terma guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Sambo",
    category: "Jang san'ati",
    icon: "🤼",
    badge: "O'zini himoya qilish",
    price: "300 000 so'm / oy",
    location: "Jar Sambo Majmuasi Zallari",
    ageLimit: "7 - 40 yosh",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&auto=format&fit=crop&q=80",
    description: "Sambo — qurolsiz o'zini himoya qilish (Sport va Jangovar sambo). Og'riqli usullar, yiqitishlar, chaqqonlik va hayotiy himoyalanish ko'nikmalarini beradi.",
    requirements: "Sambo kurtkasi (sambovka), maxsus sambo poyabzali, shortik.",
    coaches: [
      {
        id: "c-15-1",
        name: "Olimjon Shomurodov",
        role: "Sambo bo'yicha Jahon chempionati g'olibi murabbiyi",
        age: 44,
        experience: "19 yillik tajriba, Xizmat ko'rsatgan murabbiy",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 23,
        schedule: [
          { time: "08:30 — 10:30", label: "Ertalabki sport sambosi", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki jangovar sambo (Combat)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-15-2",
        name: "Mansur Jo'rayev",
        role: "Oliy toifali trener",
        age: 36,
        experience: "11 yillik tajriba, FIAS xalqaro sertifikati",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "09:30 — 11:30", label: "Yoshlar sambosi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kattalar o'zini himoya qilish", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "Taekvondo",
    category: "Jang san'ati",
    icon: "🥋",
    badge: "WT Olimpiya",
    price: "300 000 so'm / oy",
    location: "Universal Taekwondo WT Sport Saroyi",
    ageLimit: "5 - 35 yosh",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop&q=80",
    description: "Taekvondo — hayratlanarli sakrashlar, oyoq bilan chaqmoqdek zarba berish va qat'iy intizom san'ati. Butunjahon Taekvondo Federatsiyasi (WT) tizimida xalqaro darajada o'qitiladi.",
    requirements: "Dobok (taekvondo kiyimi), oq/rangli belbog', himoya protektorlari.",
    coaches: [
      {
        id: "c-16-1",
        name: "Ulug'bek Rashitov ustozi Xan Aleksandr",
        role: "Olimpiya chempioni tarbiyachisi, 7-DAN qora belbog'",
        age: 49,
        experience: "25 yillik tajriba, O'zbekiston iftixori faxriy unvoni",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 38,
        enrolled: 26,
        schedule: [
          { time: "08:00 — 10:00", label: "Olimpiya terma guruhi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "O'smirlar kyorugi mashqi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-16-2",
        name: "Sevara Normurodova",
        role: "Poomsae va bolalar dasturi bosh murabbiyi",
        age: 33,
        experience: "10 yillik tajriba, 4-DAN qora belbog'",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Bolalar boshlang'ich sinfi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Poomsae va texnik standart", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "Karate",
    category: "Jang san'ati",
    icon: "🥋",
    badge: "WKF Standart",
    price: "290 000 so'm / oy",
    location: "Markaziy Karate WKF Dojosi",
    ageLimit: "5 - 45 yosh",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&auto=format&fit=crop&q=80",
    description: "Karate (WKF, Shotokan) — zarba kuchi, ruhiy poklanish, kata va kumite san'atining uyg'unligi. O'zini nazorat qilish va yengilmas irodani shakllantiradi.",
    requirements: "Kimono (karategi), maxsus nakladka (qo'lqop), kapa.",
    coaches: [
      {
        id: "c-17-1",
        name: "Nuriddin Xolmurodov",
        role: "5-DAN qora belbog' ustasi, WKF xalqaro murabbiyi",
        age: 43,
        experience: "19 yillik tajriba, Osiyo karate federatsiyasi azosi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "08:30 — 10:30", label: "Kata va falsafa darsi", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kumite (jang amaliyoti)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-17-2",
        name: "Aziza Boboyeva",
        role: "O'smirlar toifasi bo'yicha yetakchi trener",
        age: 32,
        experience: "8 yillik tajriba, 3-DAN qora belbog'",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "09:30 — 11:30", label: "Boshlang'ich bolalar dojo", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:00", label: "Sportcha kumite guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 18,
    name: "MMA (aralash jang san’ati)",
    category: "Jang san'ati",
    icon: "🤼‍♂️",
    badge: "Oktagon",
    price: "380 000 so'm / oy",
    location: "Oktagon Fight Club Markazi",
    ageLimit: "14 - 35 yosh",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&auto=format&fit=crop&q=80",
    description: "MMA — dunyodagi eng ommalashgan jangovar sport turi. Stoykada zarbalar (boks, kikboksing) va parterda kurash (greppling, dzyudo, sambo) sintezi. Haqiqiy professional jangchilar tayyorlash.",
    requirements: "MMA qo'lqopi (kichik), rashgard va shortik, tish kapasi, shinguard.",
    coaches: [
      {
        id: "c-18-1",
        name: "Murod Xonto'rayev xotirasidagi klub bosh murabbiyi Jasur Mirzayev",
        role: "MMA professional murabbiyi, UFC/Bellator tajribasi",
        age: 40,
        experience: "16 yillik tajriba, Ko'plab chempionlar ustozi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 36,
        enrolled: 25,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki greppling va parter", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:30 — 19:30", label: "Kechki qafas (oktagon) sparring", days: "Dushanba, Chorshanba, Juma" },
          { time: "20:00 — 22:00", label: "Kattalar pro guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-18-2",
        name: "Shaxzod Qobilov",
        role: "Strayking (zarba berish) bo'yicha bosh mutaxassis",
        age: 35,
        experience: "10 yillik tajriba, Kikboksing va MMA ustasi",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 21,
        schedule: [
          { time: "10:00 — 12:00", label: "Kunduzgi zarba texnikasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Havaskorlar guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 19,
    name: "Qilichbozlik",
    category: "Jang san'ati",
    icon: "🤺",
    badge: "Aristokrat",
    price: "320 000 so'm / oy",
    location: "Milliy Qilichbozlik Akademiyasi Saroyi",
    ageLimit: "7 - 35 yosh",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop&q=80",
    description: "Qilichbozlik (Shpaga, Rapira, Sablya) — chaqmoqdek tez qaror qabul qilish, nafis strategiya va intellektual jang san'ati. Raqib harakatini oldindan sezish va aniq nishonga urish ko'nikmasi shakllanadi.",
    requirements: "Qilichbozlik himoya kostyumi, metall niqob (kaska), rapira/shpaga (zalda beriladi).",
    coaches: [
      {
        id: "c-19-1",
        name: "Gennadiy Pelxov",
        role: "Qilichbozlik bo'yicha oliy toifali ustozi",
        age: 52,
        experience: "26 yillik tajriba, Olimpiya sovrindorlari murabbiyi",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "08:30 — 10:30", label: "Tonggi shpaga maktabi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki sablya sparringi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-19-2",
        name: "Zaynab Dayibekova ustozi Ruslan Kudayev",
        role: "Xalqaro toifadagi murabbiy",
        age: 38,
        experience: "14 yillik tajriba, FIE litsenziyasi egasi",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich bolalar rapira", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Kechki yoshlar jamoasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 20,
    name: "Og‘ir atletika (shtanga)",
    category: "Gimnastika va Atletika",
    icon: "🏋️",
    badge: "Olimpiya Rekordi",
    price: "300 000 so'm / oy",
    location: "Chirchiq Olimpiya Og'ir Atletika Bazasi",
    ageLimit: "12 - 35 yosh",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&auto=format&fit=crop&q=80",
    description: "Og'ir atletika — dast ko'tarish (snatch) va siltab ko'tarish (clean & jerk) harakatlaridan iborat Olimpiya sporti. Ruslan Nurudinov va Akbar Jo'rayev kabi afsonaviy chempionlar maktabi!",
    requirements: "Shtangetka (qattiq tovonli maxsus poyabzal), atletika kamari, bintlar.",
    coaches: [
      {
        id: "c-20-1",
        name: "Bahrom Mendiboyev",
        role: "O'zbekistonda xizmat ko'rsatgan murabbiy, Olimpiya chempionlari ustozi",
        age: 48,
        experience: "23 yillik tajriba, IWF oliy toifali mutaxassis",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 22,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki pomost tayyorgarligi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki og'ir vaznlar guruhi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-20-2",
        name: "Igor Zaxarov",
        role: "Texnika va biomexanika bo'yicha murabbiy",
        age: 37,
        experience: "12 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "10:00 — 12:00", label: "Yoshlar dast ko'tarish guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Kechki siltash texnikasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 21,
    name: "Yengil atletika (yugurish, sakrash, uloqtirish)",
    category: "Gimnastika va Atletika",
    icon: "🏃",
    badge: "Sport qirolichasi",
    price: "240 000 so'm / oy",
    location: "Paxtakor Yengil Atletika Maneji",
    ageLimit: "7 - 45 yosh",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=80",
    description: "Sport qirolichasi sanalgan yengil atletika: 100m, 400m, marafon yugurish, uzunlikka va balandlikka sakrash, nayza va yadro uloqtirish. Nafas va yurak tizimini tubdan sog'lomlashtiradi.",
    requirements: "Shipovka yoki qulay yugurish krossovkasi, yengil sport kiyimi.",
    coaches: [
      {
        id: "c-21-1",
        name: "Andrey Vasilev",
        role: "Sprint va marafon bo'yicha bosh murabbiy",
        age: 46,
        experience: "21 yillik tajriba, World Athletics murabbiyi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 40,
        enrolled: 25,
        schedule: [
          { time: "07:30 — 09:30", label: "Ertalabki yugurish va chidamlilik", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki tezlik va sakrash", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-21-2",
        name: "Svetlana Radzivil ustozi Yekaterina Voronina",
        role: "Balandlikka sakrash va ko'pkurash ustozi",
        age: 39,
        experience: "15 yillik tajriba, Osiyo chempioni",
        photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 20,
        schedule: [
          { time: "09:30 — 11:30", label: "Bolalar yengil atletikasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Texnik sakrash guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 22,
    name: "Suzish",
    category: "Suv sporti",
    icon: "🏊",
    badge: "Sog'lomlashtiruvchi",
    price: "380 000 so'm / oy",
    location: "Respublika Suv Sporti Saroyi (50 metrli basseyn)",
    ageLimit: "4 - 55 yosh",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=80",
    description: "Suzish — umurtqa pog'onasi, qomatni to'g'rilash, butun tana mushaklarini birdek rivojlantirish uchun eng foydali sport. Krol, brass, chalqancha va batterflyay uslublari chuqur o'rgatiladi.",
    requirements: "Plavki/cho'milish kiyimi, suzish shapkasi, suv ko'zoynagi, shippak, tibbiy ma'lumotnoma.",
    coaches: [
      {
        id: "c-22-1",
        name: "Sergey Zaytsev",
        role: "Xalqaro suzish toifasidagi bosh trener",
        age: 44,
        experience: "19 yillik tajriba, FINA murabbiylik litsenziyasi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 26,
        schedule: [
          { time: "07:00 — 09:00", label: "Tonggi tetiklik basseyni", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki professional suzish", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:30 — 20:30", label: "Kattalar krol & brass guruhi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-22-2",
        name: "Yuliya Karimova",
        role: "Bolalar va boshlang'ich suzish ustozi",
        age: 33,
        experience: "10 yillik tajriba, Sport ustasi",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 21,
        schedule: [
          { time: "09:30 — 11:30", label: "Suvdan qo'rqmaslik & asoslar", days: "Seshanba, Payshanba, Shanba" },
          { time: "15:00 — 17:00", label: "Qomatni tiklash guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 23,
    name: "Sport gimnastikasi",
    category: "Gimnastika va Atletika",
    icon: "🤸‍♂️",
    badge: "Epchillik",
    price: "320 000 so'm / oy",
    location: "Gimnastika Federatsiyasi O'quv Markazi",
    ageLimit: "5 - 20 yosh",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    description: "Sport gimnastikasi — turnik, bruslar, ot, halqalar va tayanch sakrash snaryadlarida murakkab akrobatik harakatlar. Tananing har bir tolasini bo'ysundirish san'ati.",
    requirements: "Gimnastika trikosi, cheshkalar, magniy kukunidan foydalanish.",
    coaches: [
      {
        id: "c-23-1",
        name: "Anton Fokin",
        role: "Pekin Olimpiadasi sovrindori, Oliy toifali bosh murabbiy",
        age: 42,
        experience: "18 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 22,
        schedule: [
          { time: "08:30 — 10:30", label: "Tonggi snaryadlar mashg'uloti", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki akrobatika va sakrash", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-23-2",
        name: "Ravshan Xoliqov",
        role: "Bolalar boshlang'ich gimnastikasi ustozi",
        age: 34,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich karkas tayyorgarligi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Egiluvchanlik va muvozanat", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 24,
    name: "Badiiy gimnastika",
    category: "Gimnastika va Atletika",
    icon: "🩰",
    badge: "Nafislik",
    price: "340 000 so'm / oy",
    location: "Respublika Badiiy Gimnastika Saroyi",
    ageLimit: "4 - 18 yosh",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    description: "Badiiy gimnastika — go'zallik, musiqa, raqs, tasmalar, to'p, chambarak va bulavalarning sehrli harakati. Qiz bolalarga xos nafis qomat, moslashuvchanlik va yuksak did bag'ishlaydi.",
    requirements: "Qulay gimnastika купальниgi, yarimpaypoqlar (polucheshki), shaxsiy buyumlar.",
    coaches: [
      {
        id: "c-24-1",
        name: "Oksana Chusovitina shogirdi Tamara Shirokova",
        role: "Badiiy gimnastika bo'yicha xalqaro hakam va bosh murabbiy",
        age: 44,
        experience: "20 yillik tajriba, FIG oliy toifali mutaxassisi",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 24,
        schedule: [
          { time: "09:00 — 11:00", label: "Xoreografiya va cho'zilish", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Predmetlar bilan mashq (chambarak/tasma)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-24-2",
        name: "Lobar Muzaffarova",
        role: "Yosh iqtidorlar murabbiyi",
        age: 29,
        experience: "7 yillik amaliy tajriba, Sport ustasi",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "10:30 — 12:30", label: "Kichkintoylar dasturi (4-7 yosh)", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Musobaqa tayyorgarlik guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 25,
    name: "Shaxmat",
    category: "Intellektual",
    icon: "♟️",
    badge: "Aql jangi",
    price: "250 000 so'm / oy",
    location: "Xalqaro Shaxmat Akademiyasi (Nodirbek Abdusattorov akademiyasi)",
    ageLimit: "5 - 60 yosh",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80",
    description: "Shaxmat — O'zbekiston yoshlari Butunjahon Shaxmat Olimpiadasida g'olib chiqqan aql sporti! Strategik rejalashtirish, mantiq, sabr-toqat va o'tkir tahlil qobiliyatini yuksaltiradi.",
    requirements: "Daftar va qalam, o'quv doskasi bilan ishlash.",
    coaches: [
      {
        id: "c-25-1",
        name: "Xalqaro Grossmeyster Saidali Yo'ldoshev",
        role: "FIDE katta murabbiyi, Olimpiada chempionlari ustozi",
        age: 52,
        experience: "28 yillik tajriba, FIDE Senior Trainer",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 40,
        enrolled: 29,
        schedule: [
          { time: "09:00 — 11:00", label: "Debyut va taktika laboratoriyasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "15:00 — 17:00", label: "Endshpil va blits amaliyoti", days: "Dushanba, Chorshanba, Juma" },
          { time: "18:00 — 20:00", label: "Professional reyting guruhi (FIDE)", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-25-2",
        name: "Nodira Nodirjonova",
        role: "FIDE ustasi (WFM), Bolalar murabbiyi",
        age: 32,
        experience: "9 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich shaxmat sirlari", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:00", label: "Kombinatsiyalar yechish", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 26,
    name: "Shashka",
    category: "Intellektual",
    icon: "⚪",
    badge: "Mantiq",
    price: "200 000 so'm / oy",
    location: "Respublika Shashka Markazi",
    ageLimit: "6 - 65 yosh",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=80",
    description: "Shashka (rus va xalqaro 100 katakli shashka) — ko'p yurishli hisob-kitoblar, kombinatsiyalar va geometrik fikrlashni rivojlantiruvchi ajoyib stol o'yini.",
    requirements: "Qaydlar daftari, shashka to'plami.",
    coaches: [
      {
        id: "c-26-1",
        name: "Alisher Artikov",
        role: "Xalqaro shashka grossmeysteri, Bosh murabbiy",
        age: 49,
        experience: "24 yillik tajriba, Jahon chempionatlari g'olibi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 18,
        schedule: [
          { time: "09:30 — 11:30", label: "100 katakli xalqaro shashka", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Klassik 64 katakli shashka", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-26-2",
        name: "Zulayxo Shodiyeva",
        role: "Bolalar toifasi murabbiyi, Sport ustasi",
        age: 36,
        experience: "11 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich kombinatsiyalar", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:30 — 18:30", label: "Musobaqa strategiyasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 27,
    name: "Muz ustida xokkey",
    category: "Qishki sport",
    icon: "🏒",
    badge: "Muz jangchilari",
    price: "420 000 so'm / oy",
    location: "Humo Arena Muz Saroyi",
    ageLimit: "6 - 35 yosh",
    image: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=800&auto=format&fit=crop&q=80",
    description: "Muz ustida xokkey — muzda uchish tezligi, shaybani boshqarish epchilligi va jamoaviy qat'iyatni birlashtirgan erkaklar sporti. Humo Arena eng zamonaviy muz maydonida o'tadi.",
    requirements: "Xokkey kankisi, himoya kaskasi, qalqonlar, klyushka.",
    coaches: [
      {
        id: "c-27-1",
        name: "Yevgeniy Popixin",
        role: "Humo xokkey klubi bosh murabbiyi",
        age: 51,
        experience: "25 yillik tajriba, KHL va xalqaro tajriba",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 23,
        schedule: [
          { time: "07:30 — 09:30", label: "Tonggi muz mashg'uloti", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki taktik o'yin", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-27-2",
        name: "Timur Nazarov",
        role: "Yoshlar va bolalar ustozi",
        age: 35,
        experience: "11 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Kankida sirg'anish maktabi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Shayba urish mahorati", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 28,
    name: "Chim ustida xokkey",
    category: "To'p o'yinlari",
    icon: "🏑",
    badge: "Olimpiya",
    price: "260 000 so'm / oy",
    location: "Andijon Chim Ustida Xokkey Olimpiya Markazi",
    ageLimit: "8 - 30 yosh",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
    description: "Chim ustida xokkey — maxsus sintetik maydonda to'p va egilgan klyushka bilan o'ynaladigan an'anaviy sport turi. Tez yugurish, taktik pas berish va nishonga urish ko'nikmalari beriladi.",
    requirements: "Chim krossovkasi, klyushka, boldir qalqoni, kapa.",
    coaches: [
      {
        id: "c-28-1",
        name: "Oybek Mahmudov",
        role: "Milliy terma jamoa ustozi",
        age: 47,
        experience: "21 yillik tajriba, FIH xalqaro murabbiyi",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 34,
        enrolled: 20,
        schedule: [
          { time: "08:30 — 10:30", label: "Ertalabki o'yin taktikasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki match-trening", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-28-2",
        name: "Shahnoza Yusupova",
        role: "Qizlar jamoasi katta murabbiyi",
        age: 36,
        experience: "12 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "10:00 — 12:00", label: "Texnika va to'p nazorati", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Kechki jamoaviy guruh", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 29,
    name: "Velosport",
    category: "Gimnastika va Atletika",
    icon: "🚴",
    badge: "Tezlik & Kardiomiqiyos",
    price: "290 000 so'm / oy",
    location: "Toshkent Velotrek va Shosse Trassasi",
    ageLimit: "10 - 45 yosh",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&auto=format&fit=crop&q=80",
    description: "Velosport (shosse poygasi, velotrek, tog' velosipedi) — yurak-qon tomir tizimini kuchaytiruvchi, oyoq mushaklariga ulkan quvvat beruvchi sport. Professional velosipedlarda trassada uchish.",
    requirements: "Shaxsiy shlem (shart), veloforma, qo'lqop, velopoyabzal.",
    coaches: [
      {
        id: "c-29-1",
        name: "Vadim Shaixov",
        role: "Velosport bo'yicha xalqaro sport ustasi, UCI murabbiyi",
        age: 45,
        experience: "20 yillik tajriba, Tour de France ishtirokchisi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "07:00 — 09:30", label: "Tonggi shosse 50km poygasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:30", label: "Velotrek sprinti", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-29-2",
        name: "Olga Drobisheva",
        role: "Ayollar va o'smirlar murabbiyi",
        age: 38,
        experience: "13 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "09:00 — 11:30", label: "Kardio va chidamlilik trassasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Tog' velosipedi texnikasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 30,
    name: "Ot sporti (chovg‘on, sakrash, uloq-ko‘pkari)",
    category: "An'anaviy va Maxsus",
    icon: "🏇",
    badge: "Olijanob",
    price: "480 000 so'm / oy",
    location: "O'zbekiston Milliy Otchopar Majmuasi",
    ageLimit: "8 - 50 yosh",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
    description: "Ot sporti — qadimiy chavandozlik san'ati: to'siqlardan sakrash (konkur), ot yo'rttirish (vijezdka), chovg'on va ko'pkari mahorati. Ot bilan ruhiy uyg'unlik, qat'iyat va matonat o'rgatiladi.",
    requirements: "Chavandoz shlemi (jokeyka), egniga jilet, etik va xipchin.",
    coaches: [
      {
        id: "c-30-1",
        name: "Bahrom Gaziyev",
        role: "Konkur bo'yicha FEI xalqaro murabbiyi",
        age: 48,
        experience: "23 yillik tajriba, Federatsiya bosh instruktori",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 21,
        schedule: [
          { time: "07:30 — 09:30", label: "Ertalabki otchopar manejida", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "To'siqlardan sakrash (konkur)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-30-2",
        name: "Eldor Polvon Qodirov",
        role: "Milliy chovg'on va ko'pkari ustozi",
        age: 41,
        experience: "17 yillik chavandozlik amaliyoti",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 24,
        schedule: [
          { time: "09:00 — 11:00", label: "Boshlang'ich chavandozlik darsi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Chovg'on jamoaviy o'yini", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 31,
    name: "Kamondan otish",
    category: "Aniqlik va Nishon",
    icon: "🏹",
    badge: "Aniqlik",
    price: "290 000 so'm / oy",
    location: "Alpomish Kamondan Otish Markazi",
    ageLimit: "9 - 50 yosh",
    image: "https://images.unsplash.com/photo-1511067007772-9d299710f37e?w=800&auto=format&fit=crop&q=80",
    description: "Kamondan otish — chuqur diqqatni jamlash, nafasni boshqarish va mukammal ko'z merganligi talab qilinadigan Olimpiya sport turi. 70 metrlik nishonga o'q uzish sirlari.",
    requirements: "Sport kiyimi, kraga (qo'l himoyasi), naperstnik (barmog'lik).",
    coaches: [
      {
        id: "c-31-1",
        name: "Ziyodaxon Abdusattorova ustozi Vladimir Shiryev",
        role: "Olimpiya murabbiyi, World Archery instruktori",
        age: 50,
        experience: "24 yillik tajriba, Ko'plab chempionlar ustozi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 20,
        schedule: [
          { time: "08:30 — 10:30", label: "Tonggi diqqat va nishon", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "Kechki klassik kamon guruhi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-31-2",
        name: "Munira Akromova",
        role: "Boshlang'ich bosqich katta instruktori",
        age: 33,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "10:00 — 12:00", label: "Blokli kamon (Compound)", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Yosh merganlar maktabi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 32,
    name: "O‘q otish (to‘pponcha, miltiq)",
    category: "Aniqlik va Nishon",
    icon: "🎯",
    badge: "Merganlik",
    price: "340 000 so'm / oy",
    location: "Vatanparvar Markaziy O'q Otish Tiri",
    ageLimit: "12 - 50 yosh",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&auto=format&fit=crop&q=80",
    description: "Sportcha o'q otish (pnevmatik to'pponcha va miltiq) — temir asablar, yurak urishini boshqarish va mutlaq aniqlik san'ati. ISSF xalqaro qoidalari asosida 10m, 25m va 50m masofalarda o'qitiladi.",
    requirements: "Sport ko'zoynagi, quloqchinlar (zalda beriladi), sport kiyimi.",
    coaches: [
      {
        id: "c-32-1",
        name: "Vadim Skorovarov",
        role: "Olimpiya o'q otish bo'yicha bosh murabbiy",
        age: 49,
        experience: "25 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "09:00 — 11:00", label: "Pnevmatik to'pponcha (10m)", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Sport miltig'i guruhi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-32-2",
        name: "Sitora Ergashova",
        role: "Ayollar va o'smirlar ustozi",
        age: 35,
        experience: "11 yillik tajriba, ISSF litsenziyali instruktor",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:30 — 12:30", label: "Nafas va mo'ljal texnikasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Kechki merganlik tiri", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 33,
    name: "Qoyaga chiqish (skalolazanie)",
    category: "Ekstremal va Texnik",
    icon: "🧗",
    badge: "Jasorat",
    price: "310 000 so'm / oy",
    location: "Chimyon Climbing Skalodromi",
    ageLimit: "7 - 45 yosh",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop&q=80",
    description: "Qoyaga chiqish (Bouldering, Lead climbing, Tezlikka ko'tarilish) — barmoq kuchi, umumiy chidamlilik va fazoviy fikrlashni rivojlantiruvchi ajoyib ekstremal sport turi.",
    requirements: "Skalnik (maxsus poyabzal), obvyazka (straxovka belbog'i), magniy qopchasi.",
    coaches: [
      {
        id: "c-33-1",
        name: "Dmitriy Sorokin",
        role: "Alpinizm va skalolazanie bo'yicha katta murabbiy",
        age: 43,
        experience: "18 yillik tog' va zal tajribasi, IFSC sertifikati",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 20,
        schedule: [
          { time: "08:30 — 10:30", label: "Bouldering texnikasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "15 metrli devorda straxovka", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-33-2",
        name: "Kamila Yusupova",
        role: "Bolalar skalolazanie instruktori",
        age: 31,
        experience: "8 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Yosh toqqa chiquvchilar", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:30 — 18:30", label: "Tezlikka ko'tarilish (Speed)", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 34,
    name: "Tog‘ chang‘isi",
    category: "Qishki sport",
    icon: "⛷️",
    badge: "Adrenalin",
    price: "450 000 so'm / oy",
    location: "Amirsoy & Bildirsoy Tog' Chang'i Kurorti",
    ageLimit: "6 - 55 yosh",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&auto=format&fit=crop&q=80",
    description: "Tog' chang'isi — tog' cho'qqilaridan qor qoplangan trassalar bo'ylab shamoldek uchish zavqi. Slalom, gigant-slalom va erkin tushish uslublari zamonaviy Amirsoy majmuasida o'rgatiladi.",
    requirements: "Tog' chang'isi, chang'i etigi, kaska, qor ko'zoynagi, chang'i kostyumi.",
    coaches: [
      {
        id: "c-34-1",
        name: "Komiljon To'xtayev",
        role: "Olimpiada ishtirokchisi, Bosh tog' chang'i ustozi",
        age: 38,
        experience: "15 yillik tajriba, FIS xalqaro toifasi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 22,
        schedule: [
          { time: "09:00 — 12:00", label: "Tog' trassasida intensiv uchish", days: "Dushanba, Chorshanba, Juma" },
          { time: "13:30 — 16:30", label: "Slalom va burilish texnikasi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-34-2",
        name: "Alena Belova",
        role: "Boshlang'ich instruktor, FIS sertifikatlangan",
        age: 32,
        experience: "9 yillik tog' amaliyoti",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "10:00 — 13:00", label: "Bolalar va yangi boshlovchilar", days: "Seshanba, Payshanba, Shanba" },
          { time: "14:00 — 17:00", label: "Kattalar erkin uchish guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 35,
    name: "Snoubord",
    category: "Qishki sport",
    icon: "🏂",
    badge: "Frirayd",
    price: "430 000 so'm / oy",
    location: "Amirsoy Snoubord Parki",
    ageLimit: "8 - 40 yosh",
    image: "https://images.unsplash.com/photo-1523743566413-a04ac16b742f?w=800&auto=format&fit=crop&q=80",
    description: "Snoubord — qorda bitta taxtada to'liq erkinlik va tryuklar namoyishi. Muvozanat, karving va tramplindan sakrash (freestyle) mahoratini egallang.",
    requirements: "Snoubord doskasi, botinkalar, shlem, himoya shortiklari va ko'zoynak.",
    coaches: [
      {
        id: "c-35-1",
        name: "Maksim Romanov",
        role: "Frirayd va sloupstayl bo'yicha katta instruktor",
        age: 36,
        experience: "13 yillik tajriba, WSF xalqaro murabbiyi",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 21,
        schedule: [
          { time: "09:30 — 12:30", label: "Karving va qor nazorati", days: "Dushanba, Chorshanba, Juma" },
          { time: "14:00 — 17:00", label: "Snoubord parki tryuklari", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-35-2",
        name: "Dildora Qosimova",
        role: "Qizlar va o'smirlar snoubord ustozi",
        age: 29,
        experience: "7 yillik amaliyot",
        photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:00 — 13:00", label: "Boshlang'ich muvozanat", days: "Seshanba, Payshanba, Shanba" },
          { time: "14:30 — 17:30", label: "Frirayd tajribasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 36,
    name: "Figurali uchish",
    category: "Qishki sport",
    icon: "⛸️",
    badge: "Muz san'ati",
    price: "390 000 so'm / oy",
    location: "Humo Arena Kichik Muz Zali",
    ageLimit: "4 - 25 yosh",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
    description: "Figurali uchish — muz ustidagi nafis balet, akrobatik sakrashlar (aksell, tulupp, rittberger) va ajoyib musiqa uyg'unligi. Chiroyli qaddi-qomat va yuksak plastikani tarbiyalaydi.",
    requirements: "Figurali konkilar, issiq elastik libos, qo'lqop va tizzalik.",
    coaches: [
      {
        id: "c-36-1",
        name: "Anastasiya Gimazetdinova",
        role: "Olimpiada ishtirokchisi, Bosh murabbiy",
        age: 44,
        experience: "22 yillik tajriba, Xalqaro toifadagi sport ustasi",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 25,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi muz sakrashlari", days: "Dushanba, Chorshanba, Juma" },
          { time: "15:30 — 17:30", label: "Xoreografiya va muz raqsi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-36-2",
        name: "Marina Sultonova",
        role: "Kichik yoshdagilar murabbiyi",
        age: 33,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Muzda birinchi qadamlar (4-8 yosh)", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:30 — 18:30", label: "Aylanishlar va spirallar", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 37,
    name: "Biatlon",
    category: "Qishki sport",
    icon: "🎯",
    badge: "Chidamlilik & Nishon",
    price: "360 000 so'm / oy",
    location: "Respublika Qishki Sport Turlari Bazasi",
    ageLimit: "11 - 30 yosh",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&auto=format&fit=crop&q=80",
    description: "Biatlon — chang'ida yuqori tezlikda poyga va merganlik bilan nishonga o'q otish sintezi. Yuqori puls va zo'riqish paytida mukammal sokinlikni saqlab o'q uzish mahorati rivojlanadi.",
    requirements: "Poyga chang'ilari, tayoqlar, qishki kombinezon, pnevmatik miltiq (zalda beriladi).",
    coaches: [
      {
        id: "c-37-1",
        name: "Viktor Petrov",
        role: "Biatlon bo'yicha milliy terma jamoa ustozi",
        age: 50,
        experience: "25 yillik tajriba, IBU xalqaro murabbiyi",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "08:30 — 11:00", label: "Chang'i poygasi va otish tiri", days: "Dushanba, Chorshanba, Juma" },
          { time: "15:00 — 17:30", label: "Kechki nishon mashqlari", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-37-2",
        name: "Sardor Ahmedov",
        role: "Yoshlar biatloni murabbiyi",
        age: 36,
        experience: "11 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "09:30 — 12:00", label: "Rolikli chang'i & otish (yozgi rejim)", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:00 — 18:30", label: "Nafasni rostlash texnikasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 38,
    name: "Regbi",
    category: "To'p o'yinlari",
    icon: "🏉",
    badge: "Matonat",
    price: "270 000 so'm / oy",
    location: "Milliy Universitet Regbi Stadioni",
    ageLimit: "12 - 35 yosh",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80",
    description: "Regbi (Regbi-7 va Regbi-15) — jasorat, haqiqiy erkaklar kuchi, jipslik va taktik tezlik sporti. Raqibni ushlab to'xtatish (takkle) va tuxumsimon to'pni olib o'tish mahorati o'rgatiladi.",
    requirements: "Regbi butsilari, himoya shlemi (ixtiyoriy), kapa, chidamli sport formasi.",
    coaches: [
      {
        id: "c-38-1",
        name: "Dmitriy Kulyov",
        role: "O'zbekiston Regbi terma jamoasi bosh murabbiyi",
        age: 46,
        experience: "21 yillik tajriba, World Rugby Educator",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi kuch va pas uzatish", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki Regbi-7 matchi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-38-2",
        name: "Bekzod Umarov",
        role: "O'smirlar regbisi instruktori",
        age: 34,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich kontaktsiz tegragbi", days: "Seshanba, Payshanba, Shanba" },
          { time: "16:30 — 18:30", label: "Kechki himoya va hujum", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 39,
    name: "Beysbol",
    category: "To'p o'yinlari",
    icon: "⚾",
    badge: "Strategiya",
    price: "260 000 so'm / oy",
    location: "Toshkent Beysbol va Softbol Maydoni",
    ageLimit: "9 - 30 yosh",
    image: "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=800&auto=format&fit=crop&q=80",
    description: "Beysbol — bita bilan to'pni uzoqqa urish, tez yugurib bazalarni egallash va jamoaviy himoyalanish san'ati. Reaksiya tezligi, ko'z va qo'l koordinatsiyasini yuksaltiradi.",
    requirements: "Beysbol lovushkasi (qo'lqop), bita, krossovka, kepka.",
    coaches: [
      {
        id: "c-39-1",
        name: "Shuxrat G'ulomov",
        role: "Beysbol bo'yicha bosh murabbiy, Sport ustasi",
        age: 44,
        experience: "18 yillik tajriba, WBSC sertifikatlangan",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "08:30 — 10:30", label: "Pitting va uloqtirish mahorati", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Biting (to'p urish) amaliyoti", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-39-2",
        name: "Nodir Salimov",
        role: "Yoshlar guruhi instruktori",
        age: 33,
        experience: "9 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:00 — 12:00", label: "Bolalar softbol va beysbol", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Bazalar aro yugurish mashqi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 40,
    name: "Kriket",
    category: "To'p o'yinlari",
    icon: "🏏",
    badge: "An'ana",
    price: "250 000 so'm / oy",
    location: "O'zbekiston Kriket Federatsiyasi Maydoni",
    ageLimit: "10 - 35 yosh",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80",
    description: "Kriket — dunyodagi eng qadriyatli va tomoshabini ko'p o'yinlardan biri. Bouling (to'p tashlash), betting (urish) va filding (to'pni ilib olish) texnikalari chuqur o'rgatiladi.",
    requirements: "Kriket formasi, kriket bitasi, himoya qalqonlari.",
    coaches: [
      {
        id: "c-40-1",
        name: "Fazliddin Xo'jayev",
        role: "Kriket federatsiyasi bosh murabbiyi",
        age: 42,
        experience: "16 yillik tajriba, ICC Level 2 instruktori",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 18,
        schedule: [
          { time: "08:00 — 10:00", label: "Ertalabki pitch mashqlari", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:00", label: "T20 formatdagi match", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-40-2",
        name: "Artyom Lee",
        role: "Yoshlar toifasi instruktori",
        age: 31,
        experience: "7 yillik amaliyot",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 14,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich to'p tashlash", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Kriket taktikasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 41,
    name: "Golf",
    category: "Aniqlik va Nishon",
    icon: "⛳",
    badge: "Premial",
    price: "600 000 so'm / oy",
    location: "Toshkent Ko'llari Golf Klubi (18 teshikli maydon)",
    ageLimit: "8 - 65 yosh",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&auto=format&fit=crop&q=80",
    description: "Golf — sof tabiat qo'ynida xotirjamlik, strategik fikrlash va nozik zarba nazorati. Sving zarbasi, pating va turli klyushkalardan (Drayver, Ayrn, Vedj) foydalanish o'rgatiladi.",
    requirements: "Golf poyabzali, polo futbolka, golf qo'lqopi (klyushkalar klubda taqdim etiladi).",
    coaches: [
      {
        id: "c-41-1",
        name: "Robert Smit",
        role: "PGA sertifikatlangan bosh golf professionallari",
        age: 47,
        experience: "22 yillik xalqaro tajriba, PGA Pro litsenziyasi",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 21,
        schedule: [
          { time: "08:00 — 10:30", label: "Tonggi Drayving Reyndj (Sving)", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:30", label: "Kechki 9 teshikli maydon safari", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-41-2",
        name: "Jasur Mirahmedov",
        role: "Yoshlar va boshlang'ich instruktor",
        age: 34,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "10:00 — 12:30", label: "Pating va qisqa zarbalar", days: "Seshanba, Payshanba, Shanba" },
          { time: "15:30 — 18:00", label: "Havaskorlar golf darsi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 42,
    name: "Bilyard",
    category: "Aniqlik va Nishon",
    icon: "🎱",
    badge: "Geometriya & Aniqlik",
    price: "280 000 so'm / oy",
    location: "Piramida Bilyard Sport Klubi",
    ageLimit: "10 - 60 yosh",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=800&auto=format&fit=crop&q=80",
    description: "Bilyard (Rus piramidasi, Snuker, Pul) — yuksak ko'z geometriyasi, sharlarning aylanish kuchi va ruhiy xotirjamlik o'yini. Qiyin pozitsiyalardan chiqish va snuker qo'yish mahorati.",
    requirements: "Qulay poyabzal, shaxsiy kiy (zalda ham beriladi), bo'r.",
    coaches: [
      {
        id: "c-42-1",
        name: "Kamoliddin Madaminov",
        role: "Rus piramidasi bo'yicha Jahon chempionati sovrindori",
        age: 41,
        experience: "17 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 22,
        schedule: [
          { time: "09:30 — 11:30", label: "Erkin piramida va vintlar", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki professional partiyalar", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-42-2",
        name: "Artur Xachaturyan",
        role: "Snuker va Pul bo'yicha bosh instruktor",
        age: 36,
        experience: "12 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "11:00 — 13:00", label: "Snuker breyk yasash sirlari", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kattalar bilyard to'garagi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 43,
    name: "Bouling",
    category: "Aniqlik va Nishon",
    icon: "🎳",
    badge: "Strayk",
    price: "270 000 so'm / oy",
    location: "Galaxy Bowling Sport Majmuasi",
    ageLimit: "8 - 55 yosh",
    image: "https://images.unsplash.com/photo-1538388149542-5e24932d11a8?w=800&auto=format&fit=crop&q=80",
    description: "Bouling — og'ir sharni maxsus yo'lkada to'g'ri tashlab barcha keglilarni yiqitish (Strike!). Qadam tashlash ritmi, barmoq kuchi va nishonga urish texnikasi o'rgatiladi.",
    requirements: "Maxsus bouling poyabzali (zalda mavjud), yengil sport kiyimi.",
    coaches: [
      {
        id: "c-43-1",
        name: "Bahodir Mirqosimov",
        role: "Bouling bo'yicha O'zbekiston terma jamoasi a'zosi murabbiyi",
        age: 43,
        experience: "16 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 19,
        schedule: [
          { time: "09:00 — 11:00", label: "Xuk (buralma) tashlash texnikasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki turnir tayyorgarligi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-43-2",
        name: "Svetlana Pak",
        role: "Bolalar va havaskorlar instruktori",
        age: 32,
        experience: "8 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:30 — 12:30", label: "Boshlang'ich to'g'ri tashlash", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Oila va havaskorlar ligasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 44,
    name: "Darts",
    category: "Aniqlik va Nishon",
    icon: "🎯",
    badge: "180 ball",
    price: "180 000 so'm / oy",
    location: "Target Darts Sport Klubi",
    ageLimit: "9 - 65 yosh",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&auto=format&fit=crop&q=80",
    description: "Darts (501, Kriket) — nishon markaziga (Bullseye) va uch karra 20 (Triple 20) sektorlariga kichik qanotli o'qchalarni aniq uloqtirish sporti. Qat'iy qo'l, ajoyib matematika va diqqatni shakllantiradi.",
    requirements: "Shaxsiy darts dori (o'qlari), qulay kiyim.",
    coaches: [
      {
        id: "c-44-1",
        name: "Iskandar Rahimov",
        role: "Darts bo'yicha respublika chempioni murabbiyi",
        age: 45,
        experience: "15 yillik tajriba, WDF xalqaro a'zosi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "09:30 — 11:30", label: "Standart 501 o'yini hisobi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki chekout (yopish) darsi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-44-2",
        name: "Dilnoza Olimova",
        role: "Boshlang'ich o'rgatuvchi instruktor",
        age: 30,
        experience: "6 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 14,
        schedule: [
          { time: "11:00 — 13:00", label: "Nishonga uloqtirish ergonomikasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Turnir amaliyoti", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 45,
    name: "Eshkak eshish",
    category: "Suv sporti",
    icon: "🚣",
    badge: "Qudrat & Suv",
    price: "310 000 so'm / oy",
    location: "Samarqand Eshkak Eshish Kanali & Chorvoq Bazasi",
    ageLimit: "10 - 35 yosh",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
    description: "Akademik eshkak eshish, baydarka va kanoe — suvdagi shiddatli poyga. Butun yelka, bel va oyoq mushaklariga ulkan kuch beruvchi, nafas tizimini kengaytiruvchi Olimpiya sporti.",
    requirements: "Qutqaruv nimchasi (zalda beriladi), suv o'tkazmaydigan sport kiyimi, shippak.",
    coaches: [
      {
        id: "c-45-1",
        name: "Vadim Menkov ustozi Aleksandr Dyadkov",
        role: "Kanoe bo'yicha 2 karra Jahon chempioni murabbiyi",
        age: 51,
        experience: "26 yillik tajriba, O'zbekistonda xizmat ko'rsatgan murabbiy",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 22,
        schedule: [
          { time: "07:00 — 09:30", label: "Tonggi suv sathi poygasi", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 18:30", label: "Kechki quvvat va sinxron eshkak", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-45-2",
        name: "Yulduz Normatova",
        role: "Baydarka bo'yicha yoshlar murabbiyi",
        age: 35,
        experience: "12 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 17,
        schedule: [
          { time: "09:00 — 11:30", label: "Akademik eshkak boshlang'ich sinfi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Kanalda tezlikka chiqish", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 46,
    name: "Suv polosi",
    category: "Suv sporti",
    icon: "🤽",
    badge: "Suvdagi to'p",
    price: "320 000 so'm / oy",
    location: "Olimpiya Suv Havzasi Suv Polosi Bo'limi",
    ageLimit: "9 - 30 yosh",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=80",
    description: "Suv polosi — chuqur suvda to'xtovsiz suzib turgan holda to'pni darvozaga kiritish san'ati. G'oyat yuksak chidamlilik, qudratli otish kuchi va jamoaviy birdamlik maktabi.",
    requirements: "Maxsus quloq himoyali suv shapochkasi, suzish kiyimi.",
    coaches: [
      {
        id: "c-46-1",
        name: "Dmitriy Romanov",
        role: "Suv polosi terma jamoasi ustozi",
        age: 46,
        experience: "21 yillik tajriba, Xalqaro sport ustasi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 34,
        enrolled: 21,
        schedule: [
          { time: "08:00 — 10:00", label: "Suvda turish va to'p uzatish", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki taktik o'yin matchi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-46-2",
        name: "Sanjar Bekov",
        role: "Yoshlar guruhi treneri",
        age: 33,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "10:00 — 12:00", label: "Suzish va darvozani qo'riqlash", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Hujum kombinatsiyalari", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 47,
    name: "Armrestling (qo‘l kuchi)",
    category: "Jang san'ati",
    icon: "💪",
    badge: "Po'lat bilak",
    price: "240 000 so'm / oy",
    location: "Titan Armwrestling Zali",
    ageLimit: "12 - 50 yosh",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
    description: "Armrestling — maxsus stolda qo'l kuchini sinash sporti. Bilak, barmoqlar, tirsak boylamlari va yelka mushaklarini temirdek mustahkam qilish, 'top-roll' va 'hook' usullari o'rgatiladi.",
    requirements: "Sport kiyimi, bilak binti (namotka), elastik trenajyorlar bilan ishlash.",
    coaches: [
      {
        id: "c-47-1",
        name: "Farxod Saidov",
        role: "Armrestling bo'yicha ko'p karra Osiyo chempioni murabbiyi",
        age: 42,
        experience: "17 yillik tajriba, WAF xalqaro hakami",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 23,
        schedule: [
          { time: "09:00 — 11:00", label: "Bilak va boylamlarni kuchaytirish", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:30 — 19:30", label: "Stolda sparring va texnika", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-47-2",
        name: "Jasur Qahhorov",
        role: "Sport ustasi, Yoshlar murabbiyi",
        age: 31,
        experience: "8 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "11:00 — 13:00", label: "Boshlang'ich bilak kuchaytirgich", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kattalar kuchi guruhi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 48,
    name: "Pauerlifting",
    category: "Gimnastika va Atletika",
    icon: "🏋️‍♂️",
    badge: "Uchkurash kuchi",
    price: "290 000 so'm / oy",
    location: "Power Pro Kuch Majmuasi",
    ageLimit: "14 - 55 yosh",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&auto=format&fit=crop&q=80",
    description: "Pauerlifting — kuch uchkurashi: Prised (cho'qqayish), Jim lejba (yotib shtanga ko'tarish) va Stanovaya tyaga (yerdan ko'tarish). Inson gavdasining maksimal kuch imkoniyatlarini ochadi.",
    requirements: "Qattiq atletika kamari, shtangetka, tizza bintlari, magniy.",
    coaches: [
      {
        id: "c-48-1",
        name: "Sergey Mixaylov",
        role: "IPF xalqaro toifadagi bosh murabbiy, 3 karra chempion",
        age: 45,
        experience: "20 yillik tajriba, Rekordchilar ustozi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 24,
        schedule: [
          { time: "08:30 — 10:30", label: "Cho'qqayish (Squat) og'ir kuni", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Yotib siqish (Bench Press)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-48-2",
        name: "Rustam Davronov",
        role: "Tyaga va jismoniy tayyorgarlik ustozi",
        age: 35,
        experience: "11 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "10:00 — 12:00", label: "Stanovaya tyaga texnikasi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Kattalar quvvati kursi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 49,
    name: "Bodibilding",
    category: "Gimnastika va Atletika",
    icon: "💪",
    badge: "Ideal qomat",
    price: "320 000 so'm / oy",
    location: "Olympia Fitness & Bodybuilding Saroyi",
    ageLimit: "14 - 60 yosh",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
    description: "Bodibilding va Fitnes — mushaklar relyefi, mutanosib go'zal tana, to'g'ri sport ovqatlanishi va yoshartiruvchi kuch mashqlari. Professional individual yondashuv bilan shakllantirish.",
    requirements: "Trenajyor zaliga mos krossovka, qulay kiyim, shaxsiy sochiq, suv idishi.",
    coaches: [
      {
        id: "c-49-1",
        name: "Aleksandr Saxarov",
        role: "IFBB Pro murabbiyi, Janob O'zbekiston unvoni sohibi",
        age: 43,
        experience: "19 yillik tajriba, Ratsion va tayyorgarlik eksperti",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 36,
        enrolled: 27,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi relyef va gipertrofiya", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Kechki mass-nabir mashg'uloti", days: "Dushanba, Chorshanba, Juma" },
          { time: "19:00 — 21:00", label: "Erkaklar va ayollar pro-fitnes", days: "Seshanba, Payshanba, Shanba" }
        ]
      },
      {
        id: "c-49-2",
        name: "Yelena Vlasova",
        role: "Bikini Fitness va qomatni to'g'rilash ustozi",
        age: 33,
        experience: "9 yillik tajriba, IFBB sertifikatlangan instruktor",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 20,
        schedule: [
          { time: "10:00 — 12:00", label: "Ayollar fitnes va go'zal qomat", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:30 — 19:30", label: "Metabolizm va quritish (sushka)", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 50,
    name: "Avtosport (Formula 1, ralli)",
    category: "Ekstremal va Texnik",
    icon: "🏎️",
    badge: "Super tezlik",
    price: "750 000 so'm / oy",
    location: "Toshkent Poyga Halqasi (Karting & Ralli Trassasi)",
    ageLimit: "10 - 45 yosh",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80",
    description: "Avtosport (Karting, Ralli, Halqa poygasi) — traektoriyani to'g'ri tanlash, tezlikda burilish (apeks), mashinani boshqarish va ekstremal vaziyatlarda sovuqqon qaror qabul qilish mahorati.",
    requirements: "Poyga kombinezoni, FIA shlemi, poyga qo'lqopi (klubda taqdim etiladi).",
    coaches: [
      {
        id: "c-50-1",
        name: "Oleg Galaktionov",
        role: "Ralli va halqa poygalari bo'yicha xalqaro sport ustasi",
        age: 46,
        experience: "22 yillik professional poyga va murabbiylik amaliyoti",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 22,
        schedule: [
          { time: "09:00 — 12:00", label: "Trassa telemetriyasi va apeks nazorati", days: "Dushanba, Chorshanba, Juma" },
          { time: "14:30 — 17:30", label: "Karting poygasi va tezlik darsi", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-50-2",
        name: "Azizbek Fayziyev",
        role: "Sim-reysing va yoshlar kartingi ustozi",
        age: 32,
        experience: "10 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 13:00", label: "Boshlang'ich bolalar kartingi", days: "Seshanba, Payshanba, Shanba" },
          { time: "15:00 — 18:00", label: "Ekstremal boshqaruv kursi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 51,
    name: "Motosport",
    category: "Ekstremal va Texnik",
    icon: "🏍️",
    badge: "Adrenalin",
    price: "680 000 so'm / oy",
    location: "Motokross & Shosse-Halqa Moto Bazasi",
    ageLimit: "12 - 40 yosh",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",
    description: "Motosport (Motokross, Enduro, Shosse motopoygasi) — ikki g'ildirakda aqlbovar qilmas tezlik, to'siqlardan sakrash va mototsiklni tananing bir bo'lagidek his qilish san'ati.",
    requirements: "Moto-shlem (integral), toshbaqa (cherpaha) himoyasi, moto-botinka, tizzalik.",
    coaches: [
      {
        id: "c-51-1",
        name: "Ilya Danilov",
        role: "Motokross bo'yicha ko'p karra chempion, Bosh murabbiy",
        age: 44,
        experience: "20 yillik tajriba, FIM litsenziyasi egasi",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 20,
        schedule: [
          { time: "08:30 — 11:30", label: "Qum va tramplinlarda motokross", days: "Dushanba, Chorshanba, Juma" },
          { time: "15:00 — 18:00", label: "Trekda mototsikl burchagi nazorati", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-51-2",
        name: "Rustam Ahmedov",
        role: "Enduro va boshlang'ich moto-maktab instruktori",
        age: 35,
        experience: "11 yillik tajriba",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 16,
        schedule: [
          { time: "09:30 — 12:30", label: "Muvozanat va tormozlash asoslari", days: "Seshanba, Payshanba, Shanba" },
          { time: "14:30 — 17:30", label: "Tog' so'qmoqlarida enduro", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 52,
    name: "Skeytbording",
    category: "Ekstremal va Texnik",
    icon: "🛹",
    badge: "Olimpiya & Ko'cha",
    price: "250 000 so'm / oy",
    location: "Toshkent Zamonaviy Skeyt Parki",
    ageLimit: "7 - 30 yosh",
    image: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&auto=format&fit=crop&q=80",
    description: "Skeytbording (Street va Park) — doska ustida oliy sakrashlar (Ollie), aylanmalar (Kickflip, Heelflip) va reylslarda sirpanish san'ati. Tokio Olimpiadasidan buyon rasmiy Olimpiya sporti!",
    requirements: "Skeytbord doskasi, tizzalik, tirsaklik, shlem, tekis poyabzal (vans/skate shoe).",
    coaches: [
      {
        id: "c-52-1",
        name: "Kirill Vorobyov",
        role: "Skeytbording federatsiyasi bosh instruktori",
        age: 33,
        experience: "12 yillik tajriba, Xalqaro skeyt musobaqalari hakami",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 19,
        schedule: [
          { time: "09:00 — 11:00", label: "Ollie va muvozanat asoslari", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:30 — 18:30", label: "Rampa va kosa (bowl)da uchish", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-52-2",
        name: "Jasur Komilov",
        role: "Street-skate murabbiyi",
        age: 28,
        experience: "8 yillik amaliyot",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 15,
        schedule: [
          { time: "10:30 — 12:30", label: "Bolalar skeyt guruhi", days: "Seshanba, Payshanba, Shanba" },
          { time: "17:00 — 19:00", label: "Murakkab tryuklar va fliplar", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 53,
    name: "Vorkaut (turnik, brus)",
    category: "Gimnastika va Atletika",
    icon: "🤸",
    badge: "Ko'cha kuchi",
    price: "200 000 so'm / oy",
    location: "Street Workout Milliy Park Maydoni",
    ageLimit: "10 - 45 yosh",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    description: "Vorkaut (Street Workout & Calisthenics) — o'z tanasining og'irligi bilan turnik, brus va polda fantastik elementlar (Front Lever, Planche, Muscle-up) bajarish san'ati. Tabiiy kuch va temir mushaklar.",
    requirements: "Qulay sport kiyimi, qo'lqoplar yoki lentalar (lyamka), magniy.",
    coaches: [
      {
        id: "c-53-1",
        name: "Islom Farmonov",
        role: "Vorkaut bo'yicha Jahon chempionati sovrindori murabbiyi",
        age: 35,
        experience: "12 yillik tajriba, Calisthenics master",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 24,
        schedule: [
          { time: "08:00 — 10:00", label: "Tonggi baza: tortilish va otjimaniye", days: "Dushanba, Chorshanba, Juma" },
          { time: "17:00 — 19:00", label: "Kechki statik elementlar (Plansh, Gorizont)", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-53-2",
        name: "Doniyor Shokirov",
        role: "Dinamik elementlar va erkin sakrashlar ustozi",
        age: 29,
        experience: "7 yillik murabbiylik tajribasi",
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
        capacity: 30,
        enrolled: 18,
        schedule: [
          { time: "10:00 — 12:00", label: "Boshlang'ich karkas va yelka kuchi", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 20:00", label: "Turnikda 360 va reaktiv sakrashlar", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  },
  {
    id: 54,
    name: "Kibersport",
    category: "Intellektual",
    icon: "🎮",
    badge: "Raqamli sport",
    price: "300 000 so'm / oy",
    location: "Cyberspace Arena Cyber Academy",
    ageLimit: "12 - 30 yosh",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    description: "Kibersport (Dota 2, CS2, PUBG Mobile, Valorant, FC25) — millionlab muxlislarga ega zamonaviy sport. Mikro-nazorat, jamoaviy kommunikatsiya, taktik fikrlash, reflekslar va psixologik chidamlilik tarbiyalanadi.",
    requirements: "Shaxsiy quloqchin va sichqoncha (xohishga ko'ra), kibersport arenasi 360Hz monitorlari bilan to'liq jihozlangan.",
    coaches: [
      {
        id: "c-54-1",
        name: "Sanjar 'SANJI' Quliyev",
        role: "CS Major chempionati sobiq qatnashchisi, Bosh taktik murabbiy",
        age: 31,
        experience: "10 yillik pro-kibersport faoliyati, Valve litsenziyasi",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        capacity: 35,
        enrolled: 25,
        schedule: [
          { time: "10:00 — 13:00", label: "CS2 & Valorant taktik sprey va xaritalar", days: "Dushanba, Chorshanba, Juma" },
          { time: "16:00 — 19:00", label: "Dota 2 makro-taktika va drafting", days: "Dushanba, Chorshanba, Juma" }
        ]
      },
      {
        id: "c-54-2",
        name: "Temur 'M1racle' Yusupov",
        role: "Mobil kibersport va FC25 bosh instruktori",
        age: 28,
        experience: "7 yillik tahliliy tajriba",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        capacity: 32,
        enrolled: 20,
        schedule: [
          { time: "13:30 — 16:30", label: "PUBG Mobile zonalarni o'qish", days: "Seshanba, Payshanba, Shanba" },
          { time: "18:00 — 21:00", label: "FC25 kibersport ligasi", days: "Seshanba, Payshanba, Shanba" }
        ]
      }
    ]
  }
];

// Sport toifalari ro'yxati
const CATEGORIES = [
  "Barchasi",
  "To'p o'yinlari",
  "Jang san'ati",
  "Gimnastika va Atletika",
  "Suv sporti",
  "Qishki sport",
  "Aniqlik va Nishon",
  "Ekstremal va Texnik",
  "Intellektual",
  "An'anaviy va Maxsus"
];
