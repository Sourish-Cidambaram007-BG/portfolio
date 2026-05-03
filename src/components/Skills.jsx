import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaUsers,
  FaComments,
  FaTasks,
  FaBootstrap
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFigma,
  SiCanva
} from "react-icons/si";

const frontendSkills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "React Native", icon: "📱" },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Framer Motion", icon: "🎬" },
];

const backendSkills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Python", icon: "🐍" },
  { name: "OOP", icon: "⚙️" },
];

const stylingTools = [
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "PowerPoint", icon: "📊" },
];

const softSkills = [
  { name: "Teamwork", icon: <FaUsers /> },
  { name: "Communication", icon: <FaComments /> },
  { name: "Multi-tasking", icon: <FaTasks /> },
  { name: "Flexibility", icon: "🔄" },
  { name: "Attentiveness", icon: "🎯" },
  { name: "Leadership", icon: "👑" },
  { name: "Decision Making", icon: "🧠" },
];

function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07 }}
            className="bg-[#111827] border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-2 hover:border-indigo-500 transition"
          >
            <div className="text-indigo-400 text-2xl">
              {skill.icon}
            </div>

            <p className="text-sm font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-14"
        >
          Skills
        </motion.h2>

        <div className="space-y-14">

          <SkillCategory
            title="Frontend Development"
            skills={frontendSkills}
          />

          <SkillCategory
            title="Backend Development"
            skills={backendSkills}
          />

          <SkillCategory
            title="Styling & Design Tools"
            skills={stylingTools}
          />

          <SkillCategory
            title="Soft Skills"
            skills={softSkills}
          />

        </div>

      </div>
    </section>
  );
}

export default Skills;