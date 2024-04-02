import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';

const Resource = () => {
  return (
    <section className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      <div className='text-center'>
        <UnderlineLink href='/' className='text-gray-500'>
          RESOURCES
        </UnderlineLink>
        <h1 className='py-5 text-sky-600'>FREE RESOURCES</h1>
        <p className='text-gray-600 pb-10'>
          Find HR Academy’s resume, cover letter, & networking templates below
        </p>
      </div>
      <div className='grid grid-cols-3 pt-5'>
        <div className='flex flex-col justify-center items-center p-5'>
          <Image src='/images/icon.png' width={100} height={100} alt='sample' />
          <h3 className='py-3'>Resume</h3>
          <p className='text-center'>
            Use Wonsulting’s ATS-friendly resume template that has helped
            underdogs land interviews at Fortune 500 companies
          </p>
        </div>
        <div className='flex flex-col justify-center items-center p-5'>
          <Image src='/images/icon.png' width={100} height={100} alt='sample' />
          <h3 className='py-3'>Resume</h3>
          <p className='text-center'>
            Use Wonsulting’s ATS-friendly resume template that has helped
            underdogs land interviews at Fortune 500 companies
          </p>
        </div>
        <div className='flex flex-col justify-center items-center p-5'>
          <Image src='/images/icon.png' width={100} height={100} alt='sample' />
          <h3 className='py-3'>Resume</h3>
          <p className='text-center'>
            Use Wonsulting’s ATS-friendly resume template that has helped
            underdogs land interviews at Fortune 500 companies
          </p>
        </div>
      </div>
      <div className='text-center pt-10'>
        <UnderlineLink href='/' className='text-sky-500'>
          Get Resource
          {' >>'}
        </UnderlineLink>
      </div>
    </section>
  );
};

export default Resource;
