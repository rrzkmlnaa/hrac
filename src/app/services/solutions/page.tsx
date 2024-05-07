'use client'

import Jumbotron from "@/components/Jumbotron"
import UnstyledLink from "@/components/links/UnstyledLink"
import NextImage from "@/components/NextImage"

const data = [
    { title: 'Talent Recruitment', linkUrl: '/services/solutions/talent-recruitment', imageUrl: '/images/lms.webp', },
    { title: 'Employee On-boarding & Off-boarding', linkUrl: 'services/solutions/employee-on-boarding-and-off-boarding', imageUrl: '/images/lms.webp', },
    { title: 'Performance & Career Management', linkUrl: '/services/solutions/performance-and-career-management', imageUrl: '/images/lms.webp', },
    { title: 'Payroll Management', linkUrl: '/services/solutions/payroll-management', imageUrl: '/images/lms.webp', },
    { title: 'Human Resources System', linkUrl: '/services/solutions/human-resource-system', imageUrl: '/images/lms.webp', },
    { title: 'Ad-hoc consulting service', linkUrl: '/services/solutions/ad-hoc-consulting-services', imageUrl: '/images/lms.webp', },
]

export default function Page() {
    return (
        <>
            <Jumbotron
                imageName='banner-aboutus.webp'
            >
                <h1 className='text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
                    Solution
                </h1>

                <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
                    EXPERIENCE COMPREHENSIVE HR SOLUTIONS TAILORED TO YOUR ORGANIZATION'S UNIQUE NEEDS. 
                </p>
            </Jumbotron>
            <section className="bg-white py-24">
                <div className="container mx-auto w-full h-auto">
                    <h1 className="text-center text-primary-500 capitalize">Our HR Solution Services</h1>
                    <h4 className="font-normal text-center py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae necessitatibus qui inventore unde sunt earum, animi, dolore assumenda reiciendis magni numquam debitis facilis odit dolorum labore iste modi beatae.</h4>
                    <div className="flex flex-wrap justify-center items-center gap-5 py-5 px-6 xl:px-0 ">
                        {data.map((item, index) => (
                            <UnstyledLink key={index} href={`${item.linkUrl}`} className="relative">
                                 <NextImage
                                    src={item.imageUrl}
                                    width={350}
                                    height={350}
                                    alt={`${item.title} Images`}
                                    useSkeleton={true}
                                    classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                                />
                                <div className="absolute bottom-0 flex justify-center items-center w-full h-24 bg-primary-500 p-5">
                                    <h3 className="capitalize text-white text-center">{item.title}</h3>
                                </div>
                            </UnstyledLink>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
