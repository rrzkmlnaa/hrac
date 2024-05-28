'use client'

import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

import NotFound from '@/app/not-found';
import { resourceData } from '@/views/resources/components/Resources';
import ContactForm from '@/views/resources/slug/Form';

interface Workshop {
  slug: string;
  link: string;
  title: string;
  description: string;
  category: string;
  buttonText: string;
  documentPATH: string;
}

interface Query {
  params: {
    slug: string;
  };
}

const ResourceDetail = (query: Query) => {
  const selectedWorkshop: Workshop | undefined = resourceData.find(
    (item) => item.slug === query?.params?.slug
  );

  if (!selectedWorkshop) {
    return <NotFound />;
  }

  return (
    <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full h-auto">
      <h1 className='text-center'>HR Academy Resume Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 xl:px-0 py-10 md:py-20">
        <div className="flex flex-col gap-2">
          <h4 className='text-primary-500'>JOB SEARCH RESOURCES</h4>
          <h2>Get your free resource</h2>
          <p className='w-5/6'>Get your free resource The famous Wonsulting resume template! It's landed tons of jobs. Take control of your career today, or work with one of our career consultants to get hired.</p>
          <div className="block">
            <ArrowLink href='/' direction='right' className='text-primary-500'>
              Go Back
            </ArrowLink>
          </div>
          <NextImage
            src='/images/resume-testing.png'
            width={305}
            height={305}
            alt=''
            useSkeleton={true}
            classNames={{ image: 'object-cover', blur: 'blur' }}
            className="w-full h-auto flex justify-center"
          />
        </div>
        <div className="max-w-screen-xl w-full border-2 border-primary-500 bg-sky-50 rounded-xl shadow-[16px_0_40px_#e4e4e4] p-5 h-auto">
          <h2 className='pt-10 pb-5'>HR Academy</h2>
          <p>Just a few details before we send you our resume template!</p>
          <ContactForm fileDownload={selectedWorkshop.documentPATH} />
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
