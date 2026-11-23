export interface EvidenceItem {
    title: string;
    description: string;
    image: string;
    alt: string;
    page: number;
    position: string;
}

export const teachingEvidence: EvidenceItem[] = [
    {
        title: "PUP CCIS Campus & Labs",
        description: "PUP Main Building, faculty mentoring, and collaborative coding sessions.",
        image: "/images/evidence/campus.jpg",
        alt: "PUP CCIS campus",
        page: 1,
        position: "md:left-0 md:top-8 md:z-10 md:-rotate-[7deg]",
    },
    {
        title: "Operating Systems Lecture",
        description: "Interactive iOS & OS instruction in the CCIS lab with smartboard demo.",
        image: "/images/evidence/lecture.jpg",
        alt: "Operating systems lecture",
        page: 2,
        position: "md:left-[15%] md:top-0 md:z-20",
    },
    {
        title: "Student Workshop",
        description: "BSCS students collaborating on software design and problem-solving tasks.",
        image: "/images/evidence/workshop.jpg",
        alt: "Students participating in a workshop",
        page: 5,
        position: "md:left-[30%] md:top-8 md:z-30 md:rotate-[7deg]",
    },
];