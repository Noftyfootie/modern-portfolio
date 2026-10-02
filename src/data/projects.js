import fluxCampusCommunity from "../assets/images/projects/fluxcampus-community.png";
import fluxCampusContact from "../assets/images/projects/fluxcampus-contact.jpg";
import flowBankLight from "../assets/images/projects/flowbank-light.jpg";
import flowBankDark from "../assets/images/projects/flowbank-dark.png";
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

    technologies: ["HTML", "CSS", "JavaScript"],

    images: {
      default: flowBankLight,
      hover: flowBankDark,
    },

    liveUrl: "#",
    githubUrl: "#",

    featured: true,
  },
];

export default projects;
