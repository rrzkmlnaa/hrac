import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

const Course = () => {
  return (
    <section className=' bg-blue-400 pt-16'>
      <div className='mx-auto max-w-screen-xl min-h-96 content-center'>
        <div className='text-center'>
          <div className='flex justify-center pb-5'>
            <Image src='/images/pwc.png' width={50} height={50} alt='' />
          </div>
          <UnderlineLink href='/' className='text-white'>
            TRAINING AND CERTIFICATION PROGRAMS
          </UnderlineLink>
          <h1 className='p-5 text-white'>
            Elevate Your Skills, Become a Respected Leader
          </h1>
          <p className='text-gray-100'>
            Training program by experienced practitioners and equipped with BNSP
            licensed certification
          </p>
        </div>
        <div className='grid grid-cols-4 gap-5 mt-10'>
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
      </div>
    </section>
  );
};

export default Course;
