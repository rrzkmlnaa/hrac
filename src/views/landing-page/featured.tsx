'use client'

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

interface FeaturedItemProps {
  title: string;
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ title, imageUrl, alt, children }) => {
  return (
    <div className='flex flex-wrap flex-col p-3 gap-3'>
      <NextImage
        src={imageUrl}
        width={340}
        height={340}
        alt={alt}
        className='place-self-center w-full rounded-md'
        useSkeleton={true}
        classNames={{ image: 'rounded-md object-cover w-full h-auto', blur: 'blur' }}
      />
      <h4 className='text-lime-200'>{title}</h4>
      <p>{children}</p>
      <div className='text-start'>
        <UnderlineLink href='/'>Read more</UnderlineLink>
      </div>
    </div>
  );
};

const Featured: React.FC = () => {
  const items = [
    {
      title: 'SD Showcase Gives Back',
      imageUrl: '/images/hr-professionals.webp',
      alt: 'sample',
      description: 'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!'
    },
    {
      title: 'Hiro Wilson Ready for SDS',
      imageUrl: '/images/hr-professionals.webp',
      alt: 'sample',
      description: 'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!'
    },
    {
      title: '5k Attendees for SDS 2025',
      imageUrl: '/images/hr-professionals.webp',
      alt: 'sample',
      description: 'News write-ups offer a great way to let clients know about new products and services, events, awards, and more!'
    }
  ];

  return (
    <section className='bg-blue-800 text-white'>
      <div className='mx-auto max-w-screen min-h-96 content-center container py-16 px-6'>
        <h1 className='py-5 text-white text-center md:text-start px-3'>Featured</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-2'>
          {items.map((item, index) => (
            <FeaturedItem key={index} {...item}>
              {item.description}
            </FeaturedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
