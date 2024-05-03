'use client'

import UnstyledLink from "@/components/links/UnstyledLink"

const data = [
    { title: 'Company', linkUrl: '/about-us/company' },
    { title: 'Contact Us', linkUrl: '/about-us/contact-us' },
]

export default function Page() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto w-full h-auto">
                <h1 className="text-center text-primary-500 capitalize">View all our About us</h1>
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
    )
}
