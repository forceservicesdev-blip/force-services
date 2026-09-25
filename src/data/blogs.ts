export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  category: string;
  read_time: string | null;
  is_featured: boolean | null;
  published: boolean | null;
  created_at: string;
  updated_at: string;
}

export const BLOGS_DATA: Blog[] = [
  {
    id: "1",
    slug: "power-washing-vs-soft-washing",
    title: "Power Washing vs. Soft Washing: Which Does Your Property Need?",
    excerpt: "Learn the crucial differences between high-pressure washing and low-pressure soft washing to protect your surfaces and achieve the best clean.",
    content: `<p>When it comes to exterior property maintenance, there is no one-size-fits-all solution. Different surfaces require specialized pressure levels and cleaning techniques to achieve spotless results without causing damage.</p>
    <h2>What is Power Washing?</h2>
    <p>Power washing uses high-pressure water (often heated) delivered at high PSI to blast away stubborn dirt, embedded grease, moss, and weather grime. It is ideal for hard, durable surfaces such as concrete driveways, stone patios, forecourts, and commercial pavements.</p>
    <h2>What is Soft Washing?</h2>
    <p>Soft washing utilizes specialized, eco-friendly biocidal solutions applied at low pressure, followed by a gentle rinse. It targets organic growths like red algae, green mould, lichen, and mildew at the root without stripping exterior paint, render, or delicate roof tiles.</p>
    <h2>Which Method Should You Choose?</h2>
    <ul>
      <li><strong>Concrete, Brickwork & Paving:</strong> High-pressure power washing for deep stain and weed removal.</li>
      <li><strong>Roofs, Render & Painted Walls:</strong> Soft washing to preserve surface coatings and prevent water penetration.</li>
      <li><strong>Timber Decking:</strong> Controlled medium pressure or soft washing to prevent wood splintering.</li>
    </ul>
    <p>At Force Services, our technicians inspect every surface before starting work to ensure the safest and most effective method is applied.</p>`,
    image_url: "/src/assets/hero-grid-1.jpg",
    category: "Power Washing Tips",
    read_time: "5 min read",
    is_featured: true,
    published: true,
    created_at: "2026-08-15T10:00:00.000Z",
    updated_at: "2026-08-15T10:00:00.000Z",
  },
  {
    id: "2",
    slug: "benefits-of-regular-commercial-cleaning",
    title: "Why Regular Commercial Cleaning Protects Your Business Reputation",
    excerpt: "Discover how a professionally maintained office or retail space improves employee health, safety compliance, and client trust.",
    content: `<p>First impressions matter in business. Whether greeting corporate clients, retail customers, or maintaining an energised workspace for employees, cleanliness is a direct reflection of your business standards.</p>
    <h2>Key Advantages of Contract Commercial Cleaning</h2>
    <ol>
      <li><strong>Healthier Work Environment:</strong> Routine sanitisation of high-touch surfaces dramatically reduces sick days and cross-contamination.</li>
      <li><strong>Enhanced Professional Image:</strong> Pristine floors, clean glass, and tidy boardrooms instill confidence in visitors and prospective partners.</li>
      <li><strong>Long-Term Asset Protection:</strong> Regular maintenance prolongs the lifespan of carpets, flooring, and office furnishings, saving money over time.</li>
      <li><strong>Customised Scheduling:</strong> Flexible after-hours or early-morning cleanings mean zero disruption to your daily operations.</li>
    </ol>
    <p>Contact Force Services today to schedule a bespoke commercial cleaning assessment for your premises across Clare or Limerick.</p>`,
    image_url: "/src/assets/hero-grid-2.jpg",
    category: "Commercial Cleaning",
    read_time: "4 min read",
    is_featured: false,
    published: true,
    created_at: "2026-08-22T14:30:00.000Z",
    updated_at: "2026-08-22T14:30:00.000Z",
  },
  {
    id: "3",
    slug: "post-construction-cleaning-checklist",
    title: "The Essential Post-Construction Cleaning Checklist for Handover",
    excerpt: "A complete step-by-step guide to transforming a finished build or renovation site into an immaculate, move-in-ready space.",
    content: `<p>Completing a renovation or construction project is exciting, but the remaining fine drywall dust, plaster splatters, and adhesive stickers can be overwhelming. A proper after-build sparkle clean requires methodical multi-phase attention.</p>
    <h2>Phase 1: Rough Construction Clean</h2>
    <p>Removal of leftover construction debris, sweeping large particles, and vacuuming high-level ledges, ducting, and light fixtures.</p>
    <h2>Phase 2: Deep Detail Clean</h2>
    <p>Specialized removal of silicone residue, paint specks from window panes, adhesive removal from new appliances and sanitary ware, and deep wet-vacuuming of hard floors.</p>
    <h2>Phase 3: Final Sparkle Handover</h2>
    <p>Glass polishing, microfiber surface buffing, sanitization of door handles, switches, and a final HEPA-filtered vacuum ensuring zero airborne dust settling.</p>`,
    image_url: "/src/assets/hero-grid-3.jpg",
    category: "Post-Construction",
    read_time: "6 min read",
    is_featured: false,
    published: true,
    created_at: "2026-08-30T09:15:00.000Z",
    updated_at: "2026-08-30T09:15:00.000Z",
  },
];
