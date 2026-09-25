export interface Career {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employment_type: string;
  experience_level: string;
  salary_range: string | null;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const CAREERS_DATA: Career[] = [
  {
    id: "1",
    slug: "power-washing-technician",
    title: "Power Washing & Surface Restoration Technician",
    department: "Exterior Services",
    location: "Ennis, Co. Clare (covering Clare & Limerick)",
    employment_type: "Full-time / Permanent",
    experience_level: "1+ years experience preferred (Full training provided)",
    salary_range: "Competitive Hourly Rate + Performance Bonus",
    description: "We are seeking a motivated and hardworking Power Washing Technician to join our growing exterior cleaning team. You will operate commercial high-pressure cleaning equipment and softwash systems for commercial and industrial clients.",
    responsibilities: [
      "Operate heavy-duty industrial pressure washers and rotary surface cleaners safely and efficiently.",
      "Conduct soft washing, chemical applications, and biocidal rinses on roofs, facades, and patios.",
      "Drive company service vehicles between client locations across Clare and surrounding areas.",
      "Ensure adherence to health & safety standards and environmental water management guidelines.",
      "Maintain equipment and maintain high levels of customer satisfaction on every job.",
    ],
    requirements: [
      "Full clean Irish/EU Driver's License.",
      "Valid Safe Pass card (or willingness to obtain before start date).",
      "Punctual, reliable, and comfortable working outdoors in varying Irish weather conditions.",
      "Strong work ethic and positive attitude toward customer service.",
    ],
    benefits: [
      "Comprehensive on-the-job technical training and equipment certifications.",
      "Branded company uniform, safety equipment, and PPE provided.",
      "Opportunity for career progression to Senior Team Lead.",
      "Company vehicle during working hours.",
    ],
    is_active: true,
    created_at: "2026-08-01T08:00:00.000Z",
    updated_at: "2026-08-01T08:00:00.000Z",
  },
  {
    id: "2",
    slug: "commercial-cleaning-operative",
    title: "Commercial & Office Cleaning Operative",
    department: "Commercial Services",
    location: "Ennis & Shannon, Co. Clare",
    employment_type: "Full-time / Part-time",
    experience_level: "Entry Level to Experienced",
    salary_range: "Attractive Hourly Rate",
    description: "Join our commercial cleaning team responsible for delivering high-standard daily and periodic cleans for office spaces, retail outlets, and facilities in the Ennis and Shannon area.",
    responsibilities: [
      "Carry out routine sanitisation, dusting, vacuuming, and mopping of commercial premises.",
      "Replenish washroom consumables and maintain hygiene supplies.",
      "Handle waste segregation and recycling according to client site specifications.",
      "Ensure premises are securely locked and alarmed following evening clean schedules.",
    ],
    requirements: [
      "Good attention to detail and pride in delivering spotless spaces.",
      "Ability to work independently or as part of a small team.",
      "Reliable transport to work locations in Ennis/Shannon.",
    ],
    benefits: [
      "Flexible morning or evening shifts available.",
      "Steady contract hours and supportive management team.",
      "All cleaning supplies and equipment provided.",
    ],
    is_active: true,
    created_at: "2026-08-05T08:00:00.000Z",
    updated_at: "2026-08-05T08:00:00.000Z",
  },
];
