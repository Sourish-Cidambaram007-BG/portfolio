import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

import cegLogo from "../assets/projects/ceg.png";
import yrtvLogo from "../assets/projects/yrtv.png";

const education = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer Science and Engineering",
    institution: "College of Engineering Guindy (CEG), Anna University, Chennai",
    duration: "Nov 2022 - Apr 2026",
    logo: cegLogo,
    icon: <FaGraduationCap size={22} />,
  },
  {
    title: "High School",
    subtitle: "Higher Secondary Education",
    institution: "YRTV Matriculation Higher Secondary School, Sivakasi",
    duration: "2017 - 2022",
    logo: yrtvLogo,
    icon: <FaSchool size={22} />,
  },
  {
    title: "Middle School",
    subtitle: "Middle School Education",
    institution: "YRTV Matriculation Higher Secondary School, Sivakasi",
    duration: "2014 - 2016",
    logo: yrtvLogo,
    icon: <FaSchool size={22} />,
  },
  {
    title: "Elementary Education",
    subtitle: "Primary School Education",
    institution: "YRTV Matriculation Higher Secondary School, Sivakasi",
    duration: "2008 - 2013",
    logo: yrtvLogo,
    icon: <FaSchool size={22} />,
  },
];

function Education() {
  return (
    <section
      id="education"
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
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-indigo-600 ml-6">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
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

                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

                  {/* Logo */}
                  <div className="bg-white rounded-xl p-3 w-24 h-24 flex items-center justify-center flex-shrink-0">

                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="w-16 h-16 object-contain"
                    />

                  </div>

                  {/* Details */}
                  <div>

                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-indigo-400 mt-1">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {item.institution}
                    </p>

                    <p className="text-gray-500 mt-2">
                      {item.duration}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;