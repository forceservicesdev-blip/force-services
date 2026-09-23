import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const pages = [
  {
    path: "services",
    title: "Our Cleaning Services | Force Services",
    description:
      "Professional power washing, commercial, industrial, and post-construction cleaning services across Ennis, Clare, Limerick, and Galway.",
  },
  {
    path: "services/power-washing",
    title: "Power Washing & Pressure Cleaning Services | Force Services",
    description:
      "Heavy-duty exterior power washing and pressure cleaning for driveways, patios, facades, roofs, and decking across Clare, Limerick & Galway.",
  },
  {
    path: "services/commercial-cleaning",
    title: "Commercial & Office Cleaning Services | Force Services",
    description:
      "Reliable commercial and office contract cleaning for businesses, shops, and premises across Clare, Limerick, and Galway.",
  },
  {
    path: "services/industrial-cleaning",
    title: "Industrial & Warehouse Cleaning Services | Force Services",
    description:
      "Heavy-duty industrial cleaning, warehouse floor scrubbing, and factory degreasing services across Clare, Limerick, and Galway.",
  },
  {
    path: "services/post-construction-cleaning",
    title: "Post-Construction & Builders Cleaning | Force Services",
    description:
      "Thorough after-build sparkle cleaning for new developments, commercial renovations, and fit-outs across Clare, Limerick & Galway.",
  },
  {
    path: "services/exterior-cleaning",
    title: "Building Facade & Exterior Cleaning | Force Services",
    description:
      "Specialized soft-wash and pressure cleaning for commercial building facades, cladding, roofs, and stonework in Ireland.",
  },
  {
    path: "services/custom-cleaning",
    title: "Custom Tailored Cleaning Solutions | Force Services",
    description:
      "Bespoke cleaning solutions tailored specifically to your project requirements across Clare, Limerick, and Galway.",
  },
  {
    path: "about",
    title: "About Us | Force Services",
    description:
      "Learn more about Force Services - 5 years of trusted power washing, commercial, and industrial cleaning in Ireland.",
  },
  {
    path: "contact",
    title: "Contact Us | Force Services",
    description:
      "Get in touch with Force Services for commercial cleaning and power washing in Clare, Limerick, and Galway. Call or WhatsApp us today.",
  },
  {
    path: "quote",
    title: "Request a Free Quote | Force Services",
    description:
      "Request a fast, free, no-obligation quote for power washing, commercial, industrial, or post-construction cleaning services.",
  },
  {
    path: "pricing",
    title: "Pricing & Service Rates | Force Services",
    description:
      "Transparent pricing and flexible packages for commercial cleaning, power washing, and facility maintenance.",
  },
  {
    path: "faq",
    title: "Frequently Asked Questions | Force Services",
    description:
      "Find answers to frequently asked questions about Force Services cleaning and power washing solutions.",
  },
  {
    path: "privacy-policy",
    title: "Privacy Policy | Force Services",
    description:
      "Privacy Policy of Force Services regarding customer information and data protection.",
  },
  {
    path: "terms-and-conditions",
    title: "Terms & Conditions | Force Services",
    description:
      "Terms and conditions for Force Services cleaning and maintenance services.",
  },
];

function generateStaticPages() {
  const indexPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexPath)) {
    console.error("Error: dist/index.html does not exist. Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, "utf8");

  for (const page of pages) {
    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });

    const canonicalUrl = `https://www.forceservices.ie/${page.path}`;
    let html = baseHtml;

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

    // Replace Meta Description
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'][^"']*["']/i,
      `<meta name="description" content="${page.description}"`
    );

    // Replace Canonical Link
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']/i,
      `<link rel="canonical" href="${canonicalUrl}"`
    );

    // Replace OpenGraph Title & URL & Description
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']/i,
      `<meta property="og:title" content="${page.title}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']/i,
      `<meta property="og:description" content="${page.description}"`
    );
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']/i,
      `<meta property="og:url" content="${canonicalUrl}"`
    );

    // Replace Twitter Title & Description
    html = html.replace(
      /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:title" content="${page.title}"`
    );
    html = html.replace(
      /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']/i,
      `<meta name="twitter:description" content="${page.description}"`
    );

    const outPath = path.join(pageDir, "index.html");
    fs.writeFileSync(outPath, html, "utf8");
    console.log(`Generated canonical static page: ${page.path}/index.html`);
  }

  console.log(`Successfully generated ${pages.length} static pages in dist/!`);
}

generateStaticPages();
