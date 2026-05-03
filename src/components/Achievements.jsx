import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "1st Prize – Basketball Tournament",
    place: "AJ College, Sivakasi",
    description:
      "Played as 6th man with outstanding performance, recording career stats of 20 points, 15 rebounds, and 10 assists.",
  },
  {
    title: "3rd Prize – Basketball Tournament",
    place: "New Prince Bhavani College, Chennai",
    description:
      "Contributed as a key supporting player helping the team secure a podium finish.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
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
          Achievements
        </motion.h2>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 shadow-md hover:border-indigo-500 transition"
            >
              <div className="text-indigo-400 mb-3">
                <FaTrophy size={26} />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-1">
                {item.place}
              </p>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;