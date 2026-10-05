import fluxCampusCommunity from "../assets/images/projects/fluxcampus-community.png";
import fluxCampusContact from "../assets/images/projects/fluxcampus-contact.jpg";

import flowBankLight from "../assets/images/projects/flowbank-light.jpg";
import flowBankDark from "../assets/images/projects/flowbank-dark.png";

import luxuryBarberDark from "../assets/images/projects/barber-dark.jpg";
import luxuryBarberLight from "../assets/images/projects/barber-light.jpg";

import shoppingCalculatorLight from "../assets/images/projects/shopping-calculator-light.png";
import shoppingCalculatorDark from "../assets/images/projects/shopping-calculator-dark.png";
const projects = [
  {
    id: 1,
    title: "FluxCampus",
    category: "Frontend Development",
    type: "Internship Project",

    description:
      "An education and community platform built for students and learners. I contributed to the frontend implementation of the Community and Contact pages during my internship at Flux Creative Technologies.",

    role: "Frontend Developer Intern",

    company: "Flux Creative Technologies",

    year: "2026",

    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Responsive Design",
    ],

    images: {
      default: fluxCampusCommunity,
      hover: fluxCampusContact,
    },

    liveUrl: "#",
    githubUrl: "#",

    featured: true,
  },

  {
    id: 2,
    title: "FlowBank",
    category: "Frontend Development",
    type: "Personal Project",

    description:
      "A fully functional front-end banking application that simulates a modern digital banking experience. Users can manage accounts, transfer money, request loans, track transactions, and work with localized dates and currencies.",

    role: "Frontend Developer",
    year: "2026",

    technologies: ["HTML", "CSS", "JavaScript"],

    images: {
      default: flowBankLight,
      hover: flowBankDark,
    },

    liveUrl: "#",
    githubUrl: "#",

    featured: true,
  },

  {
    id: 3,
    title: "Luxury Barber",
    category: "Frontend Development",
    type: "Personal Project",
    year: "2026",

    description:
      "A modern luxury barber landing page built for a premium barber brand, featuring responsive layouts, interactive sections, booking functionality, theme switching, galleries, testimonials, and studio showcases.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],

    images: {
      default: luxuryBarberDark,
      hover: luxuryBarberLight,
    },

    liveUrl: "#",
    githubUrl: "#",

    featured: true,
  },

  {
    id: 4,
    title: "Shopping Calculator",
    category: "Frontend Development",
    type: "Personal Project",

    description:
      "A clean and responsive shopping calculator built with vanilla JavaScript. Users can dynamically add items and prices, calculate totals with currency formatting, switch between light and dark modes, and generate printable or downloadable shopping summaries.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],

    images: {
      default: shoppingCalculatorLight,
      hover: shoppingCalculatorDark,
    },

    liveUrl: "#",
    githubUrl: "#",

    featured: true,
  },
];

export default projects;
