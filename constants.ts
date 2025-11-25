import { Laptop, Car, Zap, ShieldCheck, Award, Clock, MapPin, FileCheck } from 'lucide-react';

export const CONTACT_INFO = {
  phone: "(954) 361-4931",
  phoneRaw: "9543614931",
  email: "info@browardnotarynow.com",
};

export const CITIES = [
  "Fort Lauderdale",
  "Wilton Manors",
  "Oakland Park",
  "Pompano Beach",
  "Coral Springs",
  "Plantation",
  "Sunrise",
  "Davie",
  "Hollywood",
  "Pembroke Pines",
  "Miramar",
  "All Broward County"
];

export const SERVICES = [
  {
    id: 'ron',
    title: "REMOTE ONLINE NOTARIZATION",
    icon: Laptop,
    tagline: "Available 24/7 • Get It Done in 15 Minutes",
    description: "Secure, legal, and instant. Meet with a commissioned notary online via webcam and sign your documents electronically from the comfort of your home or office.",
    benefits: [
      "Available 24/7, even holidays",
      "Complete in 15 minutes",
      "From home, office, or anywhere",
      "Secure video session",
      "Digital records stored safely",
      "Serve clients worldwide"
    ],
    cta: "Book Online Session",
    primary: true
  },
  {
    id: 'mobile',
    title: "MOBILE NOTARY SERVICE",
    icon: Car,
    tagline: "We Come to You in Broward County",
    description: "Professional in-person service at your location. We travel to homes, offices, hospitals, nursing homes, and coffee shops throughout Broward County.",
    benefits: [
      "Service at your location",
      "Flexible scheduling",
      "Evening & weekend appointments",
      "Hospital & nursing home visits",
      "All Broward County areas",
      "Same-day service available"
    ],
    cta: "Schedule Mobile Visit",
    primary: false
  }
];

export const BENEFITS = [
  {
    title: "LIGHTNING FAST",
    icon: Zap,
    description: "Remote online notarization in just 15 minutes. Mobile service scheduled within hours, not days.",
    detail: "We understand your time is valuable. That's why we've streamlined our process to get you notarized quickly without sacrificing quality or legal compliance."
  },
  {
    title: "SECURE & LEGAL",
    icon: ShieldCheck,
    description: "Florida-commissioned notary public. Fully compliant with all state laws and regulations.",
    detail: "Your documents are handled with bank-level security. All remote sessions are recorded and encrypted, meeting Florida's strict RON requirements."
  },
  {
    title: "AVAILABLE 24/7",
    icon: Clock,
    description: "Remote notarization any time, day or night. Mobile services with flexible scheduling including evenings and weekends.",
    detail: "Life doesn't happen on a 9-5 schedule. Whether it's midnight or Sunday morning, we're ready when you need us."
  },
  {
    title: "PROFESSIONAL SERVICE",
    icon: Award,
    description: "Experienced, reliable, and committed to excellence. Every document handled with care and expertise.",
    detail: "With years of experience and hundreds of satisfied clients, we bring professionalism and attention to detail to every notarization."
  },
  {
    title: "CONVENIENT LOCATIONS",
    icon: MapPin,
    description: "Serving all of Broward County. We come to your home, office, hospital, or anywhere that's convenient for you.",
    detail: "From Fort Lauderdale to Pembroke Pines, we travel throughout Broward County to meet you where you are."
  },
  {
    title: "ALL DOCUMENT TYPES",
    icon: FileCheck,
    description: "Real estate, legal, business, and personal documents. If it needs a notary signature, we handle it.",
    detail: "From simple affidavits to complex real estate closings, we have the expertise to notarize virtually any document type."
  }
];

export const DOCUMENT_CATEGORIES = [
  {
    title: "REAL ESTATE",
    items: [
      "Deeds & Mortgages",
      "Home Equity Loans",
      "Refinancing Documents",
      "Property Transfers",
      "Closing Documents"
    ]
  },
  {
    title: "LEGAL DOCUMENTS",
    items: [
      "Power of Attorney",
      "Wills & Trusts",
      "Affidavits",
      "Sworn Statements",
      "Court Documents"
    ]
  },
  {
    title: "BUSINESS & PERSONAL",
    items: [
      "Business Contracts",
      "Financial Documents",
      "Healthcare Directives",
      "Travel Consent Forms",
      "And Much More"
    ]
  }
];
