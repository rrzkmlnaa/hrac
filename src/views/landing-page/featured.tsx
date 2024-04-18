'use client'

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

const Featured = () => {
  return (
    <section className='bg-blue-800 text-white'>
      <div className='mx-auto max-w-screen min-h-96 content-center container py-16 px-6'>
        <h1 className='py-5 text-white text-center md:text-start'>Featured</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-2'>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <NextImage
              src='/images/hr-professionals.webp'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full rounded-md'
              useSkeleton={true}
              classNames={{ image: 'rounded-md object-cover w-full h-auto', blur: 'blur' }}
            />
            <h4 className='text-lime-200'>SD Showcase Gives Back</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <NextImage
              src='/images/hr-professionals.webp'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full'
              useSkeleton={true}
              classNames={{ image: 'rounded-md object-cover w-full h-auto', blur: 'blur' }}
            />
            <h4 className='text-lime-200'>Hiro Wilson Ready for SDS</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <NextImage
              src='/images/hr-professionals.webp'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full'
              useSkeleton={true}
              classNames={{ image: 'rounded-md object-cover w-full h-auto', blur: 'blur' }}
            />
            <h4 className='text-lime-200'>5k Attendees for SDS 2025</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
