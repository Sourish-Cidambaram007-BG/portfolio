import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0f19] text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-indigo-500 mb-6">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Sourish Cidambaram BG</span>, a
            Full Stack Developer passionate about building scalable digital
            solutions and intelligent applications. My interests include
            Artificial Intelligence, Machine Learning, Data Mining, and Deep
            Learning, where I explore how technology can solve meaningful
            real-world problems.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            My long-term vision is to grow into a tech entrepreneur and build
            products that create a meaningful impact worldwide through
            innovation and technology.
          </p>
        </motion.div>

        {/* Right Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              Full Stack
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              React, Java, MySQL & Tailwind CSS
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              AI & ML
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Machine Learning, Data Mining & Deep Learning
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              Career
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Upcoming Analyst @ Deloitte US India
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition">
            <h3 className="text-indigo-400 font-semibold">
              Vision
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Building AI-driven products and aspiring to become a Tech Entrepreneur.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;