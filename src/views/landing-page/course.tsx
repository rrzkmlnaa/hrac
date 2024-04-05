'use client'

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

const Course = () => {
  return (
    <section id='course' className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      <div className='text-center text-primary-500'>
        <div className='flex flex-nowrap items-center justify-center pb-5'>
          <NextImage 
            src='/images/LPK.webp'
            width={140} 
            height={50}
            alt='LPK Image' 
            useSkeleton={true}
            classNames={{ image: 'object-cover hover:scale-150 duration-150 w-full h-auto', blur: '' }}
          />
          <NextImage 
            src='/images/BNSP.webp' 
            width={90} 
            height={50} 
            alt='BNSP Image'
            useSkeleton={true}
            classNames={{ image: 'object-cover hover:scale-150 duration-150 w-full h-auto', blur: '' }}
          />
        </div>
        <UnderlineLink href='#course'>
          TRAINING AND CERTIFICATION PROGRAMS
        </UnderlineLink>
        <h1 className='p-5'>
          Elevate Your Skills, Become a <br />Respected Leader
        </h1>
        <p className=''>
          Training program by experienced practitioners and equipped with BNSP
          licensed certification
        </p>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10'>
        <div className='bg-white w-full shadow rounded-lg overflow-hidden'>
          <Image
            src='/images/staff-hr.webp'
            className='object-cover h-54 w-full'
            alt=''
            width={320}
            height={240}
          />
          <div className='p-4'>
            <h3 className='mt-3 font-bold text-lg pb-4 border-slate-300'>
              <Link href='/'>Staff HR</Link>
            </h3>
            <p>Harga</p>
            <h6 className='font-bold pb-5'>Rp. 4.500.000</h6>
            <Button
              isLoading={false}
              variant='primary'
              size='base'
              className='w-full uppercase flex justify-center border-none'
            >
              lihat detail
            </Button>
          </div>
        </div>

        <div className='bg-white w-full shadow rounded-lg overflow-hidden'>
          <Image
            src='/images/supervisor-hr.webp'
            className='object-cover h-54 w-full'
            alt=''
            width={320}
            height={240}
          />
          <div className='p-4'>
            <h3 className='mt-3 font-bold text-lg pb-4 border-slate-300'>
              <Link href='/'>Supervisor HR</Link>
            </h3>
            <p>Harga</p>
            <h6 className='font-bold pb-5'>Rp. 5.500.000</h6>
            <Button
              isLoading={false}
              variant='primary'
              size='base'
              className='w-full uppercase flex justify-center border-none'
            >
              lihat detail
            </Button>
          </div>
        </div>

        <div className='bg-white w-full shadow rounded-lg overflow-hidden'>
          <Image
            src='/images/assisten-manager-hr.webp'
            className='object-cover h-54 w-full'
            alt=''
            width={320}
            height={240}
          />
          <div className='p-4'>
            <h3 className='mt-3 font-bold text-lg pb-4 border-slate-300'>
              <Link href='/'>Assisten Manager HR</Link>
            </h3>
            <p>Harga</p>
            <h6 className='font-bold pb-5'>Rp. 6.500.000</h6>
            <Button
              isLoading={false}
              variant='primary'
              size='base'
              className='w-full uppercase flex justify-center border-none'
            >
              lihat detail
            </Button>
          </div>
        </div>

        <div className='bg-white w-full shadow rounded-lg overflow-hidden'>
          <Image
            src='/images/manager-hr.webp'
            className='object-cover h-54 w-full'
            alt=''
            width={320}
            height={240}
          />
          <div className='p-4'>
            <h3 className='mt-3 font-bold text-lg pb-4 border-slate-300'>
              <Link href='/'>Manager HR</Link>
            </h3>
            <p>Harga</p>
            <h6 className='font-bold pb-5'>Rp. 4.500.000</h6>
            <Button
              isLoading={false}
              variant='primary'
              size='base'
              className='w-full uppercase flex justify-center border-none'
            >
              lihat detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
