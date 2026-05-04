import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 🔥 IMPORT YOUR IMAGES
import fishImg from "../assets/projects/fish-ai.png";
import ebookImg from "../assets/projects/ebook.png";
import erpImg from "../assets/projects/erp.png";
import premierImg from "../assets/projects/premier.png";
import potholeImg from "../assets/projects/pothole.png";

const projects = [
  {
    title: "AI Fish Species Detection Model",
    image: fishImg,
    description:
      "Deep learning-based system that identifies fish species from images and compares them with similar species using trained datasets.",
    tech: "Python • Deep Learning • Computer Vision",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/FishAIModel",
  },
  {
    title: "Accident Detection & Pothole Prevention System",
    image: potholeImg,
    description:
      "Machine learning model that detects accidents and predicts road safety risks using image and video processing techniques.",
    tech: "Machine Learning • Image Processing • Python",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/Project",
  },
  {
    title: "Online Bus Booking System (OOAD Project)",
    description:
      "Full-stack accessible booking platform with voice-enabled support for visually impaired users.",
    tech: "Node.js • MongoDB • HTML • CSS • JavaScript",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/OOAD",
  },
  {
    title: "E-Book Management System",
    image: ebookImg,
    description:
      "Java-based web application that allows users to browse and order ebooks similar to platforms like Amazon Kindle.",
    tech: "Java • JSP • MySQL",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/Java",
  },
  {
    title: "ERP System (Sun Software Labs)",
    image: erpImg,
    description:
      "Worked on real-world ERP system with backend development and database integration using PHP & MySQL.",
    tech: "PHP • MySQL • Web Development",
    live: "https://nexuserp.sunsoftwarelabs.com/",
  },
  {
    title: "Premier Litho Works Website (Freelance)",
    image: premierImg,
    description:
      "Designed and developed a responsive company website for a real-world client using modern frontend technologies.",
    tech: "HTML • CSS • JavaScript",
    live:
      "https://premierlithoworks1947.tiiny.site/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-md hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-300"
            >

              {project.image && (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              )}

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(" • ").map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 mt-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-indigo-400"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-indigo-400 hover:underline"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;