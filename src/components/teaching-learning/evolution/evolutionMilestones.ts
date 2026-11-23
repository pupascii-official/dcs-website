export type MilestoneIconName = 'mainframe' | 'ladderized' | 'ccmit' | 'bscs';

export interface EvolutionMilestone {
  stepNumber: string;
  stepClass: 'is-step-1' | 'is-step-2' | 'is-step-3' | 'is-step-4';
  side: 'left' | 'right';
  bendSide: 'left' | 'right';
  year: string;
  techCode: string;
  title: string;
  ariaLabel: string;
  icon: MilestoneIconName;
  isFinal?: boolean;
  summaryHtml: string;
  highlights: {
    label: string;
    gold?: boolean;
  }[];
}

export const EVOLUTION_MILESTONES: EvolutionMilestone[] = [
  {
    stepNumber: '01',
    stepClass: 'is-step-1',
    side: 'left',
    bendSide: 'left',
    year: 'LATE 1960s',
    techCode: 'SYS://MAINFRAME',
    title: 'PCC & Early EDP',
    ariaLabel: 'Late 1960s: PCC and Early EDP — click to view full details',
    icon: 'mainframe',
    summaryHtml:
      '<p>Short-term <strong>EDP courses</strong> (COBOL, FORTRAN, keypunching) under <strong>PCC</strong>, with <strong>NCC</strong> and <strong>UP–Diliman</strong> partnerships.</p>',
    highlights: [
      { label: 'COBOL & FORTRAN' },
      { label: 'Keypunching' },
      { label: 'NCC & UP–Diliman' },
    ],
  },
  {
    stepNumber: '02',
    stepClass: 'is-step-2',
    side: 'right',
    bendSide: 'right',
    year: '1977',
    techCode: 'DEV://LADDERIZED',
    title: 'EDP/CDPM & BCDPM',
    ariaLabel: '1977: EDP/CDPM and BCDPM — click to view full details',
    icon: 'ladderized',
    summaryHtml:
      '<p>Launched the <strong>4-year ladderized BCDPM</strong> curriculum—marking <strong>degree-level computing education</strong> at PUP.</p>',
    highlights: [
      { label: '4-Year Ladderized' },
      { label: 'BCDPM Curriculum' },
      { label: 'Degree-Level' },
    ],
  },
  {
    stepNumber: '03',
    stepClass: 'is-step-3',
    side: 'left',
    bendSide: 'left',
    year: '1986',
    techCode: 'NET://CCMIT',
    title: 'Elevation to CCMIT',
    ariaLabel: '1986: Elevation to CCMIT — click to view full details',
    icon: 'ccmit',
    summaryHtml:
      '<p>Elevated into <strong>CCMIT</strong> under <strong>Pres. Nemesio Prudente</strong>, offering <strong>BIT</strong> (math-oriented), <strong>BCDPM</strong>, and a <strong>Post-Bacc Diploma</strong>.</p>',
    highlights: [
      { label: 'Pres. Nemesio Prudente' },
      { label: 'BIT (Math-Oriented)' },
      { label: 'Post-Bacc Diploma' },
    ],
  },
  {
    stepNumber: '04',
    stepClass: 'is-step-4',
    side: 'right',
    bendSide: 'right',
    year: 'MARCH 1997 • AY 97–98',
    techCode: 'COE://BSCS',
    title: 'BSCS & Accreditations',
    ariaLabel: 'March 1997 AY 97-98: BSCS and Accreditations — click to view full details',
    icon: 'bscs',
    isFinal: true,
    summaryHtml:
      '<p>BIT became <strong>BSCS</strong> (<strong>CMO 60 s. 1996</strong>); achieved <strong>AACCUP Level I &amp; II</strong> and <strong>CHED COD/COE</strong> recognition.</p>',
    highlights: [
      { label: 'CMO 60 s. 1996', gold: true },
      { label: 'AACCUP Level I & II', gold: true },
      { label: 'CHED COD / COE', gold: true },
    ],
  },
];