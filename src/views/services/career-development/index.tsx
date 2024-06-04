'use client'

import Ready from '@/components/Banner';
import Button from '@/components/buttons/Button';
import Jumbotron from '@/components/Jumbotron'
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import BundleService from '@/views/services/career-development/components/BundleService';
import CareerDevelopment from '@/views/services/career-development/components/CareerDevelopment';

export default function index() {
  return (
    <>
      <Jumbotron
        imageName='career-dev-banner.webp'
      >
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Career Development
        </h1>

        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          EMPOWER INDIVIDUALS IN ACHIEVING THEIR CAREER ASPIRATIONS WITH PERSONALIZED 
          COACHING AND ESSENTIALS RESOURCES
        </p>
      </Jumbotron>
      <BundleService />
      <Ready
        colorstyle='bg-blue-700 text-white p-10'
       >
        <h1 className='text-center text-2xl md:text-5xl'>3 Months Average <br />time to land a job</h1>
      </Ready>
      <CareerDevelopment />
      <Ready
        colorstyle='bg-blue-700 text-white p-10'
       >
        <div className="flex flex-wrap justify-between items-center px-6">
          <div className="block">
            <h2 className='text-3xl'>Questions about our services?</h2>
            <h5 className='pb-5 pt-2 text-xl'>Chat with our Success Team.</h5>
            <UnstyledLink href='https://api.whatsapp.com/send/?phone=6285942210587&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu+jelaskan+lebih+lanjut+mengenai+.....%3F&type=phone_number&app_absent=0'>
              <Button
                variant='yellow'
              >
                Chat Now
              </Button>
            </UnstyledLink>
          </div>
          <NextImage
            src='/images/dummy2.png'
            width={240}
            height={240}
            alt="dummy"
            useSkeleton={true}
            classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
            className='hidden lg:block'
          />
        </div>
      </Ready>
    </>
  )
}
