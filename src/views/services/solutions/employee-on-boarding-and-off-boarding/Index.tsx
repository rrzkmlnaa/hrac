import Jumbotron from "@/components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
        imageName='banner-aboutus.webp'
      >
        <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
            Employee On-boarding <br />& Off-boarding 
        </h1>

        <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
            EFFICIENTLY MANAGE EMPLOYEE TRANSITIONS WITH OUR ONBOARDING AND OFFBOARDING SOLUTIONS, 
            ENSURING SMOOTH PROCESSES FROM START TO FINISH
        </p>
      </Jumbotron>
  )
}
