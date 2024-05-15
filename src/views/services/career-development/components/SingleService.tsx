'use client'

import { IconType } from 'react-icons';
import { FaBriefcase, FaClipboardCheck, FaComments, FaFileAlt, FaGamepad } from 'react-icons/fa';

// import UnderlineLink from '@/components/links/UnderlineLink'
import Card from '@/views/services/career-development/components/Card';

interface SingleServiceType {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    priceInfo: string;
    tag?: string;
    Icon: IconType;
}

const dummyData:SingleServiceType[] = [
    {   
        Icon: FaBriefcase,
        imageUrl: '/images/CS-contact.webp',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    {
        Icon: FaClipboardCheck,
        imageUrl: '/images/CS-contact.webp',
        tag: 'Most Popular',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    {
        Icon: FaBriefcase,
        imageUrl: '/images/CS-contact.webp',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    {
        Icon: FaComments,
        imageUrl: '/images/CS-contact.webp',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    {
        Icon: FaFileAlt,
        imageUrl: '/images/CS-contact.webp',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    {
        Icon: FaGamepad,
        imageUrl: '/images/CS-contact.webp',
        title: 'Career Consulting',
        description: 'Let our network of industry specialists show you the way to your breakout role.',
        price: 'Rp. XXX.XXX',
        priceInfo: 'Per Payment in 4 Installments'
    },
    
]

export default function singleService() {
    return (
        <section className="container mx-auto w-full h-auto px-6 py-20">
            <div className="flex flex-col justify-center items-center">
                {/* <UnderlineLink href='#singleservice' className='uppercase text-gray-500'>
                    single services
                </UnderlineLink> */}
                {/* <h1 className='text-center text-3xl md:text-5xl text-primary-500 py-5'>Quick fix with our single services</h1> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-20 py-14 text-center">
                    {dummyData.map((item, index) => (
                        <Card
                            key={index}
                            Icon={item.Icon}
                            // imageUrl={item.imageUrl}
                            tag={item.tag}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            priceInfo={item.priceInfo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
