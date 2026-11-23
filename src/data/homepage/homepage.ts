export interface HomepageLeader {
	id: string;
	name: string;
	credentials: string;
	role: string;
	image: string;
	imagePosition: string;
	message: string[];
	closing: string;
}

export const leaders: HomepageLeader[] = [
	{
		id: "dean-message",
		name: "Melvin C. Roxas",
		credentials: "MSGITS",
		role: "Dean, College of Computer and Information Sciences",
		image: "/images/homepage/portraits/dean-roxas.webp",
		imagePosition: "center 24%",
		message: [
			"The College of Computer and Information Sciences (CCIS) is honored to welcome the Accrediting Agency for Chartered Colleges and Universities in the Philippines (AACCUP) for the Level IV Reaccreditation Survey of its Bachelor of Science in Computer Science and Bachelor of Science in Information Technology programs.",
			"This visit affirms CCIS’s active partnership with the University in pursuing its mission of providing excellence and quality education—one important mechanism of which is its steadfast adherence to quality assurance through accreditation.",
			"For four decades, CCIS has steadily hurdled accreditation surveys one after another, treating each as an opportunity to ensure continuous compliance, strengthen its academic programs, and pursue meaningful improvement. This enduring commitment reflects the College’s belief that quality is not a single accomplishment, but a continuing responsibility shared by its faculty, staff, students, alumni, industry partners, and other stakeholders.",
			"The College’s recent award of PICAB-CAC Accreditation further affirms the strength of its well-defined processes and the consistent execution of its plans. It demonstrates that, through disciplined quality assurance and a culture of continuous improvement, CCIS is well positioned to sustain its standards and pursue local and international accreditations in the years to come.",
			"As we begin this Level IV Reaccreditation journey, we warmly welcome the accreditors’ expertise, insights, recommendations, and constructive evaluation. May this engagement further inspire CCIS to advance the University’s mission, elevate the quality of its Computer Science and Information Technology programs, and continue developing graduates who are competent, ethical, innovative, and responsive to the needs of society.",
		],
		closing: "Welcome, and thank you for being part of CCIS’s continuing pursuit of excellence.",
	},
	{
		id: "chair-message",
		name: "Marian G. Arada",
		credentials: "MIT",
		role: "Chairperson, Department of Computer Science",
		image: "/images/homepage/portraits/chairperson-arada.webp",
		imagePosition: "center 25%",
		message: [
			"It is my pleasure to welcome you to the Department of Computer Science, where we are committed to providing quality education, fostering innovation, and developing competent, ethical, and future-ready computing professionals.",
			"We continuously strive for academic excellence through quality instruction, meaningful research, community engagement, and our commitment to accreditation standards. These efforts reflect our dedication to maintaining high educational standards and promoting continuous improvement across our academic programs.",
			"To our students, faculty, staff, alumni, and partners, thank you for being an essential part of our journey toward excellence. Your support, collaboration, and commitment inspire us to achieve greater heights and contribute meaningfully to society through technology and innovation.",
			"Together, let us embrace innovation, advance technological knowledge, and shape a better digital future.",
		],
		closing: "Once again, welcome to the Department of Computer Science!",
	},
];

export const missionItems = [
	"Provide quality IT education relevant and responsive to the changing needs of the industry and society;",
	"Produce highly employable graduates and entrepreneurs who have passion, intellect, and ingenuity to serve the society;",
	"Embed a culture of research by applying learned theories, creating innovation, enhancing product features, and venturing on its viability for commercialization;",
	"Develop innovative programs focusing on ubiquitous computing environment as an alternative to costly and limited resources offered by traditional education;",
	"Strengthen linkages with industry and other research and development institutions in order to upgrade and update the knowledge and skills of faculty and students;",
	"Undertake outreach and extension programs while utilizing the expertise and competence of existing human resources for the improvement of the community; and",
	"Inculcate among administrators, faculty members, staff, and students the highest degree of commitment and professionalism in any undertaking.",
];

export const visionIntro = "The College of Computer and Information Sciences aims to achieve the following goals:";
export const visionItems = [
	"Quality IT education relevant and responsive to the changing needs of the industry and society.",
	"Strong linkages with industry and other research and development institutions.",
	"Strong outreach and extension programs.",
	"Highly employable graduates.",
	"Innovative systems and research with greater reliance on technology.",
	"Highest degree of commitment and professionalism among administrators, faculty, staff, and students.",
];

export const pillars = [
	{
		number: "01",
		detail: "Research & Publications",
		href: "/research",
		note: "Discover the questions and work moving the field forward.",
		image: "/images/homepage/pillars/research.avif",
	},
	{
		number: "02",
		detail: "Curriculum & Outcomes",
		href: "/teaching-and-learning",
		note: "Explore learning outcomes, curriculum, faculty, and student life.",
		image: "/images/homepage/pillars/teaching.avif",
	},
	{
		number: "03",
		detail: "Extension & Outreach",
		href: "/community",
		note: "See how computing knowledge connects with communities.",
		image: "/images/homepage/pillars/community.avif",
	},
	{
		number: "04",
		detail: "Global Linkages",
		href: "/internationalization",
		note: "Meet the partnerships and exchange opportunities we share.",
		image: "/images/homepage/pillars/global.avif",
	},
	{
		number: "05",
		detail: "Planning & Quality Assurance",
		href: "/planning-and-qa",
		note: "Learn how reflection and quality practices guide improvement.",
		image: "/images/homepage/pillars/planning.avif",
	},
	{
		number: "06",
		detail: "Compliance & Governance",
		href: "/compliance",
		note: "Browse accreditation documents and supporting evidence.",
		image: "/images/homepage/pillars/compliance.avif",
	},
];
