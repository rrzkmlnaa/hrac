import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


export default function Coach() {
  return (
    <section className="mx-auto max-w-screen-xl pb-10 my-24">
      <div className="flex flex-warp justify-start gap-10">
        <Image 
          src='/images/coachwulan.webp'
          width={450}
          height={450}
          alt='coach wulan'
          className='px-auto rounded-md shadow-md'
        /> 
        <div className="flex flex-warp flex-col gap-3 justify-start">
          <p>CEO, SENIOR COACH</p>
          <h2 className='font-bold text-blue-500'>MEET OUR LEADER</h2>
          <h3 className='font-bold text-blue-500'>SRI WULANDARI, EPC, S.IP, MBA.</h3>
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
          <p className='font-bold mt-36'>Get in touch with Coach Wulan</p>
          <div className="flex justify-start flex-nowrap gap-5 text-blue-500">
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