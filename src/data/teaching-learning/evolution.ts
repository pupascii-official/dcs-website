export interface EvolutionMilestone {
  number: string;
  year: string;
  code: string;
  title: string;
  description: string;
  highlights: string[];
  icon: "computer" | "chip" | "network" | "shield";
  position: "left" | "right";
  step: number;
  isFinal?: boolean;
}

export const milestones: EvolutionMilestone[] = [
  {
    number: "01",
    year: "LATE 1960s",
    code: "SYS://MAINFRAME",
    title: "PCC & Early EDP",
    description:
      "Short-term <strong>EDP courses</strong> (COBOL, FORTRAN, keypunching) under <strong>PCC</strong>, with <strong>NCC</strong> and <strong>UP–Diliman</strong> partnerships.",
    highlights: [
      "COBOL & FORTRAN",
      "Keypunching",
      "NCC & UP–Diliman",
    ],
    icon: "computer",
    position: "left",
    step: 1,
  },
  {
    number: "02",
    year: "1977",
    code: "DEV://LADDERIZED",
    title: "EDP/CDPM & BCDPM",
    description:
      "Launched the <strong>4-year ladderized BCDPM</strong> curriculum—marking <strong>degree-level computing education</strong> at PUP.",
    highlights: [
      "4-Year Ladderized",
      "BCDPM Curriculum",
      "Degree-Level",
    ],
    icon: "chip",
    position: "right",
    step: 2,
  },
  {
    number: "03",
    year: "1986",
    code: "NET://CCMIT",
    title: "Elevation to CCMIT",
    description:
      "Elevated into <strong>CCMIT</strong> under <strong>Pres. Nemesio Prudente</strong>, offering <strong>BIT</strong> (math-oriented), <strong>BCDPM</strong>, and a <strong>Post-Bacc Diploma</strong>.",
    highlights: [
      "Pres. Nemesio Prudente",
      "BIT (Math-Oriented)",
      "Post-Bacc Diploma",
    ],
    icon: "network",
    position: "left",
    step: 3,
  },
  {
    number: "04",
    year: "MARCH 1997 • AY 97–98",
    code: "COE://BSCS",
    title: "BSCS & Accreditations",
    description:
      "BIT became <strong>BSCS</strong> (<strong>CMO 60 s. 1996</strong>); achieved <strong>AACCUP Level I & II</strong> and <strong>CHED COD/COE</strong> recognition.",
    highlights: [
      "CMO 60 s. 1996",
      "AACCUP Level I & II",
      "CHED COD / COE",
    ],
    icon: "shield",
    position: "right",
    step: 4,
    isFinal: true,
  },
];
