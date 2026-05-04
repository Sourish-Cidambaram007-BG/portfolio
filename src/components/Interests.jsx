import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaNetworkWired,
  FaLaptopCode,
  FaBasketballBall,
  FaCogs,
} from "react-icons/fa";

const interests = [
  {
    name: "Building AI Models",
    icon: <FaRobot size={28} />,
  },
  {
    name: "Working with AI Models",
    icon: <FaCogs size={28} />,
  },
  {
    name: "Machine Learning",
    icon: <FaBrain size={28} />,
  },
  {
    name: "Deep Learning",
    icon: <FaNetworkWired size={28} />,
  },
  {
    name: "Full Stack Development",
    icon: <FaLaptopCode size={28} />,
  },
  {
    name: "Playing Basketball",
    icon: <FaBasketballBall size={28} />,
  },
];

function Interests() {
  return (
    <section
      id="interests"
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
          Areas of Interest
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {interests.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-4 shadow-md hover:border-indigo-500 hover:shadow-indigo-500/20 hover:shadow-lg transition duration-300"
            >
              <div className="text-indigo-400">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-center">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Interests;