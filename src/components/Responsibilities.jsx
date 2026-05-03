import { motion } from "framer-motion";
import { FaUserTie, FaBullhorn } from "react-icons/fa";

const responsibilities = [
  {
    title: "Class Representative (2025 - 2026)",
    description:
      "Representing my class by coordinating with faculty members, supporting classmates academically, and managing communication between students and department.",
    icon: <FaUserTie size={28} />,
  },
  {
    title: "Campus Ambassador (2025 - 2026)",
    description:
      "Actively promoting department initiatives, supporting student engagement activities, and representing the Computer Science department at campus-level programs.",
    icon: <FaBullhorn size={28} />,
  },
];

function Responsibilities() {
  return (
    <section
      id="responsibilities"
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
          Responsibilities
        </motion.h2>

        {/* Responsibility Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-md hover:border-indigo-500 transition"
            >
              <div className="text-indigo-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Responsibilities;