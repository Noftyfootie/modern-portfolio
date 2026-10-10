import fluxCampusCommunity from "../assets/images/projects/fluxcampus-community.png";
import fluxCampusContact from "../assets/images/projects/fluxcampus-contact.jpg";

import flowBankLight from "../assets/images/projects/flowbank-light.png";
import flowBankDark from "../assets/images/projects/flowbank-dark.png";

import luxuryBarberDark from "../assets/images/projects/barber-dark.jpg";
import luxuryBarberLight from "../assets/images/projects/barber-light.jpg";

import shoppingCalculatorLight from "../assets/images/projects/shopping-calculator-light.png";
import shoppingCalculatorDark from "../assets/images/projects/shopping-calculator-dark.png";

import MaptyWorkout from "../assets/images/projects/mapty-workout.png";
import MaptyLocation from "../assets/images/projects/mapty-location.png";

import ForkifyBookMark from "../assets/images/projects/forkify-bookmark.png";
import ForkifyWorkout from "../assets/images/projects/forkify-modal.png";

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

    liveUrl: "https://fluxcampus.org/",
    githubUrl: "https://github.com/Jtcontrolla/Flux-campus-02",

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
      default: flowBankDark,
      hover: flowBankLight,
    },

    liveUrl: "https://flowbankapp.netlify.app/",
    githubUrl: "https://github.com/Noftyfootie/FlowBank_App",

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

    liveUrl: "https://elitecutsbarberco.vercel.app/",
    githubUrl: "https://github.com/Noftyfootie/Elitecuts_Barber_Co",

    featured: true,
  },

  {
    id: 4,
    title: "Shopping Calculator",
    category: "Frontend Development",
    type: "Personal Project",
    year: "2026",

    description:
      "A clean and responsive shopping calculator built with vanilla JavaScript. Users can dynamically add items and prices, calculate totals with currency formatting, switch between light and dark modes, and generate printable or downloadable shopping summaries.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],

    images: {
      default: shoppingCalculatorLight,
      hover: shoppingCalculatorDark,
    },

    liveUrl: "https://shoppingcalculator2026.netlify.app/",
    githubUrl: "https://github.com/Noftyfootie/shopping_calculator",

    featured: true,
  },

  {
    id: 5,
    title: "Mapty",
    category: "JavaScript Development",
    type: "Learning Project",
    year: "2026",

    description:
      "An interactive workout tracking web application built while learning modern JavaScript. Mapty allows users to log running and cycling workouts on an interactive map, with workout details and location-based tracking presented through a clean, responsive interface.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript", "Leaflet", "Geolocation API"],

    images: {
      default: MaptyWorkout,
      hover: MaptyLocation,
    },

    liveUrl: "https://noftyfootie.github.io/Mapty-App/",
    githubUrl: "https://github.com/Noftyfootie/Mapty-App",

    featured: true,
  },

  {
    id: 6,
    title: "Forkify",
    category: "JavaScript Development",
    type: "Learning Project",
    year: "2026",

    description:
      "A recipe discovery web application built while learning modern JavaScript. Forkify allows users to search for recipes, view detailed cooking instructions and ingredients, adjust serving sizes, bookmark favorites, and interact with recipe data through a responsive interface.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript", "REST API", "MVC Architecture"],

    images: {
      default: ForkifyBookMark,
      hover: ForkifyWorkout,
    },

    liveUrl: "https://forkify-layo.netlify.app/",
    githubUrl: "https://github.com/Noftyfootie/forkify",

    featured: true,
  },
];

export default projects;
