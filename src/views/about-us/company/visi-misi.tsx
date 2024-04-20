'use client'

import NextImage from '@/components/NextImage';
import Stack from '@/components/Stack';

export default function VisiMisi() {
  return (
    <section className="relative bg-blue-800">
      <div className="mx-auto max-w-screen-xl text-white">
        <NextImage 
          src='/images/contact.webp'
          width={600}
          height={500}
          alt='Mockup visi & misi'
          useSkeleton={true}
          classNames={{ image: 'w-96 md:w-2/5 object-cover absolute h-screen left-0 rounded-r-[14rem] hidden xl:block', blur: 'blur' }}
        />
        <div className="w-full content-center h-screen">  
          <div className="flex flex-wrap gap-10 justify-around content-center px-6 md:px-0">
            <div className="hidden xl:block"></div>
            <div className="hidden xl:block"></div>
            <Stack gap={2}>
              <h1 className='text-3xl md:text-4xl'>Our Mission & Vision</h1>
              <p className='text-sm md:text-lg text-start md:text-justify py-3 md:py-0'>HR Academy is driven by a mission to cultivate <br className='hidden md:block' /> exceptional leaders who will pave the way for a <br className='hidden md:block' />more progressive future in Indonesia.</p>
              <p className='text-sm md:text-lg text-start md:text-justify'>Our vision is to turn critical thinking into practical <br className='hidden md:block' />solutions to existing problems. We collaborate with <br className='hidden md:block' />many communities, organizations, educational <br className='hidden md:block' />partners, institutions and even across countries to be <br className='hidden md:block' />able to gain diverse skills, create new jobs, produce <br className='hidden md:block' />work-ready graduates, inspire the younger <br className='hidden md:block' />generation, and have a positive impact on society.</p>
            </Stack>            
          </div>
        </div>
      </div>
    </section>
  )
}