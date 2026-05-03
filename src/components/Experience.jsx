import { motion } from "framer-motion";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    role: "PHP & MySQL Web Developer Intern",
    company: "Sun Software Labs",
    duration: "May 2025 – July 2025",
    location: "Sivakasi, India",
    description:
      "Worked on real-world client-based ERP web applications using PHP and MySQL. Contributed to backend development, database integration, and business workflow implementation.",
    live: "https://nexuserp.sunsoftwarelabs.com/",
  },
];

function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        {/* Experience Card */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-md hover:border-indigo-500 transition"
          >
            <div className="flex items-center gap-3 mb-3 text-indigo-400">
              <FaBriefcase />
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>
            </div>

            <p className="text-gray-300 font-medium">
              {exp.company}
            </p>

            <p className="text-gray-500 text-sm">
              {exp.duration} • {exp.location}
            </p>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Live Project Link */}
            <a
              href={exp.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-indigo-400 hover:underline"
            >
              <FaExternalLinkAlt />
              View ERP Project
            </a>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Experience;