import fluxInternshipCertificate from "../assets/images/achievements/flux-internship-certificate.png";
import javascriptCertificate from "../assets/images/achievements/javascript-certificate.png";

const achievements = [
  {
    id: 1,
    title: "Ordinary National Diploma in Computer Engineering",
    organization: "Federal Polytechnic, Ilaro",
    category: "Education",
    year: "2023–2025",

    description:
      "Completed an Ordinary National Diploma in Computer Engineering, building a strong foundation in computing, programming, problem-solving, and technical concepts.",

    certificate: null,
  },

  {
    id: 2,
    title: "Frontend Developer Internship",
    organization: "Flux Creative Technologies",
    category: "Professional Experience",
    year: "2026",

    description:
      "Completed a frontend development internship, working with a team to complete assigned tasks, contribute to real-world projects, improve development skills, and help bring products to life.",

    certificate: fluxInternshipCertificate,
  },

  {
    id: 3,
    title: "The Complete JavaScript Course: From Zero to Expert!",
    organization: "Udemy · Jonas Schmedtmann",
    category: "Certification",
    year: "2026",

    description:
      "Completed an intensive JavaScript course covering modern JavaScript development, application architecture, asynchronous programming, APIs, data structures, and problem-solving.",

    certificate: javascriptCertificate,
  },
];

export default achievements;
