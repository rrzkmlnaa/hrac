import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';

const Roles = () => {
  return (
    <section className='mx-auto max-w-screen-xl text-center my-40'>
      <h3 className='text-sky-500 p-3'>DISCOVER TAILORED SOLUTIONS FOR YOU</h3>
      <UnderlineLink href='/' className='mb-6'>
        Select your role:
      </UnderlineLink>
      <div className='flex flex-wrap justify-center gap-5'>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>Individuals</p>
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>hr profesionals</p>
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>corporate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
