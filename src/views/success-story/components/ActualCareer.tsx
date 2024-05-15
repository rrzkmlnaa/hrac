'use client'

import { ImQuotesLeft } from "react-icons/im";
import { Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import NextImage from "@/components/NextImage";

export default function ActualCareer() {
    const ActualCareer = [
        {
            testimonial: "The process of editing sentences and grammar in the CV is really good and detailed. The response is fast and very professional. My CV passed the selection of one of the BigFour KAPs. The suggestions given by the editor are also very useful!!🙌🏻🙌🏻",
            name: "Alya",
            jobTitle: "Auditor",
            imageUrl: "/images/deloitte.webp",
        },
        {
            testimonial: "Working with the CV editing service was exceptional. Their attention to detail and insightful suggestions provided were invaluable in refining my document. Highly recommended for anyone seeking career legal!",
            name: "Amal",
            jobTitle: "Corporate Legal",
            imageUrl: "/images/bukopin-syariah.webp",
        },
        {
            testimonial: "The career guidance and consulting was one of the best decisions I made. The CV review by Coach Wulan is thorough and insightful. I not only secured interviews but also landed my dream job. I'm grateful for the support in advancing my career!",
            name: "Kania",
            jobTitle: "Financial Advisor",
            imageUrl: "/images/pwc.webp",
        },
        {
            testimonial: "After the consultation session, I became clearer and knew that I was suitable for the job I wanted, Sis. I can also find out where my weaknesses are and I can also find out the strategies or paths that I have to take to overcome my weaknesses and help me to achieve my desires.",
            name: "Jovita",
            jobTitle: "News Editor",
            imageUrl: "/images/tvri.webp",
        },
        {
            testimonial: "My consultation session with Coach Wulan was transformative. She also provided invaluable insights on interview techniques. I'm grateful for her personalized approach and comprehensive support in advancing my career. Highly recommend for anyone seeking professional coaching and interview preparation!",
            name: "Risjad",
            jobTitle: "Business Development",
            imageUrl: "/images/paragon.webp",
        },
    ]
    return (
        <section className="container mx-auto w-full h-auto py-32">
            <h1 className="text-center px-6">Turning Dreams Into Actual Careers</h1>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 4,
                },
                }}
                spaceBetween={30}
                navigation={true}
                mousewheel={{
                forceToAxis: true,
                }}
                modules={[Navigation, Mousewheel]}
                className="mySwiper mt-12"
            >
                {ActualCareer.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-3 p-6 md:p-0">
                            <div className="flex justify-center">
                                <ImQuotesLeft size={44} className="text-primary-500"/>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <p>{item.testimonial}</p>
                                <div className="text-center">
                                    <h4 className="text-primary-500">{item.name}</h4>
                                    <h5>{item.jobTitle}</h5>
                                </div>
                                <NextImage
                                    src={`${item.imageUrl}`}
                                    width={100}
                                    height={100}
                                    alt={`Image ${item.jobTitle}`}
                                    useSkeleton={true}
                                    classNames={{ image: 'object-cover', blur: 'blur' }}
                                    className="w-full h-auto flex justify-center"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}            
            </Swiper>
        </section>
    )
}
