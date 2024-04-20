'use client'

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

interface ContactFormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

function ContactFormInput({ label, name, type = "text", placeholder, required = false }: ContactFormInputProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        id={name}
        className="block w-full rounded-md border-0 py-1.5 pl-4 md:pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

function Contact() {
  return (
    <section className="min-h-96">
      <div className="bg-[#004AAD] content-start text-white py-10 px-6">
        <div className="flex flex-wrap xl:px-14 max-w-screen-xl gap-3 flex-col lg:w-1/2">
          <h1>Contact Us</h1>
          <p>Please fill out the form below with your inquiry details. We'll reach out to schedule an appointment via phone or email. Please be detail in your response.</p>
        </div>
      </div>
      <div className="px-6 xl:px-0">
        <div className="mx-auto max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-md shadow-2xl my-10">
          <form action="#" id="#" className="flex flex-wrap flex-col gap-3 p-5">
            <div className="flex justify-stretch gap-3">
              <ContactFormInput label="Full Name" name="firstname" required placeholder="John" />
              <ContactFormInput label="Last Name" name="lastname" placeholder="Candy" />
            </div>
            <ContactFormInput label="Email" name="email" type="email" placeholder="example@gmail.com" required />
            <ContactFormInput label="Telephone" name="telephone" placeholder="+62 123 456 789" required />
            <ContactFormInput label="Company" name="company" placeholder="Enter your company name" required />
            <label htmlFor="inquiry" className="block text-sm font-medium leading-6 text-gray-900">Reason to inquiry <span className="text-red-600">*</span></label>
            <select required name="inquiry" id="inquiry" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              <option value="Disable" defaultValue='select an option' disabled selected>Select an option</option>
              <option value="Career development">Career development</option>
              <option value="Training & certifications">Training & certifications</option>
              <option value="HR Solutions">HR Solutions</option>
              <option value="Ad-Hoc Consulting">Ad-Hoc Consulting</option>
              <option value="Media / Press Relations">Media / Press Relations</option>
              <option value="Careers">Careers</option>
              <option value="Others">Others</option>
            </select>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">How can we help you? <span className="text-red-600">*</span></label>
            <textarea required name="message" id="message" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Your Message"></textarea>
            <div className="w-1/4 mt-3">
              <Button variant='yellow' size='base' className='border-none'>Submit Enquiry</Button>
            </div>
          </form>
          <div className="hidden lg:flex flex-wrap justify-center items-center gap-5 rounded-r-md bg-[#004AAD] text-white">
            <NextImage 
              src='/images/CS-contact.webp' 
              width={100} 
              height={100} 
              alt='Customer Service UI'
              useSkeleton={true}
              classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
            />
            <h1>Connect with <br /> Our Expert <br /> Team</h1>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Contact;
