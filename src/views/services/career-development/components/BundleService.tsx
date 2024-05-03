'use client'

import Button from '@/components/buttons/Button'
import UnderlineLink from '@/components/links/UnderlineLink'
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
                <Button
                  isLoading={false}
                  variant='yellow'
                  size='base'
                  className='w-auto md:w-1/4 uppercase flex justify-center'
                >
                  Register for Bundle Service
                </Button>
            </div>
        </section>
    )
}
