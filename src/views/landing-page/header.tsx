import React from 'react';

import Button from '@/components/buttons/Button';

const HeaderSection = () => {
  return (
    <>
      <section className='relative flex items-center md:block bg-[url(/images/banner-landingpage.webp)] bg-cover bg-center bg-no-repeat min-h-screen'>
        <div className='relative text-white mx-auto max-w-screen-xl px-4 py-32 md:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='text-5xl font-extrabold text-center md:text-start'>
              Your Path to Success Starts Here
            </h1>

            <p className='mt-4 max-w-lg text-xl/relaxed text-center md:text-start'>
              ELEVATE YOUR COMPETENCE, SECURE YOUR DREAM JOB, AND EXPAND YOUR
              BUSINESS WITH OUR TAILORED COACHING AND TRAINING PROGRAMS
            </p>

            <div className='mt-8 flex flex-wrap text-center justify-center md:justify-start'>
              <Button
                isLoading={false}
                variant='yellow'
                className='border-0 rounded-l-md rounded-r-none'
              >
                Register Now
              </Button>
              <Button
                isLoading={false}
                variant='primary'
                className='border-0 rounded-r-md rounded-l-none'
              >
                Visit Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
