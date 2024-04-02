import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

const Career = () => {
  return (
    <section className='mx-auto max-w-screen-xl my-40 text-center'>
      <UnderlineLink href='/' className='uppercase text-gray-500'>
        Career development
      </UnderlineLink>
      <h2 className='text-blue-700 py-5'>Need a Career Boost?</h2>
      <p className='text-gray-500'>
        While some are born with industry connections, many of us aren't as
        lucky. Let us guide you to your dream job. It's what we do best.
      </p>
      <div className='grid grid-cols-3 place-items-center pb-10'>
        <div className='flex flex-wrap gap-10'>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>Career Consulting</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Need professional guidance to level up your career? Let’s get you
              connected with the perfect mentor.
            </p>
          </Link>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>Resume Revision</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Ready to win the resume wars? Our resumes are designed to stand
              out to your recruiters.
            </p>
          </Link>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>LinkedIn Profile Revision</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Want to perfect your LinkedIn profile? We’ve got the tools to make
              your story stand out.
            </p>
          </Link>
        </div>
        <Image
          src='/images/career.webp'
          width={400}
          height={400}
          alt='Picture of the author'
        />
        <div className='flex flex-wrap gap-10'>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>Career Consulting</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Need professional guidance to level up your career? Let’s get you
              connected with the perfect mentor.
            </p>
          </Link>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>Resume Revision</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Ready to win the resume wars? Our resumes are designed to stand
              out to your recruiters.
            </p>
          </Link>
          <Link href='/' className='w-full p-3 rounded-xl hover:bg-sky-100'>
            <div className='flex justify-start gap-2'>
              <Image
                src='https://assets-global.website-files.com/6107d4b379e3293a0c62f588/621e463107676d833a82273f_career%20consultation%20icon.svg'
                width={45}
                height={45}
                alt='Picture of the author'
              />
              <h4 className='flex items-center'>LinkedIn Profile Revision</h4>
            </div>
            <p className='text-sm text-left ml-14'>
              Want to perfect your LinkedIn profile? We’ve got the tools to make
              your story stand out.
            </p>
          </Link>
        </div>
      </div>
      <Button
        isLoading={false}
        variant='primary'
        size='base'
        className='border-none px-5 py-3'
      >
        VIEW OUR SERVICES
      </Button>
    </section>
  );
};

export default Career;
