'use client'

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

export default function HRACademy() {
  return (
    <section className="mx-auto max-w-screen-xl min-h-96 py-14 md:py-40 px-6 md:px-10">
      <h1 className="text-2xl font-extrabold md:text-5xl">
        Your Path to Success Starts Here
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 my-10 items-center">
        <div className='flex flex-col gap-10 justify-center col-span-2' >
          <p>
            HR Academy is your dedicated partner in career development and HR consulting. Through{' '}
            <span className="font-bold">our services</span>, we empower professionals and businesses to excel. A testament to our proficiency is our track record of guiding HR professionals to achieve CHRP certification under SKKNI scheme number 149 of 2020.
          </p>
          <p>
            Our institutional forms include the <span className="font-bold">Job Training Institute (LPK)</span> No:
            01/G2/31.75.01.1001/016R5/3/-1.837/2020, and the <span className="font-bold">Professional Certification
              Institute (LSP P1)</span> with an emphasis on Management Consulting Institutes, Vocational and
            Professional Education Institutions, Private Job Training Institute, Selection and
            Placement Institute for Domestic and Foreign Workers, Business and Management Job
            Training Institute.
          </p>
        </div>
        <div className="md:border-l-2 md:border-black grid grid-rows-2 place-items-center">
          <div className="flex justify-start items-center">
            <NextImage
              src="/images/LPK.webp"
              width={320}
              height={350}
              alt="LPK Image"
              useSkeleton={true}
              className='w-full lg:w-96 h-auto'
              classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
            />
          </div>
          <div className="text-black px-6 md:px-10">
            <h5 className="font-bold">Our LSP program refers to SKKNI as follows:</h5>
            <ul className="list-disc pl-10">
              <li>SKKNI 149 years. 2020 (HRM)</li>
              <li>SKKNI 55 years. 2009 (Tour Guide)</li>
              <li>SKKNI 389 years. 2013 (Entrepreneurship)</li>
              <li>SKKNI 247 years. 2007 (Export)</li>
            </ul>
          </div>
        </div>
      </div>
      <Button variant="yellow" className="border-none">
        Explore Program Here
      </Button>
    </section>
  );
}
