import Image from 'next/image';

import Button from "@/components/buttons/Button";

export default function Join() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl my-24 px-10">
        <h1>Empowering Community & SMEs </h1>
        <p className="py-5">We also serves as a development partner for Small, Micro, and Medium Enterprises (SMEs),
          registered incubator accredited <br /> by the Ministry of Cooperatives and SMEs of the Republic of
          Indonesia under the Incubator for Cooperatives and Micro, Small, <br />and Medium Enterprises,
          with certificate number 202100131.
        </p>
        <Button
          variant='yellow'
          className="border-none"
        >
          Join Now
        </Button>
      </section>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl content-center">
          <div className="flex flex-wrap justify-evenly items-center gap-5 py-10">
            <div className="block">
              <Image
                src='/images/komunitas.webp'
                width={250}
                height={250}
                alt='Comunity UI' 
              />
              <p className='text-center p-5'>2000+ Members</p>
            </div>
            <div className="block">
              <Image
                src='/images/mentor.webp'
                width={250}
                height={250}
                alt='Mentor UI' 
              />
              <p className='text-center p-5'>300+ Members</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}