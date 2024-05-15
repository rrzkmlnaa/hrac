'use client'

import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from "@/components/NextImage";

export default function Resource() {
  return (
    <section id='resource' className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      <div className='text-center text-balance'>
        <UnderlineLink href='#resource' className='text-gray-500'>
          RESOURCES
        </UnderlineLink>
        <h1 className='text-primary-500 py-5'>FREE RESOURCES</h1>
        <p className='pb-2 md:pb-10'>
          Find HR Academy’s resume, cover letter, & networking templates below
        </p>
      </div>
      <div className='relative grid grid-cols-1 md:grid-cols-3 pt-5'>
        {/* Background line */}
        <NextImage
          src='/images/garis.webp'
          width={400}
          height={90}
          alt=''
          className='hidden lg:block md:absolute top-[20%] lg:w-2/6 w-full left-[18%] -z-10 h-auto'
        />
        <NextImage
          src='/images/garis-mirror.webp'
          width={400}
          height={90}
          alt=''
          className='hidden lg:block md:absolute top-[20%] lg:w-2/6 w-full left-[51%] -z-10 h-auto'
        />
        <div className='flex flex-col justify-center items-center p-6'>
          <NextImage
            src='/images/resume.webp'
            width={250}
            height={250}
            alt="Resume UI"
            useSkeleton={true}
            classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
          />
          <h3 className='py-3'>Resume</h3>
          <p className='text-center text-balance'>
            Use HR Academy ATS-friendly resume template that has helped
            underdogs land interviews at Fortune 500 companies
          </p>
        </div>
        <div className='flex flex-col justify-center items-center p-6'>
          <NextImage
            src='/images/networking.webp'
            width={230}
            height={230}
            alt="Resume UI"
            useSkeleton={true}
            classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
          />
          <h3 className='pt-4 pb-4'>Networking</h3>
          <p className='text-center'>
            Use HR Academy networking templates to increase your chances of connecting with recruiters & hiring managers
          </p>
        </div>
        <div className='flex flex-col justify-center items-center p-6'>
          <NextImage
            src='/images/interview.webp'
            width={230}
            height={230}
            alt="Resume UI"
            useSkeleton={true}
            classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
          />
          <h3 className='py-3'>Interview</h3>
          <p className='text-center text-balance'>
            Use HR Academy interview preparation resources to help you pass your interviews & land the offer
          </p>
        </div>
      </div>
      <div className='text-center text-balance pt-10'>
        <ArrowLink href='#resource' className='text-primary-500'>
          Get Resource
        </ArrowLink>
      </div>
    </section>
  );
};
