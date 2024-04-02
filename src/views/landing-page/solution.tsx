import Image from 'next/image';

import Button from '@/components/buttons/Button';

const Solution = () => {
  return (
    <section className='mx-auto max-w-screen-xl min-h-96 content-center py-16'>
      <div className='flex flex-wrap justify-between items-center gap-5'>
        <div className='testing classname'>
          <h6 className='text-gray-400'>Solution</h6>
          <h1 className='py-4 text-sky-600'>
            Human Capital Solutions for <br /> the Digital Era
          </h1>
          <div className='flex flex-wrap gap-3 pt-5 pl-5 pb-2'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
            <p>Talent Recruitment</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
            <p>Employee On-boarding & Off-boardingt</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
            <p>Performance & Career Management</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
            <p>Payroll Management</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
            <p>Human Resources System</p>
          </div>
          <div className='flex flex-wrap gap-3 py-2 pl-5'>
            <Image src='/images/icon.png' width={25} height={25} alt='icon' />
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
