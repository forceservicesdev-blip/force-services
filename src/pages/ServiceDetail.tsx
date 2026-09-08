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
import { Check, Loader2, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { z } from "zod";

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
  tagline: string;
  image: string;
  aboutTitle: string;
  aboutDescription: string;
  included: string[];
  benefits: string[];
  workSteps: { number: string; title: string; description: string }[];
}

const detailedServices: Record<string, ServiceDetailData> = {
  "power-washing": {
    title: "Power Washing & Pressure Cleaning",
    tagline: "Heavy-duty exterior cleaning for driveways, patios, facades, roofs, and decking.",
    image: powerWashingImg,
    aboutTitle: "High-Performance Power Washing Services",
    aboutDescription:
      "Restore the beauty and curb appeal of your property with Force Services' professional power washing.\n\nOver time, Irish weather causes moss, black lichen, algae, and grime to build up on driveways, patios, and building exteriors. Using commercial-grade pressure washing equipment and targeted surface treatments, we safely eliminate years of dirt without causing damage to mortar, stone, or tarmac.",
    included: [
      "Driveways, concrete, paving, and tarmac cleaning",
      "Patios, sandstone, limestone, and natural stone restoration",
      "Building facades, render, and exterior wall washing",
      "Roof moss removal and soft-wash treatments",
      "Timber decking restoration and algae removal",
      "Commercial forecourts, carparks, and loading bays",
    ],
    benefits: [
      "Instantly restores curb appeal and property value",
      "Eliminates slippery algae and hazardous surfaces",
      "Protects exterior surfaces from long-term weather degradation",
      "Safe, eco-friendly detergents and high-grade pressure control",
    ],
    workSteps: [
      { number: "01", title: "Site Assessment", description: "We inspect the surface type, stains, and drainage to select optimal pressure levels." },
      { number: "02", title: "Surface Preparation", description: "We protect surrounding landscaping and apply pre-treatment solutions where needed." },
      { number: "03", title: "Precision Power Wash", description: "Using commercial rotary surface cleaners and wand attachments, we blast away grime." },
      { number: "04", title: "Rinse & Final Inspection", description: "Thorough washdown and final check ensuring spotless results." },
    ],
  },
  "commercial-cleaning": {
    title: "Commercial & Office Cleaning",
    tagline: "Professional, hygienic, and flexible contract cleaning for businesses and retail.",
    image: commercialImg,
    aboutTitle: "Spotless Workspaces for Productive Teams",
    aboutDescription:
      "A clean working environment improves productivity, employee wellbeing, and creates a positive impression on your clients.\n\nForce Services provides tailored commercial cleaning contracts across Ennis, Limerick, and Galway. We work around your operational schedule — whether you require early morning, evening, or weekend service.",
    included: [
      "Desk, workstation, and high-touch point sanitization",
      "Commercial floor vacuuming, mopping, and machine scrubbing",
      "Kitchen, canteen, and staff breakroom deep cleaning",
      "Restroom hygiene, sanitization, and consumable restocking",
      "Waste, recycling management, and bin liner replacement",
      "Internal glass, partitions, and entryway polishing",
    ],
    benefits: [
      "Promotes a healthier workplace and reduces sick leave",
      "Creates an impressive, professional impression for visiting clients",
      "Flexible contracts (daily, weekly, fortnightly, or monthly)",
      "Vetted, trained, and fully insured commercial cleaners",
    ],
    workSteps: [
      { number: "01", title: "Premises Walkthrough", description: "We evaluate your space and create a customized commercial cleaning checklist." },
      { number: "02", title: "Schedule Agreement", description: "We align cleaning hours with your operational preferences to avoid business disruption." },
      { number: "03", title: "Dedicated Team Deployment", description: "Our trained cleaning crew carries out thorough, checklist-driven cleaning." },
      { number: "04", title: "Quality Auditing", description: "Regular supervisor checks to maintain consistently high hygiene standards." },
    ],
  },
  "industrial-cleaning": {
    title: "Industrial & Warehouse Cleaning",
    tagline: "Heavy-duty cleaning for warehouses, factories, manufacturing plants, and industrial units.",
    image: industrialImg,
    aboutTitle: "Heavy-Duty Industrial Cleaning Solutions",
    aboutDescription:
      "Industrial facilities demand specialized cleaning machinery, heavy degreasing chemicals, and stringent health and safety adherence.\n\nForce Services brings 5 years of hands-on experience and industrial-grade equipment to tackle heavy oil, grease, tyre marks, dust accumulation, and overhead structural cleaning in factories and warehouses across Ireland.",
    included: [
      "Warehouse floor scrubbing, sweeping, and oil degreasing",
      "High-level dust removal from rafters, pipes, and beams",
      "Factory production floor and workshop sanitization",
      "Machinery exterior degreasing and surface wiping",
      "Loading bays, roller shutter, and industrial entryway cleans",
      "Post-spill and heavy residue decontamination",
    ],
    benefits: [
      "Improves facility safety and prevents slip & fall hazards",
      "Ensures full compliance with health, safety, and hygiene regulations",
      "Extends the lifespan of industrial flooring and machinery",
      "Full adherence to Irish Health & Safety and environmental standards",
    ],
    workSteps: [
      { number: "01", title: "Safety & Hazard Assessment", description: "Comprehensive risk assessment and identification of specialized cleaning zones." },
      { number: "02", title: "Industrial Equipment Setup", description: "Deployment of heavy-duty floor scrubbers, industrial vacuums, and degreasers." },
      { number: "03", title: "Deep Clean Execution", description: "High-level dusting followed by intense floor scrubbing and degreasing." },
      { number: "04", title: "Safety Clearance", description: "Dry-off verification and formal completion sign-off with facility managers." },
    ],
  },
  "post-construction-cleaning": {
    title: "Post-Construction & Builders Cleaning",
    tagline: "Comprehensive after-build sparkle cleans for new builds, fit-outs, and renovations.",
    image: postConstructionImg,
    aboutTitle: "Turn Construction Sites into Move-In Ready Spaces",
    aboutDescription:
      "After construction or remodeling, properties are left covered in fine plaster dust, paint splatters, silicon residue, and building debris.\n\nForce Services specializes in multi-phase post-construction cleaning — from initial rough cleans to final sparkle cleans that prepare homes, offices, and retail units for immediate handover to owners or tenants.",
    included: [
      "Removal of fine drywall dust from all walls, ceilings, and ledges",
      "Paint overspray, plaster, and adhesive removal from glass and tiles",
      "Window, frame, sill, and track deep detailing (interior & exterior)",
      "Polishing of all bathroom fittings, sanitary ware, and chrome",
      "Cabinet, wardrobe, and drawer interior vacuuming and wiping",
      "Floor stripping, scrubbing, and final sparkle buffing",
    ],
    benefits: [
      "Guarantees seamless handover to landlords, buyers, or letting agents",
      "Eliminates airborne dust particles for improved indoor air quality",
      "Fast turnaround times to meet project completion deadlines",
      "Experienced with large residential developments and commercial fit-outs",
    ],
    workSteps: [
      { number: "01", title: "Rough Debris Clean", description: "Removal of leftover packaging, large debris, and heavy construction dust." },
      { number: "02", title: "Detail & Paint Removal", description: "Meticulous removal of tape, paint specks, mortar, and silicon residue." },
      { number: "03", title: "Sparkle Deep Clean", description: "Polishing fixtures, windows, tiles, appliances, and all surfaces." },
      { number: "04", title: "Handover Inspection", description: "White-glove inspection ensuring the property is 100% move-in ready." },
    ],
  },
  "exterior-cleaning": {
    title: "Building Facade & Exterior Cleaning",
    tagline: "Specialized soft-wash and pressure cleaning for building facades, cladding, roofs, and stonework.",
    image: exteriorCleaningImg,
    aboutTitle: "Specialized Exterior & Facade Restoration",
    aboutDescription:
      "Keep your building's exterior pristine and protected against atmospheric pollutants, algae, and weather staining.\n\nForce Services provides specialized soft-washing and gentle pressure cleaning for commercial facades, residential render, architectural cladding, and roofs across Ennis, Limerick, and Galway. We safely treat and eliminate red and green algae biofilms without eroding coatings or delicate masonry.",
    included: [
      "Commercial facades, cladding, and shopfront detailing",
      "K-Rend, monocouche, and delicate plaster soft-wash",
      "Roof moss scraping and biocide preventative treatments",
      "Brick, limestone, sandstone, and masonry washdown",
      "Gutter clearing, soffits, and fascia cleaning",
      "Protective eco-friendly anti-algae sealants",
    ],
    benefits: [
      "Eliminates discolouration and restores original building appearance",
      "Non-abrasive soft-wash methods protect surfaces from damage",
      "Prevents long-term moisture ingress and organic deterioration",
      "Improves commercial property curb appeal and tenant value",
    ],
    workSteps: [
      { number: "01", title: "Facade Inspection", description: "We evaluate the substrate material, biological growth, and access requirements." },
      { number: "02", title: "Soft-Wash Application", description: "Targeted application of gentle bio-treatments to break down algae and lichen." },
      { number: "03", title: "Controlled Rinse", description: "Low-pressure wash removing suspended grime without damaging the render." },
      { number: "04", title: "Preventative Seal", description: "Optional biocide coating to prevent regrowth for up to 24 months." },
    ],
  },
  "custom-cleaning": {
    title: "Custom Tailored Cleaning",
    tagline: "Bespoke cleaning packages designed specifically around your unique requirements.",
    image: customCleaningImg,
    aboutTitle: "Tailored Solutions for Specialized Projects",
    aboutDescription:
      "Every property and project has unique demands. If your cleaning requirements don't fit standard categories, Force Services will design a personalized cleaning package for you.\n\nFrom emergency cleanups to specialized surface restoration, we bring the right manpower, tools, and materials to get the job done right.",
    included: [
      "Custom checklist created specifically for your property",
      "Flexible staffing options for large or fast-turnaround jobs",
      "One-off deep cleans, post-event cleanups, or emergency response",
      "Specialized surface care and stain treatment",
      "Free on-site survey and tailored quote across Co. Clare, Limerick & Galway",
    ],
    benefits: [
      "Complete flexibility in scope, timing, and budget",
      "No unnecessary charges for services you don't need",
      "Direct communication with our management team",
      "Quick response time throughout our service area",
    ],
    workSteps: [
      { number: "01", title: "Consultation & Scope", description: "We discuss your specific needs and timeline over phone, WhatsApp, or in person." },
      { number: "02", title: "Custom Proposal", description: "You receive a transparent, itemized quote tailored to your exact project." },
      { number: "03", title: "Expert Execution", description: "Our trained crew arrives fully equipped to complete the agreed tasks." },
      { number: "04", title: "Customer Sign-Off", description: "We ensure you are 100% satisfied before concluding the work." },
    ],
  },
};

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const serviceKey = slug && detailedServices[slug] ? slug : "power-washing";
  const service = detailedServices[serviceKey];

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(serviceKey);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createInquiry = useCreateServiceInquiry();

  useEffect(() => {
    if (slug && detailedServices[slug]) {
      setSelectedService(slug);
    }
  }, [slug]);

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

    await createInquiry.mutateAsync({
      service_name: serviceName,
      full_name: fullName.trim(),
      phone: phone.trim(),
      note: note.trim() || null,
      user_id: user?.id || null,
    });

    await sendFormEmail({
      subject: `New Service Inquiry: ${fullName.trim()} - ${serviceName}`,
      data: {
        "Form Type": "Service Detail Sidebar Inquiry",
        "Customer Name": fullName.trim(),
        "Phone": phone.trim(),
        "Service": serviceName,
        "Notes / Message": note.trim() || "None",
      },
    });

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
                  {service.title}
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl mt-3 max-w-2xl">
                  {service.tagline}
                </p>
              </div>
              <div className="flex gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get a Quote
                  </Button>
                </Link>
                <a href={`tel:${COMPANY.phone}`}>
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
                alt={service.title}
                className="w-full h-[360px] md:h-[480px] object-cover"
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
