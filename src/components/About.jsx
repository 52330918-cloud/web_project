import React from 'react'

function About() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white flex items-start justify-center py-12 px-4"> 
          <main className="w-full max-w-4xl">
<header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Student Portal</h1>
          <p className="mt-2 text-gray-600">A simple, modern portal to browse and register for courses — built for clarity and speed.</p>
        </header>
        <section className="bg-white shadow-sm rounded-2xl border border-green-100 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What this site does</h2>
          <p className="text-gray-700 leading-relaxed">This portal helps students easily discover courses, manage registrations, and view their enrolled classes. It focuses on a clean, responsive experience so you can get tasks done quickly on any device.</p>
        </section>

    </main>
    </div>

  )
}

export default About