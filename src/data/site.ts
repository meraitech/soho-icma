export const site = {
  name: "CMA Indonesia",
  fullName: "Certified Management Accountants Indonesia",
  tagline: "ICMA Indonesia Branch — Institute of Certified Management Accountants (Australia & New Zealand)",
  email: "info@cmaindonesia.org",
};

export type NavLink = { label: string; href: string };

export const utilityNav: NavLink[] = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/membership#faq" },
  { label: "Announcement", href: "/announcements" },
];

export const mainNav: NavLink[] = [
  { label: "Become a CMA", href: "/programs" },
  { label: "Members", href: "/membership" },
  { label: "Education Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "CFO Award", href: "/cfo-award" },
  { label: "About Us", href: "/about" },
];

export type HeroSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Certified Management Accountants in Indonesia",
    title: "Become a CMA",
    subtitle: "for a limitless future in management accounting",
    primaryCta: { label: "Apply Now", href: "/contact" },
    secondaryCta: { label: "Explore Programs", href: "/programs" },
  },
  {
    eyebrow: "ICMA ANZ Indonesia Branch",
    title: "Part of a global",
    subtitle: "professional body across Australia, Asia, Europe, Africa and the Americas",
    primaryCta: { label: "About ICMA", href: "/about" },
    secondaryCta: { label: "Our Partners", href: "/about#partners" },
  },
  {
    eyebrow: "Executive Board ICMA Indonesia",
    title: "Led by practitioners,",
    subtitle: "for practitioners — seminars, training and continuous professional development",
    primaryCta: { label: "Upcoming Events", href: "/events" },
    secondaryCta: { label: "Meet the Board", href: "/contact#board" },
  },
];

export type Update = {
  title: string;
  href: string;
  category: string;
  date: string;
  image: string;
};

export const latestUpdates: Update[] = [
  {
    title: "CMA Indonesia Branch Annual General Meeting 2026",
    href: "/announcements",
    category: "Branch News",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CMA Batch 19 Intensive Face-to-Face Program Completed",
    href: "/announcements",
    category: "Education",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "CFO Award 2026 — nominations now open",
    href: "/cfo-award",
    category: "Awards",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Upcoming webinar schedule — reserve your seat",
    href: "/events",
    category: "Events",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

export type Promo = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const promos: Promo[] = [
  {
    title: "CFO Award",
    description: "Celebrating Indonesia's outstanding chief financial officers.",
    cta: "Learn more",
    href: "/cfo-award",
  },
  {
    title: "IMAC Global",
    description: "International Management Accounting Collaborative charter programs.",
    cta: "Learn more",
    href: "/imac",
  },
  {
    title: "Upcoming Webinar",
    description: "Live CPD-eligible sessions with practitioners and academics.",
    cta: "Reserve a seat",
    href: "/events",
  },
  {
    title: "Membership Forms",
    description: "Download the CMA membership application pack.",
    cta: "Download",
    href: "/membership",
  },
];

export type Insight = {
  title: string;
  href: string;
  category: string;
};

export const insights: Insight[] = [
  {
    title: "Indonesia: CMA Indonesia Branch Annual General Meeting 2026",
    href: "https://ontarget.cmaaustralia.edu.au/indonesia-cma-indonesia-branch-annual-general-meeting-2026/",
    category: "Branch News",
  },
  {
    title: "Indonesia: CMA Batch 19 Intensive Face-to-Face Program Completed",
    href: "https://ontarget.cmaaustralia.edu.au/indonesia-cma-batch-19-intensive-face-to-face-program-completed/",
    category: "Education",
  },
  {
    title: "Small in Size, Priceless in Value Part One: Why Your Customer Only Sees the Price",
    href: "https://ontarget.cmaaustralia.edu.au/small-in-size-priceless-in-value-part-one-why-your-customer-only-sees-the-price/",
    category: "Strategy",
  },
  {
    title: "How 'egalitarian' Sweden became more comfortable with wealth",
    href: "https://ontarget.cmaaustralia.edu.au/how-egalitarian-sweden-became-more-comfortable-with-wealth/",
    category: "Economy",
  },
];

export type SupportCard = {
  title: string;
  description: string;
  href: string;
};

export const supportCards: SupportCard[] = [
  {
    title: "Member Benefits",
    description: "Branch activities, seminars and a global professional network.",
    href: "/membership",
  },
  {
    title: "Contact the branch",
    description: "Get in touch with the ICMA Indonesia branch office.",
    href: "/contact",
  },
  {
    title: "Your study support options",
    description: "Choose study support options to suit your learning style.",
    href: "/programs",
  },
  {
    title: "Meet your CPD hours",
    description: "We support you to keep learning and growing.",
    href: "/events",
  },
];

export type Partner = { name: string; description: string; href: string };

export const partners: Partner[] = [
  {
    name: "IPMI",
    description: "Indonesian Institute for Management Development — executive education delivery partner.",
    href: "https://ipmi.ac.id/programs/executive-education/individual",
  },
  {
    name: "RAD Indonesia",
    description: "Delivery partner for the CMA program in Indonesia.",
    href: "http://radindonesia.com",
  },
  {
    name: "Business Number Consulting",
    description: "BNC — delivery partner for the CMA program in Indonesia.",
    href: "http://www.businessnumberconsulting.com/",
  },
];

export type Officer = { role: string; name: string; email: string };

export const officers: Officer[] = [
  { role: "President", name: "Prof Dr. Ana Sopanah Supriyadi, CMA", email: "anasopanah@gmail.com" },
  { role: "Vice President", name: "Dr. Eduard Naibaho, CMA", email: "eduard.naibaho@uph.edu" },
  { role: "Honourable Secretary", name: "Diana Purwati Ningsih, CMA", email: "Diana.dsw177@gmail.com" },
  { role: "Honourable Treasurer", name: "Dr. Harnovinsah, CMA", email: "dr.harnovinsah@gmail.com" },
];

export type AudienceCard = {
  title: string;
  text: string;
  cta?: string;
  href?: string;
  image?: string;
};

export type AudienceTab = {
  id: "cgba" | "cma" | "events" | "members";
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: AudienceCard[];
  footerCta: { label: string; href: string };
};

export const audienceTabs: AudienceTab[] = [
  {
    id: "cgba",
    label: "Become a CGBA",
    eyebrow: "New pathway",
    title: "Become a CGBA",
    intro: "A global pathway for finance professionals.",
    cards: [
      {
        title: "The CGBA pathway",
        text: "An international credential for practitioners turning insight into strategy.",
        cta: "How it works",
        href: "/contact",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Starting the CGBA",
        text: "Routes, eligibility and intakes via the secretariat.",
      },
      {
        title: "Explore the benefits of a CGBA",
        text: "Global recognition for finance professionals.",
      },
      {
        title: "Who it's for",
        text: "Practitioners and graduates seeking a global designation.",
      },
      {
        title: "How to start",
        text: "Enquire with the secretariat for routes and intakes.",
      },
      {
        title: "Go further with CGBA",
        text: "Seminars, CPD and a network across five continents.",
        cta: "Enquire",
        href: "/contact",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    footerCta: { label: "Enquire about CGBA", href: "/contact" },
  },
  {
    id: "cma",
    label: "Become a CMA",
    eyebrow: "Flagship designation",
    title: "Become a CMA",
    intro: "The CMA designation, via the IMAC-accredited program.",
    cards: [
      {
        title: "The CMA program",
        text: "Strategic management accounting, face-to-face and online.",
        cta: "Explore programs",
        href: "/programs",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Starting the CMA",
        text: "Entry routes for graduates and professionals.",
      },
      {
        title: "Explore the benefits of a CMA",
        text: "Flagship designation for strategy and leadership.",
      },
      {
        title: "Entry routes",
        text: "Open to graduates and professionals.",
      },
      {
        title: "Delivered locally",
        text: "IPMI, RAD Indonesia and BNC across Indonesia.",
      },
      {
        title: "Study your way",
        text: "Face-to-face intensives and online support.",
        cta: "Apply",
        href: "/contact",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    footerCta: { label: "Apply for the program", href: "/contact" },
  },
  {
    id: "events",
    label: "Events",
    eyebrow: "Learn & connect",
    title: "Events & webinars",
    intro: "CPD-eligible sessions and gatherings, year-round.",
    cards: [
      {
        title: "Upcoming webinars",
        text: "Live sessions with practitioners and academics.",
        cta: "Reserve a seat",
        href: "/events",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Starting with events",
        text: "CPD-eligible sessions, year-round.",
      },
      {
        title: "Explore the benefits of events",
        text: "Learn and connect with peers.",
      },
      {
        title: "CFO Award Night 2026",
        text: "Celebrating Indonesia's outstanding CFOs.",
      },
      {
        title: "Past highlights",
        text: "Batch 19 intensive program and AGM 2026.",
      },
      {
        title: "Join the next gathering",
        text: "Webinars, intensives and award nights.",
        cta: "View all",
        href: "/events",
        image:
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    footerCta: { label: "View all events", href: "/events" },
  },
  {
    id: "members",
    label: "Members",
    eyebrow: "Belong & grow",
    title: "For members",
    intro: "Benefits and development for CMAs in Indonesia.",
    cards: [
      {
        title: "Member benefits",
        text: "Seminars and a global network across five continents.",
        cta: "Membership",
        href: "/membership",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Starting as a member",
        text: "Branch activities and study support.",
      },
      {
        title: "Explore the benefits of membership",
        text: "CPD, seminars and global connections.",
      },
      {
        title: "Stay qualified",
        text: "Meet CPD hours with branch training and events.",
      },
      {
        title: "Get support",
        text: "Study options and a secretariat that answers.",
      },
      {
        title: "Belong and grow",
        text: "Development for CMAs across Indonesia.",
        cta: "Resources",
        href: "/membership",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    footerCta: { label: "Member resources", href: "/membership" },
  },
];

export const aboutParagraphs = [  "CMA members in Indonesia have access to a number of branch activities and education programmes, many of which are delivered and accredited by various universities internationally. CMAs in Indonesia are qualified via the education and training programme accredited by the International Management Accounting Collaborative and delivered by the Institute of Certified Management Accountants (Australia & New Zealand).",
  "Being a CMA in Indonesia means a commitment to continuous professional development, and the ICMA (ANZ) offers seminars, training, and other development activities to assist members in achieving this objective.",
  "A management accountant applies his or her professional knowledge and skill in the preparation and presentation of financial and other decision-oriented information in such a way as to assist management in the formulation of policies and in the planning and control of the operation of the undertaking.",
];
