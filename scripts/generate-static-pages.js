import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const COMPANY = {
  name: "Force Services",
  phone: "+353 87 494 5684",
  secondaryPhone: "+353 85 765 0548",
  email: "forceservicesie@gmail.com",
  whatsappNumber: "+353874945684",
  address: "Apartment 1, Limerick Road, Newmarket-on-Fergus, Ennis, Co. Clare",
  serviceArea: "County Clare & County Limerick",
  year: new Date().getFullYear(),
};

const serviceData = {
  "power-washing": {
    path: "services/power-washing",
    title: "Commercial Power Washing & Pressure Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Commercial Power Washing & Pressure Cleaning Services",
    tagline:
      "Heavy-duty exterior pressure washing for commercial premises, forecourts, carparks, and retail entrances across Clare and Limerick.",
    metaDescription:
      "Commercial power washing and high-pressure cleaning services for business premises, carparks, paving, and facades across Ennis, Shannon, Clare, and Limerick.",
    targetAudience:
      "Business owners, property managers, commercial landlords, retail parks, and facility managers requiring immaculate presentation and slip-free safety compliance.",
    aboutTitle: "High-Performance Pressure Cleaning for Commercial Facilities",
    aboutDescription:
      "Maintain a safe, welcoming, and pristine exterior for your commercial property with Force Services' specialized high-pressure washing.\n\nIn County Clare and County Limerick, frequent rain and damp conditions cause rapid accumulation of slippery algae, black lichen, moss, and vehicle grime on commercial surfaces. We deploy commercial-grade rotary surface cleaners and high-output pressure washers to systematically restore concrete forecourts, block paving, loading areas, and exterior building perimeters without causing substrate damage.",
    included: [
      "Commercial forecourts, carparks, and loading dock washdown",
      "Retail entrance paving, concrete walkways, and pedestrian paths",
      "Building perimeters, low-level facades, and boundary wall wash",
      "Moss, black lichen, and hazardous slippery algae eradication",
      "Commercial grease, oil, and tyre mark pressure treatment",
      "Complete site washdown and drainage channel clearance",
    ],
    benefits: [
      "Eliminates slip and fall hazards for staff, clients, and the public",
      "Protects corporate curb appeal and commercial property valuation",
      "Flexible out-of-hours scheduling to prevent business disruption",
      "Industrial-grade equipment delivering uniform, streak-free results",
    ],
    workSteps: [
      {
        number: "01",
        title: "Site Assessment & Safety Plan",
        description:
          "We assess surface composition, staining, drainage, and pedestrian access to determine pressure settings and safety boundaries.",
      },
      {
        number: "02",
        title: "Perimeter Protection",
        description:
          "Electrical points, delicate exterior features, and landscaping are secured prior to starting work.",
      },
      {
        number: "03",
        title: "Commercial Power Wash",
        description:
          "Commercial rotary surface cleaners and lance attachments systematically strip away embedded grime, oil, and algae.",
      },
      {
        number: "04",
        title: "Washdown & Handover",
        description:
          "Full washdown of surrounding perimeters and walkthrough with your facility representative.",
      },
    ],
    relatedServices: [
      {
        slug: "exterior-cleaning",
        title: "Building Facade & Exterior Cleaning",
        shortDesc: "Specialized soft-wash and pressure cleaning for commercial facades and cladding.",
      },
      {
        slug: "industrial-cleaning",
        title: "Industrial & Warehouse Cleaning",
        shortDesc: "Heavy-duty mechanical floor scrubbing and degreasing for warehouse facilities.",
      },
      {
        slug: "commercial-cleaning",
        title: "Commercial Cleaning Services",
        shortDesc: "Scheduled routine contract cleaning for office and corporate commercial premises.",
      },
    ],
  },
  "commercial-cleaning": {
    path: "services/commercial-cleaning",
    title: "Commercial Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Commercial Cleaning Services in County Clare & Limerick",
    tagline:
      "Reliable, hygienic, and flexible contract commercial cleaning services for corporate offices, retail stores, and commercial premises across Ennis, Shannon, Clare, and Limerick.",
    metaDescription:
      "Professional commercial cleaning services and office cleaning services across County Clare and Limerick, including Ennis and Shannon. Flexible contracts for businesses.",
    targetAudience:
      "Office managers, facility directors, business executives, retail store managers, medical clinic directors, and commercial premises requiring dependable, top-tier hygiene standards.",
    aboutTitle: "Tailored Commercial & Office Cleaning Services for Clare & Limerick Businesses",
    aboutDescription:
      "A clean working environment improves productivity, protects staff wellbeing, and creates an exceptional first impression on visiting clients.\n\nForce Services provides tailored commercial cleaning services and contract office cleaning across County Clare (including Ennis, Shannon, and Newmarket-on-Fergus) and County Limerick. We customize our cleaning schedules — whether daily, multi-day, weekly, or fortnightly — and align working hours with your operational preferences to ensure zero business disruption.",
    included: [
      "Desk, workstation, and high-touch point sanitization",
      "Commercial floor vacuuming, hard floor mopping, and machine buffing",
      "Office kitchen, canteen, and staff breakroom deep sanitization",
      "Commercial restroom hygiene, sanitization, and consumable restocking",
      "Waste segregation, bin emptying, and liner replacement",
      "Internal glass partitions, meeting rooms, and reception detailing",
    ],
    benefits: [
      "Promotes a healthier workplace and reduces sick leave across teams",
      "Creates an immaculate, professional impression for visiting clients",
      "Flexible contracts (daily, weekly, fortnightly, or monthly)",
      "Vetted, trained, and fully insured commercial cleaners",
    ],
    workSteps: [
      {
        number: "01",
        title: "Premises Walkthrough",
        description:
          "We evaluate your space, footfall intensity, and hygiene priorities to formulate a detailed commercial cleaning checklist.",
      },
      {
        number: "02",
        title: "Service Agreement",
        description:
          "We establish agreed cleaning hours, checklist tasks, and frequency tailored to your operational hours.",
      },
      {
        number: "03",
        title: "Dedicated Team Deployment",
        description:
          "Our trained cleaning crew carries out thorough, checklist-driven cleaning using professional-grade supplies.",
      },
      {
        number: "04",
        title: "Quality Supervision",
        description:
          "Regular supervisor checks to maintain consistently high hygiene standards and client satisfaction.",
      },
    ],
    relatedServices: [
      {
        slug: "post-construction-cleaning",
        title: "Post-Construction Cleaning",
        shortDesc: "After-build sparkle cleans for new office fit-outs and renovated business premises.",
      },
      {
        slug: "custom-cleaning",
        title: "Custom Tailored Cleaning",
        shortDesc: "One-off deep cleans and bespoke facility maintenance packages.",
      },
      {
        slug: "power-washing",
        title: "Commercial Power Washing",
        shortDesc: "Exterior entrance paving, carpark, and forecourt pressure cleaning.",
      },
    ],
  },
  "industrial-cleaning": {
    path: "services/industrial-cleaning",
    title: "Industrial & Warehouse Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Industrial & Warehouse Cleaning Services",
    tagline:
      "Heavy-duty cleaning, floor scrubbing, and degreasing for warehouses, distribution hubs, and industrial facilities in Clare and Limerick.",
    metaDescription:
      "Heavy-duty industrial cleaning services for warehouses, manufacturing plants, and industrial units across Shannon, Ennis, Clare, and Limerick.",
    targetAudience:
      "Warehouse managers, logistics directors, factory supervisors, industrial unit operators, and health & safety compliance officers.",
    aboutTitle: "Heavy-Duty Cleaning Solutions for Industrial Operations",
    aboutDescription:
      "Industrial facilities demand specialized cleaning machinery, heavy degreasing chemicals, and stringent health and safety adherence.\n\nForce Services brings experienced teams and industrial-grade equipment to tackle heavy oil, grease, tyre marks, dust accumulation, and overhead structural cleaning in factories and warehouses across County Clare (including Shannon Industrial Estate and Ennis) and County Limerick.",
    included: [
      "Warehouse floor mechanical scrubbing, sweeping, and degreasing",
      "Forklift tyre mark removal and industrial oil spill treatments",
      "High-level dust removal from rafters, pipes, and overhead beams",
      "Factory production floor, packaging area, and workshop sanitization",
      "Loading bays, roller shutter doors, and industrial entryway cleans",
      "Heavy industrial debris management and disposal",
    ],
    benefits: [
      "Drastically reduces slip and skid hazards on industrial floors",
      "Supports health, safety, and occupational hygiene compliance",
      "Extends the lifespan of industrial flooring and machinery",
      "Flexible deployment during plant shutdowns, weekends, or off-peak shifts",
    ],
    workSteps: [
      {
        number: "01",
        title: "Safety & Hazard Briefing",
        description:
          "Comprehensive risk assessment, identification of specialized cleaning zones, electrical hazards, and PPE requirements.",
      },
      {
        number: "02",
        title: "Industrial Equipment Setup",
        description:
          "Deployment of heavy-duty ride-on or walk-behind scrubbers, industrial vacuums, and commercial degreasers.",
      },
      {
        number: "03",
        title: "Intensive Deep Scrub",
        description:
          "High-level beam dusting followed by mechanical floor scrubbing, degreasing, and wet vacuum recovery.",
      },
      {
        number: "04",
        title: "Safety Clearance",
        description:
          "Dry-off verification and formal completion sign-off with facility managers.",
      },
    ],
    relatedServices: [
      {
        slug: "power-washing",
        title: "Commercial Power Washing",
        shortDesc: "High-pressure washdown for loading docks, forecourts, and industrial yards.",
      },
      {
        slug: "post-construction-cleaning",
        title: "Post-Construction Cleaning",
        shortDesc: "Post-renovation sparkle cleans for newly built industrial units and warehouses.",
      },
      {
        slug: "exterior-cleaning",
        title: "Building Facade & Exterior Cleaning",
        shortDesc: "Restoration and washing of commercial cladding and industrial exteriors.",
      },
    ],
  },
  "post-construction-cleaning": {
    path: "services/post-construction-cleaning",
    title: "Post-Construction Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Post-Construction & Builders Cleaning Services",
    tagline:
      "Comprehensive multi-phase after-build sparkle cleans for new commercial developments, office fit-outs, and renovations across Clare and Limerick.",
    metaDescription:
      "Post-construction cleaning services across Clare and Limerick, including Ennis and Shannon. Sparkle cleans and handover detailing for commercial developments.",
    targetAudience:
      "Building contractors, construction project managers, commercial property developers, architects, and commercial landlords needing move-in-ready handovers.",
    aboutTitle: "Turn Construction Sites into Move-In Ready Spaces",
    aboutDescription:
      "Following construction or commercial remodeling, properties are left covered in fine drywall dust, plaster residue, paint splatters, silicon smudges, and building debris.\n\nForce Services specializes in multi-phase post-construction cleaning across Ennis, Shannon, and Limerick — from initial rough cleans to final sparkle cleans that prepare commercial facilities, offices, and retail units for immediate handover to owners, tenants, or letting agents.",
    included: [
      "Removal of fine drywall dust from walls, ceilings, ledges, and fixtures",
      "Paint overspray, plaster, mortar, and adhesive removal from glass and tiles",
      "Internal and external commercial window, frame, track, and sill detailing",
      "Deep scrubbing, stripping, and buffing of hard flooring",
      "Restroom fittings, sanitary ware, kitchenettes, and chrome polishing",
      "Complete sparkle clean ensuring developer and landlord handover readiness",
    ],
    benefits: [
      "Guarantees seamless handover to landlords, buyers, or letting agents",
      "Eliminates airborne dust particles for improved indoor air quality",
      "Fast turnaround times to meet project completion deadlines",
      "Experienced with large commercial developments and business fit-outs",
    ],
    workSteps: [
      {
        number: "01",
        title: "Rough Debris Clean",
        description:
          "Removal of leftover packaging, protective films, coarse debris, and initial heavy dust extraction.",
      },
      {
        number: "02",
        title: "Detail & Paint Removal",
        description:
          "Meticulous removal of tape, paint specks, mortar tags, and silicone residue from all surfaces.",
      },
      {
        number: "03",
        title: "Sparkle Deep Clean",
        description:
          "Polishing fixtures, windows, tiles, appliances, and mechanical deep scrubbing of floors.",
      },
      {
        number: "04",
        title: "Handover Inspection",
        description:
          "White-glove inspection ensuring the property is 100% move-in ready.",
      },
    ],
    relatedServices: [
      {
        slug: "commercial-cleaning",
        title: "Commercial Cleaning Services",
        shortDesc: "Ongoing contract cleaning following tenant occupancy.",
      },
      {
        slug: "power-washing",
        title: "Commercial Power Washing",
        shortDesc: "Washdown of newly paved entrances, footpaths, and carparks.",
      },
      {
        slug: "exterior-cleaning",
        title: "Building Facade & Exterior Cleaning",
        shortDesc: "Final exterior wash and cladding detailing for new developments.",
      },
    ],
  },
  "exterior-cleaning": {
    path: "services/exterior-cleaning",
    title: "Commercial Building Facade & Exterior Cleaning in Clare & Limerick | Force Services",
    h1Title: "Commercial Building Facade & Exterior Cleaning",
    tagline:
      "Specialized soft-wash and gentle pressure cleaning for commercial building facades, cladding, shopfronts, and roofs across Clare and Limerick.",
    metaDescription:
      "Commercial facade and exterior building cleaning services across Clare and Limerick. Soft-washing for render, cladding, and architectural masonry in Ennis and Shannon.",
    targetAudience:
      "Commercial property owners, facility directors, retail park managers, and property agents protecting architectural assets and curb appeal.",
    aboutTitle: "Specialized Exterior Cladding & Facade Restoration",
    aboutDescription:
      "Keep your commercial property's exterior pristine and protected against atmospheric pollutants, algae, and weather staining.\n\nForce Services provides specialized soft-washing and gentle pressure cleaning for commercial facades, exterior render, architectural cladding, and roofs across Ennis, Shannon, and Limerick. We safely treat and eliminate red and green algae biofilms without eroding coatings or delicate masonry.",
    included: [
      "Commercial building facades, cladding panels, and shopfront detailing",
      "Low-pressure soft-washing for K-Rend, monocouche, and delicate render",
      "Red and green biological algae eradication and preventative biocide wash",
      "Commercial roof moss scraping, gutter clearance, and downpipe check",
      "Architectural limestone, sandstone, brick, and masonry detailing",
      "Signage, canopy, entrance overhang, and fascia cleaning",
    ],
    benefits: [
      "Restores original exterior vibrancy without risking costly render damage",
      "Prevents long-term moisture ingress and biological deterioration",
      "Enhances corporate branding, tenant curb appeal, and commercial value",
      "Non-abrasive soft-wash methods with lasting preventative treatments",
    ],
    workSteps: [
      {
        number: "01",
        title: "Facade Inspection",
        description:
          "We evaluate the substrate material, biological growth, height access, and surrounding drainage.",
      },
      {
        number: "02",
        title: "Soft-Wash Application",
        description:
          "Targeted application of gentle bio-treatments to break down algae and lichen at root level.",
      },
      {
        number: "03",
        title: "Controlled Rinse",
        description:
          "Low-pressure wash removing suspended grime without damaging render or coatings.",
      },
      {
        number: "04",
        title: "Preventative Seal",
        description:
          "Optional biocide coating to prevent organic regrowth for up to 24 months.",
      },
    ],
    relatedServices: [
      {
        slug: "power-washing",
        title: "Commercial Power Washing",
        shortDesc: "Ground-level pressure cleaning for walkways, forecourts, and carparks.",
      },
      {
        slug: "industrial-cleaning",
        title: "Industrial & Warehouse Cleaning",
        shortDesc: "Interior industrial cleaning to complement exterior building care.",
      },
      {
        slug: "commercial-cleaning",
        title: "Commercial Cleaning Services",
        shortDesc: "Complete interior commercial cleaning packages.",
      },
    ],
  },
  "custom-cleaning": {
    path: "services/custom-cleaning",
    title: "Custom Commercial Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Custom Tailored Commercial Cleaning Solutions",
    tagline:
      "Bespoke commercial cleaning services designed around your exact facility schedule, scope, and operational requirements across Clare and Limerick.",
    metaDescription:
      "Bespoke commercial cleaning services across Clare and Limerick, including Ennis and Shannon. Tailored packages for events, deep cleans, and specialized facilities.",
    targetAudience:
      "Facilities with non-standard operating hours, corporate event organizers, property management firms, and businesses with custom cleaning requirements.",
    aboutTitle: "Bespoke Cleaning Specifications for Unique Business Requirements",
    aboutDescription:
      "Every commercial property and business has unique operational demands. If your cleaning requirements don't fit standard categories, Force Services will design a personalized commercial cleaning package for you.\n\nFrom corporate event preparations to emergency spill response and specialized surface restoration, we deploy the right manpower, tools, and materials across County Clare and County Limerick.",
    included: [
      "Custom checklist created specifically for your commercial property",
      "Flexible staffing options for large, multi-shift, or fast-turnaround jobs",
      "One-off deep cleans, corporate event preparation, and post-event cleanups",
      "Specialized surface care, stain treatment, and hard floor restoration",
      "Emergency response availability for urgent facility cleaning needs",
      "Free on-site walkthrough and itemized quotation",
    ],
    benefits: [
      "Complete flexibility in scope, timing, frequencies, and budget",
      "No unnecessary charges for services your business does not need",
      "Direct communication with our operational management team",
      "Quick response time throughout Clare and Limerick",
    ],
    workSteps: [
      {
        number: "01",
        title: "Consultation & Scope",
        description:
          "We discuss your specific needs and timeline over phone, WhatsApp, or in person.",
      },
      {
        number: "02",
        title: "Custom Proposal",
        description:
          "You receive a transparent, itemized quote tailored to your exact facility.",
      },
      {
        number: "03",
        title: "Expert Execution",
        description:
          "Our trained crew arrives fully equipped to complete the agreed tasks.",
      },
      {
        number: "04",
        title: "Customer Sign-Off",
        description:
          "We ensure you are 100% satisfied before concluding the work.",
      },
    ],
    relatedServices: [
      {
        slug: "commercial-cleaning",
        title: "Commercial Cleaning Services",
        shortDesc: "Regular contract office cleaning across Clare & Limerick.",
      },
      {
        slug: "post-construction-cleaning",
        title: "Post-Construction Cleaning",
        shortDesc: "After-build sparkle cleans for new and renovated spaces.",
      },
      {
        slug: "power-washing",
        title: "Commercial Power Washing",
        shortDesc: "Exterior pressure cleaning for commercial car parks and forecourts.",
      },
    ],
  },
};

const otherPages = [
  {
    path: "services",
    title: "Commercial Cleaning Services in Clare & Limerick | Force Services",
    h1Title: "Commercial Cleaning Services in Clare & Limerick",
    description:
      "Explore commercial cleaning services by Force Services across County Clare and County Limerick. Office cleaning, power washing, industrial and post-construction cleaning.",
  },
  {
    path: "about",
    title: "About Force Services | Commercial Cleaning Specialists in Clare & Limerick",
    h1Title: "About Force Services",
    description:
      "Learn about Force Services - delivering commercial cleaning services, power washing, and facility maintenance across County Clare and County Limerick.",
  },
  {
    path: "contact",
    title: "Contact Force Services | Commercial Cleaning in Clare & Limerick",
    h1Title: "Contact Force Services",
    description:
      "Get in touch with Force Services for commercial cleaning services, office cleaning, power washing, and facility maintenance in County Clare and County Limerick.",
  },
  {
    path: "quote",
    title: "Request a Free Commercial Cleaning Quote | Force Services",
    h1Title: "Request a Free Quote & Assessment",
    description:
      "Request a fast, free, no-obligation quote for commercial cleaning services, office cleaning, power washing, or builders cleans in Clare and Limerick.",
  },
  {
    path: "pricing",
    title: "Commercial Cleaning Pricing & Packages | Force Services",
    h1Title: "Commercial Cleaning Pricing & Packages",
    description:
      "Transparent commercial cleaning packages and competitive rates for businesses across County Clare and County Limerick. Office cleaning, power washing, and facility maintenance.",
  },
  {
    path: "work",
    title: "Completed Commercial Cleaning Projects | Force Services",
    h1Title: "Completed Commercial Cleaning Projects",
    description:
      "Explore case studies and completed commercial cleaning, power washing, and post-construction projects by Force Services in Clare and Limerick.",
  },
  {
    path: "work/driveway-patio-power-wash",
    title: "Commercial Paving & Forecourt Power Wash Case Study | Force Services",
    h1Title: "Commercial Paving & Forecourt Power Wash in Ennis, Co. Clare",
    description:
      "Deep pressure cleaning and moss removal restoring natural paving stone for commercial premises in Ennis, Co. Clare.",
  },
  {
    path: "work/commercial-office-clean",
    title: "Commercial Office Sanitization Case Study | Force Services",
    h1Title: "Commercial Office Sanitization in Limerick City",
    description:
      "Multi-story commercial office contract cleaning and sanitization in Limerick City by Force Services.",
  },
  {
    path: "work/warehouse-industrial-degreasing",
    title: "Warehouse Floor Scrubbing & Degreasing Case Study | Force Services",
    h1Title: "Warehouse Floor Scrubbing & Degreasing in Shannon Industrial Estate",
    description:
      "Industrial deep scrub and machinery degreasing of a logistics facility in Shannon Industrial Estate, Co. Clare.",
  },
  {
    path: "work/post-construction-sparkle-clean",
    title: "Post-Construction Builders Clean Case Study | Force Services",
    h1Title: "Post-Construction Builders Clean - Galway Development",
    description:
      "Turnkey after-build sparkle clean completed for an 8-unit commercial retail development in Galway by Force Services.",
  },
  {
    path: "work/building-facade-softwash",
    title: "Commercial Building Facade Restoration Case Study | Force Services",
    h1Title: "Commercial Building Facade Restoration in Ennis, Co. Clare",
    description:
      "Soft-wash biocidal restoration of commercial render facade in Ennis, Co. Clare with zero substrate damage.",
  },
  {
    path: "work/residential-move-in-clean",
    title: "Commercial Deep & Handover Clean Case Study | Force Services",
    h1Title: "Commercial Deep & Handover Clean in Newmarket-on-Fergus",
    description:
      "Turnkey deep cleaning and facility sanitization prior to business handover in Newmarket-on-Fergus, Co. Clare.",
  },
  {
    path: "blog",
    title: "Commercial Cleaning & Maintenance Insights | Force Services",
    h1Title: "Commercial Cleaning Insights & Expert Advice",
    description:
      "Expert articles and advice on commercial cleaning, power washing, and facility maintenance in Clare and Limerick.",
  },
  {
    path: "faq",
    title: "Frequently Asked Questions | Force Services",
    h1Title: "Frequently Asked Questions",
    description:
      "Common questions about Force Services commercial cleaning contracts, power washing, insurance, and scheduling across Clare and Limerick.",
  },
  {
    path: "career",
    title: "Careers | Force Services",
    h1Title: "Join the Force Services Team",
    description:
      "Explore commercial cleaning and power washing career opportunities with Force Services in County Clare and County Limerick.",
  },
  {
    path: "thank-you",
    title: "Thank You | Force Services",
    h1Title: "Thank You for Requesting a Quote",
    description:
      "Thank you for contacting Force Services. We have received your request and will follow up shortly.",
  },
  {
    path: "privacy-policy",
    title: "Privacy Policy | Force Services",
    h1Title: "Privacy Policy",
    description:
      "Privacy Policy of Force Services regarding customer information and data protection in Ireland.",
  },
  {
    path: "terms-and-conditions",
    title: "Terms & Conditions | Force Services",
    h1Title: "Terms & Conditions",
    description:
      "Terms and conditions for commercial cleaning, power washing, and facility maintenance by Force Services.",
  },
];

function renderHeaderHtml() {
  return `
    <header class="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <a href="/" class="flex items-center gap-2">
            <span class="text-xl font-bold tracking-tight text-primary">Force Services</span>
          </a>
          <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <a href="/" class="hover:text-primary transition-colors">Home</a>
            <a href="/services" class="hover:text-primary transition-colors">Services</a>
            <a href="/about" class="hover:text-primary transition-colors">About Us</a>
            <a href="/work" class="hover:text-primary transition-colors">Our Work</a>
            <a href="/pricing" class="hover:text-primary transition-colors">Pricing</a>
            <a href="/faq" class="hover:text-primary transition-colors">FAQ</a>
            <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div class="flex items-center gap-4">
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" data-location="header_phone" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary">
              <span>${COMPANY.phone}</span>
            </a>
            <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" data-location="header_whatsapp" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              WhatsApp
            </a>
            <a href="/quote" class="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderFooterHtml() {
  return `
    <footer class="bg-primary text-primary-foreground pt-16 pb-8">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span class="text-2xl font-bold text-white tracking-tight">Force Services</span>
            <p class="text-primary-foreground/70 mt-4 text-sm leading-relaxed">
              Professional commercial power washing, office cleaning, industrial cleaning, and post-construction sparkle cleaning across County Clare and County Limerick.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Commercial Services</h4>
            <ul class="space-y-2.5 text-sm text-primary-foreground/80">
              <li><a href="/services/power-washing" class="hover:text-white transition-colors">Power Washing & Pressure Cleaning</a></li>
              <li><a href="/services/commercial-cleaning" class="hover:text-white transition-colors">Commercial Cleaning Services</a></li>
              <li><a href="/services/industrial-cleaning" class="hover:text-white transition-colors">Industrial & Warehouse Cleaning</a></li>
              <li><a href="/services/post-construction-cleaning" class="hover:text-white transition-colors">Post-Construction Cleaning</a></li>
              <li><a href="/services/exterior-cleaning" class="hover:text-white transition-colors">Building Facade & Exterior Cleaning</a></li>
              <li><a href="/services/custom-cleaning" class="hover:text-white transition-colors">Custom Tailored Cleaning</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <p class="text-sm text-primary-foreground/80 leading-relaxed mb-3">
              Serving commercial clients across County Clare & County Limerick:
            </p>
            <div class="grid grid-cols-2 gap-2 text-xs text-primary-foreground/70">
              <span>Ennis</span>
              <span>Shannon</span>
              <span>Limerick</span>
              <span>Newmarket-on-Fergus</span>
              <span>Sixmilebridge</span>
              <span>Co. Clare & Co. Limerick</span>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul class="space-y-3 text-sm text-primary-foreground/80">
              <li>Phone: <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" data-location="footer_phone" class="text-white hover:underline">${COMPANY.phone}</a></li>
              <li>WhatsApp: <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" data-location="footer_whatsapp" class="text-white hover:underline">${COMPANY.phone}</a></li>
              <li>Email: <a href="mailto:${COMPANY.email}" class="text-white hover:underline">${COMPANY.email}</a></li>
              <li>Location: <span class="text-primary-foreground/70">${COMPANY.address}</span></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/60 gap-4">
          <p>© ${COMPANY.year} Force Services. All Rights Reserved. Commercial Cleaning Specialists.</p>
          <div class="flex gap-6">
            <a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" class="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderHomeBodyHtml() {
  const serviceCards = Object.keys(serviceData)
    .map((slug) => {
      const s = serviceData[slug];
      return `
        <article class="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-foreground mb-2">
              <a href="/${s.path}" class="hover:text-primary transition-colors">${s.h1Title}</a>
            </h3>
            <p class="text-muted-foreground text-sm leading-relaxed mb-4">
              ${s.tagline}
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-border/50">
            <a href="/${s.path}" class="text-sm font-semibold text-primary hover:underline">
              Learn more →
            </a>
            <span class="text-muted-foreground">•</span>
            <a href="/quote" class="text-sm font-medium text-muted-foreground hover:text-foreground">
              Get a Quote
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="min-h-screen bg-background">
      ${renderHeaderHtml()}
      <main>
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-secondary pt-12 pb-16 md:pt-16 md:pb-24">
          <div class="container mx-auto px-4 lg:px-8">
            <div class="max-w-3xl">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
                Commercial Cleaning Services in County Clare &amp; Limerick
              </h1>
              <p class="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                Force Services delivers dependable commercial cleaning services for businesses, corporate offices, and industrial facilities across County Clare and County Limerick, including Ennis and Shannon. From routine contract cleaning to specialized post-construction and exterior cleaning, we keep your commercial premises immaculate.
              </p>
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-primary mb-8">
                <span class="font-semibold text-foreground">Key services:</span>
                <a href="/services/commercial-cleaning" class="underline hover:text-primary/80">Commercial &amp; Office Cleaning</a>
                <span class="text-muted-foreground">•</span>
                <a href="/services/post-construction-cleaning" class="underline hover:text-primary/80">Post-Construction Cleaning</a>
                <span class="text-muted-foreground">•</span>
                <a href="/services/power-washing" class="underline hover:text-primary/80">Power Washing</a>
                <span class="text-muted-foreground">•</span>
                <a href="/services/industrial-cleaning" class="underline hover:text-primary/80">Industrial Cleaning</a>
              </div>
              <div class="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <a href="/quote" class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
                  Get a Free Quote
                </a>
                <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" data-location="hero_phone" class="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Call: ${COMPANY.phone}
                </a>
                <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}?text=Hello%20Force%20Services" target="_blank" rel="noopener noreferrer" data-location="hero_whatsapp" class="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  WhatsApp Us
                </a>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-foreground/80 font-medium">
                <div class="p-3 bg-background/80 rounded-lg border border-border/50 text-center">✓ Fully Insured</div>
                <div class="p-3 bg-background/80 rounded-lg border border-border/50 text-center">✓ Professional Crew</div>
                <div class="p-3 bg-background/80 rounded-lg border border-border/50 text-center">✓ Flexible Schedules</div>
                <div class="p-3 bg-background/80 rounded-lg border border-border/50 text-center">✓ Clare &amp; Limerick</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Core Commercial Services Grid -->
        <section class="py-16 lg:py-24 bg-background">
          <div class="container mx-auto px-4 lg:px-8">
            <div class="max-w-2xl mb-12">
              <span class="text-xs font-bold text-primary uppercase tracking-wider">What We Do</span>
              <h2 class="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Specialized Cleaning Services for Businesses
              </h2>
              <p class="text-muted-foreground text-base">
                Explore our full suite of commercial, industrial, and exterior facility maintenance services available across Ennis, Shannon, Limerick, and throughout Co. Clare and Co. Limerick.
              </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${serviceCards}
            </div>
          </div>
        </section>

        <!-- Service Area & Commitment -->
        <section class="py-16 bg-secondary">
          <div class="container mx-auto px-4 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span class="text-xs font-bold text-primary uppercase tracking-wider">Regional Coverage</span>
                <h2 class="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Serving County Clare &amp; County Limerick
                </h2>
                <p class="text-muted-foreground text-base leading-relaxed mb-6">
                  Force Services provides dedicated commercial cleaning services exclusively to businesses, offices, retail spaces, and industrial operations in Ennis, Shannon, Limerick, and surrounding districts. We do not provide residential or domestic cleaning, allowing our teams to concentrate 100% on commercial excellence, strict hygiene protocols, and tailored scheduling.
                </p>
                <div class="flex flex-wrap gap-2 text-xs font-medium text-foreground">
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Ennis</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Shannon</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Limerick City</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Newmarket-on-Fergus</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Sixmilebridge</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Co. Clare</span>
                  <span class="px-3 py-1.5 bg-background rounded-md border border-border">Co. Limerick</span>
                </div>
              </div>
              <div class="p-8 rounded-2xl bg-background border border-border shadow-sm">
                <h3 class="text-2xl font-bold text-foreground mb-3">Request a Free Site Walkthrough</h3>
                <p class="text-sm text-muted-foreground mb-6">
                  Need an itemized quotation for your office or facility? Our management team will conduct a thorough walkthrough and deliver a transparent proposal.
                </p>
                <a href="/quote" class="block w-full text-center rounded-lg bg-primary py-3.5 px-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors mb-3">
                  Get a Commercial Quote
                </a>
                <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="block w-full text-center rounded-lg border border-primary py-3 px-4 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Call Us Directly: ${COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      ${renderFooterHtml()}
    </div>
  `;
}

function renderServiceBodyHtml(service) {
  const breadcrumb = `
    <nav class="text-muted-foreground text-sm mb-6" aria-label="Breadcrumb">
      <a href="/" class="hover:text-primary transition-colors">Home</a>
      <span class="mx-2">/</span>
      <a href="/services" class="hover:text-primary transition-colors">Services</a>
      <span class="mx-2">/</span>
      <span class="text-primary font-medium">${service.h1Title}</span>
    </nav>
  `;

  const hero = `
    <section class="pt-32 pb-12 bg-secondary">
      <div class="container mx-auto px-4 lg:px-8">
        ${breadcrumb}
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div class="max-w-3xl">
            <h1 class="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              ${service.h1Title}
            </h1>
            <p class="text-muted-foreground text-lg md:text-xl mt-4 leading-relaxed">
              ${service.tagline}
            </p>
            <div class="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span>Commercial Focus: ${service.targetAudience}</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <a href="/quote" class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
              Get a Free Quote
            </a>
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" data-location="service_hero_phone" class="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Call Us: ${COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const includedItems = service.included
    .map(
      (item) => `
      <li class="flex items-start gap-3 text-sm text-foreground/90">
        <span class="text-primary font-bold">✓</span>
        <span>${item}</span>
      </li>
    `
    )
    .join("");

  const benefitItems = service.benefits
    .map(
      (item) => `
      <li class="flex items-start gap-3 text-sm text-foreground/90">
        <span class="text-primary font-bold">✓</span>
        <span>${item}</span>
      </li>
    `
    )
    .join("");

  const stepItems = service.workSteps
    .map(
      (step) => `
      <div class="p-6 rounded-xl border border-border bg-card">
        <span class="text-2xl font-bold text-primary mb-2 block">${step.number}</span>
        <h4 class="font-bold text-foreground text-base mb-1">${step.title}</h4>
        <p class="text-muted-foreground text-xs leading-relaxed">${step.description}</p>
      </div>
    `
    )
    .join("");

  const relatedLinks = service.relatedServices
    .map(
      (rel) => `
      <a href="/services/${rel.slug}" class="block p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all">
        <h4 class="font-bold text-foreground text-base mb-1">${rel.title}</h4>
        <p class="text-muted-foreground text-xs">${rel.shortDesc}</p>
      </a>
    `
    )
    .join("");

  const mainContent = `
    <section class="py-16 lg:py-24 bg-background">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-12">
            <div>
              <h2 class="text-3xl font-bold text-foreground mb-4">${service.aboutTitle}</h2>
              <div class="text-muted-foreground text-base leading-relaxed space-y-4">
                ${service.aboutDescription
                  .split("\n\n")
                  .map((p) => `<p>${p}</p>`)
                  .join("")}
              </div>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-foreground mb-4">What's Included in This Service</h3>
              <ul class="grid sm:grid-cols-2 gap-3.5 bg-secondary/50 p-6 rounded-2xl border border-border">
                ${includedItems}
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-foreground mb-4">Why Choose Force Services</h3>
              <ul class="grid sm:grid-cols-2 gap-3.5 bg-secondary/50 p-6 rounded-2xl border border-border">
                ${benefitItems}
              </ul>
            </div>

            <div>
              <h3 class="text-2xl font-bold text-foreground mb-6">Our 4-Step Process</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                ${stepItems}
              </div>
            </div>

            <div class="border-t border-border pt-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-3">Related Commercial Services</h3>
              <p class="text-muted-foreground text-sm mb-6">
                Explore complementary commercial solutions to maintain your entire business facility with one trusted provider across Clare and Limerick.
              </p>
              <div class="grid sm:grid-cols-3 gap-4">
                ${relatedLinks}
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-28 bg-secondary rounded-2xl p-8 border border-border shadow-sm space-y-6">
              <h3 class="text-2xl font-bold text-primary">Request a Commercial Quote</h3>
              <p class="text-sm text-muted-foreground">
                Get in touch for a fast, itemized, and no-obligation quote for ${service.h1Title}.
              </p>
              <div class="space-y-3 pt-2">
                <a href="/quote" class="block w-full text-center rounded-lg bg-primary py-3 px-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                  Open Online Quote Form
                </a>
                <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" data-location="service_sidebar_phone" class="block w-full text-center rounded-lg border border-primary py-3 px-4 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Call ${COMPANY.phone}
                </a>
                <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" data-location="service_sidebar_whatsapp" class="block w-full text-center rounded-lg bg-emerald-600 py-3 px-4 font-semibold text-white hover:bg-emerald-700 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
              <div class="pt-4 border-t border-border/70 text-xs text-muted-foreground">
                <p>✓ Serving Ennis, Shannon, Limerick & County Clare</p>
                <p class="mt-1">✓ Flexible scheduling (early morning, evening & weekend)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return `
    <div class="min-h-screen bg-background">
      ${renderHeaderHtml()}
      <main>
        ${hero}
        ${mainContent}
      </main>
      ${renderFooterHtml()}
    </div>
  `;
}

function renderServicesIndexBodyHtml() {
  const serviceCards = Object.keys(serviceData)
    .map((slug) => {
      const s = serviceData[slug];
      return `
      <div class="rounded-2xl bg-card border border-border p-6 shadow-sm flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">
            <a href="/${s.path}" class="hover:text-primary transition-colors">${s.h1Title}</a>
          </h3>
          <p class="text-muted-foreground text-sm leading-relaxed mb-6">
            ${s.tagline}
          </p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-border/50">
          <a href="/${s.path}" class="text-sm font-semibold text-primary hover:underline">
            View Service Details →
          </a>
          <span class="text-muted-foreground">•</span>
          <a href="/quote" class="text-sm font-medium text-muted-foreground hover:text-foreground">
            Get Quote
          </a>
        </div>
      </div>
    `;
    })
    .join("");

  return `
    <div class="min-h-screen bg-background">
      ${renderHeaderHtml()}
      <main>
        <section class="pt-32 pb-16 bg-secondary">
          <div class="container mx-auto px-4 lg:px-8">
            <nav class="text-muted-foreground text-sm mb-4">
              <a href="/" class="hover:text-primary">Home</a> / <span class="text-primary font-medium">Services</span>
            </nav>
            <h1 class="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Commercial Cleaning Services in Clare &amp; Limerick
            </h1>
            <p class="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
              Professional power washing, office cleaning services, industrial warehouse degreasing, and post-construction sparkle cleaning tailored for businesses and facilities across Ennis, Shannon, Clare, and Limerick.
            </p>
          </div>
        </section>
        <section class="py-16 lg:py-24 bg-background">
          <div class="container mx-auto px-4 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${serviceCards}
            </div>
          </div>
        </section>
      </main>
      ${renderFooterHtml()}
    </div>
  `;
}

function renderGenericPageHtml(page) {
  return `
    <div class="min-h-screen bg-background">
      ${renderHeaderHtml()}
      <main class="pt-32 pb-20">
        <div class="container mx-auto px-4 lg:px-8 max-w-4xl">
          <nav class="text-muted-foreground text-sm mb-4">
            <a href="/" class="hover:text-primary">Home</a> / <span class="text-primary font-medium">${page.h1Title || page.title}</span>
          </nav>
          <h1 class="text-foreground text-4xl md:text-5xl font-bold tracking-tight mb-6">
            ${page.h1Title || page.title}
          </h1>
          <p class="text-muted-foreground text-lg leading-relaxed mb-8">
            ${page.description}
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/quote" class="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">
              Request a Free Quote
            </a>
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
              Call ${COMPANY.phone}
            </a>
            <a href="/services" class="rounded-lg bg-secondary px-6 py-3 font-semibold text-foreground hover:bg-secondary/80 transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </main>
      ${renderFooterHtml()}
    </div>
  `;
}

function render404Html() {
  return `
    <div class="min-h-screen bg-background">
      ${renderHeaderHtml()}
      <main class="pt-32 pb-24 text-center">
        <div class="container mx-auto px-4 max-w-xl">
          <span class="text-7xl font-extrabold text-primary block mb-4">404</span>
          <h1 class="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p class="text-muted-foreground text-lg mb-8 leading-relaxed">
            The page you are looking for does not exist or may have been moved. Explore our commercial cleaning services or return to the homepage.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/" class="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm">
              Return to Homepage
            </a>
            <a href="/services" class="rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Our Services
            </a>
            <a href="/quote" class="rounded-lg bg-secondary px-6 py-3 font-semibold text-foreground hover:bg-secondary/80 transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </main>
      ${renderFooterHtml()}
    </div>
  `;
}

function generateStaticPages() {
  const indexPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("Error: dist/index.html does not exist. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, "utf8");

  // 1. Update dist/index.html itself with full semantic pre-rendered HTML!
  {
    let homeHtml = baseHtml;
    homeHtml = homeHtml.replace(
      /<title>.*?<\/title>/i,
      "<title>Commercial Cleaning Services in Clare & Limerick | Force Services</title>"
    );
    homeHtml = homeHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      '<meta name="description" content="Professional commercial cleaning services across County Clare and County Limerick, including Ennis and Shannon. Routine office cleaning, power washing, and post-construction cleaning."'
    );
    homeHtml = homeHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      '<link rel="canonical" href="https://www.forceservices.ie/">'
    );
    homeHtml = homeHtml.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${renderHomeBodyHtml()}</div>`
    );
    fs.writeFileSync(indexPath, homeHtml, "utf8");
    console.log("Updated dist/index.html with pre-rendered homepage semantic HTML, H1, links, and SEO metadata.");
  }

  // 2. Generate 404.html with real HTTP 404 content and noindex
  {
    let html404 = baseHtml;
    html404 = html404.replace(
      /<title>.*?<\/title>/i,
      "<title>404 - Page Not Found | Force Services</title>"
    );
    html404 = html404.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      '<meta name="description" content="The page you requested could not be found. Return to Force Services homepage."'
    );
    // Add noindex
    if (html404.includes('<meta name="robots"')) {
      html404 = html404.replace(
        /<meta\s+name=["']robots["']\s+content=["'][^"']*["']/i,
        '<meta name="robots" content="noindex, follow">'
      );
    } else {
      html404 = html404.replace(
        /<head>/i,
        '<head>\n    <meta name="robots" content="noindex, follow">'
      );
    }
    html404 = html404.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${render404Html()}</div>`
    );
    fs.writeFileSync(path.join(distDir, "404.html"), html404, "utf8");
    console.log("Generated dist/404.html with noindex and navigation options.");
  }

  // 3. Generate the 6 service detail pages with full semantic pre-rendered HTML
  for (const slug of Object.keys(serviceData)) {
    const s = serviceData[slug];
    const pageDir = path.join(distDir, s.path);
    fs.mkdirSync(pageDir, { recursive: true });

    const canonicalUrl = `https://www.forceservices.ie/${s.path}`;
    let html = baseHtml;

    html = html.replace(/<title>.*?<\/title>/i, `<title>${s.title}</title>`);
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      `<meta name="description" content="${s.metaDescription}">`
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i,
      `<meta property="og:title" content="${s.title}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i,
      `<meta property="og:description" content="${s.metaDescription}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i,
      `<meta property="og:url" content="${canonicalUrl}">`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:title" content="${s.title}">`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:description" content="${s.metaDescription}">`
    );

    // INJECT FULL PRE-RENDERED SEMANTIC HTML INSIDE <div id="root"></div>
    const renderedBody = renderServiceBodyHtml(s);
    html = html.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${renderedBody}</div>`
    );

    fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf8");
    fs.writeFileSync(path.join(distDir, `${s.path}.html`), html, "utf8");
    console.log(`Generated canonical pre-rendered page: ${s.path}/index.html & ${s.path}.html`);
  }

  // 4. Generate the /services index page with pre-rendered semantic HTML
  {
    const pageDir = path.join(distDir, "services");
    fs.mkdirSync(pageDir, { recursive: true });
    const canonicalUrl = "https://www.forceservices.ie/services";
    let html = baseHtml;

    html = html.replace(
      /<title>.*?<\/title>/i,
      "<title>Commercial Cleaning Services in Clare &amp; Limerick | Force Services</title>"
    );
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      '<meta name="description" content="Explore commercial cleaning services by Force Services across County Clare and County Limerick. Office cleaning, power washing, industrial and post-construction cleaning.">'
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
    html = html.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${renderServicesIndexBodyHtml()}</div>`
    );

    fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf8");
    fs.writeFileSync(path.join(distDir, "services.html"), html, "utf8");
    console.log("Generated canonical pre-rendered page: services/index.html & services.html");
  }

  // 5. Generate remaining key pages
  for (const p of otherPages) {
    if (p.path === "services") continue;
    const pageDir = path.join(distDir, p.path);
    fs.mkdirSync(pageDir, { recursive: true });

    const canonicalUrl = `https://www.forceservices.ie/${p.path}`;
    let html = baseHtml;

    html = html.replace(/<title>.*?<\/title>/i, `<title>${p.title}</title>`);
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      `<meta name="description" content="${p.description}">`
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i,
      `<meta property="og:title" content="${p.title}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i,
      `<meta property="og:description" content="${p.description}">`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i,
      `<meta property="og:url" content="${canonicalUrl}">`
    );

    // Pre-render semantic body for crawler accessibility
    html = html.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${renderGenericPageHtml(p)}</div>`
    );

    fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf8");
    fs.writeFileSync(path.join(distDir, `${p.path}.html`), html, "utf8");
    console.log(`Generated canonical page: ${p.path}/index.html & ${p.path}.html`);
  }

  console.log("All static pages successfully pre-rendered with complete initial HTML!");
}

generateStaticPages();
