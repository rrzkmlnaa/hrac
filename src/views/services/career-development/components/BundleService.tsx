'use client'

import Button from '@/components/buttons/Button'
import UnderlineLink from '@/components/links/UnderlineLink'
import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'

export default function bundleService() {
    return (
        <section id="bundleservice" className="container mx-auto w-full h-auto px-6 py-20">
            <div className="flex flex-col justify-center items-center">
                <UnderlineLink href='#bundleservice' className='uppercase text-gray-500'>
                    Bundle services
                </UnderlineLink>
                <h1 className='text-5xl text-primary-500 py-5'>Get the whole career package</h1>
                <p className='text-xl text-gray-500'>Here's how to secure your dream job with our bundle services</p>
                <NextImage
                    src='/images/dummy.png'
                    width={850}
                    height={250}
                    alt="dummy"
                    useSkeleton={true}
                    classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                    className='hidden xl:block pt-10'
                />
                <div className="flex flex-wrap md:justify-center xl:justify-evenly items-center gap-5 md:gap-10 xl:gap-20 mb-10 my-10 font-bold">
                    <p>Onboarding & Consulting</p>
                    <p>Career Optimization & Networking </p>
                    <p>Success Interview Preparation</p>
                    <p>Ongoing Support</p>
                </div>
                <UnstyledLink href='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0'>
                    <Button
                        variant='yellow'
                        size='base'
                    >
                        Register for Bundle Service
                    </Button>
                </UnstyledLink>
            </div>
        </section>
    )
}
