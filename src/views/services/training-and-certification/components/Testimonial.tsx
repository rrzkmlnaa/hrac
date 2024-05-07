'use client'

import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";

const data = [
    {
        profileUrl: '/images/BNSP.webp',
        userName: 'Steven S',
        jobPosition: 'Sales Planer',
        companyLogo: '/images/pwc.webp'
    },
    {
        profileUrl: '/images/BNSP.webp',
        userName: 'Steven S',
        jobPosition: 'Sales Planer',
        companyLogo: '/images/pwc.webp'
    },
    {
        profileUrl: '/images/BNSP.webp',
        userName: 'Steven S',
        jobPosition: 'Sales Planer',
        companyLogo: '/images/pwc.webp'
    },
]

export default function Testimonial() {
  return (
    <section id='testimonial' className="container mx-auto w-full h-auto p-10">
        <div className="text-center">
            <UnderlineLink href='#testimonial' className='capitalize text-gray-500 my-5'>
                Testimonials
            </UnderlineLink>
        </div>
        <h1 className="text-primary-500 text-center">Learn about our successful client story</h1>
        <div className="flex justify-center items-center gap-5">
            <Swiper
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            navigation={true}
            mousewheel={{
              forceToAxis: true,
            }}
            modules={[Navigation, Mousewheel]}
            className="mySwiper my-5"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-auto p-5">
                        <div className="w-full h-auto shadow-md bg-[#fdfeff] rounded-xl p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-4">
                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex gap-5">
                                        <NextImage
                                            src={item.profileUrl}
                                            width={60}
                                            height={60}
                                            alt={`${item.userName} Profile`}
                                            useSkeleton={true}
                                            classNames={{ image: 'object-cover w-full h-auto rounded-full', blur: 'blur' }}
                                        />
                                        <div className="flex flex-col gap-1">
                                            <h4 className="capitalize text-primary-500">{item.userName}</h4>
                                            <p>{item.jobPosition}</p>
                                        </div>
                                    </div>
                                    <NextImage
                                        src={item.companyLogo}
                                        width={50}
                                        height={50}
                                        alt={item.jobPosition}
                                        useSkeleton={true}
                                        classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                                        className="py-10"
                                    />
                                </div>
                                <div className="col-span-3 p-10 bg-blue-200 rounded-md">
                                    <div className="flex flex-wrap gap-10">
                                        <ImQuotesLeft size={44} color='#3B82F6'/>
                                        <div className="text-justify">
                                            <p>"HR Academy ultimate bundle helped me stand out against the other applicants. They gave great advice on how to go into an interview confident and know what a recruiter is looking for in a candidate. They helped me get my dream job and I am grateful for them. I went from working a job I did not enjoy to my dream job at NBCUniversal where I go to work happy everyday. Working in media was always the goal after college and Wonsulting helped me get to where I am today!"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}
