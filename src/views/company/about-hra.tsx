import Image from 'next/image';

import Button from '@/components/buttons/Button';

export default function Hra() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl min-h-96 py-40">
        <h1 className='text-xl font-extrabold sm:text-5xl'>
          Your Path to Success Starts Here
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 my-10">
          <div className="flex flex-wrap justify-center items-center">
            <p>
              HR Academy is your dedicated partner in career development and HR consulting. Through <span className='font-bold'>our services</span>, we empower professionals and business to excel their game. A testament to our proficiency is our track record of guiding HR professionals to achieve CHRP certification under the SKKNI scheme number 149 of 2020.
            </p>
            <p>
              Our institutional forms include the <span className='font-bold'>Job Training Institute (LPK)</span> No:
              01/G2/31.75.01.1001/016R5/3/-1.837/2020, and the <span className='font-bold'>Professional Certification
              Institute (LSP P1)</span> with an emphasis on Management Consulting Institutes, Vocational and
              Professional Education Institutions, Private Job Training Institute, Selection and
              Placement Institute for Domestic and Foreign Workers, Business and Management Job
              Training Institute.
            </p>
          </div>
          <div className="border-l-2 border-black grid grid-rows-2">
            <div className="flex justify-start items-center">
              <Image 
                src='/images/LPK.webp'
                width={450}
                height={350}
                alt='LPK Image'
              />
            </div>
            <div className="text-black px-10">
              <h5 className='font-bold'>Our LSP program refers to SKKNI as follows:</h5>
              <ul className="list-disc pl-10">
                <li>SKKNI 149 years. 2020 (HRM)</li>
                <li>SKKNI 55 years. 2009 (Tour Guide)</li>
                <li>SKKNI 389 years. 2013 (Entrepreneurship)</li>
                <li>SKKNI 247 years. 2007 (Export)</li>
              </ul>
            </div>
          </div>
        </div>
          <Button
            variant='yellow'
            className='border-none'
          >
            Explore Program Here
          </Button>
      </section>
      {/* <section className='relative bg-[url(https://www.shutterstock.com/image-vector/kepulauan-riau-province-isolated-on-260nw-1891010140.jpg)] bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
        <div className='relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:min-h-96 lg:items-start lg:px-8'>
          <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='text-xl font-extrabold sm:text-5xl'>
              Your Path to Success Starts Here
            </h1>
            <p className="pt-5">
              HR Academy is your dedicated partner in career development and HR consulting. Through
              our services, we empower professionals and business to excel their game. A testament to our
              proficiency is our track record of guiding HR professionals to achieve CHRP certification
              under the SKKNI scheme number 149 of 2020.
            </p>
            <p className="pt-5">
              Our institutional forms include the Job Training Institute (LPK) No:
              01/G2/31.75.01.1001/016R5/3/-1.837/2020, and the Professional Certification
              Institute (LSP P1) with an emphasis on Management Consulting Institutes, Vocational and
              Professional Education Institutions, Private Job Training Institute, Selection and
              Placement Institute for Domestic and Foreign Workers, Business and Management Job
              Training Institute.
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className="mx-auto max-w-screen-xl mb-10">
        <div className="grid grid-cols-2">
          <div className="group text-black p-10">
            <h5>Our LSP program refers to SKKNI as follows:</h5>
            <ul className="list-disc pl-10">
              <li>SKKNI 149 years. 2020 (HRM)</li>
              <li>SKKNI 55 years. 2009 (Tour Guide)</li>
              <li>SKKNI 389 years. 2013 (Entrepreneurship)</li>
              <li>SKKNI 247 years. 2007 (Export)</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src='/images/LPK.webp'
              width={450}
              height={350}
              alt='LPK Image'
            />
          </div>
        </div>
        <div className="pl-10">
          <Button
            variant='yellow'
            className='border-none'
          >
            Explore Program Here
          </Button>
        </div>
      </section> */}
    </>
  )
}