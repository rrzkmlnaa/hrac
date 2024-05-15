'use client'

import Link from 'next/link';
import { TbClover } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

interface CareerSectionProps {
  services: {
    title: string;
    description: string;
    link: string;
  }[];
}

const CareerSection = ({ services }: CareerSectionProps) => {
  return (
    <div className='flex flex-wrap gap-5 md:gap-10'>
      {services.map((service, index) => (
        <Link key={index} href={service.link} passHref>
          <div className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
            <div className='flex justify-start gap-2'>
              <TbClover size='2rem' color='#38BDF8' />
              <h4 className='flex items-center'>{service.title}</h4>
            </div>
            <p className='text-sm text-left ml-10 md:ml-14'>{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function Career() {
  const services = [
    { 
      title: 'Career Consulting', 
      description: 'Need professional guidance to level up your career? Let’s get you connected with the perfect mentor.', 
      link: '/' 
    },
    { 
      title: 'Resume Revision', 
      description: 'Ready to win the resume wars? Our resumes are designed to stand out to your recruiters.', 
      link: '/' 
    },
    { 
      title: 'Interview Prep', 
      description: 'Prepare for success with our interview coaching. Gain confidence and hone your skills to ace your upcoming interviews.', 
      link: '/' 
    },
    { 
      title: 'Cover Letter Revision', 
      description: 'We’ll translate your relevant work experience to craft the perfect job cover letter and increase your chances of landing your dream job.', 
      link: '/' 
    },
    { 
      title: 'CV Revision',
      description: 'Ready to pass the CV selection? Let’s craft your CV to stand out.', 
      link: '/' 
    },
    { 
      title: 'Linkedin Revision', 
      description: 'Enhance your LinkedIn profile. Stand out professionally and attract potential opportunities.', 
      link: '/' 
    },
    { 
      title: 'Individual Development Planning', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore nihil.', 
      link: '/', 
    },
  ];

  const mainServices = services.slice(0, 3);
  const additionalServices = services.slice(3, 6);
  const lastServices = services.slice(6, 7);

  return (
    <section id='career' className='bg-[#004AAD] text-white'>
      <div className='mx-auto max-w-screen-xl pt-24 pb-16 md:py-40 text-center'>
        <UnderlineLink href='#career' className='text-base uppercase'>
          Career development
        </UnderlineLink>
        <div className='mb-8 px-6 md:px-8'>
          <h2 className='py-5'>Need a Career Boost?</h2>
          <p className='text-center text-balance'>
            While some are born with industry connections, many of us aren't as lucky.
            <br /> Let us guide you to your dream job. It's what we do best.
          </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 place-items-center px-3 md:px-3 lg:px-6'>
          <CareerSection services={mainServices} />
          <NextImage
            src='/images/career.webp'
            width={350}
            height={350}
            alt='Picture of the author'
            useSkeleton={true}
            classNames={{ image: 'object-cover rounded-[8rem]', blur: 'blur' }}
            className='content-center xl:hover:scale-100 duration-150 hidden md:block'
          />
          <CareerSection services={additionalServices} />
        </div>
        {lastServices.map((service, index) => (
          <Link key={index} href={service.link} passHref>
            <div className='flex justify-start lg:justify-center gap-5 md:gap-10 my-5 p-3 xl:pl-14'>
              <div className='w-full xl:w-1/3 p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500 duration-150'>
                  <div className='flex justify-start gap-2'>
                    <TbClover size='2rem' color='#38BDF8' />
                    <h4 className='flex text-start xl:items-center'>{service.title}</h4>
                  </div>
                  <p className='text-sm text-left ml-10 md:ml-14'>{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
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
