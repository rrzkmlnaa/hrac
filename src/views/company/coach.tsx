import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Coach() {
  return (
    <section id='coach' className="mx-auto max-w-screen-xl py-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-10">
          <Image 
            src='/images/coachwulan.webp'
            width={450}
            height={450}
            alt='coach wulan'
            className='px-auto rounded-md shadow-md'
          /> 
          <div className="flex flex-warp flex-col gap-3 justify-start">
            <UnderlineLink href='#coach' className='text-gray-500 w-fit'>
              CEO, SENIOR COACH
            </UnderlineLink>
            <h1 className='font-bold text-primary-500'>MEET OUR LEADER</h1>
            <h3 className='font-bold text-primary-500'>SRI WULANDARI, EPC, S.IP, MBA.</h3>
            <p>
              Coach Wulan, the visionary behind HR Academy, brings
              over 25 years of extensive experience as a trainer,
              speaker, and HR practitioner in multinational
              corporations. Certified by BNSP and ICF, she actively
              coaches in HRM, Entrepreneurship, and Career &
              Business domains. With expertise spanning personal
              development, personal branding, and career skills,
              Coach Wulan is committed to empowering individuals
              to excel in their professional journeys.
            </p>
            <p className='font-bold mt-24'>Get in touch with Coach Wulan</p>
            <div className="flex justify-start flex-nowrap gap-5 text-primary-500">
              <FaFacebookSquare size='1.5em'/>
              <FaTwitter size='1.5em'/>
              <FaInstagram size='1.5em'/>
              <FaLinkedin size='1.5em'/>
            </div>
          </div>
        </div>
    </section>
  )
}