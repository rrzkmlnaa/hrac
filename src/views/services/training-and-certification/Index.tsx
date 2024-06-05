'use client'
import Jumbotron from "@/components/Jumbotron";

import Role, { roles } from "@/views/landing-page/components/role";
import Featured from "@/views/services/training-and-certification/components/Featured";
import Learning from "@/views/services/training-and-certification/components/Learning";
import Testimonial from "@/views/services/training-and-certification/components/Testimonial";

import NeedInfo from "./components/NeedInfo";

export default function Index() {
  const selectedRoles = roles.slice(3, 6);
  return (
    <>
      <Jumbotron
        imageName="training-sertif-banner.webp"
      >
        <h1 className='text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
          Training & Certifications
        </h1>

        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
          LOOKING TO BECOME AN HR PRACTITIONER? ENHANCE YOUR SKILLS WITH HR ACADEMY'S TRAINING PROGRAM LED BY EXPERIENCED PRACTITIONERS AND ACCREDITED BNSP CERTIFICATION
        </p>
      </Jumbotron>
      <Featured />
      <Role
        title="TRAINING PROGRAMS DESIGNED FOR YOU"
        bgColor="bg-white"
        titleStyle="mt-4"
        roles={selectedRoles}
      />
      <Learning />
      <Testimonial />
      <NeedInfo />
    </>
  )
}
