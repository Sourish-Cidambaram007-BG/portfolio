import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBullhorn,
  FaBriefcase,
} from "react-icons/fa";

const responsibilities = [
  {
    title: "Chief Operating Officer",
    organization: "Premier Litho Works",
    duration: "Apr 2026 – Present",
    description:
      "Leading operational activities, coordinating project execution, improving business workflows, and driving digital initiatives while supporting strategic decision-making across the organization.",
    icon: <FaBriefcase size={22} />,
  },
  {
    title: "Class Representative",
    organization: "College of Engineering Guindy (CEG)",
    duration: "2025 – 2026",
    description:
      "Represented the class by coordinating with faculty members, supporting classmates academically, and acting as the primary communication bridge between students and the department.",
    icon: <FaUserTie size={22} />,
  },
  {
    title: "Campus Ambassador",
    organization: "College of Engineering Guindy (CEG)",
    duration: "2025 – 2026",
    description:
      "Promoted departmental initiatives, encouraged student participation in technical activities, and represented the Computer Science department during campus-level programs and events.",
    icon: <FaBullhorn size={22} />,
  },
];

function Responsibilities() {
  return (
    <section
      id="responsibilities"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-indigo-500 mb-16"
        >
          Responsibilities
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-600 ml-6">

          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12 ml-10"
            >

              {/* Timeline Circle */}
              <div className="absolute -left-[60px] w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-[#0b0f19]">
                {item.icon}
              </div>

              {/* Card */}
              <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition duration-300">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-indigo-400 mt-1">
                  {item.organization}
                </p>

                <p className="text-gray-500 mt-2">
                  {item.duration}
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Responsibilities;