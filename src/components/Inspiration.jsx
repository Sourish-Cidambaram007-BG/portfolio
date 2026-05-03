import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const inspirations = [
  {
    name: "Kobe Bryant",
    quote: "Job finished? I don’t think so.",
    note:
      "I believe growth never stops. I keep learning, building, and improving until I create impactful technology for the world.",
  },
  {
    name: "Stephen Curry",
    quote: "Success is not an accident, success is actually a choice.",
    note:
      "Consistency, discipline, and daily effort shape my approach to learning Full Stack and AI development.",
  },
  {
    name: "Michael Jordan",
    quote: "I've failed over and over again in my life. And that is why I succeed.",
    note:
      "Failures are part of innovation. I use them as stepping stones toward building meaningful solutions.",
  },
];

function Inspiration() {
  return (
    <section
      id="inspiration"
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
          Mindset & Inspiration
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {inspirations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <FaQuoteLeft className="text-indigo-400 mb-4" />

              <p className="text-gray-300 italic">
                "{item.quote}"
              </p>

              <p className="mt-4 text-indigo-400 font-semibold">
                — {item.name}
              </p>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {item.note}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Inspiration;