'use client'

import Link from 'next/link';
import { Autoplay,Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

export default function Course() {
  const courses = [
    {
      title: 'Staff HR',
      imageUrl: '/images/staff-hr.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Supervisor HR',
      imageUrl: '/images/supervisor-hr.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Assisten Manager HR',
      imageUrl: '/images/assisten-manager-hr.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Manager HR',
      imageUrl: '/images/manager-hr.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Certified Human Resources Supervisor HR Academy',
      imageUrl: '/images/CHRS.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Senior Professional Human Resource HR Academy',
      imageUrl: '/images/SPHR.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Certified Human Resource Professional HR Academy',
      imageUrl: '/images/CHRP.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
    {
      title: 'Certified Human Capital General Manager HR Academy',
      imageUrl: '/images/CHCGM.webp',
      price: 'Rp. x.xxx.xxx',
      link: '#'
    },
  ];

  return (
    <section id='course' className='mx-auto max-w-screen-xl min-h-96 content-center pt-24 pb-16 px-6 md:px-0'>
      <div className='text-center text-primary-500'>
        <div className='flex flex-nowrap items-center justify-center pb-5'>
          <NextImage
            src='/images/LPK.webp'
            width={140}
            height={50}
            alt='LPK Image'
            useSkeleton={true}
            className='w-32 h-auto'
            classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
          />
          <NextImage
            src='/images/BNSP.webp'
            width={90}
            height={50}
            alt='BNSP Image'
            useSkeleton={true}
            className='w-20 h-auto'
            classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
          />
        </div>
        <UnderlineLink href='#course'>
          TRAINING AND CERTIFICATION PROGRAMS
        </UnderlineLink>
        <h1 className='p-5'>
          Elevate Your Skills, Become a <br />Respected Leader
        </h1>
        <p className=''>
          Training program by experienced practitioners and equipped with BNSP
          licensed certification
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        navigation={true}
        mousewheel={{
          forceToAxis: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Mousewheel, Autoplay]}
        className="mySwiper mt-12"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className='pb-5'>
            <div className='bg-white w-full h-max shadow rounded-lg overflow-hidden'>
              <NextImage
                src={course.imageUrl}
                className='object-cover w-full'
                alt={course.title}
                width={320}
                height={240}
                useSkeleton={true}
                classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
              />
              <div className='p-4'>
                <h3 className='mt-3 font-bold text-lg pb-4 border-slate-300'>
                  <Link href={course.link}>{course.title}</Link>
                </h3>
                <p>Harga</p>
                <h6 className='font-bold pb-5'>{course.price}</h6>
                <Button
                  isLoading={false}
                  variant='primary'
                  size='base'
                  className='w-full uppercase flex justify-center border-none'
                >
                  lihat detail
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
