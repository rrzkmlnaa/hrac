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
          alt=''
          // className='object-cover absolute h-screen left-0 rounded-r-[14rem]'
          useSkeleton={true}
          classNames={{ image: 'object-cover absolute h-screen left-0 rounded-r-[14rem]', blur: 'blur' }}
        />
        <div className="w-full content-center h-screen">  
          <div className="flex flex-wrap gap-10 justify-around content-center">
            <div className="box"></div>
            <div className="box"></div>
            <Stack gap={2}>
              <h1 className='text-4xl'>Our Mission & Vision</h1>
              <p className='text-lg text-justify'>HR Academy is driven by a mission to cultivate exceptional <br /> leaders who will pave the way for a more progressive <br />future in Indonesia.</p>
              <p className='text-lg text-justify'>Our vision is to turn critical thinking into practical solutions <br /> to existing problems. We collaborate with many <br />communities, organizations, educational partners, <br />institutions and even across countries to be able to gain <br />diverse skills, create new jobs, produce work-ready <br />graduates, inspire the younger generation, and have a <br />positive impact on society.</p>
            </Stack>            
          </div>
        </div>
      </div>
    </section>
  )
}