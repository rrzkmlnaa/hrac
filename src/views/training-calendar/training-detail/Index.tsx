import { IoShareSocialOutline } from "react-icons/io5";

import Banner from "@/components/Banner";
import UnstyledLink from "@/components/links/UnstyledLink";

import DetailCalendar from '@/views/training-calendar/training-detail/components/TrainingDetail';

export default function Index() {
  return (
    <>
      <Banner
            colorstyle="bg-primary-500 py-5 px-6 md:px-4"
        >
            <h1 className="text-white">Training Calendar</h1>
            <UnstyledLink href=''>
                <IoShareSocialOutline color="#fff" size={34} className="my-5"/>
            </UnstyledLink>
      </Banner>
      <DetailCalendar />
    </>
  )
}
