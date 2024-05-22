import { IoShareSocialOutline } from "react-icons/io5";

import Banner from "@/components/Banner";
import UnstyledLink from "@/components/links/UnstyledLink";

import Table from "@/views/training-calendar/components/Table";

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

        <Table />
        <Banner
            colorstyle="bg-primary-500 py-10 px-6 md:px-4"
        >
            <h5 className="text-white">Please email us at <span className="font-bold">@admin@hracademy.id</span> for further details.</h5>
        </Banner>
        
    </>
  )
}
