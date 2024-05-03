'use client'

import UnderlineLink from "@/components/links/UnderlineLink";
import NextImage from "@/components/NextImage";

const data = [
    {
        imageUrl: '/images/dummy2.png',
        title: 'training calendar',
        description: 'check out our upcoming courses',
    },
    {
        imageUrl: '/images/dummy2.png',
        title: 'Meet our facilitators',
        description: 'Who we are and what we do',
    },
    {
        imageUrl: '/images/dummy2.png',
        title: 'In-house course programmes',
        description: 'Designed specifically for you',
    },
    {
        imageUrl: '/images/dummy2.png',
        title: 'LMS HR Academy',
        description: 'Learn Easier with LMS HR Academy',
    },
]

export default function Featured() {
    return (
        <section id="featured" className="container mx-auto w-full h-auto py-32">
            <div className="text-center md:text-start px-6 xl:px-0">
            <UnderlineLink href='#featured' className='uppercase text-gray-500 my-5'>
                Featured
            </UnderlineLink>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {data.map((item, index) => (
                    <div key={index} className="relative w-fit h-auto">
                        <NextImage
                            src={item.imageUrl}
                            width={300}
                            height={300}
                            alt="dummy"
                            useSkeleton={true}
                            classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                        />
                        <div className="absolute bottom-0 left-0 bg-primary-500 p-4 rounded-md text-white">
                            <h4 className="capitalize">{item.title}</h4>
                            <p className="normal-case">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="mt-20 pb-5 px-6">Learning for Future-Ready Professionals</h1>
            <h4 className="text-justify font-normal px-6">
                In a rapidly evolving business landscape, where complexities are on the rise, it's crucial for individuals to stay ahead, continuously update their knowledge, and remain future-ready.
                Recognizing these demands, HR Academy Indonesia proudly offers comprehensive services for ongoing learning and skill development through our <span className="font-bold">Training and Certifications</span> services.
            </h4>
            <h1 className="mt-14 pb-5 text-center uppercase px-6">KEPMENAKER NO 115 TAHUN 2022</h1>
            <h4 className="text-justify font-normal px-6">
                Minister of Manpower Regulation No. 115/2022 mandates <span className="font-bold">HR professionals</span> to obtain compulsory competency certifications, ensuring high-quality HR practices. By standardizing skills and promoting continuous professional development, this regulation enhances professionalism in Indonesia's human resource management field.
            </h4>
        </section>
    )
}
