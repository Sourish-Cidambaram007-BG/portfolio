import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0b0f19] text-white flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{" "}
            <span className="text-indigo-500">
              Sourish Cidambaram BG
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl text-gray-400"
          >
            Full Stack Developer • AI Enthusiast • Future Tech Entrepreneur Billionaire CEO
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-500 rounded-lg hover:border-indigo-400 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Sourish"
            className="w-72 h-72 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;