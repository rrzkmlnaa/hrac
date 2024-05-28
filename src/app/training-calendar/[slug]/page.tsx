'use client'

import { IoShareSocialOutline } from 'react-icons/io5';

import Banner from '@/components/Banner';
import UnstyledLink from '@/components/links/UnstyledLink';

import NotFound from '@/app/not-found';
import { workshopData } from '@/constant/trainingCalendar';
import TrainingDetails from '@/views/training-calendar/training-detail/Index';

interface Workshop {
  slug: string;
  name: string;
  linkUrl: string;
  duration: string;
  date: string;
  category: string;
  detailArticle?: { title: string; body: string }[];
}

interface Query {
  params: {
    slug: string;
  };
}

const TrainingDetail = (query: Query) => {
  const selectedWorkshop: Workshop | undefined = workshopData.find(
    (item) => item.slug === query?.params?.slug
  );

  if (!selectedWorkshop) {
    return <NotFound />;
  }

  return selectedWorkshop.detailArticle ? (
    <>
      <Banner
            colorstyle="bg-primary-500 py-5 px-6 md:px-4"
        >
          <h1 className="text-white normal-case">Training Calendar {selectedWorkshop.name}</h1>
          <UnstyledLink href=''>
              <IoShareSocialOutline color="#fff" size={34} className="my-5"/>
          </UnstyledLink>
      </Banner>
      <TrainingDetails workshop={selectedWorkshop} />
    </>
  ) : (
    <NotFound />
  );
};

export default TrainingDetail;
