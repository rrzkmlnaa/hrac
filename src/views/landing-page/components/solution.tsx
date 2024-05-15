'use client'

import Link from "next/link";
import { IconBaseProps } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

interface SolutionType {
  title: string;
  icon:  React.ElementType<IconBaseProps>;
}

const data: SolutionType[] = [
  { title: 'Talent Recruitment', icon: FaCheckCircle },
  { title: 'Employee On-boarding & Off-boarding', icon: FaCheckCircle },
  { title: 'Performance & Career Management', icon: FaCheckCircle },
  { title: 'Payroll Management', icon: FaCheckCircle },
  { title: 'Human Resources System', icon: FaCheckCircle },
  { title: 'Ad-hoc Consulting Service', icon: FaCheckCircle },
  { title: 'Human Resources Strategy Management', icon: FaCheckCircle },
]

export default function Solution() {
  return (
    <section id='solution' className='bg-gray-100'>
      <div className="bg-gray-100 mx-auto max-w-screen-sm md:max-w-screen-xl min-h-96 content-center pt-24 pb-16 px-10 md:px-0">
        <div className='flex flex-wrap justify-between items-center gap-5 md:gap-0 md:px-10'>
          <div className='text-start'>
            <UnderlineLink href='#solution' className='uppercase text-gray-500'>
              Solutions
            </UnderlineLink>
            <h1 className='py-4 text-primary-500 text-balance text-start'>
              Human Capital Solutions for <br /> the Digital Era
            </h1>
            {data.map((item, index)=>(
              <div key={index} className='flex flex-wrap gap-1 sm:gap-3 pt-5 pl-2 md:pl-5 pb-2'>
                <item.icon size='2rem' color='#EDB526' />
                <p className="place-self-center text-sm sm:text-base">{item.title}</p>
              </div>
            ))}
            <div className='py-10'>
              <Link href="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu%3F&type=phone_number&app_absent=0">
                <Button isLoading={false} variant='primary' className='border-none'>
                  SCHEDULE FREE CONSULTATION
                </Button>
              </Link>
            </div>
          </div>
          <NextImage
            src='/images/solution.webp'
            width={500}
            height={500}
            alt='mockup solution'
            useSkeleton={true}
            className="hidden lg:block lg:w-2/5 h-auto"
            classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
          />
        </div>
      </div>
    </section>
  );
};
