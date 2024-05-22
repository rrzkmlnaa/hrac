
'use client'

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

import NotFound from '@/app/not-found';
import ContactFormInput from '@/views/about-us/contact-us/components/ContactFormInput';
import { resourceData } from '@/views/resources/components/Resources';

interface Workshop {
  slug: string;
  link: string;
  title: string;
  description: string;
  category: string;
  buttonText: string;
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

  return selectedWorkshop ? (
    <>
      <section className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto w-full h-auto">
        <h1 className='text-center'>HR Academy Resume Template</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 md:py-20">
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
            <form action="#" className='flex flex-col gap-3 py-3'>
              <ContactFormInput label="Full Name" name="firstname" required placeholder="Lee Min Ho" />
              <ContactFormInput label="Email" name="email" required placeholder="example@gmail.com" />
              <label htmlFor="inquiry" className="block text-sm font-medium leading-6 text-gray-900">Where Are You In Your Career <span className="text-red-600">*</span></label>
              <select required name="inquiry" id="inquiry" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                <option value="" disabled>Select an option</option>
                <option value="Student (< 1 Tahun)">Student ({'<'} 1 Tahun)</option>
                <option value="Early Career (1 - 5 Years)">Early Career (1 - 5 Years)</option>
                <option value="Professionals (6+ years)">Professionals (6+ years)</option>
              </select>
              <label htmlFor="inquiry" className="block text-sm font-medium leading-6 text-gray-900">What Field Are You In? <span className="text-red-600">*</span></label>
              <select required name="inquiry" id="inquiry" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
                <option value="" disabled>Select an option</option>
                <option value="Student (< 1 Tahun)">Student ({'<'} 1 Tahun)</option>
                <option value="Early Career (1 - 5 Years)">Early Career (1 - 5 Years)</option>
                <option value="Professionals (6+ years)">Professionals (6+ years)</option>
              </select>
              <div className="w-full mt-3">
                <Button type="submit" variant='yellow' size='base' className=' w-full flex justify-center border-none'>Submit Enquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  ) : (
    <NotFound />
  );
};

export default ResourceDetail;
