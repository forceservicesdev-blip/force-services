import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/lib/config";
import { Check, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

// Images
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import work6 from "@/assets/work-6.png";
import problem1 from "@/assets/problem-1.png";
import solution1 from "@/assets/solution-1.png";

interface WorkProjectData {
  image: string;
  title: string;
  category: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  overview: string[];
  client: string;
  services: string;
  location: string;
  duration: string;
  workSteps: { number: string; title: string; description: string }[];
  problems: string[];
  solutions: string[];
}

const worksData: Record<string, WorkProjectData> = {
  "driveway-patio-power-wash": {
    image: work1,
    title: "Driveway & Patio Power Wash",
    category: "Power Washing",
    description: "Deep power washing of extensive residential driveway and patio paving in Ennis, Co. Clare.",
    detailTitle: "Complete Exterior Paving Restoration",
    detailDescription:
      "The property had accumulated over five years of heavy moss, black lichen, and slippery green algae across a 250m² brick-paved driveway and natural sandstone patio. The homeowner needed a complete restoration without damaging the joint sand or stone surfaces.",
    overview: [
      "Commercial rotary surface power washing at calibrated PSI levels",
      "Specialized eco-friendly anti-fungal treatment to eliminate deep lichen spores",
      "Precision border and edge detailing around landscaped garden beds",
      "Re-sanding and surface sealing for lasting moss resistance",
    ],
    client: "Residential Homeowner",
    services: "Heavy-Duty Power Washing",
    location: "Ennis, Co. Clare",
    duration: "1 Day",
    workSteps: [
      { number: "01", title: "Inspection & Pre-Wash", description: "Surface testing to assess paving integrity and apply biodegradable detergent." },
      { number: "02", title: "Rotary Power Clean", description: "Even, streak-free deep pressure washing removing all moss and stubborn stains." },
      { number: "03", title: "Rinse Down", description: "Low-pressure perimeter rinse protecting flowerbeds and exterior walls." },
      { number: "04", title: "Dry & Re-Sand", description: "Kiln-dried sand brushed into joints to reinforce paving structure." },
    ],
    problems: [
      "Severe slippery algae creating a slip hazard for the residents.",
      "Black lichen ingrained deep into natural sandstone pores.",
      "Weed growth between pavers destabilizing the driveway border.",
    ],
    solutions: [
      "Targeted soft-wash biocidal application neutralising root spores.",
      "High-flow rotary washer removing grime evenly without surface gouging.",
      "Fresh joint sand compaction locking pavers in place.",
    ],
  },
  "commercial-office-clean": {
    image: work2,
    title: "Commercial Office Sanitization",
    category: "Commercial Cleaning",
    description: "Full-facility office and boardroom contract clean in Limerick City.",
    detailTitle: "Corporate Workspace Hygiene & Presentation",
    detailDescription:
      "A prominent multi-floor commercial premises in Limerick required a high-standard contract cleaning overhaul. The focus was on pristine boardroom presentation, employee desk sanitization, carpet deep cleaning, and spotless kitchen and restroom facilities.",
    overview: [
      "Daily sanitized wiping of all desks, keyboards, monitors, and touchpoints",
      "Industrial carpet extraction and spot stain removal throughout offices",
      "Complete hygiene management of restrooms with consumable replenishments",
      "Streak-free glass partition and internal window polishing",
    ],
    client: "Commercial Corporate Client",
    services: "Commercial Contract Cleaning",
    location: "Limerick City",
    duration: "Ongoing Contract",
    workSteps: [
      { number: "01", title: "Needs Assessment", description: "Formulating a tailored shift schedule (evening after-hours cleaning)." },
      { number: "02", title: "Deep Initial Clean", description: "Comprehensive baseline reset of carpets, restrooms, and work areas." },
      { number: "03", title: "Daily Maintenance", description: "Checklist-driven daily cleaning by dedicated, vetted operatives." },
      { number: "04", title: "Supervisor Audits", description: "Bi-weekly quality checks to ensure consistent 5-star hygiene." },
    ],
    problems: [
      "High employee foot traffic causing carpet staining and dust buildup.",
      "Inconsistent cleaning standards from previous contractor.",
      "Need for flexible out-of-hours cleaning to avoid staff disruption.",
    ],
    solutions: [
      "Dedicated evening cleaning crew working seamlessly after office hours.",
      "Hospital-grade disinfectant solutions and HEPA-filter vacuums.",
      "Clear communication logbook and responsive management support.",
    ],
  },
  "warehouse-industrial-degreasing": {
    image: work3,
    title: "Warehouse Floor Scrubbing & Degreasing",
    category: "Industrial Cleaning",
    description: "Industrial deep scrub and machinery area degreasing in Shannon Industrial Estate.",
    detailTitle: "Heavy-Duty Logistics Facility Restoration",
    detailDescription:
      "A 15,000 sq ft distribution warehouse in Shannon required heavy-duty scrubbing to remove forklift tyre rubber marks, oil spillages, and airborne industrial dust before a client safety compliance audit.",
    overview: [
      "Industrial ride-on scrubber-drier floor scrubbing with high-alkaline degreasers",
      "High-level dust vacuuming from steel beams, conduits, and light fixtures",
      "Loading bay power washing and chemical spill containment cleanup",
      "Safety walkway line marking clean and enhancement",
    ],
    client: "Logistics & Distribution Centre",
    services: "Industrial & Warehouse Cleaning",
    location: "Shannon Industrial Estate, Co. Clare",
    duration: "2 Days",
    workSteps: [
      { number: "01", title: "Safety Hazard Plan", description: "Marking off work zones and implementing safety protocols." },
      { number: "02", title: "Heavy Degreaser Soak", description: "Applying industrial emulsion to break down stubborn oil and tyre marks." },
      { number: "03", title: "Mechanical Scrubbing", description: "Dual-brush machine agitation followed by powerful slurry extraction." },
      { number: "04", title: "Final Wash & Dry", description: "Clean water neutralizing rinse leaving bone-dry, skid-safe floors." },
    ],
    problems: [
      "Heavily ingrained oil patches creating dangerous slip hazards.",
      "Dust settling on high warehouse racking contaminating stored goods.",
      "Strict 48-hour operational window before normal operations resumed.",
    ],
    solutions: [
      "Commercial industrial floor scrubbers with rapid suction drying.",
      "Specialized degreasing agents certified safe for concrete substrate.",
      "Continuous crew rotation to complete the project ahead of schedule.",
    ],
  },
  "post-construction-sparkle-clean": {
    image: work4,
    title: "Post-Construction Builders Clean",
    category: "Builders Clean",
    description: "After-build sparkle cleaning for a multi-unit housing development in Galway.",
    detailTitle: "Turnkey Sparkle Handover for New Homes",
    detailDescription:
      "Following the completion of an 8-home residential build in Galway, Force Services was contracted to execute both the rough builders clean and the final sparkle clean for purchaser handovers.",
    overview: [
      "Removal of fine drywall dust from all walls, ceilings, fixtures, and joinery",
      "Scraping paint, mortar, and plaster residues from windows and double-glazed frames",
      "Polishing kitchen countertops, integrated appliances, and sanitary ware",
      "Floor scrubbing, tile buffing, and debris extraction throughout all rooms",
    ],
    client: "Property Developers & Main Contractors",
    services: "Post-Construction Cleaning",
    location: "Galway Development",
    duration: "4 Days",
    workSteps: [
      { number: "01", title: "Debris & Rough Clean", description: "Clearing remaining construction scraps, protective films, and coarse dust." },
      { number: "02", title: "Detailed Scraping", description: "Razor-blade detailing on window glass and adhesive tag removal." },
      { number: "03", title: "Sparkle Polish", description: "Polishing chrome, mirrors, tile work, and kitchen cabinets inside & out." },
      { number: "04", title: "Handover Inspection", description: "Quality sign-off meeting developer and architect specifications." },
    ],
    problems: [
      "Persistent airborne plaster dust settling on freshly painted surfaces.",
      "Adhesive labels, silicone, and paint specks baked onto glass window panes.",
      "Tight completion deadline prior to final mortgage valuation inspections.",
    ],
    solutions: [
      "High-power industrial dust extractors equipped with micro-filters.",
      "Safe glass scraper techniques preventing scratches to coated glass.",
      "Multi-stage quality checks ensuring flawless move-in condition.",
    ],
  },
  "building-facade-softwash": {
    image: work5,
    title: "Commercial Building Facade Restoration",
    category: "Exterior Cleaning",
    description: "Soft-washing and exterior facade pressure clean in Ennis, Co. Clare.",
    detailTitle: "Restoring Architectural Exterior Appearance",
    detailDescription:
      "A commercial retail building in Ennis had developed significant red algae and atmospheric pollution staining across its colored render facade. Force Services executed a low-pressure soft-wash to eliminate algae without damaging the delicate render.",
    overview: [
      "Low-pressure soft-washing technique preserving external wall insulation",
      "Targeted biocidal treatment removing red and green microbial growth",
      "Gutter and soffit washdown removing road film and dirt",
      "Ground perimeter washdown leaving public walkways spotless",
    ],
    client: "Commercial Property Manager",
    services: "Facade & Render Soft-Washing",
    location: "Ennis, Co. Clare",
    duration: "1 Day",
    workSteps: [
      { number: "01", title: "Protection Setup", description: "Shielding signage, electrical outlets, and surrounding shrubs." },
      { number: "02", title: "Biocide Application", description: "Gentle chemical application targeting algae at the cellular level." },
      { number: "03", title: "Low-Pressure Rinse", description: "Washing away dead growth without blasting or eroding the render." },
      { number: "04", title: "Long-Term Prevention", description: "Applying protective biostatic rinse for lasting freshness." },
    ],
    problems: [
      "Unsightly red algae streaks negatively impacting brand image.",
      "Traditional power washing risked gouging the fragile monocouche render.",
      "Public pedestrian access required controlled safety barriers.",
    ],
    solutions: [
      "Professional soft-washing pumps delivering high volume at gentle pressure.",
      "Specialist cleaning agents tailored specifically for modern wall renders.",
      "Safety cordons and early-morning execution for public safety.",
    ],
  },
  "residential-move-in-clean": {
    image: work6,
    title: "Residential Deep & Move-In Clean",
    category: "Residential Deep Clean",
    description: "Top-to-bottom domestic move-in deep clean in Newmarket-on-Fergus.",
    detailTitle: "Fresh Start for a New Family Home",
    detailDescription:
      "A family moving into a newly acquired detached home in Newmarket-on-Fergus booked Force Services for a full deep sanitization. We tackled heavy limescale in bathrooms, built-up oven grease, and complete room sanitization.",
    overview: [
      "Deep oven, hob, extractor fan, and refrigerator degreasing",
      "Intensive bathroom descaling, grout scrub, and fixture sterilization",
      "Inside-and-out cleaning of all wardrobes, cupboards, and presses",
      "Skirting boards, architraves, window sills, and radiators washed",
    ],
    client: "Private Homeowner",
    services: "Deep Move-In Cleaning",
    location: "Newmarket-on-Fergus, Co. Clare",
    duration: "1 Day",
    workSteps: [
      { number: "01", title: "Initial Walkthrough", description: "Reviewing key customer priorities and room-by-room goals." },
      { number: "02", title: "Kitchen & Bath Attack", description: "Deep cleaning ovens, hobs, descaling showers and sanitizing toilets." },
      { number: "03", title: "Living & Bed Spaces", description: "High-to-low dusting, vacuuming, and hard floor steam mopping." },
      { number: "04", title: "Welcome Walkthrough", description: "Final client check leaving the home fresh and ready for furniture." },
    ],
    problems: [
      "Heavy limescale buildup on shower glass and bathroom tile grouting.",
      "Burnt-on carbon deposits inside the kitchen oven and extractor.",
      "Move-in scheduled for the following morning.",
    ],
    solutions: [
      "Commercial descaling agents restoring sparkling clear shower screens.",
      "Eco-friendly non-caustic oven dip tank treatments.",
      "Full 3-person team deployed to guarantee timely completion.",
    ],
  },
};

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = (slug && worksData[slug]) || worksData["driveway-patio-power-wash"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/work" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{project.title}</span>
          </div>

          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                  {project.category}
                </span>
                <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
                  {project.title}
                </h1>
                <p className="text-muted-foreground text-lg mt-2 font-medium">
                  📍 {project.location}
                </p>
              </div>
              <Link to="/quote">
                <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary/90 transition-colors shadow-sm">
                  Get a Free Quote
                </span>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Meta Bar */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs uppercase font-semibold text-muted-foreground">Client</p>
              <p className="font-bold text-foreground mt-1">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-muted-foreground">Service</p>
              <p className="font-bold text-foreground mt-1">{project.services}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-muted-foreground">Location</p>
              <p className="font-bold text-foreground mt-1">{project.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase font-semibold text-muted-foreground">Project Duration</p>
              <p className="font-bold text-foreground mt-1">{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {project.detailTitle}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.detailDescription}
                </p>

                <div className="bg-secondary rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Project Highlights & Scope
                  </h3>
                  <div className="space-y-3">
                    {project.overview.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <p className="text-foreground text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Challenges & Solutions */}
            <FadeIn delay={100}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl p-8 border border-destructive/20 shadow-sm">
                  <h3 className="text-xl font-bold text-destructive mb-4">
                    Challenges Faced
                  </h3>
                  <ul className="space-y-3">
                    {project.problems.map((prob, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-destructive font-bold">•</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-tertiary/30 shadow-sm">
                  <h3 className="text-xl font-bold text-tertiary mb-4">
                    Force Services Solution
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((sol, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-tertiary flex-shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Working Process */}
            <FadeIn delay={150}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Execution Process
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.workSteps.map((step, index) => (
                    <div key={index} className="bg-secondary rounded-2xl p-6 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                        {step.number}
                      </div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default WorkDetail;
