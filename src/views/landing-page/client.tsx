import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';

const Client = () => {
  return (
    <section className='mx-auto max-w-screen-xl my-40'>
      <h2 className='text-center'>Our clients now worked at</h2>
      <div className='flex flex-wrap justify-center gap-5 p-8'>
        <Image
          src='/images/dbs-Logo.png'
          width={100}
          height={100}
          alt='DBS Logo'
        />
        <Image
          src='/images/deloitte.svg.png'
          width={100}
          height={100}
          alt='Deloitte Logo'
        />
        <Image
          src='/images/pertamina.png'
          width={100}
          height={100}
          alt='Pertamina Logo'
        />
        <Image src='/images/pwc.png' width={100} height={100} alt='PWC logo' />
        <Image src='/images/rsm.png' width={100} height={100} alt='RSM Logo' />
        <Image
          src='/images/sc-johnson.svg.png'
          width={100}
          height={100}
          alt='SC Johnson Logo'
        />
        <Image
          src='/images/zahir.png'
          width={100}
          height={100}
          alt='Zahir Logo'
        />
      </div>
      <div className='text-center'>
        <UnderlineLink href='/' className='text-sky-500'>
          Read suceess stories
          {' >>'}
        </UnderlineLink>
      </div>
    </section>
  );
};

export default Client;
