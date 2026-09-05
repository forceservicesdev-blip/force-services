# Force Services — Professional Cleaning & Power Washing Web Platform

Official website and lead-generation platform for **Force Services** (CRO: `IT00026659BB`), providing professional power washing, commercial, industrial, and post-construction cleaning across **Ennis, Limerick, Galway, and County Clare, Ireland**.

---

## 🚀 Overview & Key Features

- **Interactive Presentation Portfolio**: 16:9 widescreen showcase carousel displaying real client transformations with gesture swipe, keyboard navigation, and full-screen lightbox modal.
- **Instant Quote Generator & Request System**: Multi-step quote request workflow with dynamic pricing calculation and service area selection.
- **Multi-Service Catalog**:
  - Power Washing & Surface Restoration (Driveways, Patios, Roofs, Facades, Decking)
  - Commercial & Office Contract Cleaning
  - Industrial & Warehouse Floor Scrubbing / Degreasing
  - Post-Construction & Builders Handover Sparkle Cleans
- **Job Applications & Careers Portal**: Direct candidate application system supporting CV attachments, portfolios, and job title tracking.
- **Lead Capture & Notifications**: Form submissions automatically saved to Supabase database with email notifications dispatched for immediate response.
- **Legal & Compliance**: Fully customized GDPR-compliant Privacy Policy and Commercial Terms & Conditions.
- **High-Performance Architecture**: Fast page load times built with React 18, Vite, and Tailwind CSS.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/) + [Embla Carousel](https://www.embla-carousel.com/) |
| **Data & State Management** | [@tanstack/react-query](https://tanstack.com/query/latest) |
| **Routing** | [React Router v6](https://reactrouter.com/) |

---

## 📦 Prerequisites

Before running the project locally, ensure you have:
- **Node.js** (version 18.0 or higher recommended) — [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

---

## ⚙️ Installation & Local Setup

### 1. Clone the repository
```bash
git clone "Github url"
cd my-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and configure your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-supabase-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-anon-key
```

### 4. Run the Development Server
```bash
npm run dev
```
The application will start locally at `http://localhost:8080` (or the port specified by Vite).

---

## 🔨 Available Scripts

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Generates the optimized production build in the `/dist` directory.
- `npm run preview`: Previews the production build locally.
- `npx tsc --noEmit`: Runs the TypeScript compiler to check for type errors without generating files.

---

## 📂 Project Structure

```
├── public/                 # Static public assets, favicon, logos, robots.txt
├── src/
│   ├── assets/             # Brand graphics and project gallery images
│   │   └── images/         # Showcase portfolio photos (service-01..09.jpeg)
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # shadcn/ui primitives (carousel, buttons, dialog, etc.)
│   │   ├── Header.tsx      # Main site navigation bar
│   │   ├── Footer.tsx      # Footer with quick links, contacts, legal info
│   │   ├── BeforeAfter.tsx # 16:9 Presentation portfolio carousel with lightbox
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── QuoteForm.tsx   # Free estimate quote calculator
│   │   └── ...
│   ├── hooks/              # Custom React Query & utility hooks
│   ├── integrations/       # Supabase client integration & types
│   ├── lib/
│   │   ├── config.ts       # Central company information, phone, email, services
│   │   ├── email.ts        # Email notification dispatcher
│   │   └── utils.ts        # ClassName merge utilities (clsx/tailwind-merge)
│   ├── pages/              # Main routing views
│   │   ├── Index.tsx       # Homepage
│   │   ├── About.tsx       # About company & team
│   │   ├── Services.tsx    # Services directory
│   │   ├── ServiceDetail.tsx # Detailed service view & booking
│   │   ├── QuoteRequest.tsx  # Multi-step quote request workflow
│   │   ├── Contact.tsx     # Contact page
│   │   ├── Career.tsx      # Job openings & application form
│   │   ├── PrivacyPolicy.tsx # GDPR & Data Protection policy
│   │   ├── TermsAndConditions.tsx # Commercial terms & service agreement
│   │   └── ...
│   ├── App.tsx             # Root router configuration & providers
│   ├── index.css           # Global Tailwind stylesheet and design tokens
│   └── main.tsx            # React application entry point
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration & alias mappings
```

---

## 🏢 Company Information

- **Company Name**: Force Services
- **CRO Registration**: IT00026659BB
- **Phone**: [+353 87 494 5684](tel:+353874945684)
- **WhatsApp**: [+353 87 494 5684](https://wa.me/353874945684)
- **Email**: [Forceservicesie@gmail.com](mailto:Forceservicesie@gmail.com)
- **Address**: Apartment 1, Limerick Road, Newmarket-on-Fergus, Ennis, Co. Clare, Ireland
- **Primary Service Areas**: Ennis, Limerick, Galway, Shannon, Sixmilebridge, Newmarket-on-Fergus & County Clare.

---

## 📄 License

All rights reserved © Force Services.
