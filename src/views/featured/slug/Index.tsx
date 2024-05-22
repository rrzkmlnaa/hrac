'use client'

import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { featuredItems } from '@/constant/featured';

interface FeaturedItemProps {
  title: string;
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
  slug: string;
}

interface styledCustomProps {
  head: string;
  headColor: string;
  sectionStyled: string;
}

const FeaturedItem = ({ title, imageUrl, alt, children, slug }: FeaturedItemProps) => {
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
      /><div className="w-full h-60 overflow-hidden">
          <h4 className="w-full h-24 overflow-hidden text-primary-500">{title}</h4>
          <p className="w-full h-36 overflow-hidden">{children}</p>
        </div>
      <div className='text-start'>
        <UnderlineLink href={`/featured/${slug}`}>Read more</UnderlineLink>
      </div>
    </div>
  );
};

export default function Featured({ head, headColor, sectionStyled }: styledCustomProps) {
  return (
    <section className={`${sectionStyled}`}>
      <div className='mx-auto max-w-screen-xl min-h-96 content-center container py-16 px-6'>
        <h1 className={`py-5 ${headColor} text-center md:text-start px-3`}>{head}</h1>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation, Mousewheel]}
          className="mySwiper"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedItem  {...item}>
                {item.shortDescription}
              </FeaturedItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <UnstyledLink href='/featured' className="w-full h-auto flex justify-center items-center pb-10">
        <Button
          variant='yellow'
          className='px-10'
        >
          View More
        </Button>
      </UnstyledLink>
    </section>
  );
};
