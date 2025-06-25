import React from 'react'
import HireMeSection from '../components/HireMeSection'

const Index = () => {
  return (
    <div>
      <section className="text-center py-20 bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">This is a frontend + full stack demo site</p>
      </section>

      {/* Hire Me Section */}
      <HireMeSection />
    </div>
  )
}

export default Index