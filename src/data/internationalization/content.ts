export interface RankingItem {
  id: string;
  category: string;
  rank: string;
  context: string;
}

export interface WuriRankYear {
  year: number;
  items: {
    rank: string;
    label: string;
  }[];
}

export const internationalData = {
  hero: {
    badge: "[Internationalization]",
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
        imagePath: "/images/internationalization/logoBINUS.png"
      },
      {
        id: "pamulang",
        name: "Universitas Pamulang",
        location: "South Tangerang, Indonesia",
        imagePath: "/images/internationalization/unpam.png"
      },
      {
        id: "umpsa",
        name: "Universiti Malaysia Pahang Al-Sultan Abdullah",
        location: "Pahang, Malaysia",
        imagePath: "/images/internationalization/Emblem_of_Universiti_Malaysia_Pahang.png"
      }
    ]
  },
  section4: {
    label: "SECTION 04",
    title: "Featured International Research Projects",
    project: {
      tag: "Joint Research with UMPSA",
      name: "IFloodSense",
      description: "A proposed international research collaboration with UMPSA Malaysia, conceptualized with CCIS faculty and student researchers.",
      leadResearcher: "Dr. Aleta C. Fabregas",
      studentResearchers: [
        "Jomari Arago",
        "Harold Benedict Hernandez",
        "James Patrick Isidro"
      ]
    }
  },
  section5: {
    label: "SECTION 05",
    title: "International Research Publications",
    description: "CCIS faculty contribute to international research through coauthored publications and conference presentations. Their work covers areas such as data analytics, artificial intelligence, information retrieval, and predictive modeling.",
    publications: [
      {
        typeBadge: "MARCH 2025 / JOURNAL ARTICLE",
        title: "Milestones and Developments in Classical Statistical Time Series Forecasting: A Comprehensive Review",
        journal: "UMPSA's Data Analytics and Mathematics research journal",
        faculty: "Faculty Researcher: Dr. Aleta C. Fabregas"
      },
      {
        typeBadge: "APRIL 2026 / CONFERENCE PAPER",
        title: "Development of Information Retrieval Model for Hadith Data from Knowledge Graph",
        journal: "Conference Paper",
        faculty: "Faculty Researcher: Dr. Aleta C. Fabregas"
      }
    ],
    selectedConferenceHeading: "Selected International Conference Research",
    selectedConferenceList: [
      {
        title: "HydroCast: Graph-Attention Transformer with Spatio-Temporal Graph Autoencoder for Multi-Horizon River Water Level Forecasting",
        authors: "Dr. Aleta C. Fabregas, Paul Angelo Macaraeg, Roljohn Frilles"
      },
      {
        title: "Risk Statement Classifier Using BERT and DistilBERT",
        authors: "Kurt Andrei C. Carreon, Prof. Carlo Inovero"
      },
      {
        title: "Intelligent Credit Scoring: A Smart City Setting for Small and Medium Financial Institutions",
        authors: "Prof. Carlo Inovero"
      },
      {
        title: "Object Detection in Computer Laboratory Setting Utilizing YOLO Model",
        authors: "Leonardo M. Porteira, Prof. Carlo Inovero"
      }
    ]
  },
  studentExperience: {
    label: "SECTION 04",
    title: "Global Student Experience",
    students: [
      {
        name: "Marie Criz Zaragoza",
        university: "Sejong University",
        location: "Seoul, South Korea",
        portraitPath: "/images/internationalization/zaragoza-portrait.jpg",
        groupPhotoPath: "/images/internationalization/zaragoza-group.png"
      },
      {
        name: "Eujin Rod Sagun",
        university: "Woxsen University",
        location: "Hyderabad, India",
        portraitPath: "/images/internationalization/sagun-portrait.JPG",
        groupPhotoPath: "/images/internationalization/sagun-group.png"
      },
      {
        name: "Aisaiah Francis Alidio",
        university: "Kagoshima University",
        location: "Kagoshima, Japan",
        portraitPath: "/images/internationalization/alidio-portrait.JPG",
        groupPhotoPath: "/images/internationalization/alidio-group.png"
      }
    ],
    moreHeading: "Upcoming Exchange Students",
    moreLead: "Meet the upcoming exchange students who will represent PUP CCIS in international exchange programs:",
    moreList: [
      "Chelsea Lauren B. Cabrera - Kagoshima University, Japan",
      "Arjay N. Rosel - Binus University, Indonesia"
    ]
  },
  competitions: {
    label: "SECTION 05",
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
