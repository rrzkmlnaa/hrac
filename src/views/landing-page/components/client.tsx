'use client'

import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

const clients = [
  { src: '/images/dbs-Logo.webp', alt: 'DBS Company' },
  { src: '/images/deloitte.webp', alt: 'Deloitte Company' },
  { src: '/images/pertamina.webp', alt: 'Pertamina Company' },
  { src: '/images/pwc.webp', alt: 'PWC Company' },
  { src: '/images/rsm.webp', alt: 'RSM Company' },
  { src: '/images/sc-johnson.webp', alt: 'SC Johnson Company' },
  { src: '/images/zahir.webp', alt: 'Zahir Company' }
];

const Client = () => {
  return (
    <section className='mx-auto max-w-screen-xl my-40'>
      <h1 className='text-center text-primary-500'>Our clients now worked at</h1>
      <div className='flex flex-wrap justify-center items-center gap-10 p-8'>
        {clients.map((client, index) => (
          <NextImage
            key={index}
            src={client.src}
            width={100}
            height={80}
            alt={client.alt}
            useSkeleton={true}
            className='w-24 h-auto'
            classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
          />
        ))}
      </div>
      <div className='text-center'>
        <ArrowLink href='/' className='text-primary-500'>
          Read success stories
        </ArrowLink>
      </div>
    </section>
  );
};

export default Client;