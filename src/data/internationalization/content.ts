export interface PartnerItem {
  id: string;
  name: string;
  location: string;
  imagePath: string;
  meetingPhotoPath: string;
  focus: string;
  highlights: string[];
}

export interface FeaturedProjectItem {
  id: string;
  tabLabel: string;
  name: string;
  fullTitle: string;
  useFullTitleAsHeadline?: boolean;
  date?: string;
  fora: string;
  location?: string;
  imagePath: string;
  imageAlt: string;
  leadLabel: string;
  leadResearchers: string;
  studentResearchers?: string;
  priorTeam?: string;
  award?: string;
  url?: string;
}

export type ResearchCategory = "journal-book" | "conference" | "iictc-award";

export interface ResearchPaperItem {
  id: string;
  title: string;
  fora: string;
  date: string;
  location?: string;
  authors: string;
  award?: string;
  url?: string;
  category: ResearchCategory;
  categoryLabel: string;
}

export interface ConferenceDelegationItem {
  id: string;
  title: string;
  organizers: string;
  date: string;
  location: string;
  participants: string;
  imagePath: string;
}

export const internationalData = {
  hero: {
    title: "Internationalization",
    lead: "Showcasing PUP BSCS's international recognition, academic partnerships, research innovation, and global engagement.",
    subtext: "Rooted in public service. Connected to the world. Explore how our computing community advances quality education across borders."
  },
  section1: {
    label: "SECTION 01",
    title: "International Accreditation and Quality Assurance",
    badge: "PICAB-CAC CERTIFIED • JULY 2026",
    headline: "PUP's First International Program Accreditation",
    programs: ["BS Computer Science", "BS Information Technology"],
    imagePath: "/images/internationalization/PICAB.jpeg"
  },
  section2: {
    label: "SECTION 02",
    title: "International Rankings and Recognition",
    qsStars: {
      title: "QS STARS",
      logoPath: "/images/internationalization/QS Stars.PNG",
      ratings: [
        { year: "2024 / Rating", stars: 3, label: "University Overall" },
        { year: "2025 / Rating", stars: 3, label: "Computer & Information Sciences" }
      ]
    },
    edurank: {
      title: "EDURANK",
      subtitle: "2025 / Computer Science Ranking",
      logoPath: "/images/internationalization/Edurank.WEBP",
      phRank: "15th",
      phContext: "in the Philippines",
      worldRank: "4976th",
      worldContext: "Worldwide"
    },
    theImpact: {
      title: "THE Impact Ranking",
      subtitle: "on UN Sustainable Development Goals",
      logoPath: "/images/internationalization/The Impact Ranking.png",
      rank: "1501+",
      context: "overall ranking",
      note: "out of 2318 institutions"
    },
    aunQa: {
      title: "AUN-QA",
      subtitle: "Regional Engagement",
      logoPath: "/images/internationalization/AUN-QA.PNG",
      description: "Regional quality assurance engagement supporting academic quality and continuous improvement."
    },
    wuri: {
      title: "WURI",
      subtitle: "2025 / Global Top Innovative Universities",
      logoPath: "/images/internationalization/WURI.png",
      rank: "250th",
      previousRank: "from 271st Ranking (2024)",
      narrative: [
        "The Polytechnic University of the Philippines (PUP) has once again proven its strength in delivering meaningful, socially responsive, and innovative education as it made significant strides in the 2025 World's Universities with Real Impact (WURI) rankings.",
        "Most notably, PUP jumped 21 spots higher in the Global Top Innovative Universities, moving from Rank 271 in 2024 to Rank 250 in 2025, reinforcing its growing global reputation for innovation in public education."
      ],
      years: [
        {
          year: 2025,
          ranks: [
            { rank: "5th", label: "Cost-Benefit Management" },
            { rank: "6th", label: "Funding for Sustainability" },
            { rank: "41st", label: "Technology Development and Application" }
          ]
        },
        {
          year: 2024,
          ranks: [
            { rank: "21st", label: "Generative AI Application" },
            { rank: "29th", label: "Student Support and Engagement" },
            { rank: "50th", label: "Symbol and Promotion" }
          ]
        }
      ]
    }
  },
  section3: {
    label: "SECTION 03",
    title: "International Academic Partnerships",
    description: "Building connections across Southeast Asia through university-to-university cooperation.",
    partners: [
      {
        id: "binus",
        name: "Bina Nusantara University",
        location: "Jakarta, Indonesia",
        imagePath: "/images/internationalization/logoBINUS.png",
        meetingPhotoPath: "/images/internationalization/binus-bigpicture-meeting.png",
        focus: "Joint International Conferences, Keynote Lectures & Student Cultural Exchange",
        highlights: [
          "Co-organized the International ICT Conference (IICTC 2022) (August 2–5, 2022) featuring keynote lectures by Dr. Aleta C. Fabregas and Dr. Iluminada Vivien R. Domingo alongside BINUS faculty.",
          "Hosted Best Paper Presentation Awards where three PUP BSCS student research teams won top honors.",
          "Conducted the PUP–BINUS Student Cultural & Language Exchange connecting computing students from both institutions.",
          "Held bilateral faculty and leadership research coordination forums."
        ]
      },
      {
        id: "pamulang",
        name: "Universitas Pamulang",
        location: "South Tangerang, Indonesia",
        imagePath: "/images/internationalization/unpam.png",
        meetingPhotoPath: "/images/internationalization/unpam-bigpicture-meeting.png",
        focus: "International Guest Lectures & Curriculum Benchmarking",
        highlights: [
          'Hosted Dean Assoc. Prof. Melvin C. Roxas as distinguished international speaker for the Faculty of Computer Science general lecture and welcoming ceremony on "AI and the Skills of the Future: Preparing Students for AI-Driven Jobs" (March 13, 2025).',
          "Facilitated cross-border faculty engagement on AI, data science, emerging computing trends, and curriculum innovation."
        ]
      },
      {
        id: "umpsa",
        name: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        location: "Pahang, Malaysia",
        imagePath: "/images/internationalization/Emblem_of_Universiti_Malaysia_Pahang.png",
        meetingPhotoPath: "/images/internationalization/umpsa-bigpicture-meeting.png",
        focus: "Global Classroom Lectures, Joint Flood-Disaster Research & Co-Hosted Conferences",
        highlights: [
          "Invited Prof. Dr. Aleta C. Fabregas as international guest lecturer for UMPSA's Global Classroom Session on Statistical Modelling and Simulation: Introduction to Synthetic Data Generation (January 5–6, 2026).",
          "Executed formal Letters of Intent (LOI) and an International Matching Grant partnership for IFloodSense, IFloodServer, and Stochastic Modelling of River Water Level Dynamics.",
          "Co-organized ICoAIMS 2025 in Kuala Lumpur, Malaysia (May 23–24, 2025) under a formal Memorandum of Agreement (MOA) and coauthored Scopus/IEEE-indexed papers."
        ]
      }
    ] as PartnerItem[]
  },
  section4: {
    label: "SECTION 04",
    title: "International Research Projects and Publications",
    description: "CCIS faculty and students contribute to international research through coauthored publications, book chapters, and conference presentations across data analytics, artificial intelligence, information retrieval, and predictive modeling.",
    subsectionTitle: "Featured International Research Projects",
    projects: [
      {
        id: "ifloodsense",
        tabLabel: "IFloodSense",
        name: "IFloodSense",
        fullTitle: "iFloodSense App: A Disaster Management Mobile Application for Real-Time, Waze-Based Hyperlocal Urban Street-Flood Mapping",
        fora: "International Matching Grant Strategic Partnership Programme on Flood Disaster Management / Joint Research Proposal (UMPSA & PUP-CCIS MOU)",
        imagePath: "/images/internationalization/Iflood-Meet-BigPicture.png",
        imageAlt: "IFloodSense PUP-CCIS and UMPSA joint online research meeting",
        leadLabel: "Lead Researchers",
        leadResearchers: "Dr. Aleta C. Fabregas (PUP); Dr. Noryanti Binti Muhammad & Assoc. Prof. Dr. Norhayati Rosli (UMPSA)",
        studentResearchers: "Jomari Arago, Harold Benedict Hernandez, James Patrick Isidro",
        priorTeam: "Dr. Aleta C. Fabregas, Prof. Leoven Basista, Prof. Rachel Nayre, Prof. Ma. Leonila Amata, Prof. Leo Mariel Violeta, Dane Aldrich Datuin"
      },
      {
        id: "habagatplus",
        tabLabel: "HabagatPlus",
        name: "HabagatPlus",
        fullTitle: "HabagatPlus: Providing Recommendations for Localized Class Suspension in Schools During Inclement Weather Conditions Using Naive Bayes Classifier",
        date: "November 27–29, 2023",
        fora: "3rd International Conference on Humanities, Education, Sciences, Management, Engineering, and Technology (ICHESMET 2023)",
        location: "Krirk University, Bangkok, Thailand",
        imagePath: "/images/internationalization/habagatPlus.png",
        imageAlt: "HabagatPlus 1st Place Best Presenter award at ICHESMET 2023",
        leadLabel: "Authors",
        leadResearchers: "Michael Junice M. Salvilla, Dr. Aleta C. Fabregas",
        award: "1st Place, Best Presenter & Best Research Paper (Technology - Onsite Category)",
        url: "https://drive.google.com/file/d/1TVio9CMxJ9Y68mJlQzxV_L1NqbXrBhqA/view?usp=sharing"
      },
      {
        id: "rivercast",
        tabLabel: "Rivercast",
        name: "Rivercast",
        fullTitle: "Rivercast: Forecasting Marikina River Level Using Auto-Regressive Transformer with Kernel PCA and Euclidean Kernel",
        date: "November 27–29, 2023",
        fora: "3rd International Conference on Humanities, Education, Sciences, Management, Engineering, and Technology (ICHESMET 2023)",
        location: "Krirk University, Bangkok, Thailand",
        imagePath: "/images/internationalization/Rivercast.png",
        imageAlt: "Rivercast 2nd Place Best Presenter award at ICHESMET 2023",
        leadLabel: "Authors",
        leadResearchers: "Nathanael A. Almazan, Jordan D. Garcia, Shaina F. Laman, Paolo C. Morato, Dr. Aleta C. Fabregas, Armin S. Coronado, Montaigne G. Molejon, Mariel Leo T. Violeta",
        award: "2nd Place, Best Presenter & Best Research Paper (Technology - Onsite Category)"
      },
      {
        id: "predicting",
        tabLabel: "Predicting Student",
        name: "Predicting Student",
        fullTitle: "Predicting Student Performance in Higher Education: A Naive Bayesian Algorithm Approach for Mapping Students' Academic Path Using a Rule-Based Classifier",
        useFullTitleAsHeadline: true,
        date: "November 27–29, 2023",
        fora: "3rd International Conference on Humanities, Education, Sciences, Management, Engineering, and Technology (ICHESMET 2023)",
        location: "Krirk University, Bangkok, Thailand",
        imagePath: "/images/internationalization/Predicting.png",
        imageAlt: "Predicting Student Performance presentation at ICHESMET 2023",
        leadLabel: "Authors",
        leadResearchers: "Severino M. Bedis Jr., Maria Leonila C. Amata, Jonnifer C. Mandigma, Dr. Aleta C. Fabregas"
      },
      {
        id: "yolo",
        tabLabel: "Object Detection",
        name: "Object Detection",
        fullTitle: "Object Detection in Computer Laboratory Setting Utilizing YOLO Model",
        useFullTitleAsHeadline: true,
        date: "September 11–13, 2024 & June 28–30, 2025",
        fora: "5th Asia Service Sciences and Software Engineering Conference (ASSE 2024) & 15th International Workshop on Computer Science and Engineering (WCSE 2025)",
        location: "The University of Tokyo, Japan & Jeju Island, South Korea",
        imagePath: "/images/internationalization/YOLO ASSE.png",
        imageAlt: "Object Detection in Computer Laboratory Setting Utilizing YOLO Model at ASSE 2024",
        leadLabel: "Authors",
        leadResearchers: "Carlo G. Inovero, Kurt Andrei Carreon, Leonard Porteria",
        url: "https://drive.google.com/file/d/1xh2cFmdH1pMnyHHZDDYfApbCNWhQ8tBj/view?usp=drive_link"
      },
      {
        id: "filipino-genz-bert",
        tabLabel: "Filipino Genz",
        name: "Filipino Genz",
        fullTitle: "Filipino Genz Slang Sentiment Analyzer using BERT",
        useFullTitleAsHeadline: true,
        date: "June 28–30, 2025",
        fora: "2025 15th International Workshop on Computer Science and Engineering (WCSE 2025), pp. 78–83",
        location: "Jeju Island, South Korea",
        imagePath: "/images/internationalization/BERT WCSE.png",
        imageAlt: "Filipino Genz Slang Sentiment Analyzer using BERT delegation at WCSE 2025",
        leadLabel: "Authors",
        leadResearchers: "Dr. Ria A. Sagum, Mark Ciedrick A. Ramos, Diana Rose A. Certeza, Alijah Czareen A. Andres, Aaronn Daphne M. Gatchalian",
        url: "https://www.wcse.org/index.php?m=content&c=index&a=show&catid=28&id=1413"
      }
    ] as FeaturedProjectItem[]
  },
  section5: {
    selectedConferenceHeading: "Selected International Conference & Journal Research",
    selectedConferenceList: [
      {
        id: "traffic-incident",
        title: "Traffic incident prediction and classification system using naïve bayes algorithm",
        fora: "8th International Conference on Computer Science and Computational Intelligence (ICCSCI 2023) / Procedia Computer Science",
        date: "August 2–3, 2023",
        location: "Malang, Indonesia",
        authors: "Michael Libnao, Marwin Misula, Christopher Andres, Jester Mariñas, Dr. Aleta Fabregas",
        url: "https://drive.google.com/file/d/1h6X2j1KkGRlfOqdaeF69PmYxYVNajw0J/view?usp=sharing",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "covid-risk-app",
        title: "Mobile Application for Risk Assessment Using Naïve Bayesian Algorithm with Distance Notification against COVID-19",
        fora: "Advancing Sustainable Science and Technology for a Resilient Future (CRC Press)",
        date: "2024",
        authors: "Dr. Aleta C. Fabregas, Leonila Ma Amata, Carlo Inovero, Armin S. Coronado",
        url: "https://drive.google.com/file/d/1ZapeAWW5Qk0_nKmljcGs8dsfHQuS53zY/view?usp=drive_link",
        category: "journal-book",
        categoryLabel: "Book Chapter"
      },
      {
        id: "pup-microbank",
        title: "PUP Microbank: Microbial Collection Repository with Status Monitory and Request Assessment",
        fora: "Advancing Sustainable Science and Technology for a Resilient Future (CRC Press)",
        date: "2024",
        authors: "Jayson James Mayor, Sherilyn Usero, Kimberly D. Francia, Louie B. Gonzales, Maria Patricia R. Habaan, ReaSophia L. Pasco, Dr. Aleta C. Fabregas, Gary Antonio C. Lirio, Armin S. Coronado",
        url: "https://drive.google.com/file/d/1DQPXk-wK9Qbbx7Qfov-WPIE3o4bPNjTL/view?usp=drive_link",
        category: "journal-book",
        categoryLabel: "Book Chapter"
      },
      {
        id: "floodwatcher",
        title: "FloodWatcher: Forecasting Marikina River Level using Generative Pre-Trained Transformer with Kernel PCA",
        fora: "9th International Conference on Computer Science and Computational Intelligence (ICCSCI 2024) / Procedia Computer Science",
        date: "August 28–29, 2024",
        location: "The Stones Hotel, Bali, Indonesia",
        authors: "Nathanael Almazan, Jordan Garcia, Shaina Laman, Paolo Morato, Dr. Aleta Fabregas, Armin Coronado, Montaigne Molejon, Mariel Leo Violeta",
        url: "https://drive.google.com/file/d/1IYcYeGxtGwY1S5mEz4A3hBCmWVYcrR4d/view?usp=drive_link",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "enhancing-student-outcomes",
        title: "Enhancing Student Outcomes: A Dual Methodology Using Naive Bayesian and Rule-Based Models",
        fora: "Technologique: A Global Journal on Technological Developments and Scientific Innovations (Vol. 2, No. 1)",
        date: "July 29, 2024",
        authors: "Severino M. Bedis, Jr., Jennifer C. Mandigma, Maria Leonila C. Amata, Dr. Aleta C. Fabregas",
        url: "https://drive.google.com/file/d/1bc9tpGId6zj-gH4ltq6HRHPBT-5SuyIH/view?usp=drive_link",
        category: "journal-book",
        categoryLabel: "Journal Article"
      },
      {
        id: "apriori-job-forecasting",
        title: "Apriori algorithm applied in job forecasting with elective tracking",
        fora: "AIP Conference Proceedings (Vol. 2823, 020002)",
        date: "August 10, 2023",
        authors: "Cherry Rose V. Concha, Dr. Aleta C. Fabregas",
        url: "https://www.researchgate.net/publication/373056911_Apriori_algorithm_applied_in_job_forecasting_with_elective_tracking",
        category: "conference",
        categoryLabel: "Conference Proceedings"
      },
      {
        id: "uti-cnn-svm",
        title: "Detecting Urinary Tract Infection (UTI) thru Analytes level using Convolutional Neural Network and Support Vector Machine",
        fora: "2021 9th International Conference on Information Technology: IoT and Smart City (ICIT 2021)",
        date: "December 22–25, 2021",
        location: "Guangzhou, China",
        authors: "Patricia May C. Arches, Abby R. Austero, Allysa Joy A. Diaz, Honey Joy C. Taer, Dr. Aleta C. Fabregas",
        url: "https://drive.google.com/file/d/1ELhUsAvHeIZVvkx-ncsRKwfnFZI5lQaB/view?usp=drive_link",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "digital-readiness",
        title: "Digital Readiness of Faculty and Students at the State University using Modified General Technology Competency and Use Model with Rule-based Algorithm: Basis for Teaching and Learning Delivery Mode Policy",
        fora: "International Journal of Computing Sciences Research (Vol. 5, No. 1)",
        date: "2021",
        authors: "Dr. Aleta Fabregas, Anna Ruby Gapasin, Carlo Inovero, Gisela May Albano, Rosita Canlas",
        url: "https://drive.google.com/file/d/1XykJWF9_NQXgHasr8De3IQAJeNXkyRmE/view?usp=drive_link",
        category: "journal-book",
        categoryLabel: "Journal Article"
      },
      {
        id: "hydrocast",
        title: "HydroCast: Graph-Attention Transformer with Spatio-Temporal Graph Autoencoder for Multi-Horizon River Water Level Forecasting",
        fora: "11th International Conference on Big Data Analytics (ICBDA 2026)",
        date: "April 11–14, 2026",
        location: "Waseda University, Tokyo, Japan",
        authors: "Dr. Aleta Fabregas, Paul Angelo O. Macaraeg, Roljohn C. Frilles, Raen P. Maransala, Precious Grace Deborah S. Manacom, Dexter A. Sulit",
        url: "https://drive.google.com/file/d/1RcivgWSm2JEyhS2hJcIXu92TEmpA512c/view?usp=drive_link",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "risk-statement-bert",
        title: "Risk Statement Classifier Using BERT And DistilBERT",
        fora: "15th International Workshop on Computer Science and Engineering (WCSE 2025)",
        date: "June 28–30, 2025",
        location: "Jeju Island, South Korea",
        authors: "Carlo G. Inovero, Kurt Andrei Carreon",
        url: "https://drive.google.com/file/d/1ESSLeL6PSMd74TFaUTQDoBl5tp-ZzsFm/view?usp=sharing",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "intelligent-credit-scoring",
        title: "Intelligent Credit Scoring: A Smart City Setting for Small and Medium Financial Institutions",
        fora: "11th International Conference on Information Technology: IoT and Smart City (ICIT 2023)",
        date: "December 14–17, 2023 (Published March 11, 2024)",
        location: "Kyoto, Japan",
        authors: "Carlo G. Inovero",
        url: "https://drive.google.com/file/d/1uJP8cQ1-srieLtXFEJb_GA7G331ac8Sc/view?usp=sharing",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "classical-time-series",
        title: "Milestones and developments in classical statistical time series forecasting: a comprehensive review",
        fora: "Data Analytics and Applied Mathematics (UMPSA Research Journal)",
        date: "March 2025",
        authors: "Dr. Aleta Fabregas (co-authored with UMPSA Malaysia faculty)",
        url: "https://drive.google.com/file/d/1ZdTY3PjCNTpvNoq4lCKMzFjlF2UsYxOb/view?usp=drive_link",
        category: "journal-book",
        categoryLabel: "Journal Article"
      },
      {
        id: "hadith-knowledge-graph",
        title: "The Development of Information Retrieval Model for Hadith Data from Knowledge Graph",
        fora: "Conference Paper (Joint research with UMPSA Malaysia)",
        date: "April 2026",
        authors: "Dr. Aleta Fabregas (co-authored with UMPSA Malaysia faculty)",
        url: "https://drive.google.com/file/d/1gYLlYQQdXdTVJRA6IL965uaEnMuNiyWs/view?usp=drive_link",
        category: "conference",
        categoryLabel: "Conference Paper"
      },
      {
        id: "stochastic-river-modelling",
        title: "Stochastic Modelling of River Water Level Dynamics for Probabilistic Flood-Risk Classification",
        fora: "Joint Research Proposal (UMPSA & PUP-CCIS)",
        date: "Ongoing (2026)",
        location: "Malaysia / Philippines",
        authors: "Noryanti Binti Muhammad, Dr. Aleta C. Fabregas, Arman Bin Mokhtar, Maria Leonila Amata",
        category: "conference",
        categoryLabel: "Joint Research Proposal"
      },
      {
        id: "iictc-aloeha",
        title: "Aloeha: Aloe Vera Leaf Rot and Rust Classification Using Capsule Neural Networks",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Joash Edson E. Flores, Raymond Christian P. Gatdula, Mathew P. Mojado, Rudolph Vincent B. Sta. Maria",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      },
      {
        id: "iictc-urine-color",
        title: "Comparative Analysis of RGB, HSV, And L*A*B Color Spaces in Urine Color Analysis System Using Convolutional Neural Network to Detect Hydration and Dehydration Levels",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Gillian Alethea Yuri Capistrano, Patrick Robles, Tessa Marie Itis",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      },
      {
        id: "iictc-keystroke",
        title: "A Comparative Study of Support Vector Machine and Logistic Regression in Behavior-Biometrics Authentication Through Keystroke Dynamics",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Seth P. Cortel, Jubelle C. Gabriel, Jonathan S. Medenilla, Chian Paula D. Sales",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      },
      {
        id: "iictc-npc-png",
        title: "Developing an Immersive Non-Playable Character (NPC) Interaction Through Procedural Narrative Generation (PNG)",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Krizza Mae Ilagan, Reimon Pingol, Dandrev Nasi, Jeffrey Lustado",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      },
      {
        id: "iictc-court-case",
        title: "Court Case Summarizer Using Latent Semantic Analysis and Part Segmentation",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Rey Edison R. Cayetano, Patrick Anndwin C. Clacio, Airis Dale F. Lobrio",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      },
      {
        id: "iictc-camarine",
        title: "CAMARINE: An Enhanced Fish Species Recognition System Through Multi-Scale Retinex",
        fora: "IICTC 2022",
        date: "2022",
        authors: "Prince Jewel C. Federe, Andrew Emil M. Pagador, Avegail O. Ruiz",
        award: "Best Paper Presentation Awards",
        category: "iictc-award",
        categoryLabel: "IICTC 2022"
      }
    ] as ResearchPaperItem[]
  },
  conferencesDelegations: {
    title: "International Conferences, Proceedings & Delegations",
    items: [
      {
        id: "iictc-2022",
        title: "International ICT Conference (IICTC) 2022",
        organizers: "PUP & BINUS University",
        date: "August 2–5, 2022",
        location: "Virtual / Online (Zoom)",
        participants: "Dr. Erwin Halim, Dr. Iluminada Vivien R. Domingo, Dr. Aleta C. Fabregas, Dr. Dany Eka Saputra; Conference Chair: Assoc. Prof. Ria A. Sagum",
        imagePath: "/images/internationalization/IICTC.png"
      },
      {
        id: "iccsci-2023",
        title: "8th International Conference on Computer Science and Computational Intelligence (ICCSCI 2023) (Co-Hosting)",
        organizers: "BINUS University (Co-hosted by PUP)",
        date: "August 2–3, 2023",
        location: "Bina Nusantara University, Malang Campus, Indonesia",
        participants: "Polytechnic University of the Philippines (Institutional Co-Host)",
        imagePath: "/images/internationalization/ICCSCI.png"
      },
      {
        id: "ichesmet-2023",
        title: "3rd International Conference on Humanities, Education, Sciences, Management, Engineering, and Technology (ICHESMET 2023)",
        organizers: "PUP Graduate School, Krirk University, UNTAG Semarang, Van Lang University, MRSP",
        date: "November 27–29, 2023",
        location: "Krirk University, Bangkok, Thailand",
        participants: "Dr. Aleta C. Fabregas, Severino Bedis Jr., Maria Leonila Amata, Jonnifer Mandigma, Michael Junice Salvilla",
        imagePath: "/images/internationalization/ICHESME.png"
      },
      {
        id: "nlpir-2023",
        title: "2023 7th International Conference on Natural Language Processing and Information Retrieval (NLPIR 2023)",
        organizers: "ACM International Conference Proceedings Series",
        date: "December 15–17, 2023",
        location: "Seoul, South Korea",
        participants: "Dr. Ria A. Sagum",
        imagePath: "/images/internationalization/NLPIR.png"
      },
      {
        id: "aiccc-2024",
        title: "2024 7th Artificial Intelligence and Cloud Computing Conference (AICCC 2024)",
        organizers: "AICCC & ADIP (ACM)",
        date: "December 14–16, 2024",
        location: "Tokyo, Japan",
        participants: "Dr. Ria A. Sagum",
        imagePath: "/images/internationalization/AICCC.png"
      },
      {
        id: "icoaims-2025",
        title: "5th International Conference on Applied & Industrial Mathematics and Statistics (ICoAIMS 2025)",
        organizers: "Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) & PUP",
        date: "May 23–24, 2025",
        location: "The Pearl Hotel, Kuala Lumpur, Malaysia",
        participants: "Ryan P. Villalon, Marc Lester Acunin, Jonabelle Lavapie, Dr. Aleta C. Fabregas",
        imagePath: "/images/internationalization/ICOAIMS.png"
      }
    ] as ConferenceDelegationItem[]
  },
  competitions: {
    label: "SECTION 06",
    title: "International Competition and Academic Excellence",
    items: [
      {
        id: "finalists",
        headline: "Sta Mesa Campus",
        members: [
          { name: "Aldren Q. Atienza", program: "BS Political Economy" },
          { name: "Melfred U. Bernabe", program: "BS Computer Science", highlight: true },
          { name: "Clarisse Jem T. Salazar", program: "BS Computer Science", highlight: true }
        ],
        programName: "ASEAN (P2A) AI Education 2026 Program",
        theme: 'Theme: "AI in Healthcare: Imaging, Diagnosis, and Beyond"',
        award: "Finalists",
        imagePath: "/images/internationalization/sta.mesacampus-award.JPG"
      },
      {
        id: "gold-medalist",
        headline: "Team 16 - Omniflow",
        members: [
          { name: "Clarisse Jem T. Salazar", program: "BS Computer Science", highlight: true },
          { name: "Karl Justine B. Catahan", program: "BS Information Technology" },
          { name: "Daniel John P. Tocmo", program: "BS Industrial Engineering" }
        ],
        programName: "ASEAN (P2A) AI Education 2026 Program",
        theme: 'Theme: "AI in Healthcare: Imaging, Diagnosis, and Beyond"',
        award: "Gold Medalist",
        imagePath: "/images/internationalization/salazar-award.JPG"
      }
    ],
    cta: {
      label: "View Full Narative Report ↗",
      href: "/narrative-report"
    }
  }
};
