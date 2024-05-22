'use client'

import Link from "next/link";

import Button from "@/components/buttons/Button";
import NextImage from "@/components/NextImage";

export default function Join() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl my-24 px-6 md:px-10">
        <h1>Join HRA UMKM</h1>
        <p className="py-5 text-justify">We also serves as a development partner for Small, Micro, and Medium Enterprises (SMEs),
          registered incubator accredited <br className='hidden md:block' /> by the Ministry of Cooperatives and SMEs of the Republic of
          Indonesia under the Incubator for Cooperatives and Micro, Small, <br className='hidden md:block' />and Medium Enterprises,
          with certificate number 202100131.
        </p>
        <Link href="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu%3F&type=phone_number&app_absent=0">
          <Button
            variant='yellow'
            className="border-none"
          >
            Join Now
          </Button>
        </Link>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl content-center">
          <div className="flex flex-wrap justify-evenly items-center gap-5 py-10">
            <div className="flex flex-col justify-center items-center">
              <NextImage
                src='/images/komunitas.webp'
                width={250}
                height={250}
                alt='Comunity UI'
                useSkeleton={true}
                className="w-1/2 lg:w-2/3 h-auto"
                classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
              />
              <p className='text-center p-5'>2000+ Members</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <NextImage
                src='/images/mentor.webp'
                width={250}
                height={250}
                alt='Mentor UI'
                useSkeleton={true}
                className="w-1/2 lg:w-2/3 h-auto"
                classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
              />
              <p className='text-center p-5'>300+ Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}