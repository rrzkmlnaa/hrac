'use client'

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

const clients = [
  { src: '/images/dbs-Logo.png', alt: 'DBS Company' },
  { src: '/images/deloitte.svg.png', alt: 'Deloitte Company' },
  { src: '/images/pertamina.png', alt: 'Pertamina Company' },
  { src: '/images/pwc.png', alt: 'PWC Company' },
  { src: '/images/rsm.png', alt: 'RSM Company' },
  { src: '/images/sc-johnson.svg.png', alt: 'SC Johnson Company' },
  { src: '/images/zahir.png', alt: 'Zahir Company' }
];

const Client = () => {
  return (
    <section className='mx-auto max-w-screen-xl my-40'>
      <h2 className='text-center text-sky-600'>Our clients now worked at</h2>
      <div className='flex flex-wrap justify-center items-center gap-10 p-8'>
        {clients.map((client, index) => (
          <NextImage
            key={index}
            src={client.src}
            width={100}
            height={100}
            alt={client.alt}
            useSkeleton={true}
            classNames={{ image: 'object-cover', blur: '' }}
            className="grayscale-0 hover:scale-100 duration-150"
          />
        ))}
      </div>
      <div className='text-center'>
        <UnderlineLink href='/' className='text-sky-500'>
          Read success stories
          {' >>'}
        </UnderlineLink>
      </div>
    </section>
  );
};

export default Client;