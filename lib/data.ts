export type Person = {
  name: string;
  role: string;
  education?: string[];
  research?: string;
  focus?: string;
  funding?: string;
  email?: string;
  scholarUrl?: string;
  github?: string;
  photo?: string;
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
    scholarUrl: "https://scholar.google.co.th/citations?hl=en&user=m69EB_EAAAAJ",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBGvu1LXNlgPo51C3Jw4979nyie6hSEB9kZtL6kxrJbBGWQMEVlescJASSruSC1hv2wcuHUV1bNPpntcyhh8bf2kIpRDeXDkyCeOw_qzZQ_qryTcMVyChGe4WuTZYfamGhLyIM4-VCtCSXfaVP2Xqwtytx2VPwoVZlURMdNgAdgA6TTTn0u7WrqVu5nYzk6rIdNUTawipjoUGuvOCxx625n1LnCAldgUaw7=w400",
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
    scholarUrl: "https://scholar.google.com/citations?user=8-51KT0AAAAJ&hl=en",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUAGgef0eZlBNbTTVqAAAI_iETyFhCcrWO5Ac8rRawUU1T5zqnn0CH-aq2Cj0QtKe7t4N5tr3plWR7CmuVxbeoeMjAVz-E3DUZ90A8Xr9sg06n3YuXQgsDW5HPNEhWatIXSafj_es7loVj72EQUiTgGohpr0jszyf1_awTUB81IG5PgU4Aay_DYHHy6Jjm-38_01sDPuqzSX8XrDX1QvJDTZiRP49LNaZROmi7E=w400",
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
    scholarUrl: "https://scholar.google.com/citations?user=4qN4zlwAAAAJ&hl=en",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBaceFjnSSbum7Tj3CZNXG2Mm6VaXSWFwXP0mLIrMoy4zY29fFJXJmozeSJMoRC-JbCd7mD2wE1gCdQ3mBRBLVNtADrkkxW2oIgZqOhs0MiR4fOylFO_BDPo2I4JxE84SIS-SIwrrtX0OjXDy1MP-OAm7j0dS13zLGtmBM8YgxUwETOpN1sajzej-iAq72xUz3vi9Hq8pQ9k5P2aUYdim_FxMUmpsPeGGX9=w400",
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
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUCJLblS0yuG-02XilZ4j5vRk6vm60B8XRxC8wK-Nuvwf2aWIxeO3pzT5WHLlGvONMi3HBA7nl_H1sNfBVxMJVB4TRyX0FbKHEcpIbyj30XJ2meFYJ-MLQMK8CBz9gwkJQhcB3IatmWRyq76neSAMhb6tkUXQ9bB4Wo52wMGvN6bqQkALSxR4TB0Cmsu2P8cQ-HatMetERnkrVOnU43R4zErJ6u7OwV0jK4Xr8s=w400",
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
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUDRjG0pmT1WVU9MXHSCyuEsH4iD35N2oxWtyHCp4Mf8SKfQ4ZqKI673soKx7r2ueTL5s7DpwuNbENSU1me_V5A2iDg63wbCf_1NFAkwiM9peDNA38t0Kodl_ByoqUWAbiJEb2dmi99Rab4QqFUL3r30DufO3SOB2CzwkAzC5BBFh4GB7iw-xEGpykk1sBTnfzdDSEp47TdyXKlgl9IASBGgvNS8uuhxwjvPYR8=w400",
    accent: "peach",
  },
  {
    name: "Narathip Sriyamwong",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    funding: "DPST Scholarship Recipient",
    focus:
      "Physical and statistical aspects of climate and air pollution: environmental statistics, data analysis, atmospheric science.",
    email: "narathipssri@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUD6LRCt5zflnNyAUNWCfaNmSlMEJFYHgSnJepzee52fdw2GEio5HYQM0umLHgrVFkshXXIoCKx6NsvjS_PJlNoC2YYwQlavmmRQQWeKtDx2Ra4VKAuNBaxP_wA7vndSROaKWEGh7RSLTqfSS7ihij7u5OBW8GkbdGTpN3YSOzw7CokMzhooXz85w8q6V5-eJGLkuAXldISTE220x3q0nXGhH10Onyq1892662s=w400",
    accent: "butter",
  },
  {
    name: "Sawitta Adiphasakun",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    focus:
      "Epidemiological modeling and computer simulations. Skills: R, C++, SIR/SEIR models.",
    github: "https://github.com/MamamuuR1zz/HFMD-SEIR-Model",
    email: "sawittaa66@nu.ac.th",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBsF2Hg_UnSWuXysRIQ_tfbQ3sOA7LdhKXrM6jVbUHcbQwUvM2XUmvIiHKMwdEOeXomBDEd33l9cHmIJpM09BwmX1IbJyijNGFgtH6R1nPAbp3jChGe5dyqufDEFK-z5KIRtkm98LlEjcPjtUmyk7FH3CqQrYJx2JykiYn4t_SWHFwT1ZCiXhFp-KDBxLueCt6FzFwdCdQINRLjGovlgrXr7pcQvzTZRB8HlCM=w400",
    accent: "lavender",
  },
  {
    name: "Thanatchaporn Nakthang",
    role: "Undergraduate, B.Sc. Physics (in progress)",
    focus:
      "Seasonal dynamics of Hand, Foot, and Mouth Disease (HFMD) in Thailand using a compartmental SEIRS model. Skills: R programming, data analysis.",
    email: "thanatchaporn.nt@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUDGdzSDrfCtFQxmiMKT6MjiCxizJAD8zfFe12uTA23UGrw5FZHvpX0kIjADDB5IxBrzJ15LkLQDzJuqjSCB6pohmneMXRSN2UfSy80fsAvFdxNO1w1n1CKAmH9DuL-TpeRcYhINSVk9xygitpYm0QT5WHct_vWbrzyUYCxrBirPJ1b7MnMFHnmj7M4MwtxmKyuiJeyjqVu_WLouIO8WLrdDUU2ZeSyaE90V7Ms=w400",
    accent: "mint",
  },
];

export const ALUMNI: Person[] = [
  {
    name: "Sumet Khumphairan",
    role: "Alumnus, Leptospirosis Model Internship",
    focus:
      "Now at the Institute of Applied Mathematics, Heidelberg University, Germany.",
    email: "sumet.khumphairan@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBTKC2550rcXYroydUnARosCWY8fAxP7GYDQZMiybJ6aYbt7yiQa5TInF6V9k91BfxpX30q40evQPvw0iVBU9OvW5mdws-9LpQAI-jQSYUC30yrv1Wgw_YPOYYRfPu6ucTnTgGURzOZcYoAfwotwF7P0xYc7ejqTvKSAE9akdf8xRdK_oQkB3t-brrJhRjvT242-1KNdNVfdux9p9XUineFwFQLMecn2Amltmk=w400",
    accent: "sky",
  },
  {
    name: "Watcharapong Yospunya",
    role: "Alumnus, Web Development Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "yospunyaporto@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUA5A3eCe5mbs17YRFkkmWLGRZlO_K1I2sGzky86JspNKceNJFSrnfoIBXfyed3eOMldzi_m0Ks5SrQQYmVhwHxQE_5PF9jo3NckhrbME-gAWbRD_0pJbMZ1pVYxRG5MhPBWcM8Dpmd9LAU1nfb2kDC4qb_rDkkJ-YvQo2S4DYDlxjUcp7NjNGsGrLx8Zpq61R03TDCHSNisZpe0E9WvuVR7dY88PMydfJYs6aE=w400",
    accent: "blush",
  },
  {
    name: "Thepthat Boonbumrung",
    role: "Alumnus, Machine Learning Engineer Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "thepthat.work@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBOEv1XUhAMNjyv-9qbriVU2_ItwSdEeJREXSO_GQdJn8cJHzRooFkb5AxhYVwtmHXk3oseCvrVNre6KWfQwGQp1Px2BXj6pZpaVeSC1wgzwqvfDnpABi-BJTpq-huNUTRBLdEf9F06Aa9pe3LcK2DZ4UE8IiZ0Y2a--FZXaW6k7tO54r9a06Cb2bIE3jJeOLpDJ7BX1GkofPWCeFtCgr5lp_v3VwuA9u8d=w400",
    accent: "peach",
  },
  {
    name: "Kiattiwat Srinuankhao",
    role: "Alumnus, Web Development Internship",
    education: [
      "B.Eng. Innovation Intelligence Engineering (IIE), Naresuan University",
    ],
    note: "Original website creator.",
    email: "kiattiwatsrinuankhao@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUAuCQ1yv8ypVU9YNKbxGNSMnPskPc_WG2Gk9T9BtQflypsrKdaoUV23nAUecM10xtgza3abCOoZBdUzlAYdjERNEW8fQ0Y2-GQBQ-0eW7xq98hNCweN7tNvnW8ivneSDfEOl9Gh6GTo64QvS0xvg_fuKNb5I9dNigR5p6FZkRvqMhPJWQKJEONuGtH8CylhEaO45XFYSSmRLa3TtmYMuasaCv-dcc_a7DG_PMg=w400",
    accent: "butter",
  },
  {
    name: "Amontep Thaisri",
    role: "Alumnus, Machine Learning Engineer Internship",
    education: ["B.Eng. Computer Engineering (CPE), Naresuan University"],
    email: "amontep.ne@gmail.com",
    photo:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBpnWVoiNLVnbobDbmXPAAD2-KlNrwhVxYYJdz3TqlQ0whhwUtXhbSdRA9evra68aVv8YZ9N2qgubXKo4Xkkr84sb-6Ld-94Pw4QOnP9t99kbOu6XKHZnLFT8n6UzptfNGv5KW53q6MWDWFrg_k4qUulTl2xLQHNBG2cp--9E1YIlOr4Eq8TE98bKo3lIgfum1uFjyST1GpAsO08s5zPck4cJ8XCa_IrPcor3k=w400",
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
      "Year one builds a Bangkok mobility model incorporating public transport, statistical physics, and socio-economic and weather factors. Year two applies this network to influenza and dengue spread, because simple mathematical models fail to capture the complexity of movement-driven transmission.",
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
      "Our recurring lab meeting where students and staff share progress, discuss models, and review new literature together.",
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
