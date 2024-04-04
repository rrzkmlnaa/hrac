import Image from 'next/image';

export default function VisiMisi() {
  return (
    <section className="bg-blue-500">
      <div className="mx-auto max-w-screen-xl text-white ">
        <div className="w-full flex flex-wrap justify-around h-screen">
          <div className="">
            <Image 
              src='/images/contact.webp'
              width={600}
              height={500}
              alt=''
              className='absolute h-screen left-0 rounded-r-[14rem]'
            />
          </div>
          <div className="flex flex-wrap flex-col gap-5 justify-center item-center">
            <h1>Our Mission & Vision</h1>
            <p>HR Academy is driven by a mission to cultivate exceptional <br /> leaders who will pave the way for a more progressive <br />future in Indonesia.</p>
            <p>Our vision is to turn critical thinking into practical solutions <br /> to existing problems. We collaborate with many <br />communities, organizations, educational partners, <br />institutions and even across countries to be able to gain <br />diverse skills, create new jobs, produce work-ready <br />graduates, inspire the younger generation, and have a <br />positive impact on society.</p>
          </div>
        </div>
      </div>
    </section>
  )
}