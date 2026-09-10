export const COMPANY = {
  name: "Force Services",
  legalName: "Force Services",
  cro: "",
  tagline: "Professional Power Washing, Commercial, Industrial & Post-Construction Cleaning",
  description:
    "Professional power washing, commercial, industrial, and post-construction cleaning services across Ennis, Limerick, Galway, and surrounding areas.",
  phone: "+353 87 494 5684",
  email: "forceservicesie@gmail.com",
  notificationEmail: "forceservicesie@gmail.com",
  whatsappNumber: "+353874945684",
  address: "Apartment 1, Limerick Road, Newmarket-on-Fergus, Ennis, Co. Clare",
  serviceArea: "Ennis, Limerick & Galway",
  county: "Co. Clare, Limerick & Galway",
  country: "Ireland",
  yearsInBusiness: 5,
  year: new Date().getFullYear(),
  social: {
    facebook: "#",
    instagram: "https://www.instagram.com/forceservicesie?utm_source=qr",
  },
};

export const WHATSAPP_MESSAGE =
  "Hi Force Services, I would like to get a free quote for your cleaning services.";

export const SERVICE_AREAS = [
  "Ennis",
  "Limerick",
  "Galway",
  "Newmarket-on-Fergus",
  "Shannon",
  "Sixmilebridge",
  "Clarecastle",
  "Gort",
  "Oranmore",
  "Castletroy",
  "Raheen",
  "Co. Clare",
];

import powerWashingImg from "@/assets/cardimages/shawn-rain-0LIyVDJ6Xuk-unsplash.jpg";
import commercialImg from "@/assets/cardimages/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg";
import industrialImg from "@/assets/cardimages/jacques-dillies-jcav1COVvOc-unsplash.jpg";
import postConstructionImg from "@/assets/cardimages/steffen-lemmerzahl-Dqvb5xO0_Vg-unsplash.jpg";
import exteriorCleaningImg from "@/assets/cardimages/sam-balye-y8URY9-ypSI-unsplash.jpg";
import customCleaningImg from "@/assets/cardimages/cytonn-photography-n95VMLxqM2I-unsplash.jpg";

export const CLEANING_SERVICES = [
  {
    slug: "power-washing",
    title: "Power Washing & Pressure Cleaning",
    image: powerWashingImg,
    imagePosition: "object-bottom",
    shortDescription:
      "High-pressure washing for driveways, patios, facades, roofs, decking, and exterior walls.",
    description:
      "Revitalize your property's exterior with our heavy-duty power washing service. We remove moss, algae, stubborn stains, dirt, and grime from driveways, patios, building exteriors, stone, concrete, and timber decking with precision and care.",
    basePrice: 80,
    features: [
      "Driveways, Patios & Footpaths",
      "Building Facades & Exterior Walls",
      "Roof Moss Removal & Gutter Cleaning",
      "Decking & Timber Restoration",
      "Commercial Forecourts & Car Parks",
    ],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial & Office Cleaning",
    image: commercialImg,
    shortDescription:
      "Flexible and reliable contract cleaning for offices, shops, retail stores, and commercial premises.",
    description:
      "Maintain a spotless, welcoming, and hygienic environment for your employees and clients. Our commercial cleaning services are customized to your business hours and industry standards.",
    basePrice: 65,
    features: [
      "Offices, Workspaces & Boardrooms",
      "Retail Shops & Showrooms",
      "Daily, Weekly & Fortnightly Contracts",
      "Sanitization & Hygiene Supplies",
      "Flexible After-Hours Scheduling",
    ],
  },
  {
    slug: "industrial-cleaning",
    title: "Industrial & Warehouse Cleaning",
    image: industrialImg,
    shortDescription:
      "Heavy-duty cleaning for factories, warehouses, workshops, and industrial facilities.",
    description:
      "Comprehensive industrial cleaning using superior equipment and high-performance materials. We handle large surface degreasing, high-level dusting, factory floor scrubbing, and industrial machinery area sanitization.",
    basePrice: 120,
    features: [
      "Warehouse Floor Scrubbing & Degreasing",
      "High-Level Dust & Rafter Cleaning",
      "Factory & Production Facility Cleans",
      "Waste & Debris Management",
      "Health & Safety Compliant Operations",
    ],
  },
  {
    slug: "post-construction-cleaning",
    title: "Post-Construction & Builders Cleaning",
    image: postConstructionImg,
    shortDescription:
      "Thorough after-build sparkle cleaning for new developments, commercial renovations, and fit-outs.",
    description:
      "Transition from construction site to move-in ready. We eliminate fine drywall dust, plaster residue, paint splatters, adhesive tags, and construction debris from all surfaces, windows, and floors.",
    basePrice: 150,
    features: [
      "Initial Rough Clean & Final Sparkle Clean",
      "Dust Extraction & Air Quality Improvement",
      "Window, Frame & Sill Paint Removal",
      "Sanitary Ware & Kitchen Polishing",
      "Developer & Landlord Handover Ready",
    ],
  },
  {
    slug: "exterior-cleaning",
    title: "Building Facade & Exterior Cleaning",
    image: exteriorCleaningImg,
    imagePosition: "object-bottom",
    shortDescription:
      "Specialized soft-wash and pressure cleaning for building facades, cladding, roofs, and stonework.",
    description:
      "Keep your property's exterior looking immaculate with our comprehensive facade and exterior wash services. We safely remove moss, red and green algae, carbon soot, and environmental pollutants without damaging delicate render or stonework.",
    basePrice: 90,
    features: [
      "Building Facades & Exterior Cladding",
      "Render Soft-Washing & Algae Removal",
      "Roof Moss Treatment & Gutter Clearing",
      "Stone, Brick & Masonry Restoration",
      "Commercial & Industrial Exteriors",
    ],
  },
  {
    slug: "custom-cleaning",
    title: "Custom Tailored Cleaning",
    image: customCleaningImg,
    shortDescription:
      "Bespoke cleaning solutions tailored specifically to your project requirements.",
    description:
      "Have a unique space, one-off event, or specialized requirement? We design custom cleaning packages to match your exact timeline, scope, and specifications.",
    basePrice: 70,
    features: [
      "One-Off Deep Cleans & Event Cleanups",
      "Emergency & Fast Response Availability",
      "Specialized Surface Treatments",
      "Custom Checklists & Schedules",
      "Free On-Site Assessment & Quote",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Qualified Professionals",
    description:
      "Our team consists of vetted, highly trained specialists who take pride in their craft and respect your property.",
  },
  {
    title: "5 Years of Experience",
    description:
      "With 5 years in Ireland, we have the proven expertise to handle complex commercial, industrial, and builder projects.",
  },
  {
    title: "Superior Equipment & Materials",
    description:
      "We invest in high-performance pressure washers, industrial machinery, and professional-grade products for maximum results.",
  },
  {
    title: "Quality & Attention to Detail",
    description:
      "We don't cut corners. From stubborn exterior stains to post-construction dust, every detail is handled with precision.",
  },
  {
    title: "100% Customer Satisfaction",
    description:
      "Our goal is to exceed your expectations on every job. We ensure you are completely satisfied before we consider the work done.",
  },
  {
    title: "Tailored & Flexible Solutions",
    description:
      "Every property and project is unique. We adapt our schedules, scope, and methods to your specific needs.",
  },
];

export const FAQS = [
  {
    question: "What areas do Force Services cover?",
    answer:
      "We are based in Newmarket-on-Fergus / Ennis, Co. Clare and proudly serve Ennis, Limerick, Galway, Shannon, and surrounding towns throughout the Mid-West of Ireland.",
  },
  {
    question: "What types of cleaning services do you specialize in?",
    answer:
      "We specialize in high-pressure power washing (driveways, patios, facades, roofs), commercial and office cleaning, industrial and warehouse cleaning, and post-construction / after-build cleans.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "You can use our online Quote Request form, fill out our Contact form, email us at Forceservicesie@gmail.com, or contact us directly via WhatsApp/Call at +353 87 494 5684. We provide free, fast, no-obligation quotes.",
  },
  {
    question: "Do you bring your own equipment and materials?",
    answer:
      "Yes, our team arrives fully equipped with high-performance power washers, industrial cleaning machinery, and professional-grade, eco-friendly cleaning solutions.",
  },
  {
    question: "Are you fully insured and registered?",
    answer:
      "Yes, Force Services is fully insured for public liability and commercial operations, giving you complete peace of mind for every project.",
  },
  {
    question: "How long has Force Services been in business?",
    answer:
      "We have been operating in Ireland for 5 years, building our reputation through quality workmanship, reliable service, and strong customer relationships.",
  },
  {
    question: "Can you accommodate out-of-hours commercial cleaning?",
    answer:
      "Yes. For commercial and industrial clients, we offer flexible scheduling including early mornings, evenings, and weekends to minimize disruption to your business operations.",
  },
  {
    question: "What is included in a post-construction clean?",
    answer:
      "Our post-construction cleaning includes thorough removal of fine dust, plaster, paint splatters, window and frame detailing, deep floor scrubbing, and sanitizing all fixtures so the property is ready for immediate handover.",
  },
];
