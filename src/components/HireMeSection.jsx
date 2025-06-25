'use client'
import { motion } from 'framer-motion'
import { Mail, Linkedin, FileText } from 'lucide-react'

const HireMeSection = () => {
  return (
    <section
      id="hire-me"
      className="relative py-24 bg-gradient-to-tr from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Ready to Collaborate?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          I’m open to exciting new opportunities in frontend or full-stack development. Let’s build something amazing
          together — reach out, and let’s chat!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:prakhargupta1718@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition duration-300"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/prvkhvr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] hover:bg-[#005885] text-white rounded-full shadow-lg transition duration-300"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full shadow-lg transition duration-300"
          >
            <FileText className="w-5 h-5" />
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Blurred background bubbles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-30 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-400 opacity-30 blur-[120px] rounded-full z-0" />
    </section>
  )
}

export default HireMeSection
