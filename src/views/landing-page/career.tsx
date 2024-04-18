'use client'

import Link from 'next/link';
import { TbClover } from "react-icons/tb";

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';


const Career = () => {
  return (
    <section id='career' className='bg-[#004AAD] text-white'>
      <div className="mx-auto max-w-screen-xl py-40 text-center">
        <UnderlineLink href='#career' className='text-base uppercase'>
          Career development
        </UnderlineLink>
        <h2 className='py-5'>Need a Career Boost?</h2>
        <p className='t'>
          While some are born with industry connections, many of us aren't as
          lucky. <br /> Let us guide you to your dream job. It's what we do best.
        </p>
        <div className='grid grid-cols-1 xl:grid-cols-3 place-items-center pb-10'>
          <div className='flex flex-wrap gap-10 '>
            <Link href='' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='relative flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
                <h4 className='flex items-center'>Career Consulting</h4>
              </div>
              <p className='text-sm text-left ml-14'>
                Need professional guidance to level up your career? Let’s get you
                connected with the perfect mentor.
              </p>
            </Link>
            <Link href='/' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
                <h4 className='flex items-center'>Resume Revision</h4>
              </div>
              <p className='text-sm text-left ml-14'>
                Ready to win the resume wars? Our resumes are designed to stand
                out to your recruiters.
              </p>
            </Link>
            <Link href='/' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
                <h4 className='flex items-center'>LinkedIn Profile Revision</h4>
              </div>
              <p className='text-sm text-left ml-14'>
                Want to perfect your LinkedIn profile? We’ve got the tools to make
                your story stand out.
              </p>
            </Link>
          </div>
          <NextImage
            src='/images/career.webp'
            width={350}
            height={350}
            alt='Picture of the author'
            useSkeleton={true}
            classNames={{ image: 'object-cover rounded-[8rem]', blur: 'blur' }}
            className="xl:hover:scale-100 duration-150"
          />
          <div className='flex flex-wrap gap-10'>
            <Link href='/' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
                <h4 className='flex items-center'>Career Consulting</h4>
              </div>
              <p className='text-sm text-left ml-14'>
                Need professional guidance to level up your career? Let’s get you
                connected with the perfect mentor.
              </p>
            </Link>
            <Link href='/' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
                <h4 className='flex items-center'>Resume Revision</h4>
              </div>
              <p className='text-sm text-left ml-14'>
                Ready to win the resume wars? Our resumes are designed to stand
                out to your recruiters.
              </p>
            </Link>
            <Link href='/' className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
              <div className='flex justify-start gap-2'>
                <TbClover size='2rem' color='#38BDF8' />
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
          variant='yellow'
          size='base'
          className='border-none px-5 py-3'
        >
          VIEW OUR SERVICES
        </Button>
      </div>
    </section>
  );
};

export default Career;
