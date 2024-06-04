'use client'

import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";

import { FeaturedData } from '@/constant/index';

interface FeaturedItemProps {
  title: string;
  imageUrl: string;
  alt: string;
  children: React.ReactNode;
  slug: string;
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
      <div className="w-full h-52 overflow-hidden">
        <h4 className="w-full h-24 overflow-hidden">{title}</h4>
        <p className="w-full h-28 overflow-hidden">{children}</p>
      </div>
      <div className='text-start'>
        <UnderlineLink href={`/featured/${slug}`}>Read more</UnderlineLink>
      </div>
    </div>
  );
};

export default function FeaturedView() {
  return (
    <section className="container mx-auto max-w-screen-xl min-h-96 py-10">
      <h1 className='py-5 text-center md:text-start px-3'>Featured</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {FeaturedData.map((item, index) => (
          <FeaturedItem key={index} {...item}>
            {item.shortDescription}
          </FeaturedItem>
        ))}
      </div>
    </section>
  )
}
