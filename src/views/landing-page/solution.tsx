'use client'

import Image from 'next/image';
import { TbClover } from "react-icons/tb";

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

const Solution = () => {
  return (
    <section id='solution' className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      <div className='flex flex-wrap justify-between items-center gap-5'>
        <div className='testing classname'>
          <UnderlineLink href='#solution' className='uppercase text-gray-500'>
            Solution
          </UnderlineLink>
          <h1 className='py-4 text-sky-600'>
            Human Capital Solutions for <br /> the Digital Era
          </h1>
          <div className='flex flex-wrap gap-3 pt-5 pl-5 pb-2'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Talent Recruitment</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Employee On-boarding & Off-boardingt</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Performance & Career Management</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Payroll Management</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Human Resources System</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <TbClover size='2rem' color='#38BDF8' />
            <p>Ad-hoc Consulting Service</p>
          </div>
          <div className='py-10'>
            <Button isLoading={false} variant='primary' className='border-none'>
              SCHEDULE FREE CONSULTATION
            </Button>
          </div>
        </div>
        <div className='hover:scale-110'>
          <Image
            src='/images/oshfyb.webp'
            width={500}
            height={500}
            alt='sample'
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;
