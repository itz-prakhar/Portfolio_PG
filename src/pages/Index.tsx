'use client'
import HireMeSection from '../components/HireMeSection'

const Index = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero section */}
      <section className="flex items-center justify-center h-[60vh] bg-gradient-to-tr from-purple-200 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Prakhar Gupta</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Frontend Developer passionate about building sleek, scalable web apps with React, Tailwind, and modern UI/UX.
          </p>
        </div>
      </section>

      {/* Hire Me Section */}
      <HireMeSection />
    </main>
  )
}

export default Index
