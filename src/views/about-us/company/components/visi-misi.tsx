'use client'

import NextImage from '@/components/NextImage';

export default function VisiMisi() {
  return (
    <section className="relative bg-blue-800">
      <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl text-white">
        <NextImage
          src='/images/contact.webp'
          width={600}
          height={500}
          alt='Mockup visi & misi'
          useSkeleton={true}
          classNames={{ image: 'w-96 md:w-2/5 object-cover absolute h-screen left-0 rounded-r-[14rem] hidden md:block', blur: 'blur' }}
        />
        <div className="w-full content-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-4 content-center px-6 md:px-10">
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className='flex flex-col gap-5 md:gap-10 md:col-span-2'>
              <h1 className='text-3xl md:text-4xl text-center md:text-start'>Our Mission & Vision</h1>
              <p className='text-base md:text-lg text-left'>HR Academy is driven by a mission to cultivate  exceptional leaders who will pave the way for a more progressive future in Indonesia.</p>
              <p className='text-base md:text-lg text-left'>Our vision is to turn critical thinking into practical solutions to existing problems. We collaborate with many communities, organizations, educational partners, institutions and even across countries to be able to gain diverse skills, create new jobs, produce work-ready graduates, inspire the younger generation, and have a positive impact on society.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}