'use client'

import Jumbotron from "@/components/Jumbotron"
import UnstyledLink from "@/components/links/UnstyledLink"
import NextImage from "@/components/NextImage"

const data = [
    { title: 'Company', linkUrl: '/about-us/company' },
    { title: 'Contact Us', linkUrl: '/about-us/contact-us' },
]

export default function Page() {
    return (
        <>
            <Jumbotron
                imageName="banner-aboutus.webp"
            >
                <h1 className='text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
                    About Us
                </h1>

                <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut non nobis corrupti, cupiditate illum! Esse, harum animi! Qui quam veritatis magni tempora expedita quasi dolores iusto impedit! Magnam, ullam.
                </p>
            </Jumbotron>
            <section className="container mx-auto w-full h-auto flex flex-col justify-center items-center gap-5 md:gap-14 pt-20">
                <h1 className="text-primary-500">Company structure</h1>
                <div className="w-full h-auto sm:w-64 md:w-96 lg:w-128">
                    <NextImage
                        src='/images/company-structure.png'
                        layout="responsive"
                        width={350}
                        height={350}
                        alt='Company structure'
                        classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                    />
                </div>
            </section>
            <section className="bg-white py-24">
                <div className="container mx-auto w-full h-auto">
                    <h1 className="text-center text-primary-500 capitalize">Our About us services</h1>
                    <h4 className="font-normal text-center py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae necessitatibus qui inventore unde sunt earum, animi, dolore assumenda reiciendis magni numquam debitis facilis odit dolorum labore iste modi beatae.</h4>
                    <div className="grid gid-cols-1 sm:grid-cols-2 gap-5 py-5 px-6 xl:px-0 ">
                        {data.map((item, index) => (
                            <UnstyledLink key={index} href={`${item.linkUrl}`}>
                                <div className="flex flex-col justify-center items-center gap-5 w-full h-full bg-primary-500 p-5">
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
