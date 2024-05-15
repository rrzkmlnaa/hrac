'use client'

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
    <TrainingDetails />
  ) : (
    <NotFound />
  );
};

export default TrainingDetail;
