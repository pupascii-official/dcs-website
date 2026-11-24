
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
        image: "/teaching-learning-assets/images/evidence-page1-campus.jpg",
        alt: "PUP CCIS campus",
        page: 1,
        position: "md:left-[5%] md:top-8 md:z-10 md:-rotate-[7deg]",
    },
    {
        title: "Operating Systems Lecture",
        description: "Interactive iOS & OS instruction in the CCIS lab with smartboard demo.",
        image: "/teaching-learning-assets/images/evidence-page2-os-lecture.jpg",
        alt: "Operating systems lecture",
        page: 2,
        position: "md:left-[20%] md:top-0 md:z-20",
    },
    {
        title: "Student Workshop",
        description: "BSCS students collaborating on software design and problem-solving tasks.",
        image: "/teaching-learning-assets/images/evidence-page5-workshop.jpg",
        alt: "Students participating in a workshop",
        page: 5,
        position: "md:left-[35%] md:top-8 md:z-30 md:rotate-[7deg]",
    },
];
