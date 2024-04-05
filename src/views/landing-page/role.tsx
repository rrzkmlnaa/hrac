import Image from 'next/image';

const Roles = () => {
  return (
    <section className='mx-auto max-w-screen-xl text-center my-40'>
      <h3 className='text-sky-600 p-3'>DISCOVER TAILORED SOLUTIONS FOR YOU</h3>
      <p className='text-base mb-6 text-gray-500'>
        Select your role:
      </p>
      <div className='flex flex-wrap justify-center gap-5'>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>Individuals</p>
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>hr profesionals</p>
          </div>
        </div>
        <div className='relative'>
          <Image
            src='/images/role-03.jpg'
            width={410}
            height={410}
            alt='Picture of the author'
            className='bg-cover bg-center bg-no-repeat drop-shadow-md'
          />
          <div className='absolute bottom-0 bg-blue-300'>
            <p className='uppercase px-5 py-3 text-white'>corporate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;
