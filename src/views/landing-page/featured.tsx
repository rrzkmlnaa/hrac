'use client'

import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { featuredItems } from '@/content/featured';

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

const FeaturedItem: React.FC<FeaturedItemProps> = ({ title, imageUrl, alt, children, slug }) => {
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
        <UnderlineLink href={`/featured/${slug}`}>Read more</UnderlineLink>
      </div>
    </div>
  );
};

const Featured: React.FC<styledCustomProps> = ({ head, headColor, sectionStyled }) => {
  return (
    <section className={`${sectionStyled}`}>
      <div className='mx-auto max-w-screen-xl min-h-96 content-center container py-16 px-6'>
        <h1 className={`py-5 ${headColor} text-center md:text-start px-3`}>{head}</h1>
        {/* <div className='grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-2'> */}
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
                {item.description}
              </FeaturedItem>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
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

export default Featured;
