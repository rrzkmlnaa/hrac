import Jumbotron from "@/components/Jumbotron";

export default function Index() {
  return (
    <Jumbotron
      imageName='banner-aboutus.webp'
    >
      <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
        Performance & <br />Career Management
      </h1>

      <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
        ELEVATE PERFORMANCE AND NURTURE CAREER GROWTH WITH OUR TAILORED MANAGEMENT SOLUTIONS. FROM
        GOAL-SETTING TO FEEDBACK, WE SUPPORT INDIVIDUALS TO EXCEL AND ADVANCE WITHIN YOUR ORGANIZATION
      </p>
    </Jumbotron>
  )
}
