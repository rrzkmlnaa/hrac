'use client'

import NextImage from '@/components/NextImage';

import NotFound from '@/app/not-found';
import { featuredItems } from '@/constant/featured';
import Featured from '@/views/landing-page/components/featured';

interface Featured {
  date: string;
  creator: string;
  title: string;
  imageUrl: string;
  alt: string;
  content: string;
}

interface Query {
  params: {
    slug: string
  },
}

const FeaturedDetail = (query: Query) => {
  const featured: Featured | undefined = featuredItems.find((item) => {
    if (Array.isArray(query)) {
      return item.slug === query?.params?.slug;
    } else {
      return item.slug === query?.params?.slug;
    }
  });

  if (!featured) {
    return <NotFound />;
  }
  const htmlContent = featured.content;
  return (
    <>
      <div className='container mx-auto max-w-screen-xl min-h-96 py-10 px-5 md:px-10 xl:px-0 '>
        <div className="flex gap-5 py-5">
          <h5 className='border-r-3 border-black'>{featured.date}</h5>
          <h5 className=''>{featured.creator}</h5>
        </div>
        <NextImage
          src={featured.imageUrl}
          width={240}
          height={240}
          alt={featured.alt}
          className='place-self-center w-full rounded-md'
          useSkeleton={true}
          classNames={{ image: 'rounded-md object-cover w-full h-auto', blur: 'blur' }}
        />
        <h1 className='text-xl md:text-4xl lg:text-5xl py-5'>{featured.title}</h1>
        
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <Featured
        head='Our Lastest Featured'
        headColor='text-black'
        sectionStyled='bg-white text-black'
      />
    </>
  );
};

export default FeaturedDetail;
