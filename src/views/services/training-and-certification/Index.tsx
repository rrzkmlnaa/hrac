import Jumbotron from "@/components/Jumbotron";

import Role from "@/views/landing-page/components/role";
import Featured from "@/views/services/training-and-certification/components/Featured";
import Learning from "@/views/services/training-and-certification/components/Learning";
import Testimonial from "@/views/services/training-and-certification/components/Testimonial";

import NeedInfo from "./components/NeedInfo";

export default function Index() {
  return (
    <>
      <Jumbotron
          imageName="banner-aboutus.webp"
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
        bgColor="bg-white"
        title='TRAINING PROGRAMS DESIGNED FOR YOU'
      />
      <Learning />
      <Testimonial />
      <NeedInfo />
    </>
  )
}
