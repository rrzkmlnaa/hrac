'use client'

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const Roles = () => {
  return (
    <section className='bg-gray-100 py-20'>
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className='text-primary-500 p-3'>DISCOVER TAILORED SOLUTIONS FOR YOU</h1>
        <p className='text-base text-gray-500 mb-6'>Select your role:</p>
        <div className='flex flex-wrap justify-center gap-5'>
          {['individual', 'hr-professionals', 'corporate'].map((role, index) => (
            <UnstyledLink href={`roles/${role}`} key={index} className='relative'>
              <NextImage
                src={`/images/${role}.webp`}
                width={400}
                height={320}
                alt={`${role} Role`}
                useSkeleton={true}
                className='w-96 h-auto'
                classNames={{ image: 'max-[648px]:w-10 object-center object-cover drop-shadow-md rounded-md', blur: 'blur' }}
              />
              <div className='absolute bottom-0 bg-primary-500 rounded-md'>
                <p className='uppercase px-5 py-3 text-white'>{role}</p>
              </div>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
