import React from 'react'

export default function Header() {
  return (
    <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full h-auto py-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className='text-primary-500'>CAREER RESOURCES</h3>
        <h1>HR Academy Resources</h1>
        <p>Need free resources for your job search?</p>
        <p>We got you covered.</p>
      </div>
      <h1 className='text-center pt-20 pb-3'>Free Resumes to download and more</h1>
    </section>
  )
}
