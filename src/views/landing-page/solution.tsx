'use client'

import { FaCheckCircle } from "react-icons/fa";

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

const Solution = () => {
  return (
    <section id='solution' className='bg-gray-100'>
      <div className="bg-gray-100 mx-auto max-w-screen-xl min-h-96 content-center py-16">
        <div className='flex flex-wrap justify-between items-center gap-5'>
          <div className='testing classname'>
            <UnderlineLink href='#solution' className='uppercase text-gray-500'>
              Solutions
            </UnderlineLink>
            <h1 className='py-4 text-primary-500'>
              Human Capital Solutions for <br /> the Digital Era
            </h1>
            <div className='flex flex-wrap gap-3 pt-5 pl-5 pb-2'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Talent Recruitment</p>
            </div>
            <div className='flex flex-wrap gap-3 py-2 pl-5'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Employee On-boarding & Off-boardingt</p>
            </div>
            <div className='flex flex-wrap gap-3 py-2 pl-5'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Performance & Career Management</p>
            </div>
            <div className='flex flex-wrap gap-3 py-2 pl-5'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Payroll Management</p>
            </div>
            <div className='flex flex-wrap gap-3 py-2 pl-5'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Human Resources System</p>
            </div>
            <div className='flex flex-wrap gap-3 py-2 pl-5'>
              <FaCheckCircle size='2rem' color='#EDB526' />
              <p>Ad-hoc Consulting Service</p>
            </div>
            <div className='py-10'>
              <Button isLoading={false} variant='primary' className='border-none'>
                SCHEDULE FREE CONSULTATION
              </Button>
            </div>
          </div>
          <NextImage
              src='/images/solution.webp'
              width={500}
              height={500}
              alt='mockup solution'
              useSkeleton={true}
              classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
            />
        </div>
      </div>
    </section>
  );
};

export default Solution;
