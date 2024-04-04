import Image from 'next/image'

import Button from '@/components/buttons/Button';

export default function Contact() {
  return (
    <section className="min-h-96">
      <div className="bg-blue-500 content-start text-white py-10">
        <div className="flex flex-wrap px-20 max-w-screen-xl gap-3 flex-col lg:w-1/2">
          <h1>Contact Us</h1>
          <p>Please fill out the form below with your inquiry details. We'll reach out to schedule an appointment via phone or email. Please be detail in your response.</p>
        </div>        
      </div>
      <div className="mx-auto max-w-screen-xl w-full grid grid-cols-2 rounded-md shadow-2xl my-10">
        <form action='#' id='#' className="flex flex-wrap flex-col gap-3 p-5">
          <div className="flex justify-stretch gap-3">
            <div className="w-full">
              <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">Full Name <span className="text-red-600">*</span></label>
              <input required type="text" name="firstname" id="firstname" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="John" />
            </div>
            <div className="w-full">
              <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              <input type="text" name="lastname" id="lastname" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Candy" />
            </div>
          </div>
            
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email <span className="text-red-600">*</span></label>
          <input required type="text" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Example@gmail.com" />
          <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">Telephone <span className="text-red-600">*</span></label>
          <input required type="text" name="telephone" id="telephone" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="+62 123 456 789" />
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company <span className="text-red-600">*</span></label>
          <input required type="text" name="company" id="company" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="" />
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">How can we help you?</label>
          <textarea name="message" id="message" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Your Message" />
          <div className="w-1/4 mt-3">
            <Button
              className='border-none'
            >
              Submit Enquiry
            </Button>
          </div>
        </form>
        <div className="flex flex-wrap justify-center items-center gap-5 rounded-r-md bg-blue-500 text-white">
          <Image 
            src='/images/appLogo.png'
            width={100}
            height={100}
            alt='logo'
          />
          <h1>Connect with <br /> Our Expert <br /> Team</h1>
        </div>
      </div>
    </section>
  )
}