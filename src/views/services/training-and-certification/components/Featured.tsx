'use client'

import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";

const data = [
    {
        imageUrl: '/images/training-calendar.jpg',
        title: 'training calendar',
        description: 'check out our upcoming courses',
        link: '/training-calendar',
    },
    {
        imageUrl: '/images/meetourfacilitator.webp',
        title: 'Meet our facilitators',
        description: 'Who we are and what we do',
        link: '#',
    },
    {
        imageUrl: '/images/inhouse-course.webp',
        title: 'In-house course programmes',
        description: 'Designed specifically for you',
        link: '#',
    },
    {
        imageUrl: '/images/lms.jpg',
        title: 'LMS HR Academy',
        description: 'Learn Easier with LMS HR Academy',
        link: 'https://campus.hracademy.id/',
    },
]

export default function Featured() {
    return (
        <section id="featured" className="container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto py-32">
            <div className="text-center md:text-start px-6 xl:px-4  ">
                <UnderlineLink href='#featured' className='uppercase text-gray-500 my-5'>
                    Featured
                </UnderlineLink>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {data.map((item, index) => (
                    <UnstyledLink href={`${item.link}`} key={index} className="flex flex-col gap-2 w-fit h-auto">
                        <NextImage
                            src={item.imageUrl}
                            width={305}
                            height={305}
                            alt={item.title}
                            useSkeleton={true}
                            classNames={{ image: 'object-cover', blur: 'blur' }}
                            className="w-full h-auto overflow-hidden"
                        />
                        <div className="w-full h-auto bg-primary-500 p-4 rounded-md text-white">
                            <h4 className="capitalize">{item.title}</h4>
                            <p className="normal-case">{item.description}</p>
                        </div>
                    </UnstyledLink>
                ))}
            </div>
        </section>
    )
}
