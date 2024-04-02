import Image from 'next/image';

const Learn = () => {
  return (
    <section className='bg-blue-400 py-10'>
      <div className='mx-auto max-w-screen-xl content-center text-center text-white py-16'>
        <h1 className='text-white'>Learn Easier with LMS HR Academy</h1>
        <p className='text-white py-5'>
          Get easy access to materials, simple payment, and interactive features
          designed to <br /> increase the efficiency and comprehensiveness of
          learning.
        </p>
        <div className='flex justify-center'>
          <Image
            src='/images/mockup.webp'
            width={500}
            height={500}
            alt='mockup'
            className='rounded-md shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default Learn;
