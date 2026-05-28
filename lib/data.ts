export type Person = {
  name: string;
  role: string;
  education?: string[];
  research?: string;
  focus?: string;
  funding?: string;
  email?: string;
  scholar?: boolean;
  github?: string;
  note?: string;
  accent: string;
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/people", label: "People" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/activities", label: "Activities" },
];

export const LAB = {
  acronym: "CAT-DID",
  full: "Climate, Air Pollution, Trends in Disease Interactions and Dynamics",
  affiliation: "Department of Physics, Faculty of Science, Naresuan University",
  tagline:
    "Understanding how climate and air pollution shape infectious disease interactions, transmission dynamics, and air-quality risks.",
  approach:
    "We combine epidemiological and environmental data with statistical models, machine-learning techniques, and compartmental models (SIR / SEIR) to understand disease outbreaks and predict air-pollution levels.",
  goal: "We translate complex patterns into clear, actionable insight for public health agencies, policymakers, and communities.",
};

const palette = ["lavender", "mint", "sky", "blush", "peach", "butter"];
export const accentFor = (i: number) => palette[i % palette.length];

export const STAFF: Person[] = [
  {
    name: "Assoc. Prof. Dr. Sudarat Chadsuthi",
    role: "Associate Professor · Principal Investigator",
    education: [
      "B.Sc. Physics, Chiang Mai University",
      "M.Sc. Physics, Mahidol University",
      "Ph.D. Physics, Mahidol University",
    ],
    research:
      "Infectious disease dynamics, computational biophysics, climate-sensitive infectious diseases, machine learning and deep learning.",
    email: "sudaratc@nu.ac.th",
    scholar: true,
    accent: "lavender",
  },
  {
    name: "Asst. Prof. Dr. Sarunya Thiphom",
    role: "Assistant Professor",
    education: [
      "B.Sc. Biology, Chiang Mai University",
      "Higher Vocational Certificate in Education",
      "Ph.D. Environmental Science, Chiang Mai University",
    ],
    research:
      "Toxicology, biomarkers, enzyme purification for pesticide-exposure assessment, immunoassay, monoclonal & polyclonal antibody production, climate change and air pollution.",
    email: "sthiphom@gmail.com",
    scholar: true,
    accent: "mint",
  },
  {
    name: "Dr. Suparinthon Anupong",
    role: "Researcher",
    education: [
      "B.Sc. Chemistry, Mahidol University",
      "Ph.D. Chemical Physics, Mahidol University",
    ],
    research:
      "Climate change and air pollution, AI for chemical analysis, nonlinear chemical dynamics, infectious disease dynamics.",
    email: "suparinthona@nu.ac.th",
    scholar: true,
    accent: "sky",
  },
];

export const STUDENTS: Person[] = [
  {
    name: "Pakorn Lonlab",
    role: "Master's Student, Physics",
    funding: "DPST Scholarship Recipient",
    focus:
      "Computational modeling, network simulations, and machine learning for physical systems.",
    email: "pkkh.lonlab@gmail.com",
    accent: "blush",
  },
  {
    name: "Thiraphat Thongngamdi",
    role: "Master's Student, Physics",
    funding: "DPST Scholarship Recipient",
    education: [
      "B.Sc. Physics, Naresuan University",
      "M.Sc. Physics, Naresuan University",
    ],
    focus:
      "Network-based infectious disease models using origin–destination matrices. Former intern, Laboratory of Quantum Information Science.",
    email: "thiraphat.trp68@gmail.com",
    accent: "peach",
  },
  {
    name: "Narathip Sriyamwong",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    funding: "DPST Scholarship Recipient",
    focus:
      "Physical and statistical aspects of climate and air pollution — environmental statistics, data analysis, atmospheric science.",
    email: "narathipssri@gmail.com",
    accent: "butter",
  },
  {
    name: "Sawitta Adiphasakun",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    focus:
      "Epidemiological modeling and computer simulations. Skills: R, C++, SIR/SEIR models.",
    github: "https://github.com/MamamuuR1zz/HFMD-SEIR-Model",
    email: "sawittaa66@nu.ac.th",
    accent: "lavender",
  },
  {
    name: "Thanatchaporn Nakthang",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    focus:
      "Seasonal dynamics of Hand, Foot, and Mouth Disease (HFMD) in Thailand using a compartmental SEIRS model. Skills: R programming, data analysis.",
    email: "thanatchaporn.nt@gmail.com",
    accent: "mint",
  },
];

export const ALUMNI: Person[] = [
  {
    name: "Sumet Khumphairan",
    role: "Alumnus — Leptospirosis Model Internship",
    focus:
      "Now at the Institute of Applied Mathematics, Heidelberg University, Germany.",
    email: "sumet.khumphairan@gmail.com",
    accent: "sky",
  },
  {
    name: "Watcharapong Yospunya",
    role: "Alumnus — Web Development Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "yospunyaporto@gmail.com",
    accent: "blush",
  },
  {
    name: "Thepthat Boonbumrung",
    role: "Alumnus — Machine Learning Engineer Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "thepthat.work@gmail.com",
    accent: "peach",
  },
  {
    name: "Kiattiwat Srinuankhao",
    role: "Alumnus — Web Development Internship",
    education: [
      "B.Eng. Innovation Intelligence Engineering (IIE), Naresuan University",
    ],
    note: "Original website creator.",
    email: "kiattiwatsrinuankhao@gmail.com",
    accent: "butter",
  },
  {
    name: "Amontep Thaisri",
    role: "Alumnus — Machine Learning Engineer Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "amontep.ne@gmail.com",
    accent: "lavender",
  },
];

export type Project = {
  title: string;
  icon: "virus" | "wind" | "drop" | "smog" | "network";
  accent: string;
  summary: string;
  findings: string;
  extra?: string;
  reference?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "HFMD Outbreak Prediction",
    icon: "virus",
    accent: "blush",
    summary:
      "A machine-learning framework predicts high-risk Hand, Foot, and Mouth Disease (HFMD) outbreak areas in Thailand (2011–2022) using meteorological features.",
    findings:
      "XGBoost gave the best overall performance on unseen data. Average maximum temperature, rainfall, and vapor pressure were the most influential factors. The model performed strongly pre-pandemic but overpredicted during 2020–2021.",
    extra:
      "Future work: adding air pollution and virus subtypes, spatial modeling frameworks, and provincial-level evaluation.",
    reference:
      "Lonlab, P.; Anupong, S.; Jainonthee, C.; Chadsuthi, S. (2025). Tropical Medicine and Infectious Disease, 10, 48.",
  },
  {
    title: "Influenza Seasonality",
    icon: "wind",
    accent: "sky",
    summary:
      "How weather and air pollution influence influenza seasonality across six regions of Thailand, using national surveillance data (2009–2019).",
    findings:
      "Relative humidity emerged as a key driver, with rainfall and PM₁₀ influencing activity in specific regions. Wavelet-based methods revealed biannual peaks in the rainy and cool seasons.",
    extra:
      "Applications: timing vaccination campaigns and hospital-preparedness planning.",
    reference: "Anupong, S., Modchang, C., & Chadsuthi, S. (2024). Heliyon, 10(17).",
  },
  {
    title: "Leptospirosis Risk",
    icon: "drop",
    accent: "mint",
    summary:
      "Investigating flooding, climate, land use, and socio-economic factors that drive leptospirosis risk nationwide.",
    findings:
      "Flooding and temperature strongly influence human cases, while satellite-derived flood extent helps explain infection in cattle and buffalo. We develop time-series, mechanistic, and machine-learning models of human–animal–environment transmission.",
  },
  {
    title: "Air Pollution Dynamics",
    icon: "smog",
    accent: "peach",
    summary:
      "Relating meteorological variables to air-pollution patterns through statistical and environmental data analysis.",
    findings:
      "We test analytical approaches for linking climate variability and pollutant behavior, building the foundation for climate-sensitive pollution research connected to environmental health.",
    extra: "Visualizing average actual vs. predicted PM2.5 (Dec 2024 – Apr 2025).",
  },
  {
    title: "Human Mobility Network",
    icon: "network",
    accent: "lavender",
    summary:
      "A two-year study addressing the complexity of infectious-disease spread through human movement.",
    findings:
      "Year one builds a Bangkok mobility model incorporating public transport, statistical physics, and socio-economic and weather factors. Year two applies this network to influenza and dengue spread — because simple mathematical models fail to capture the complexity of movement-driven transmission.",
  },
];

export type Pub = { year: string; items: string[] };

export const PUBLICATIONS: Pub[] = [
  {
    year: "2026",
    items: [
      "Leveraging universal and transfer learning models for influenza prediction in Thailand (January).",
    ],
  },
  {
    year: "2025",
    items: [
      "Modeling the effectiveness of RT-PCR, RT-LAMP, and antigen testing strategies for COVID-19 control (October).",
      "Unraveling the drivers of leptospirosis risk in Thailand using machine learning (October).",
      "Predicting and explaining high dead-on-arrival outcomes in meat-type ducks using deep learning: a path to improved welfare management (June).",
      "Seasonal and meteorological drivers of hand, foot, and mouth disease outbreaks using data-driven machine learning models (February).",
      "Data-driven insights into pre-slaughter mortality: machine learning for predicting high dead on arrival in meat-type ducks (January).",
    ],
  },
  {
    year: "2024",
    items: [
      "Impact of COVID-19 vaccination in Thailand: averted deaths and severe infections across age groups (November).",
      "Seasonal patterns of influenza incidence and the influence of meteorological and air-pollution factors in Thailand during 2009–2019 (September).",
      "LSTM-powered COVID-19 prediction in central Thailand incorporating meteorological and particulate-matter data with a multi-feature selection approach (May).",
      "Wastewater-based epidemiological surveillance of SARS-CoV-2 new variants BA.2.86 and offspring JN.1 in South and Southeast Asia (March).",
      "Vaccination strategies impact the probability of outbreak extinction: a case study of COVID-19 transmission (March).",
      "Exploring indoor and outdoor dust as a potential tool for detection and monitoring of COVID-19 transmission (January).",
    ],
  },
  {
    year: "2023",
    items: [
      "Modeling vaccination strategies with limited early COVID-19 vaccine access in low- and middle-income countries: a case study of Thailand (November).",
    ],
  },
  {
    year: "2022",
    items: [
      "Competitive evolution of H1N1 and H3N2 influenza viruses in the United States: a mathematical modeling study (December).",
      "Modeling of the combined dynamics of leptospirosis transmission and seroconversion in herds (September).",
      "Weather impacts on particulate matter (Thai-language publication, September).",
      "Estimation of excess all-cause mortality due to COVID-19 in Thailand (June).",
      "Spatial–temporal patterns and risk factors for human leptospirosis in Thailand, 2012–2018 (March).",
    ],
  },
  {
    year: "2021",
    items: [
      "Effect of human movement on the spread of COVID-19 in Thailand (December).",
      "Modelling the effectiveness of intervention strategies to control COVID-19 outbreaks and estimating healthcare demand in Germany (November).",
      "The effects of flooding and weather conditions on leptospirosis transmission in Thailand (January).",
      "Impact of rainfall on the transmission of leptospirosis in Si Sa Ket, Thailand (January).",
    ],
  },
  {
    year: "2018",
    items: [
      "A remotely sensed flooding indicator associated with cattle and buffalo leptospirosis cases in Thailand 2011–2013 (November).",
      "Dengue epidemics prediction: a survey of the state-of-the-art based on data-science processes (September).",
      "Travel distance and human movement predict paths of emergence and spatial spread of chikungunya in Thailand (July).",
      "The modelling of hand, foot, and mouth disease in contaminated environments in Bangkok, Thailand (June).",
    ],
  },
  {
    year: "2017",
    items: [
      "Investigation on predominant Leptospira serovars and its distribution in humans and livestock in Thailand, 2010–2015 (February).",
    ],
  },
  {
    year: "2016",
    items: [
      "The dynamics of avian influenza: individual-based model with intervention strategies in traditional trade networks in Phitsanulok Province, Thailand (March).",
      "The impact of rainfall and temperature on the spatial progression of cases during the chikungunya re-emergence in Thailand in 2008–2009 (January).",
    ],
  },
  {
    year: "2015",
    items: [
      "Modeling seasonal influenza transmission and its association with climate factors in Thailand using time-series and ARIMAX analyses (November).",
    ],
  },
];

export type Activity = {
  title: string;
  date?: string;
  location?: string;
  blurb: string;
  accent: string;
  icon: "calendar" | "gift" | "globe" | "school";
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Friday Group Meeting",
    blurb:
      "Our recurring lab meeting — students and staff share progress, discuss models, and review new literature together.",
    accent: "lavender",
    icon: "calendar",
  },
  {
    title: "Christmas & New Year Party 2025",
    blurb:
      "An end-of-year celebration bringing the whole CAT-DID team together to close out a productive year.",
    accent: "blush",
    icon: "gift",
  },
  {
    title: "NTDASIA 2025",
    date: "27–28 November 2025",
    location: "Khon Kaen, Thailand",
    blurb:
      "The team presented and connected with the regional network on neglected tropical diseases across Asia.",
    accent: "mint",
    icon: "globe",
  },
  {
    title: "MIDSEA Summer School 2025",
    location: "Yogyakarta, Indonesia",
    blurb:
      "Members joined the MIDSEA summer school on infectious-disease modeling, building skills and international collaborations.",
    accent: "sky",
    icon: "school",
  },
];
