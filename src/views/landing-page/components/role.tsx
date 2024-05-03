'use client'

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

interface RoleTypes {
  title: string;
  bgColor: string;
}

export default function Roles({ title, bgColor}: RoleTypes) {
  const roles = [
    { title: 'individual', link: 'career', },
    { title: 'hr-professionals', link: 'course' },
    { title: 'corporate', link: 'solution' },
  ]
  return (
    <section className={`${bgColor} py-20`}>
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className='text-primary-500 p-3 uppercase'>{title}</h1>
        <p className='text-base text-gray-500 mb-6'>Select your role:</p>
        <div className='flex flex-wrap justify-center gap-5'>
          {roles.map((role, index) => (
            <UnstyledLink href={`#${role?.link}`} key={index} className='relative'>
              <NextImage
                src={`/images/${role?.title}.webp`}
                width={400}
                height={320}
                alt={`${role} Role`}
                useSkeleton={true}
                className='w-96 h-auto px-5'
                classNames={{ image: 'w-full object-center object-cover drop-shadow-md rounded-md', blur: 'blur' }}
              />
              <div className='absolute bottom-0 bg-primary-500 rounded-md mx-5'>
                <p className='uppercase px-5 py-3 text-white'>{role?.title}</p>
              </div>
            </UnstyledLink>
          ))}
        </div>
      </div>
    </section>
  );
};
