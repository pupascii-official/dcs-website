export interface StudentExchangeItem {
  id: string;
  name: string;
  displayNameOnPortrait: string;
  degree: string;
  university: string;
  country: string;
  cityCountry: string;
  activity: string;
  modality: string;
  portraitPath: string;
  groupPhotoPath: string;
  sections: {
    heading: string;
    points: string[];
  }[];
}

export const studentExchangeData: StudentExchangeItem[] = [
  {
    id: "zaragoza",
    name: "Marie Criz Zaragoza",
    displayNameOnPortrait: "Marie Criz Zaragoza",
    degree: "Bachelor of Computer Science",
    university: "Sejong University",
    country: "South Korea",
    cityCountry: "Seoul, South Korea",
    activity: "Sejong University Spring Semester 2026 Exchange Program",
    modality: "Long Term Exchange (Onsite)",
    portraitPath: "/images/internationalization/zaragoza-portrait.jpg",
    groupPhotoPath: "/images/internationalization/zaragoza-group.png",
    sections: [
      {
        heading: "Experience Highlights:",
        points: [
          "Artificial Intelligence and Data Science coursework",
          "Software development and laboratory activities",
          "Global Buddies Program",
          "Korean language class",
          "Cultural and international student activities"
        ]
      }
    ]
  },
  {
    id: "sagun",
    name: "Eujin Rod “Seiji” Sagun",
    displayNameOnPortrait: "Eujin Rod Sagun",
    degree: "Bachelor of Computer Science",
    university: "Woxsen University",
    country: "India",
    cityCountry: "Hyderabad, India",
    activity: "Woxsen University Fall Semester 2026 Exchange Program",
    modality: "Long Term Exchange (Onsite)",
    portraitPath: "/images/internationalization/sagun-portrait.JPG",
    groupPhotoPath: "/images/internationalization/sagun-group.png",
    sections: [
      {
        heading: "Academic Experience",
        points: [
          "Studied Artificial Intelligence and Machine Learning.",
          "Participated in project-based assessments.",
          "Experienced Woxsen University's collaborative learning environment.",
          "Improved critical thinking, research, communication, and teamwork skills."
        ]
      },
      {
        heading: "Cultural Experience",
        points: [
          "Interacted with students from different nationalities.",
          "Participated in university activities.",
          "Explored Indian culture and heritage.",
          "Developed adaptability, independence, and intercultural communication skills."
        ]
      }
    ]
  },
  {
    id: "alidio",
    name: "Aisaiah Francis G. Alidio",
    displayNameOnPortrait: "Aisaiah Francis Alidio",
    degree: "Bachelor of Computer Science",
    university: "Kagoshima University",
    country: "Japan",
    cityCountry: "Kagoshima, Japan",
    activity: "Kagoshima University Fall Semester 2026 Exchange Program",
    modality: "Long Term Exchange (Onsite)",
    portraitPath: "/images/internationalization/alidio-portrait.JPG",
    groupPhotoPath: "/images/internationalization/alidio-group.png",
    sections: [
      {
        heading: "Academic Experience",
        points: [
          "Participates in academic studies at the Faculty of Science.",
          "Gains exposure to Kagoshima University's learning environment.",
          "Experiences international academic practices and collaboration.",
          "Receives a tuition fee waiver under the bilateral exchange agreement."
        ]
      },
      {
        heading: "International and Cultural Experience",
        points: [
          "Interacts with students from different backgrounds.",
          "Experiences Japanese university life.",
          "Participates in international student activities.",
          "Develops intercultural understanding and global awareness."
        ]
      }
    ]
  }
];

export const studentExchangeMore = {
  heading: "Upcoming Exchange Students",
  lead: "Meet the upcoming exchange students who will represent PUP CCIS in international exchange programs:",
  list: [
    "Chelsea Lauren B. Cabrera - Kagoshima University, Japan",
    "Arjay N. Rosel - Binus University, Indonesia"
  ]
};
