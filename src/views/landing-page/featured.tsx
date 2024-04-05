import Image from 'next/image';

import UnderlineLink from '@/components/links/UnderlineLink';

const Featured = () => {
  return (
    <section className='mx-auto max-w-screen min-h-96 content-center container py-16'>
      <h1 className='py-5 text-sky-600'>Featured</h1>
        <div className='grid grid-cols-3 place-content-center place-items-center gap-2'>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <Image
              src='/images/role-03.jpg'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full'
            />
            <h4 className='text-sky-400'>SD Showcase Gives Back</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <Image
              src='/images/role-03.jpg'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full'
            />
            <h4 className='text-sky-400'>SD Showcase Gives Back</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
          <div className='flex flex-wrap flex-col p-3 gap-3'>
            <Image
              src='/images/role-03.jpg'
              width={340}
              height={340}
              alt='sample'
              className='place-self-center w-full'
            />
            <h4 className='text-sky-400'>SD Showcase Gives Back</h4>
            <p>
              News write-ups offer a great way to let clients know about new
              products and services, events, awards, and more!
            </p>
            <div className='text-start'>
              <UnderlineLink href='/'>Read more</UnderlineLink>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Featured;
