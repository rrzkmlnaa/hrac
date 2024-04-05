import Image from 'next/image';

const Learn = () => {
  return (
    <section className='bg-blue-200 py-10'>
      <div className='mx-auto max-w-screen-xl content-center text-center text-primary-500 py-16'>
        <h1>Learn Easier with LMS HR Academy</h1>
        <p className='py-5'>
          Get easy access to materials, simple payment, and interactive features
          designed to <br /> increase the efficiency and comprehensiveness of
          learning.
        </p>
        <div className='flex justify-center'>
          <Image
            src='/images/mockup.webp'
            width={800}
            height={800}
            alt='mockup'
            className='rounded-md shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default Learn;
