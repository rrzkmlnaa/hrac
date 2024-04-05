'use client'

import NextImage from '@/components/NextImage';

const Roles = () => {
  return (
    <section className='bg-gray-100'>
      <div className="mx-auto max-w-screen-xl text-center pt-20 pb-32">
        <h1 className='text-primary-500 p-3'>DISCOVER TAILORED SOLUTIONS FOR YOU</h1>
        <p className='text-base mb-6 text-gray-500'>
          Select your role:
        </p>
        <div className='flex flex-wrap justify-center gap-5'>
          <div className='relative'>
            <NextImage
              src='/images/individual.webp'
              width={410}
              height={500}
              alt='Individuals Role'
              useSkeleton={true}
              classNames={{ image: 'bg-gray-700 object-center object-cover drop-shadow-md rounded-md', blur: '' }}
            />
            <div className='absolute bottom-0 bg-primary-500'>
              <p className='uppercase px-5 py-3 text-white'>Individuals</p>
            </div>
          </div>
          <div className='relative'>
            <NextImage
              src='/images/hr-profesionals.webp'
              width={410}
              height={410}
              alt='HR-Profesionals Role'
              useSkeleton={true}
              classNames={{ image: 'bg-gray-700 object-center object-cover drop-shadow-md rounded-md', blur: '' }}
            />
            <div className='absolute bottom-0 bg-primary-500'>
              <p className='uppercase px-5 py-3 text-white'>hr profesionals</p>
            </div>
          </div>
          <div className='relative'>
            <NextImage
              src='/images/corporate.webp'
              width={410}
              height={410}
              alt='Corporate Role'
              useSkeleton={true}
              classNames={{ image: 'bg-gray-700 object-center object-cover drop-shadow-md rounded-md', blur: '' }}
            />
            <div className='absolute bottom-0 bg-primary-500'>
              <p className='uppercase px-5 py-3 text-white'>corporate</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Roles;
