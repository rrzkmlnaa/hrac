'use client'

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from "@/components/NextImage";

const Resource = () => {
  return (
    <section id='resource' className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      {/* <div className="rellative bg-[url(/images/garis.webp)] bg-contaian bg-center bg-no-repeat "></div> */}
      <div className='text-center'>
          <UnderlineLink href='#resource' className='text-gray-500'>
            RESOURCES
          </UnderlineLink>
          <h1 className='text-primary-500 py-5'>FREE RESOURCES</h1>
          <p className='pb-10'>
            Find HR Academy’s resume, cover letter, & networking templates below
          </p>
        </div>
        <div className='grid grid-cols-3 pt-5'>
          <div className='flex flex-col justify-center items-center p-5'>
            <NextImage
              src='/images/12.webp'
              width={250}
              height={250}
              alt="Resume UI"
              useSkeleton={true}
              classNames={{ image:'object-cover w-full h-auto', blur:'' }}
            />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
          <div className='flex flex-col justify-center items-center p-5'>
            <NextImage
              src='/images/13.webp'
              width={230}
              height={230}
              alt="Resume UI"
              useSkeleton={true}
              classNames={{ image:'object-cover w-full h-auto', blur:'' }}
            />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
          <div className='flex flex-col justify-center items-center p-5'>
            <NextImage
              src='/images/14.webp'
              width={230}
              height={230}
              alt="Resume UI"
              useSkeleton={true}
              classNames={{ image:'object-cover w-full h-auto', blur:'' }}
            />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
        </div>
        <div className='text-center pt-10'>
          <UnderlineLink href='/' className='text-primary-500'>
            Get Resource
            {' >>'}
          </UnderlineLink>
        </div>
    </section>
  );
};

export default Resource;
