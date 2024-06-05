'use client'

import Link from 'next/link';
import { useState } from 'react';
import { TbClover } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/Modal';
import NextImage from '@/components/NextImage';

interface CareerService {
  title: string;
  description: string;
  link: string;
}

interface CareerSectionProps {
  services: CareerService[];
}

const CareerSection = ({ services, setSelectedCard }: CareerSectionProps & { setSelectedCard: (card: CareerService | null) => void }) => {
  return (
    <div className='flex flex-wrap gap-5 md:gap-10'>
      {services.map((service, index) => (
        <Link key={index} href={service.link} passHref onClick={() => setSelectedCard(service)}>
          <div className='w-full p-3 rounded-xl hover:bg-yellow-400 hover:text-primary-500'>
            <div className='grid grid-cols-[auto,1fr] gap-2'>
              <TbClover size='2rem' color='#38BDF8' className='bg-white w-fit h-fit rounded-full p-2' />
              <div className="block">
                <h4 className='text-start'>{service.title}</h4>
                <p className='text-sm text-start '>{service.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};


export const services = [
  {
    title: 'Career Coaching',
    description: 'Need professional guidance to level up your career? Let’s get you connected with the perfect mentor.',
    link: '#scrollLimitations'
  },
  {
    title: 'Job Search Strategy',
    description: 'Optimize your job search with our strategic quidance. Let us help you navigate the path to your ideal career.',
    link: '#scrollLimitations'
  },
  {
    title: 'Interview Prep',
    description: 'Prepare for success with our interview coaching. Gain confidence and hone your skills to ace your upcoming interviews.',
    link: '#scrollLimitations'
  },
  {
    title: 'Cover Letter Revision',
    description: 'We’ll translate your relevant work experience to craft the perfect job cover letter and increase your chances of landing your dream job.',
    link: '#scrollLimitations'
  },
  {
    title: 'CV Revision',
    description: 'Ready to pass the CV selection? Let’s craft your CV to stand out.',
    link: '#scrollLimitations'
  },
  {
    title: 'Linkedin Revision',
    description: 'Enhance your LinkedIn profile. Stand out professionally and attract potential opportunities.',
    link: '#scrollLimitations'
  },
  {
    title: 'Individual Development Planning',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, labore nihil.',
    link: '#scrollLimitations',
  },
];

export default function Career() {
  const [selectedCard, setSelectedCard] = useState<CareerService | null>(null);

  const mainServices = services.slice(0, 3);
  const additionalServices = services.slice(3, 6);
  // const lastServices = services.slice(6, 7);

  return (
    <section id='career' className='bg-[#004AAD] text-white'>
      <div className='mx-auto max-w-screen-xl pt-24 pb-16 md:py-40 text-center'>
        <UnderlineLink href='#career' className='text-base uppercase'>
          Career development
        </UnderlineLink>
        <div className='mb-8 px-6 md:px-8'>
          <h2 className='py-5'>Need a Career Boost?</h2>
          <p id='scrollLimitations' className='text-center text-balance'>
            While some are born with industry connections, many of us aren't as lucky.
            <br /> Let us guide you to your dream job. It's what we do best.
          </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 place-items-center px-3 md:px-3 lg:px-6 py-5'>
          <CareerSection services={mainServices} setSelectedCard={setSelectedCard} />
          <NextImage
            src='/images/career.webp'
            width={350}
            height={350}
            alt='Picture of the author'
            useSkeleton={true}
            classNames={{ image: 'object-cover rounded-[8rem]', blur: 'blur' }}
            className='content-center xl:hover:scale-100 duration-150 hidden md:block'
          />
          <CareerSection services={additionalServices} setSelectedCard={setSelectedCard} />
        </div>
        {/* {lastServices.map((service, index) => (
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
        ))} */}
        <UnstyledLink href='/services/career-development'>
          <Button
            isLoading={false}
            variant='yellow'
            size='base'
            className='border-none px-5 py-3'
          >
            VIEW OUR SERVICES
          </Button>
        </UnstyledLink>
      </div>
      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <div className='text-black'>
            <h3 className="text-xl font-semibold text-center pb-3 text-primary-500">{selectedCard.title}</h3>
            {selectedCard.description && <div dangerouslySetInnerHTML={{ __html: selectedCard.description }} />}
          </div>
        </Modal>
      )}
    </section>
  );
};
