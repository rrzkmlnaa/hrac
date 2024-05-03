import Jumbotron from "@/components/Jumbotron";


export default function Index() {
  return (
    <Jumbotron
        imageName='banner-aboutus.webp'
      >
        <h1 className='capitalize text-5xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
            Payroll Management 
        </h1>

        <p className='uppercase mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
            EFFICIENTLY ENCOMPASS THE ENTIRE PROCESS OF CALCULATING EMPLOYEE HOURS, PAYING EMPLOYEES, WITHHOLDING TAXES, 
            AND MAINTAINING FINANCIAL DOCUMENTATION FOR YOUR BUSINESS.
        </p>
      </Jumbotron>
  )
}
