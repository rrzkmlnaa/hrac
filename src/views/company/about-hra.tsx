import Image from 'next/image';

import Button from '@/components/buttons/Button';

export default function Hra() {
  return (
    <>
      <section className='relative bg-[url(https://www.shutterstock.com/image-vector/kepulauan-riau-province-isolated-on-260nw-1891010140.jpg)] bg-center bg-no-repeat'>
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
      </section>
      <section className="mx-auto max-w-screen-xl mb-10">
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
              src='/images/IPK.webp'
              width={450}
              height={350}
              alt='logo'
            />
          </div>
        </div>
        <div className="pl-10">
          <Button
            className='border-none'
          >
            Explore Program Here
          </Button>
        </div>
      </section>
    </>
  )
}