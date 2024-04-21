'use client'

import Link from 'next/link';

import NextImage from '@/components/NextImage';

const Learn = () => {
  return (
    <section className='bg-blue-200 py-10 md:px-6'>
      <div className='mx-auto max-w-screen-xl content-center text-center text-primary-500 py-16 px-6 md:px-0'>
        <h1>Learn Easier with LMS HR Academy</h1>
        <p className='py-5'>
          Get easy access to materials, simple payment, and interactive features
          designed to <br /> increase the efficiency and comprehensiveness of
          learning.
        </p>
        <Link href='https://campus.hracademy.id' target='_blank'>
          <div className='flex justify-center'>
            <NextImage
              src='/images/mockup.webp'
              width={800}
              height={800}
              alt='mockup'
              useSkeleton={true}
              classNames={{ image: 'rounded-md shadow-md object-cover w-full h-auto', blur: 'blur' }}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Learn;
