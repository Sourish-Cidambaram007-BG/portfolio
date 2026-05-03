import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Fish Species Detection Model",
    description:
      "Deep learning-based system that identifies fish species from images and compares them with similar species using trained datasets.",
    tech: "Python • Deep Learning • Computer Vision",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/FishAIModel",
  },
  {
    title: "Accident Detection & Pothole Prevention System",
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
    description:
      "Java-based web application that allows users to browse and order ebooks similar to platforms like Amazon Kindle.",
    tech: "Java • JSP • MySQL",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/Java",
  },
  {
    title: "Premier Litho Works Website (Freelance)",
    description:
      "Designed and developed a responsive company website for a real-world client using modern frontend technologies.",
    tech: "HTML • CSS • JavaScript",
    live:
      "https://premierlithoworks1947.tiiny.site/",
  },
  {
    title: "Spring Boot Learning Projects",
    description:
      "Collection of backend experiments and REST API implementations built while learning Spring Boot.",
    tech: "Spring Boot • Java • REST APIs",
    github:
      "https://github.com/Sourish-Cidambaram007-BG/SpringBoot",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-14"
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-md hover:border-indigo-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <p className="text-indigo-400 text-sm mb-4">
                {project.tech}
              </p>

              {/* Buttons */}
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

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;