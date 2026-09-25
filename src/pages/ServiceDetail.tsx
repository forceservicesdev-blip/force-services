import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateServiceInquiry } from "@/hooks/useServiceInquiries";
import { CLEANING_SERVICES, COMPANY } from "@/lib/config";
import { sendFormEmail } from "@/lib/email";
import { trackLeadConversion } from "@/lib/analytics";
import { toast } from "sonner";
import { ArrowRight, Building2, Check, Loader2, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

// Images
import powerWashingImg from "@/assets/cardimages/shawn-rain-0LIyVDJ6Xuk-unsplash.jpg";
import commercialImg from "@/assets/cardimages/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg";
import industrialImg from "@/assets/cardimages/jacques-dillies-jcav1COVvOc-unsplash.jpg";
import postConstructionImg from "@/assets/cardimages/steffen-lemmerzahl-Dqvb5xO0_Vg-unsplash.jpg";
import exteriorCleaningImg from "@/assets/cardimages/sam-balye-y8URY9-ypSI-unsplash.jpg";
import customCleaningImg from "@/assets/cardimages/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

const nameSchema = z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters");
const phoneSchema = z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters");

interface ServiceDetailData {
  title: string;
  h1Title: string;
  tagline: string;
  image: string;
  imageAlt: string;
  metaDescription: string;
  targetAudience: string;
  aboutTitle: string;
  aboutDescription: string;
  included: string[];
  benefits: string[];
  workSteps: { number: string; title: string; description: string }[];
  relatedServices: { slug: string; title: string; shortDesc: string }[];
}

export const detailedServices: Record<string, ServiceDetailData> = {
  "power-washing": {
    title: "Commercial Power Washing & Pressure Cleaning Services",
    h1Title: "Commercial Power Washing & Pressure Cleaning",
    tagline: "Heavy-duty exterior pressure cleaning for commercial premises, forecourts, carparks, and retail entrances across Clare, Limerick & Galway.",
    image: powerWashingImg,
    imageAlt: "Commercial power washing and heavy-duty pressure cleaning of commercial forecourts and paving by Force Services in Ireland",
    metaDescription: "Commercial power washing and high-pressure cleaning services for business premises, carparks, paving, and facades across Ennis, Shannon, Limerick and Galway.",
    targetAudience: "Business owners, property managers, commercial landlords, retail parks, and facility managers requiring immaculate presentation and slip-free safety compliance.",
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
      { number: "01", title: "Site Assessment & Safety Plan", description: "We assess surface composition, staining, drainage, and pedestrian access to determine pressure settings and safety boundaries." },
      { number: "02", title: "Perimeter Protection", description: "Electrical points, delicate exterior features, and landscaping are secured prior to starting work." },
      { number: "03", title: "Commercial Power Wash", description: "Commercial rotary surface cleaners and lance attachments systematically strip away embedded grime, oil, and algae." },
      { number: "04", title: "Washdown & Handover", description: "Full washdown of surrounding perimeters and walkthrough with your facility representative." },
    ],
    relatedServices: [
      { slug: "exterior-cleaning", title: "Building Facade & Exterior Cleaning", shortDesc: "Specialized soft-wash and pressure cleaning for commercial building facades and cladding." },
      { slug: "industrial-cleaning", title: "Industrial & Warehouse Cleaning", shortDesc: "Heavy-duty mechanical floor scrubbing and degreasing for warehouse facilities." },
      { slug: "commercial-cleaning", title: "Commercial & Office Cleaning", shortDesc: "Scheduled routine contract cleaning for office and corporate commercial premises." },
    ],
  },
  "commercial-cleaning": {
    title: "Commercial & Office Contract Cleaning Services",
    h1Title: "Commercial & Office Cleaning Services",
    tagline: "Reliable, hygienic, and flexible contract cleaning for corporate offices, shops, retail stores, and commercial premises across Clare, Limerick & Galway.",
    image: commercialImg,
    imageAlt: "Professional commercial and office cleaning operatives maintaining a modern workplace in Ireland",
    metaDescription: "Professional commercial and office contract cleaning for businesses, corporate offices, and retail premises across Clare, Limerick, Ennis, and Shannon.",
    targetAudience: "Office managers, business executives, retail store managers, medical clinic directors, and commercial premises requiring dependable, top-tier hygiene standards.",
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
      { number: "01", title: "Premises Walkthrough", description: "We evaluate your space, footfall intensity, and hygiene priorities to formulate a detailed commercial cleaning checklist." },
      { number: "02", title: "Service Agreement", description: "We establish agreed cleaning hours, checklist tasks, and frequency tailored to your operational hours." },
      { number: "03", title: "Dedicated Team Deployment", description: "Our trained cleaning crew carries out thorough, checklist-driven cleaning using professional-grade supplies." },
      { number: "04", title: "Quality Supervision", description: "Regular supervisor checks to maintain consistently high hygiene standards and client satisfaction." },
    ],
    relatedServices: [
      { slug: "post-construction-cleaning", title: "Post-Construction Cleaning", shortDesc: "After-build sparkle cleans for new office fit-outs and renovated business premises." },
      { slug: "custom-cleaning", title: "Custom Tailored Cleaning", shortDesc: "One-off deep cleans and bespoke facility maintenance packages." },
      { slug: "power-washing", title: "Commercial Power Washing", shortDesc: "Exterior entrance paving, carpark, and forecourt pressure cleaning." },
    ],
  },
  "industrial-cleaning": {
    title: "Industrial & Warehouse Cleaning Services",
    h1Title: "Industrial & Warehouse Cleaning Services",
    tagline: "Heavy-duty cleaning, floor scrubbing, and degreasing for warehouses, distribution hubs, and industrial facilities in Clare, Limerick & Galway.",
    image: industrialImg,
    imageAlt: "Industrial warehouse floor scrubbing and heavy-duty degreasing in a logistics facility",
    metaDescription: "Heavy-duty industrial cleaning services for warehouses, manufacturing plants, and industrial units across Shannon, Ennis, Clare, Limerick, and Galway.",
    targetAudience: "Warehouse managers, logistics directors, factory supervisors, industrial unit operators, and health & safety compliance officers.",
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
      { number: "01", title: "Safety & Hazard Briefing", description: "Comprehensive risk assessment, identification of specialized cleaning zones, electrical hazards, and PPE requirements." },
      { number: "02", title: "Industrial Equipment Setup", description: "Deployment of heavy-duty ride-on or walk-behind scrubbers, industrial vacuums, and commercial degreasers." },
      { number: "03", title: "Intensive Deep Scrub", description: "High-level beam dusting followed by mechanical floor scrubbing, degreasing, and wet vacuum recovery." },
      { number: "04", title: "Safety Clearance", description: "Dry-off verification and formal completion sign-off with facility managers." },
    ],
    relatedServices: [
      { slug: "power-washing", title: "Commercial Power Washing", shortDesc: "High-pressure washdown for loading docks, forecourts, and industrial yards." },
      { slug: "post-construction-cleaning", title: "Post-Construction Cleaning", shortDesc: "Post-renovation sparkle cleans for newly built industrial units and warehouses." },
      { slug: "exterior-cleaning", title: "Building Facade & Exterior Cleaning", shortDesc: "Restoration and washing of commercial cladding and industrial exteriors." },
    ],
  },
  "post-construction-cleaning": {
    title: "Post-Construction & Builders Cleaning Services",
    h1Title: "Post-Construction & Builders Cleaning Services",
    tagline: "Comprehensive multi-phase after-build sparkle cleans for new commercial developments, office fit-outs, and renovations across Clare, Limerick & Galway.",
    image: postConstructionImg,
    imageAlt: "Post-construction sparkle cleaning and builders handover clean for commercial facilities",
    metaDescription: "Post-construction and builders cleaning services across Clare, Limerick, and Galway. Sparkle cleans and handover detailing for commercial developments.",
    targetAudience: "Building contractors, construction project managers, commercial property developers, architects, and commercial landlords needing move-in-ready handovers.",
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
      { number: "01", title: "Rough Debris Clean", description: "Removal of leftover packaging, protective films, coarse debris, and initial heavy dust extraction." },
      { number: "02", title: "Detail & Paint Removal", description: "Meticulous removal of tape, paint specks, mortar tags, and silicone residue from all surfaces." },
      { number: "03", title: "Sparkle Deep Clean", description: "Polishing fixtures, windows, tiles, appliances, and mechanical deep scrubbing of floors." },
      { number: "04", title: "Handover Inspection", description: "White-glove inspection ensuring the property is 100% move-in ready." },
    ],
    relatedServices: [
      { slug: "commercial-cleaning", title: "Commercial & Office Cleaning", shortDesc: "Ongoing contract cleaning following tenant occupancy." },
      { slug: "power-washing", title: "Commercial Power Washing", shortDesc: "Washdown of newly paved entrances, footpaths, and carparks." },
      { slug: "exterior-cleaning", title: "Building Facade & Exterior Cleaning", shortDesc: "Final exterior wash and cladding detailing for new developments." },
    ],
  },
  "exterior-cleaning": {
    title: "Commercial Building Facade & Exterior Cleaning",
    h1Title: "Commercial Building Facade & Exterior Cleaning",
    tagline: "Specialized soft-wash and gentle pressure cleaning for commercial building facades, cladding, shopfronts, and roofs across Clare, Limerick & Galway.",
    image: exteriorCleaningImg,
    imageAlt: "Commercial building facade soft-wash cleaning and render restoration in Ireland",
    metaDescription: "Commercial facade and exterior building cleaning services across Clare, Limerick, and Galway. Soft-washing for render, cladding, and architectural masonry.",
    targetAudience: "Commercial property owners, facility directors, retail park managers, and property agents protecting architectural assets and curb appeal.",
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
      { number: "01", title: "Facade Inspection", description: "We evaluate the substrate material, biological growth, height access, and surrounding drainage." },
      { number: "02", title: "Soft-Wash Application", description: "Targeted application of gentle bio-treatments to break down algae and lichen at root level." },
      { number: "03", title: "Controlled Rinse", description: "Low-pressure wash removing suspended grime without damaging render or coatings." },
      { number: "04", title: "Preventative Seal", description: "Optional biocide coating to prevent organic regrowth for up to 24 months." },
    ],
    relatedServices: [
      { slug: "power-washing", title: "Commercial Power Washing", shortDesc: "Ground-level pressure cleaning for walkways, forecourts, and carparks." },
      { slug: "industrial-cleaning", title: "Industrial & Warehouse Cleaning", shortDesc: "Interior industrial cleaning to complement exterior building care." },
      { slug: "commercial-cleaning", title: "Commercial & Office Cleaning", shortDesc: "Complete interior commercial cleaning packages." },
    ],
  },
  "custom-cleaning": {
    title: "Custom Tailored Commercial Cleaning Solutions",
    h1Title: "Custom Tailored Commercial Cleaning Solutions",
    tagline: "Bespoke commercial cleaning packages designed around your exact facility schedule, scope, and operational requirements.",
    image: customCleaningImg,
    imageAlt: "Custom tailored commercial cleaning team preparing specialized business premises",
    metaDescription: "Bespoke commercial cleaning solutions across Clare, Limerick, and Galway. Tailored packages for events, emergency cleanups, and specialized facilities.",
    targetAudience: "Facilities with non-standard operating hours, corporate event organizers, property management firms, and businesses with custom cleaning requirements.",
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
      { number: "01", title: "Consultation & Scope", description: "We discuss your specific needs and timeline over phone, WhatsApp, or in person." },
      { number: "02", title: "Custom Proposal", description: "You receive a transparent, itemized quote tailored to your exact facility." },
      { number: "03", title: "Expert Execution", description: "Our trained crew arrives fully equipped to complete the agreed tasks." },
      { number: "04", title: "Customer Sign-Off", description: "We ensure you are 100% satisfied before concluding the work." },
    ],
    relatedServices: [
      { slug: "commercial-cleaning", title: "Commercial & Office Cleaning", shortDesc: "Regular contract office cleaning across Clare & Limerick." },
      { slug: "post-construction-cleaning", title: "Post-Construction Cleaning", shortDesc: "After-build sparkle cleans for new and renovated spaces." },
      { slug: "power-washing", title: "Commercial Power Washing", shortDesc: "Exterior pressure cleaning for commercial car parks and forecourts." },
    ],
  },
};

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  if (slug && !detailedServices[slug]) {
    return <NotFound />;
  }

  const serviceKey = slug && detailedServices[slug] ? slug : "power-washing";
  const service = detailedServices[serviceKey];

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(serviceKey);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createInquiry = useCreateServiceInquiry();

  useEffect(() => {
    if (serviceKey && detailedServices[serviceKey]) {
      setSelectedService(serviceKey);
      const fullTitle = detailedServices[serviceKey].title.includes(COMPANY.name)
        ? detailedServices[serviceKey].title
        : `${detailedServices[serviceKey].title} | ${COMPANY.name}`;
      document.title = fullTitle;

      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta && detailedServices[serviceKey].metaDescription) {
        descMeta.setAttribute("content", detailedServices[serviceKey].metaDescription);
      }

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `https://www.forceservices.ie/services/${serviceKey}`);
    }
  }, [serviceKey]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameResult = nameSchema.safeParse(fullName);
    if (!nameResult.success) {
      newErrors.fullName = nameResult.error.errors[0].message;
    }
    const phoneResult = phoneSchema.safeParse(phone);
    if (!phoneResult.success) {
      newErrors.phone = phoneResult.error.errors[0].message;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceName = detailedServices[selectedService]?.title || service.title;

    try {
      await createInquiry.mutateAsync({
        service_name: serviceName,
        full_name: fullName.trim(),
        phone: phone.trim(),
        note: note.trim() || null,
        user_id: user?.id || null,
      });

      const sendResult = await sendFormEmail({
        subject: `New Service Inquiry: ${fullName.trim()} - ${serviceName}`,
        data: {
          "Form Type": "Service Detail Sidebar Inquiry",
          "Customer Name": fullName.trim(),
          "Phone": phone.trim(),
          "Service": serviceName,
          "Notes / Message": note.trim() || "None",
        },
      });

      if (!sendResult.success) {
        if (sendResult.requiresActivation) {
          toast.error("Notification service requires initial confirmation. Please contact us directly.");
        } else {
          toast.error(sendResult.message || "Failed to submit inquiry. Please try again.");
        }
        return;
      }

      // Track lead conversion in GA4 only after confirmed successful delivery
      trackLeadConversion({
        form_type: "service_inquiry",
        service: serviceName,
        currency: "EUR",
        value: 1,
      });

      toast.success("Inquiry submitted successfully! We'll get back to you soon.");

      const submittedName = fullName.trim();
      setFullName("");
      setPhone("");
      setNote("");
      setErrors({});

      navigate("/thank-you", {
        state: {
          name: submittedName,
          service: serviceName,
          type: "service_inquiry",
        },
      });
    } catch (error) {
      console.error("Error submitting service inquiry:", error);
      toast.error("Network error while submitting. Please check your connection or contact us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Service Header Section */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{service.title}</span>
          </div>

          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
                  {service.h1Title || service.title}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl mt-3 max-w-2xl">
                  {service.tagline}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>Commercial Focus: {service.targetAudience}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get a Quote
                  </Button>
                </Link>
                <a href={`tel:${COMPANY.phone}`} data-location="service_detail_phone">
                  <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-card mt-8">
              <img
                src={service.image}
                alt={service.imageAlt || service.title}
                className={cn(
                  "w-full h-[360px] md:h-[480px] object-cover",
                  (serviceKey === "power-washing" || serviceKey === "exterior-cleaning") && "object-bottom"
                )}
                style={{
                  objectPosition: (serviceKey === "power-washing" || serviceKey === "exterior-cleaning") ? "center 75%" : undefined
                }}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content & Sidebar Form */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content (2 cols) */}
            <div className="lg:col-span-2 space-y-16">
              {/* About this service */}
              <FadeIn>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-tertiary/10 px-4 py-2 text-sm font-semibold text-tertiary mb-4">
                    <Sparkles className="h-4 w-4" />
                    Service Overview
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {service.aboutTitle}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                    {service.aboutDescription}
                  </p>
                </div>
              </FadeIn>

              {/* What is included */}
              <FadeIn delay={100}>
                <div className="bg-secondary rounded-2xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    What Is Included?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-foreground text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* How We Work */}
              <FadeIn delay={150}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Our Working Process
                  </h3>
                  <p className="text-muted-foreground text-base mb-8">
                    We follow a structured 4-step process to guarantee high quality, safety, and customer satisfaction on every job.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.workSteps.map((step, index) => (
                      <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                        <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                          {step.number}
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Service Benefits */}
              <FadeIn delay={200}>
                <div className="border-t border-border pt-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Key Benefits of Choosing {COMPANY.name}
                  </h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <p className="text-muted-foreground font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Related Commercial Services */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <FadeIn delay={250}>
                  <div className="border-t border-border pt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Related Commercial Services
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Explore complementary commercial solutions to maintain your entire business facility with one trusted provider across Clare, Limerick & Galway.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.relatedServices.map((rel) => (
                        <Link
                          key={rel.slug}
                          to={`/services/${rel.slug}`}
                          className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all"
                        >
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-base mb-2 flex items-center justify-between">
                            <span>{rel.title}</span>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-primary" />
                          </h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">
                            {rel.shortDesc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>

            {/* Right Sticky Inquiry Form */}
            <div className="lg:col-span-1">
              <FadeIn delay={250} className="sticky top-28">
                <div className="bg-secondary rounded-2xl p-8 border border-border shadow-sm">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Request a Service
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Leave your details and we will get back to you promptly with a free quote.
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        className="bg-background h-11"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <Input
                        className="bg-background h-11"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +353 87 494 5684"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Service
                      </label>
                      <Select
                        value={selectedService}
                        onValueChange={(val) => setSelectedService(val)}
                      >
                        <SelectTrigger className="bg-background h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {CLEANING_SERVICES.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Project Details / Notes
                      </label>
                      <Textarea
                        placeholder="Tell us about the property size, location (Ennis, Limerick, Galway, etc.), and timing..."
                        className="bg-background min-h-[90px]"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-semibold"
                      disabled={createInquiry.isPending}
                    >
                      {createInquiry.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Send Inquiry"
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border/80 text-center">
                    <p className="text-xs text-muted-foreground mb-2">Prefer to talk directly?</p>
                    <a
                      href={`https://wa.me/${COMPANY.whatsappNumber.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-location="service_detail_whatsapp"
                      className="inline-flex items-center gap-2 text-sm font-bold text-tertiary hover:underline"
                    >
                      Chat on WhatsApp: {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
