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
  serviceArea: "Ennis, Limerick & Galway",
  year: new Date().getFullYear(),
};

const serviceData = {
  "power-washing": {
    path: "services/power-washing",
    title: "Commercial Power Washing & Pressure Cleaning Services | Force Services",
    h1Title: "Commercial Power Washing & Pressure Cleaning",
    tagline:
      "Heavy-duty exterior pressure cleaning for commercial premises, forecourts, carparks, and retail entrances across Clare, Limerick & Galway.",
    metaDescription:
      "Commercial power washing and high-pressure cleaning services for business premises, carparks, paving, and facades across Ennis, Shannon, Limerick and Galway.",
    targetAudience:
      "Business owners, property managers, commercial landlords, retail parks, and facility managers requiring immaculate presentation and slip-free safety compliance.",
    aboutTitle: "High-Performance Pressure Cleaning for Commercial Facilities",
    aboutDescription:
      "Maintain a safe, welcoming, and pristine exterior for your commercial property with Force Services' specialized high-pressure washing.\n\nIn the West of Ireland, frequent rain and damp conditions cause rapid accumulation of slippery algae, black lichen, moss, and vehicle grime on commercial surfaces. We deploy commercial-grade rotary surface cleaners and high-output pressure washers to systematically restore concrete forecourts, block paving, loading areas, and exterior building perimeters without causing substrate damage.",
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
        title: "Commercial & Office Cleaning",
        shortDesc: "Scheduled routine contract cleaning for office and corporate commercial premises.",
      },
    ],
  },
  "commercial-cleaning": {
    path: "services/commercial-cleaning",
    title: "Commercial & Office Contract Cleaning Services | Force Services",
    h1Title: "Commercial & Office Cleaning Services",
    tagline:
      "Reliable, hygienic, and flexible contract cleaning for corporate offices, shops, retail stores, and commercial premises across Clare, Limerick & Galway.",
    metaDescription:
      "Professional commercial and office contract cleaning for businesses, corporate offices, and retail premises across Clare, Limerick, Ennis, and Shannon.",
    targetAudience:
      "Office managers, business executives, retail store managers, medical clinic directors, and commercial premises requiring dependable, top-tier hygiene standards.",
    aboutTitle: "Hygienic, Spotless Workspaces for Commercial Businesses",
    aboutDescription:
      "A clean working environment improves productivity, protects staff health, and creates an exceptional first impression on visiting clients.\n\nForce Services provides tailored commercial cleaning contracts across County Clare (Ennis, Shannon, Newmarket-on-Fergus), Limerick, and Galway. We customize our cleaning schedules — whether daily, multi-day, weekly, or fortnightly — and align working hours with your operational preferences to ensure zero business disruption.",
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
    title: "Industrial & Warehouse Cleaning Services | Force Services",
    h1Title: "Industrial & Warehouse Cleaning Services",
    tagline:
      "Heavy-duty cleaning, floor scrubbing, and degreasing for warehouses, distribution hubs, and industrial facilities in Clare, Limerick & Galway.",
    metaDescription:
      "Heavy-duty industrial cleaning services for warehouses, manufacturing plants, and industrial units across Shannon, Ennis, Clare, Limerick, and Galway.",
    targetAudience:
      "Warehouse managers, logistics directors, factory supervisors, industrial unit operators, and health & safety compliance officers.",
    aboutTitle: "Heavy-Duty Cleaning Solutions for Industrial Operations",
    aboutDescription:
      "Industrial facilities demand specialized cleaning machinery, heavy degreasing chemicals, and stringent health and safety adherence.\n\nForce Services brings experienced teams and industrial-grade equipment to tackle heavy oil, grease, tyre marks, dust accumulation, and overhead structural cleaning in factories and warehouses across County Clare (including Shannon Industrial Estate and Ennis), Limerick, and Galway.",
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
    title: "Post-Construction & Builders Cleaning Services | Force Services",
    h1Title: "Post-Construction & Builders Cleaning Services",
    tagline:
      "Comprehensive multi-phase after-build sparkle cleans for new commercial developments, office fit-outs, and renovations across Clare, Limerick & Galway.",
    metaDescription:
      "Post-construction and builders cleaning services across Clare, Limerick, and Galway. Sparkle cleans and handover detailing for commercial developments.",
    targetAudience:
      "Building contractors, construction project managers, commercial property developers, architects, and commercial landlords needing move-in-ready handovers.",
    aboutTitle: "Turn Construction Sites into Move-In Ready Spaces",
    aboutDescription:
      "Following construction or commercial remodeling, properties are left covered in fine drywall dust, plaster residue, paint splatters, silicon smudges, and building debris.\n\nForce Services specializes in multi-phase post-construction cleaning across Ennis, Shannon, Limerick, and Galway — from initial rough cleans to final sparkle cleans that prepare commercial facilities, offices, and retail units for immediate handover to owners, tenants, or letting agents.",
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
        title: "Commercial & Office Cleaning",
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
    title: "Commercial Building Facade & Exterior Cleaning | Force Services",
    h1Title: "Commercial Building Facade & Exterior Cleaning",
    tagline:
      "Specialized soft-wash and gentle pressure cleaning for commercial building facades, cladding, shopfronts, and roofs across Clare, Limerick & Galway.",
    metaDescription:
      "Commercial facade and exterior building cleaning services across Clare, Limerick, and Galway. Soft-washing for render, cladding, and architectural masonry.",
    targetAudience:
      "Commercial property owners, facility directors, retail park managers, and property agents protecting architectural assets and curb appeal.",
    aboutTitle: "Specialized Exterior Cladding & Facade Restoration",
    aboutDescription:
      "Keep your commercial property's exterior pristine and protected against atmospheric pollutants, algae, and weather staining.\n\nForce Services provides specialized soft-washing and gentle pressure cleaning for commercial facades, exterior render, architectural cladding, and roofs across Ennis, Shannon, Limerick, and Galway. We safely treat and eliminate red and green algae biofilms without eroding coatings or delicate masonry.",
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
        title: "Commercial & Office Cleaning",
        shortDesc: "Complete interior commercial cleaning packages.",
      },
    ],
  },
  "custom-cleaning": {
    path: "services/custom-cleaning",
    title: "Custom Tailored Commercial Cleaning Solutions | Force Services",
    h1Title: "Custom Tailored Commercial Cleaning Solutions",
    tagline:
      "Bespoke commercial cleaning packages designed around your exact facility schedule, scope, and operational requirements.",
    metaDescription:
      "Bespoke commercial cleaning solutions across Clare, Limerick, and Galway. Tailored packages for events, emergency cleanups, and specialized facilities.",
    targetAudience:
      "Facilities with non-standard operating hours, corporate event organizers, property management firms, and businesses with custom cleaning requirements.",
    aboutTitle: "Bespoke Cleaning Specifications for Unique Business Requirements",
    aboutDescription:
      "Every commercial property and business has unique operational demands. If your cleaning requirements don't fit standard categories, Force Services will design a personalized commercial cleaning package for you.\n\nFrom corporate event preparations to emergency spill response and specialized surface restoration, we deploy the right manpower, tools, and materials across County Clare, Limerick, and Galway.",
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
      "Quick response time throughout Clare, Limerick, and Galway",
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
        title: "Commercial & Office Cleaning",
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
    title: "Our Commercial Cleaning Services | Force Services",
    h1Title: "Our Commercial Cleaning Services",
    description:
      "From high-pressure commercial power washing and building facades to office, industrial, and post-construction cleaning, Force Services delivers specialized B2B solutions across Clare, Limerick, and Galway.",
  },
  {
    path: "about",
    title: "About Us | Force Services",
    h1Title: "About Force Services",
    description:
      "Learn more about Force Services - delivering trusted commercial cleaning, power washing, and facility maintenance across Clare, Limerick, and Galway.",
  },
  {
    path: "contact",
    title: "Contact Us | Force Services",
    h1Title: "Contact Force Services",
    description:
      "Get in touch with Force Services for commercial cleaning and power washing quotes in Clare, Limerick, and Galway. Call or WhatsApp us today.",
  },
  {
    path: "quote",
    title: "Request a Free Commercial Quote | Force Services",
    h1Title: "Request a Free Quote",
    description:
      "Request a fast, free, no-obligation quote for commercial power washing, office cleaning, industrial cleaning, or builders sparkle cleans.",
  },
  {
    path: "pricing",
    title: "Pricing & Service Packages | Force Services",
    h1Title: "Pricing & Service Packages",
    description:
      "Transparent commercial cleaning packages and competitive rates for businesses across Clare, Limerick, and Galway.",
  },
  {
    path: "faq",
    title: "Frequently Asked Questions | Force Services",
    h1Title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about Force Services commercial cleaning contracts, power washing, insurance, and scheduling.",
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
            <a href="/faq" class="hover:text-primary transition-colors">FAQ</a>
            <a href="/contact" class="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div class="flex items-center gap-4">
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary">
              <span>${COMPANY.phone}</span>
            </a>
            <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
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
              Professional commercial power washing, office cleaning, industrial cleaning, and post-construction sparkle cleaning across Clare, Limerick, and Galway.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Commercial Services</h4>
            <ul class="space-y-2.5 text-sm text-primary-foreground/80">
              <li><a href="/services/power-washing" class="hover:text-white transition-colors">Power Washing & Pressure Cleaning</a></li>
              <li><a href="/services/commercial-cleaning" class="hover:text-white transition-colors">Commercial & Office Cleaning</a></li>
              <li><a href="/services/industrial-cleaning" class="hover:text-white transition-colors">Industrial & Warehouse Cleaning</a></li>
              <li><a href="/services/post-construction-cleaning" class="hover:text-white transition-colors">Post-Construction Cleaning</a></li>
              <li><a href="/services/exterior-cleaning" class="hover:text-white transition-colors">Building Facade & Exterior Cleaning</a></li>
              <li><a href="/services/custom-cleaning" class="hover:text-white transition-colors">Custom Tailored Cleaning</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <p class="text-sm text-primary-foreground/80 leading-relaxed mb-3">
              Serving commercial clients across County Clare, Limerick, and Galway:
            </p>
            <div class="grid grid-cols-2 gap-2 text-xs text-primary-foreground/70">
              <span>Ennis</span>
              <span>Limerick</span>
              <span>Shannon</span>
              <span>Galway</span>
              <span>Newmarket-on-Fergus</span>
              <span>Co. Clare</span>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul class="space-y-3 text-sm text-primary-foreground/80">
              <li>Phone: <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="text-white hover:underline">${COMPANY.phone}</a></li>
              <li>WhatsApp: <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" class="text-white hover:underline">${COMPANY.phone}</a></li>
              <li>Email: <a href="mailto:${COMPANY.email}" class="text-white hover:underline">${COMPANY.email}</a></li>
              <li>Location: <span class="text-primary-foreground/70">${COMPANY.address}</span></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/60 gap-4">
          <p>© ${COMPANY.year} Force Services. All Rights Reserved.</p>
          <div class="flex gap-6">
            <a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" class="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
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
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
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
      <div class="flex items-start gap-3">
        <div class="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">✓</div>
        <span class="text-foreground text-sm font-medium">${item}</span>
      </div>
    `
    )
    .join("");

  const processSteps = service.workSteps
    .map(
      (step) => `
      <div class="bg-card rounded-2xl p-6 border border-border">
        <div class="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
          ${step.number}
        </div>
        <h4 class="text-lg font-bold text-foreground mb-2">${step.title}</h4>
        <p class="text-muted-foreground text-sm leading-relaxed">${step.description}</p>
      </div>
    `
    )
    .join("");

  const benefitItems = service.benefits
    .map(
      (benefit) => `
      <div class="flex items-start gap-3">
        <div class="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold">✓</div>
        <p class="text-muted-foreground font-medium text-sm sm:text-base">${benefit}</p>
      </div>
    `
    )
    .join("");

  const relatedLinks = service.relatedServices
    .map(
      (rel) => `
      <a href="/services/${rel.slug}" class="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all">
        <h4 class="font-bold text-foreground group-hover:text-primary transition-colors text-base mb-2">
          ${rel.title} →
        </h4>
        <p class="text-muted-foreground text-xs leading-relaxed">${rel.shortDesc}</p>
      </a>
    `
    )
    .join("");

  const mainContent = `
    <section class="py-16 lg:py-24 bg-background">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-16">
            <div>
              <div class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
                Service Overview
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ${service.aboutTitle}
              </h2>
              <div class="text-muted-foreground text-lg leading-relaxed space-y-4">
                ${service.aboutDescription
                  .split("\n\n")
                  .map((p) => `<p>${p}</p>`)
                  .join("")}
              </div>
            </div>

            <div class="bg-secondary rounded-2xl p-8 border border-border">
              <h3 class="text-2xl font-bold text-primary mb-6">What Is Included?</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                ${includedItems}
              </div>
            </div>

            <div>
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Working Process</h3>
              <p class="text-muted-foreground text-base mb-8">
                We follow a structured 4-step process to guarantee high quality, safety compliance, and client satisfaction on every commercial job.
              </p>
              <div class="grid sm:grid-cols-2 gap-6">
                ${processSteps}
              </div>
            </div>

            <div class="border-t border-border pt-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Benefits of Choosing Force Services</h3>
              <div class="space-y-4">
                ${benefitItems}
              </div>
            </div>

            <div class="border-t border-border pt-12">
              <h3 class="text-2xl md:text-3xl font-bold text-foreground mb-3">Related Commercial Services</h3>
              <p class="text-muted-foreground text-sm mb-6">
                Explore complementary commercial solutions to maintain your entire business facility with one trusted provider across Clare, Limerick & Galway.
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
                <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="block w-full text-center rounded-lg border border-primary py-3 px-4 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                  Call ${COMPANY.phone}
                </a>
                <a href="https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}" target="_blank" rel="noopener noreferrer" class="block w-full text-center rounded-lg bg-emerald-600 py-3 px-4 font-semibold text-white hover:bg-emerald-700 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
              <div class="pt-4 border-t border-border/70 text-xs text-muted-foreground">
                <p>✓ Serving Ennis, Shannon, Limerick, Galway & County Clare</p>
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
      <div class="rounded-2xl bg-card border border-border/70 p-6 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all">
        <div>
          <h3 class="text-xl font-bold text-foreground mb-2">${s.h1Title}</h3>
          <p class="text-muted-foreground text-sm leading-relaxed mb-6">${s.tagline}</p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-border/40">
          <a href="/${s.path}" class="flex-1 text-center py-2 px-3 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-white transition-colors">
            Learn More
          </a>
          <a href="/quote" class="flex-1 text-center py-2 px-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-colors">
            Get a Quote
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
              Our Commercial Cleaning Services
            </h1>
            <p class="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
              Professional power washing, office cleaning, industrial warehouse degreasing, and post-construction sparkle cleaning tailored for businesses and facilities across Ennis, Clare, Limerick, and Galway.
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
          <div class="flex gap-4">
            <a href="/quote" class="rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">
              Request a Free Quote
            </a>
            <a href="tel:${COMPANY.phone.replace(/\s+/g, "")}" class="rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors">
              Call ${COMPANY.phone}
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

  // 1. Generate the 6 service detail pages with full semantic pre-rendered HTML
  for (const slug of Object.keys(serviceData)) {
    const s = serviceData[slug];
    const pageDir = path.join(distDir, s.path);
    fs.mkdirSync(pageDir, { recursive: true });

    const canonicalUrl = `https://www.forceservices.ie/${s.path}`;
    let html = baseHtml;

    html = html.replace(/<title>.*?<\/title>/i, `<title>${s.title}</title>`);
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      `<meta name="description" content="${s.metaDescription}"`
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i,
      `<meta property="og:title" content="${s.title}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i,
      `<meta property="og:description" content="${s.metaDescription}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i,
      `<meta property="og:url" content="${canonicalUrl}"`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:title" content="${s.title}"`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:description" content="${s.metaDescription}"`
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

  // 2. Generate the /services index page with pre-rendered semantic HTML
  {
    const pageDir = path.join(distDir, "services");
    fs.mkdirSync(pageDir, { recursive: true });
    const canonicalUrl = "https://www.forceservices.ie/services";
    let html = baseHtml;

    html = html.replace(
      /<title>.*?<\/title>/i,
      "<title>Our Commercial Cleaning Services | Force Services</title>"
    );
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      '<meta name="description" content="Commercial cleaning services in Ennis, Clare, Limerick, and Galway. Power washing, office cleaning, industrial and builders cleans."'
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}"`
    );
    html = html.replace(
      /<div\s+id=["']root["']>\s*<\/div>/i,
      `<div id="root">${renderServicesIndexBodyHtml()}</div>`
    );

    fs.writeFileSync(path.join(pageDir, "index.html"), html, "utf8");
    fs.writeFileSync(path.join(distDir, "services.html"), html, "utf8");
    console.log("Generated canonical pre-rendered page: services/index.html & services.html");
  }

  // 3. Generate remaining key pages
  for (const p of otherPages) {
    if (p.path === "services") continue;
    const pageDir = path.join(distDir, p.path);
    fs.mkdirSync(pageDir, { recursive: true });

    const canonicalUrl = `https://www.forceservices.ie/${p.path}`;
    let html = baseHtml;

    html = html.replace(/<title>.*?<\/title>/i, `<title>${p.title}</title>`);
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      `<meta name="description" content="${p.description}"`
    );
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i,
      `<meta property="og:title" content="${p.title}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i,
      `<meta property="og:description" content="${p.description}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i,
      `<meta property="og:url" content="${canonicalUrl}"`
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
