import fluxCampusCommunity from "../assets/images/projects/fluxcampus-community.png";
import fluxCampusContact from "../assets/images/projects/fluxcampus-contact.jpg";
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

    year: "2024",

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
];

export default projects;
