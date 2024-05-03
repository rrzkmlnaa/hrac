import Jumbotron from "@/components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
        imageName='banner-aboutus.webp'
      >
        <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
            Ad-hoc Consulting Services 
        </h1>

        <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
            ACCESS EXPERT HR CONSULTING SERVICES TAILORED TO YOUR BUSINESS NEEDS, AVAILABLE ON-DEMAND.
        </p>
      </Jumbotron>
  )
}
