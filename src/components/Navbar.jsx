import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-[#0b0f19]/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-indigo-500"
        >
          Sourish Cidambaram BG
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">

          <li>
            <a href="#about" className="hover:text-indigo-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-indigo-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-indigo-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-indigo-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#responsibilities" className="hover:text-indigo-400">
              Responsibilities
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-indigo-400">
              Achievements
            </a>
          </li>

        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">

          <a
            href="https://github.com/Sourish-Cidambaram007-BG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-indigo-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/sourish-chidambaram-abbb2126b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-indigo-400" />
          </a>

          <a
            href="https://www.instagram.com/sourishcidambaram/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-indigo-400" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sourishcidambaram@gmail.com&su=Opportunity%20from%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="hover:text-indigo-400" />
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;