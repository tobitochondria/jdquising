import bulatlat from "../assets/images/bulatlat-logo.png";
import dailyGuardian from "../assets/images/daily-guardian-logo.png";
import rappler from "../assets/images/rappler-logo.png";
import intlLawBlog from "../assets/images/intl-law-blog-logo.webp";
import newBloom from "../assets/images/new-bloom-logo.webp";
import panayToday from "../assets/images/panay-today-logo.png";
import feuLogo from "../assets/images/feu-il-logo.jpg";
import gccLogo from "../assets/images/gcc-logo.png";
import cvFile from "../assets/files/jdquising_cv.pdf";

// =============================================================================
// Portfolio Data — Josiah David F. Quising, J.D.
// All CV content centralized for easy updates without touching component logic.
// =============================================================================

export const personalInfo = {
  name: "Josiah David F. Quising",
  suffix: "J.D.",
  email: "jquising@gmail.com",
  cv: cvFile,
  summary:
    "Josiah David Quising is a lawyer, professor, and human advocate engaged in legal and advocacy work with civil society organizations. He is a co-founder of Project Gunita, an initiative that helps preserve and promote historical memory, especially in relation to the Martial Law era in the Philippines. He is a Fellow of the Young Budget Leaders Program of the People's Budget Coalition and the Just Energy Transition Fellowship of the Alternative Law Groups.",
};

// -----------------------------------------------------------------------------
// Professional Experience
// -----------------------------------------------------------------------------

export const experienceCategories = [
  {
    key: "lawyer",
    label: "Lawyer",
    entries: [
      {
        organization:
          "Asian Federation Against Involuntary Disappearances (AFAD)",
        dateRange: "July 2025 – February 2026",
        role: "Program Manager",
        descriptions: [
          "Led the planning, implementation, monitoring, and evaluation of regional and national human rights projects aligned with AFAD's mission.",
          "Oversaw capacity-building initiatives, supervised project officers across Asia, managed project budgets, and ensured timely, high-quality reporting.",
        ],
      },
      {
        organization: "Federation of Free Workers",
        dateRange: "November 2024 – present",
        role: "Legal Consultant",
        descriptions: [
          "Represents workers in labor cases, conducts legal research, drafts policy recommendations, conducts presentations and lectures on labor law",
        ],
      },
      {
        organization: "Philippine-Misereor Partnership, Inc.",
        dateRange: "March 2023 – May 2025",
        role: "Campaign Lawyer",
        descriptions: [
          "Led legal campaign to push the recognition of the Rights of Nature in the Philippine legal system, drafting of proposed bills such as Prevention of Ecocide, Environmental Defenders Protection, and other parallel bills and local ordinances.",
          "Provided support and counsel for anti-mining campaign, indigenous people's rights, and environmental law advocacy.",
          "Included policy lobbying, political mapping and communications, and engagement with different national government agencies.",
        ],
      },
      {
        organization: "Solo Practice",
        dateRange: "June 2022 – present",
        role: null,
        descriptions: [
          "Criminal, labor, civil law, and intellectual property law.",
        ],
      },
      {
        organization: "Trojillo, Ansaldo & Marañon Law Offices",
        dateRange: "October 2021 – June 2022",
        role: null,
        descriptions: [
          "Pre-bar intern and paralegal from October 2021 to May 2022.",
          "Drafted and reviewed pleadings, helped in filing and answering election protests, researching legal arguments, and general assistance to client-candidates; legal team for election concerns for Vice President Leni Robredo for the 2022 National Elections.",
        ],
      },
    ],
  },
  {
    key: "faculty",
    label: "Faculty",
    entries: [
      {
        organization:
          "Far Eastern University - Institute of Law",
        dateRange: "August 2022 – present",
        role: null,
        descriptions: [
          "Public International Law; Thesis; Legal Research.",
          "Faculty Adviser for the Far Eastern Law Review.",
        ],
      },
      {
        organization: "Mapua Malayan Digital College",
        dateRange: "November 2022 – present",
        role: null,
        descriptions: [
          "Microeconomics; Business Law; Good Governance and Social Responsibility; International Trade Agreements; Operations Management; Labor Law; Environmental Management Systems.",
        ],
      },
    ],
  },
  {
    key: "research",
    label: "Research Consultant, Writer, Editor",
    entries: [
      {
        organization: "Ban Toxics",
        dateRange: "March 2025 – January 2026",
        role: null,
        descriptions: [
          "Policy Consultant on Healthcare Waste Management Policy Gap Analysis project.",
        ],
      },
      {
        organization: "Ateneo Human Rights Center",
        dateRange: "May 2024 – August 2024",
        role: null,
        descriptions: [
          "Researched for the Working Group for ASEAN Human Rights Mechanisms.",
          "Analyzed the ASEAN Community Vision 2025 vis-a-vis international human rights law.",
          "Drafted recommended provisions for ASEAN Community Vision 2045.",
        ],
      },
      {
        organization: "Center for Environmental Concerns",
        dateRange: "December 2023 – March 2024",
        role: null,
        descriptions: [
          "Researched on the human rights impact of projects in South Asia and Southeast Asia financed by international financial institutions and their responses to the complaints.",
        ],
      },
      {
        organization: "Alternative Law Group",
        dateRange: "August 2022 – November 2022",
        role: null,
        descriptions: [
          "Conducted research on current reporting systems in the Philippines and wrote recommendations for the development of a feedback and referral system for human rights violations.",
        ],
      },
      {
        organization: "Right to Know Right Now Coalition",
        dateRange: "February 2022 – August 2022",
        role: null,
        descriptions: [
          "Work with Project Co-Director for Programs/Legal in the implementation of project objectives, plans and activities.",
          "Prepare Project briefs, presentations and relevant Project materials; Provide data-gathering and research assistance.",
        ],
      },
    ],
  },
  {
    key: "personal-researcher",
    label: "Personal Researcher / Writer",
    entries: [
      {
        organization: "Francis Tom Temprosa, JD, LLM, SJD",
        dateRange: "September 2019 – May 2021",
        role: null,
        descriptions: [
          "Research areas: international human rights law, international investment law (ICSID, PCA, PH, US, & UK jurisprudence) and general editorial assistance.",
        ],
      },
      {
        organization: "Lowell Bautista, LLB, LLM, PhD",
        dateRange: "September to October 2019; January to February 2020",
        role: null,
        descriptions: [
          "Research areas: International laws of the sea (UNCLOS), historic rights, and corresponding jurisprudence.",
        ],
      },
      {
        organization: "John Roy Robert Real, JD, MBA, LLM",
        dateRange: "May to June 2018",
        role: null,
        descriptions: [
          "Research areas: ASEAN environmental laws and jurisprudence.",
        ],
      },
    ],
  },
  {
    key: "legal-intern",
    label: "Legal Intern",
    entries: [
      {
        organization: "Du-Baladad & Associates",
        dateRange: "June to July 2017",
        role: null,
        descriptions: [
          "Tax procedures, Court of Tax Appeals observation, preparation of pleadings and other court documents.",
        ],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Published Works
// -----------------------------------------------------------------------------

export const publishedWorks = [
  {
    journal: "The Antoninus Journal",
    title:
      "Ecological and Legal Implications of the Proposed Development in a Ramsar Site in Metro Manila, Philippines",
    citation:
      "10 The Antoninus Journal 94",
    url: "https://theantoninus.com.ph/issues/95/",
  },
  {
    journal: "European Law Journal (EULJ)",
    title:
      "Beyond OPOSA: Courts reinforcing intergenerational equity as customary international law.",
    citation:
      "Eur Law J. 2023; 29:422-444. doi:10.1111/eulj.12489",
    url: "https://www.researchgate.net/publication/379059196_Beyond_OPOSA_Courts_reinforcing_intergenerational_equity_as_customary_international_law",
  },
  {
    journal: "The Far Eastern Law Review (FELR)",
    title:
      "The Limits of Presidential Immunity: Revisiting a Misunderstood Privilege (2017).",
    citation: "46 FELR 70, 2017",
    url: "https://ssrn.com/abstract=3660241",
  },
  {
    journal: "The Far Eastern Law Review (FELR)",
    title:
      "The Freedom to Dissent: Exploring the Value of Opposition Through the Exercise of Free Speech (2018).",
    citation: "47 FELR 60, 2018",
    url: "https://ssrn.com/abstract=3660285",
  },
  {
    journal: "The Far Eastern Law Review (FELR)",
    title:
      "The Killing Joke: Liability of States and Individuals in 'Inspiring' Criminality (2019).",
    citation: "48 FELR 69, 2019",
    url: "https://ssrn.com/abstract=3660292",
  },
];

// -----------------------------------------------------------------------------
// Education
// -----------------------------------------------------------------------------

export const education = [
  {
    institution: "Far Eastern University - Institute of Law",
    degree: "Law (J.D.)",
    dateRange: "2015 – 2019",
    details: ["Editor-in-Chief, Far Eastern Law Review"],
    logo: feuLogo,
  },
  {
    institution: "Grace Christian College",
    degree: "B.A. Business Administration, Major in Operations Management",
    dateRange: "2011 – 2015",
    details: ["Cum Laude; 3.55 GPA; consistent merit scholar"],
    logo: gccLogo,
  },
];

// -----------------------------------------------------------------------------
// Academic Awards
// -----------------------------------------------------------------------------

export const academicAwards = [
  {
    organization: "Supreme Court of the Philippines",
    items: [
      "2021/22 Bar Examinations - Recognized Exemplary Passer (85.87%)",
    ],
  },
  {
    organization: "Foundation for Liberty & Prosperity (FLP)",
    items: [
      "First Place Winner of the AY 2018-2019 Dissertation Writing Contest (Liberty and Prosperity for Future Generations: Intergenerational Equity as Customary International Law)",
      "Panel of Judges composed of: Supreme Court Assoc. Justice Estela M. Perlas-Bernabe (Chair), Retired Supreme Court Assoc. Justice Angelina Sandoval-Gutierrez, Atty. Solomon Hermosura (Ayala Corporation), Dean Joan Sarausos-Largo (Univ. of San Carlos, PALS-President), Atty. Joel Gregorio (FLP Corporate Secretary)",
      "Academic scholar (A.Y. 2017 - 2018)",
    ],
  },
  {
    organization: "Far Eastern University - Institute of Law",
    items: ["Merit scholar (A.Y. 2015-2017)"],
  },
  {
    organization: "Grace Christian College",
    items: ["Cum Laude (3.79, GPA)", "Merit scholar (A.Y. 2011-2015)"],
  },
];

// -----------------------------------------------------------------------------
// Academic Conferences
// -----------------------------------------------------------------------------

export const academicConferences = [
  {
    title: "Resisting Autocratization in Polarized Societies",
    organization: "International Political Science Association (2025 World Congress)",
    role: "Panelist",
    topic:
      "The Cost of Clean Energy: Human and Environmental Rights in the Philippines' Renewable Energy Transition",
    location: "Coex Convention Center, Seoul, South Korea",
    date: "12-16 July 2025",
  },
  {
    title: "Changes and (Dis)Continuities",
    organization: "Philippine Political Science Association",
    role: "Panelist",
    topic:
      "Rights, Rules, and Renewables: Exploring a Just Energy Transition Framework in Local Government",
    location: "Newtown Plaza Convention Center, Baguio City, Philippines",
    date: "23-24 May 2025",
  },
  {
    title: "13th Asia-Pacific Regional Conference",
    organization: "International Society for Third-Sector Research",
    role: "Panelist",
    topic: "Indigenous Peoples and the Rights of Nature",
    location: "UP-Cebu College of Social Sciences",
    date: "23-25 April 2025",
  },
  {
    title: "2nd National People's Science Summit",
    organization: "AGHAM",
    role: "Panelist",
    topic:
      "Funding Oppression: Complicity of the IFI in Human and Environmental Rights Violations",
    location:
      "Institute of Biology - UP Diliman, Quezon City, Philippines",
    date: "9-10 November 2024",
  },
  {
    title: "12th Annual Conference on Environmental Sciences",
    organization: "UPLB-SESAM",
    role: "Panelist",
    topic:
      "Cost of Clean Energy: Human and Environmental Rights Amidst the Philippines' Renewable Energy Transition",
    location:
      "Palawan State University, Puerto Princesa City, Philippines",
    date: "6-8 November 2024",
  },
  {
    title: "Reimagining Margins, Reclaiming Borders",
    organization: "Philippine Political Science Association",
    role: "Panelist",
    topic:
      "Legal Impacts of the Non-Enforcement of the SCS Arbitration Award",
    location: "MSU-IIT, Iligan City, Philippines",
    date: "2-4 May 2024",
  },
  {
    title: "Towards New Modalities of Governance in Asia",
    organization:
      "Asian Political & International Studies Association",
    role: "Panelist",
    topic:
      "Words that Kill: Examining the Effects of Red Tagging and Violent Speeches on Human Rights and Democracy",
    location: "Warmadewa College, Bali, Indonesia",
    date: "29 June – 1 July 2023",
  },
  {
    title: "Courts as an Arena for Societal Change",
    organization: "European Society of International Law",
    role: "Panelist",
    topic:
      "Intergenerational Equity as Customary International Law",
    location: "Leiden University, The Netherlands",
    date: "8-9 July 2022",
  },
];

// -----------------------------------------------------------------------------
// Short Courses
// -----------------------------------------------------------------------------

export const shortCourses = [
  {
    title:
      "Teaching International Environmental Law in Asia (Online Short Course)",
    institution:
      "Center for International Law, National University of Singapore",
    dateRange: "February 14 – 28, 2025",
    details: [
      "International Environmental law; teaching techniques and best practices.",
    ],
  },
  {
    title: "Regional Course on Public Interest Lawyering",
    institution: "Fordham University School of Law; PILNet",
    dateRange: "March 4 – April 5, 2024",
    details: [
      "Access to Justice; Pro Bono Publico; Legal Empowerment; Strategic Litigation.",
    ],
  },
  {
    title: "International Winter School on Public Policy",
    institution: "International Public Policy Association",
    dateRange: "November 29 – December 1, 2023",
    details: [
      "Studying Policy Process with Constructivist, Pragmatic, and Qualitative Approaches; Workshop: Digital Governance Track.",
    ],
  },
  {
    title: "Online Winter Courses Program",
    institution: "The Hague Academy of International Law",
    dateRange: "January 11 – January 29, 2021",
    details: [
      "Int'l Law-Making for the Environment, Evidence in Int'l Adjudication, The Emergency of Food Sovereignty in Int'l Law, Protection of Religious Cultural Property in Public and Private Int'l Law, Int'l Law and Normative Polycentrism, Civil War and the Transformation of Int'l Law, The Regulation of the Internet, and Relationships between Int'l Criminal Law and other branches of Int'l Law.",
    ],
  },
];

// -----------------------------------------------------------------------------
// Fellowships
// -----------------------------------------------------------------------------

export const fellowships = [
  {
    title: "Just Energy Transition Fellowship",
    organization: "Alternative Law Groups",
    details: [
      "Fellows receive training, workshops, and community immersion activities regarding the environmental and human rights impact of renewable energy projects.",
    ],
  },
  {
    title: "Young Budget Leaders Fellowship",
    organization:
      "Institute of Empowerment, Leadership, and Democracy (iLEAD)",
    details: [
      "Fellow representing the Human Rights and Justice Sector.",
      "Fellows receive mentorship and coaching with subject matter experts and budget technical and process experts, with the goal to advocate for their sectoral budget in succeeding national budget cycles in Congress.",
    ],
  },
  {
    title:
      "Faculty Fellowship on Teaching International Law to Filipinos",
    organization: "Legal Education Advancement Program (LEAP)",
    details: [
      "Fellows are guided to teach vital international law issues involving the Philippines and tasked to produce a model syllabus with a complete set of course materials.",
    ],
  },
];

// -----------------------------------------------------------------------------
// Speaking Engagements
// -----------------------------------------------------------------------------

export const speakingEngagements = [
  {
    title: "Two-Day Training on Basic Workers' Rights for Digital Platform Workers",
    organization: "Federation of Free Workers (FFW) / Danish Trade Union Development Agency",
    role: "Resource Person",
    topic: "Basic Workers' Rights for Digital Platform Workers",
    location: "Occupational Safety and Health Center (OSHC), North Avenue, Quezon City",
    date: "15-16 March 2026",
  },
  {
    title: "Pakighimamat: An Educational Discussion - Power in Collective Action",
    organization: "Polikratos, Cebu Normal University - Main Campus",
    role: "Resource Speaker",
    topic: "Power in Collective Action and Social Movements in Celebration of the EDSA People Power Revolution Anniversary",
    location: "via Zoom",
    date: "21 February 2026",
  },
  {
    title:
      "Memory and Resistance: Teaching Martial Law History and Human Rights Amidst Impunity and Disinformation",
    organization:
      "Saint Louis University - Political Science Academic Society",
    role: "Resource Speaker",
    topic: "Academic Discussion on the Enforced Disappearances Act",
    location: "Baguio City",
    date: "14 October 2025",
  },
  {
    title: "AnchorED: Martial Flawed",
    organization:
      "UP Diliman National College of Public Administration and Governance",
    role: "Resource Speaker",
    topic: "Martial Law History Parallelism to Current Issues",
    location: "UP Diliman, Quezon City",
    date: "29 September 2025",
  },
  {
    title:
      "Balitang Pasahero: Countering Historical Distortion in the Age of Fake News and Disinformation",
    organization: "FEU Alabang Parliamentary Society",
    role: "Resource Speaker",
    topic: "Countering Historical Distortion in Martial Law History",
    location: "FEU Alabang",
    date: "25 September 2025",
  },
  {
    title: "All Union Forum on Legal Briefs of Rights Violations",
    organization: "Federation of Free Workers",
    role: "Resource Speaker",
    topic: "Labor Rights and the Proposed Writ of Manggagawa",
    location: "Occupational Safety and Health Center (OSHC), Quezon City",
    date: "6 August 2025",
  },
  {
    title: "Unmasking the Truth: Martial Law under Marcos",
    organization: "FEU-NRMF School of Nursing",
    role: "Resource Speaker",
    topic: "Martial Law History",
    location: "via Zoom",
    date: "9 May 2025",
  },
  {
    title: "EmpowerED FSTval",
    organization: "UP Diliman University Freshie Council",
    role: "Resource Speaker",
    topic: "Remembering Martial Law",
    location: "UP Diliman, Quezon City",
    date: "7 March 2025",
  },
  {
    title:
      "DAPAT TAMA: Igniting Conversation on Perspectives about Substance Abuse Towards an Effective Prevention",
    organization:
      "Far Eastern University Drug Abuse Prevention Core Group",
    role: "Resource Speaker",
    topic: "Human Rights Approach in Drug Abuse Prevention",
    location: "Far Eastern University, Manila",
    date: "23 January 2025",
  },
  {
    title:
      "Second Social Studies Colloquium: Reinforcing and Revamping Social Studies Educators",
    organization: "League of Social Studies Majors",
    role: "Resource Speaker",
    topic: "Combating Historical Distortion",
    location:
      "University of Nueva Caceres, Naga City, Camarines Sur",
    date: "20 April 2024",
  },
  {
    title: "Western Visayas Island Wide Student Summit",
    organization: "West Visayas Youth Alliance",
    role: "Resource Speaker",
    topic: "Student Rights and Campus Publication Management",
    location:
      "St. Clement's Church Jubilee Hall, Lapaz, Iloilo City",
    date: "19 August 2023",
  },
  {
    title: "ASEAN Youth Week Opening Day",
    organization: "ASEAN Youth Advocates Network",
    role: "Resource Speaker",
    topic: "ASEAN Youth Integration and Historical Narratives",
    location: "Jose Rizal University, Mandaluyong City",
    date: "6 August 2023",
  },
  {
    title: "Moot Court Training-Seminar",
    organization:
      "Colegia dela Purisma Concepcion - College Law",
    role: "Resource Speaker",
    topic:
      "Fundamentals of Moot Court in Law School, Colegia dela Purisma Concepcion, Roxas City, Capiz",
    location: "Roxas City, Capiz",
    date: "28 January 2023",
  },
  {
    title: "5th Public History Symposium",
    organization:
      "University of the Philippines - Department of History",
    role: "Resource Speaker",
    topic:
      "Martial Law History in the Lens of the Judiciary",
    location: "Online",
    date: "7 October 2022",
  },
  {
    title: "Kaya Natin Academy for Young Leaders",
    organization: null,
    role: "Resource Speaker",
    topic:
      "Youth in Action: Taking up space in Civic Engagement and Governance",
    location: "Pasig City Hall, Pasig City",
    date: "1 October 2022",
  },
];

// -----------------------------------------------------------------------------
// Opinion Pieces
// -----------------------------------------------------------------------------

export const opinionPieces = [
  {
    outlet: "Bulatlat",
    outletDescription:
      "Multi-awarded Manila-based alternative online news source for human rights journalism",
    logo: bulatlat,
    articles: [
      {
        title: "Student rights as lip service",
        url: "https://www.bulatlat.com/2025/11/24/student-rights-as-lip-service/",
      },
      {
        title:
          "Western Visayas groups criticize tax hikes, new transport routes",
        url: "https://www.bulatlat.com/2025/09/10/western-visayas-groups-criticize-tax-hikes-new-transport-routes/",
      },
      {
        title:
          "Agusan 6 lawyers oppose IP detainee's transfer to military camp",
        url: "https://www.bulatlat.com/2025/09/10/agusan-6-lawyers-oppose-ip-detainees-transfer-to-military-camp/",
      },
      {
        title: "When justice is missing, impunity surfaces",
        url: "https://www.bulatlat.com/2025/08/30/when-justice-is-missing-impunity-surfaces/",
      },
      {
        title: "ICC Warrant of Arrest in Tagalog",
        url: "https://www.bulatlat.com/2025/08/20/icc-warrant-of-arrest-in-tagalog/",
      },
      {
        title:
          "Ten years of the Philippines' National Indigenous Peoples Day: Who defends the defenders?",
        url: "https://www.bulatlat.com/2025/08/08/ten-years-of-the-philippines-national-indigenous-peoples-day-who-defends-the-defenders/",
      },
      {
        title:
          "Revolutionary in more ways than one: The progressive principles of the Kartilya ng Katipunan",
        url: "https://www.bulatlat.com/2025/07/08/revolutionary-in-more-ways-than-one-the-progressive-principles-of-the-kartilya-ng-katipunan/",
      },
      {
        title: "Outdated labor policies in app-based employment",
        url: "https://www.bulatlat.com/2025/06/17/outdated-labor-policies-in-app-based-employment/",
      },
      {
        title:
          "Guide and recommendations for LGUs for a rights-based approach to environmental protection",
        url: "https://www.bulatlat.com/2025/06/06/guide-and-recommendations-for-lgus-for-a-rights-based-approach-to-environmental-protection/",
      },
      {
        title:
          "Are protected areas really protected? : Gaps in reclamation policies surrounding Las Piñas-Parañaque Wetland Park",
        url: "https://www.bulatlat.com/2025/05/06/are-protected-areas-really-protected-gaps-in-reclamation-policies-surrounding-las-pinas-paranaque-wetland-park/",
      },
      {
        title:
          "A child of impunity: Explaining the disqualification case against Duterte Youth",
        url: "https://www.bulatlat.com/2025/05/31/a-child-of-impunity-explaining-the-disqualification-case-against-duterte-youth/",
      },
      {
        title:
          "Legal feasibility of a hybrid manual-automated election counting system in the Philippines",
        url: "https://www.bulatlat.com/2025/05/17/legal-feasibility-of-a-hybrid-manual-automated-election-counting-system-in-the-philippines/",
      },
      {
        title:
          "70 years of freedom on paper: A reality check on Filipino workers' freedom of association",
        url: "https://www.bulatlat.com/2025/05/07/70-years-of-freedom-on-paper-a-reality-check-on-filipino-workers-freedom-of-association/",
      },
    ],
  },
  {
    outlet: "Rappler",
    outletDescription: "Multi-awarded Manila-based online news network",
    logo: rappler,
    articles: [
      {
        title:
          "Project Gunita: Keeping the stories of Martial Law victims alive",
        url: "https://www.rappler.com/moveph/project-gunita-keeping-stories-martial-law-victims-alive/",
      },
    ],
  },
  {
    outlet: "International Law Blog",
    outletDescription:
      "London-based online peer-reviewed platform for legal commentaries",
    logo: intlLawBlog,
    articles: [
      {
        title:
          "Indigenous Peoples and the Rights of Nature: A New Paradigm for Environmental Justice in the Philippines",
        url: "https://internationallaw.blog/2023/06/12/indigenous-peoples-and-the-rights-of-nature-a-new-paradigm-for-environmental-justice-in-the-philippines/",
      },
    ],
  },
  {
    outlet: "New Bloom Magazine",
    outletDescription:
      "Taiwan-based independent, alternative media outfit",
    logo: newBloom,
    articles: [
      {
        title: "The Rodrigo Roa Duterte Case: An Explainer",
        url: "https://newbloommag.net/2025/04/07/duterte-case-explainer/",
      },
    ],
  },
  {
    outlet: "Daily Guardian",
    outletDescription:
      "Iloilo-based publishing firm and media outfit",
    logo: dailyGuardian,
    articles: [
      {
        title: "On Data Privacy and Unauthorized Photography",
        url: "https://dailyguardian.com.ph/on-data-privacy-and-unauthorized-photography/",
      },
      {
        title: "Iloilo EO 167: A Threat to Free Speech",
        url: "https://dailyguardian.com.ph/iloilo-eo-167-a-threat-to-free-speech/",
      },
      {
        title:
          "Of student affairs and student rights: Explaining the case of UST-OSA and TomasinoWeb",
        url: "https://dailyguardian.com.ph/of-student-affairs-and-student-rights-explaining-the-case-of-ust-osa-and-tomasinoweb/",
      },
    ],
  },
  {
    outlet: "Panay Today",
    outletDescription:
      "Iloilo-based regional independent, alternative media outfit",
    logo: panayToday,
    articles: [
      {
        title: "Red tagging should have no place in universities.",
        url: "https://panaytoday.net/red-tagging-should-have-no-place-in-universities/",
      },
      {
        title:
          "More Than Just Shoes: Defending Student Rights and Expression of WVSU Students",
        url: "https://panaytoday.net/more-than-just-shoes-defending-student-rights-and-expression-of-wvsu-students/",
      },
      {
        title:
          '"Bakit sa ICC? Bakit hindi dito sa Pilipinas?": Paglilinaw sa Batas Internasyonal Tungkol sa Kaso ni Duterte',
        url: "https://panaytoday.net/bakit-sa-icc-bakit-hindi-dito-sa-pilipinas-paglilinaw-sa-batas-internasyonal-tungkol-sa-kaso-ni-duterte/",
      },
      {
        title:
          '"Ano Naman ang Kasalanan Ko?": Paglilinaw sa Kaso ni Rodrigo Duterte sa ICC',
        url: "https://panaytoday.net/ano-naman-ang-kasalanan-ko-paglilinaw-sa-kaso-ni-rodrigo-duterte-sa-icc/",
      },
      {
        title:
          "The Reality of Unchecked Increases in Tuition and Other Fees",
        url: "https://panaytoday.net/of-vague-laws-and-flawed-frameworks-the-reality-of-unchecked-increases-in-tuition-and-other-fees/",
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Working Papers & Research Contributions
// -----------------------------------------------------------------------------

export const workingPapers = [
  {
    title:
      "Funding Oppression: A Report on the Complicity of the IFC in Violation of Human and Environmental Rights in South Asia and Southeast Asia",
    url: "https://apned.net/wp-content/uploads/2024/03/Funding-Oppression_Update_3-11-24.pdf",
    note: "as contributing researcher",
  },
  {
    title:
      "Budget Natin: A Guidebook for Engaging the Philippine Budget Cycle",
    url: "https://www.researchgate.net/publication/374087909_Budget_Natin_A_Guidebook_for_Engaging_the_Philippine_Budget_Cycle",
    note: 'as contributing researcher/"Young Budget Leader"',
  },
];

// -----------------------------------------------------------------------------
// Media Appearances and Interviews
// -----------------------------------------------------------------------------

export const mediaAppearances = {
  // Radio and news report interviews
  interviews: [
    {
      outlet: "Bombo Radyo Iloilo",
      title:
        "Citizen Rights Watch Network ginkwestyon ang paghatag sang West Visayas State University sang titulo nga Doctor of Laws, honoris causa kay First Lady Atty. Liza Araneta Marcos",
      date: "14 June 2024",
      url: "https://iloilo.bomboradyo.com/citizen-rights-watch-network-ginkwestyon-ang-paghatag-sang-west-visayas-state-university-sang-titulo-nga-doctor-of-laws-honoris-causa-kay-first-lady-atty-liza-araneta-marcos/",
    },
    {
      outlet: "Bombo Radyo Iloilo",
      title:
        "Legal Education Board nanindugan nga deserving si First Lady / Atty. Liza Araneta Marcos sang honoris causa Doctor of Laws degree",
      date: "2024",
      url: "https://iloilo.bomboradyo.com/legal-education-board-nanindugan-nga-deserving-si-first-lady-atty-liza-araneta-marcos-sang-honoris-causa-doctor-of-laws-degree/",
    },
    {
      outlet: "DZUP",
      title: "Diktaduryong Marcos: Ang Katotohanan ng Batas Militar",
      date: "23 September 2024",
      url: "https://www.youtube.com/watch?v=vEPJGCYjlTM",
    },
    {
      outlet: "Bombo Radyo Dagupan",
      title:
        "Paggunita ng Ninoy Aquino Day, paalala sa papel ng mamamayan sa pagtataguyod ng demokrasya",
      date: "18 August 2025",
      url: "https://dagupan.bomboradyo.com/paggunita-ng-ninoy-aquino-day-paalala-sa-papel-ng-mamamayan-sa-pagtataguyod-ng-demokrasya/",
    },
    {
      outlet: "Bombo Radyo Iloilo",
      title:
        "Wala sang kinamatarong ang isa ka estado nga mag-aresto sang isa ka lider sang lain nga pungsod \u2013 Atty. Josiah David Quising",
      date: "6 January 2026",
      url: "https://iloilo.bomboradyo.com/wala-sang-kinamatarong-ang-isa-ka-estado-nga-mag-aresto-sang-isa-ka-lider-sang-lain-nga-pungsod-atty-josiah-david-quising/",
      reelUrl: "https://www.facebook.com/share/v/18UUnm1xpJ/",
    },
  ],
  // TV, YouTube, and social video appearances
  broadcastVideos: [
    {
      outlet: "ABS-CBN News",
      title: "Project Gunita seeks to preserve PH's Martial Law history",
      date: "21 September 2022",
      url: "https://www.abs-cbn.com/video/news/09/21/22/project-gunita-seeks-to-preserve-phs-martial-law-history",
    },
    {
      outlet: "ABS-CBN News (YouTube)",
      title: "Project Gunita Feature Segment",
      date: "21 September 2022",
      url: "https://www.youtube.com/watch?v=atZ9r-iqcE0",
    },
    {
      outlet: "Bombo Radyo Iloilo (Facebook)",
      title: "Citizens Rights Watch Network Interview Clip",
      date: "18 August 2025",
      url: "https://www.facebook.com/watch/?v=794683802979072",
    },
    {
      outlet: "Bombo Radyo Dagupan",
      title: "Commemoration of 40th Anniversary of the People Power Revolution",
      date: "20 February 2026",
      url: "https://www.facebook.com/reel/25870349852606797",
    },
  ],
  // News articles quoting or profiling
  newsFeatures: [
    {
      outlet: "PhilSTAR Life",
      title: "Holding on to history's pages with Project Gunita",
      date: "22 September 2023",
      url: "https://philstarlife.com/geeky/160336-project-gunita-educating-people-martial-law",
    },
    {
      outlet: "ABS-CBN News",
      title: "Youth vow to preserve Martial Law truth for aging survivors",
      date: "21 September 2022",
      url: "https://www.abs-cbn.com/spotlight/09/21/22/youth-vow-to-preserve-martial-law-truth-for-aging-survivors",
    },
    {
      outlet: "Sveriges Radio",
      title:
        "Han greps f\u00f6r 50 \u00e5r sedan under Marcos skr\u00e4ckv\u00e4lde - nu styr sonen Bongbong - Studio Ett",
      date: "22 September 2022",
      url: "https://www.sverigesradio.se/artikel/han-greps-for-50-ar-sedan-under-marcos-skrackvalde-nu-styr-sonen-bongbong",
    },
    {
      outlet: "Rappler",
      title: "Young generations continue fight to protect Martial Law memories",
      date: "21 September 2022",
      url: "https://www.rappler.com/newsbreak/in-depth/young-generations-continue-fight-protect-martial-law-memories-declaration-anniversary-2022/",
    },
    {
      outlet: "Rappler",
      title: "Project Gunita: Keeping the stories of Martial Law victims alive",
      date: "29 August 2022",
      url: "https://www.rappler.com/moveph/project-gunita-keeping-stories-martial-law-victims-alive/",
    },
    {
      outlet: "Panay News",
      title: "On First Lady's honorary degree: WVSU College of Law complied with memo circular \u2013 LEB",
      date: "2024",
      url: "https://www.panaynews.net/on-first-ladys-honorary-degree-wvsu-college-of-law-complied-with-memo-circular-leb/",
    },
  ],
};

// -----------------------------------------------------------------------------
// Navigation links (used by Navbar)
// -----------------------------------------------------------------------------

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#education", label: "Education" },
  { href: "#awards", label: "Awards" },
  { href: "#conferences", label: "Conferences" },
  { href: "#courses", label: "Courses" },
  { href: "#fellowships", label: "Fellowships" },
  { href: "#speaking", label: "Speaking" },
  { href: "#writings", label: "Writings" },
  { href: "#media", label: "Media" },
];
