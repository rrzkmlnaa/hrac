
'use client'

// import NextImage from '@/components/NextImage'
import Image from 'next/image';

export default function Chart() {
  return (
    <section className="container mx-auto w-full h-auto flex flex-col justify-center items-center gap-5 md:gap-14 pb-20 px-6">
      <h1 className="text-primary-500">Company structure</h1>
      <div className="w-full relative pt-[30%]">
        <Image
          src="/images/company-structure.png"
          alt="Company structure"
          objectFit="scale-down"
          fill
          className="w-full md:w-32 h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
    </section>
  )
}
