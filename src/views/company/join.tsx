import Image from 'next/image';

import Button from "@/components/buttons/Button";

export default function Join() {
  return (
    <section className="mx-auto max-w-screen-xl my-24 px-10">
      <h1>Empowering Community & SMEs </h1>
      <p className="py-5">We also serves as a development partner for Small, Micro, and Medium Enterprises (SMEs),
      registered incubator accredited by the Ministry of Cooperatives and SMEs of the Republic of
      Indonesia under the Incubator for Cooperatives and Micro, Small, and Medium Enterprises,
      with certificate number 202100131.
      </p>

      <Button
        className="border-none"
      >
        Join Now
      </Button>
      <div className="flex flex-wrap justify-evenly items-center gap-5">
        <Image 
          src='/images/komunitas.webp'
          width={250}
          height={250}
          alt=''
        />
        <Image 
          src='/images/mentor.png'
          width={250}
          height={250}
          alt=''
        />
      </div>
    </section>
  )
}