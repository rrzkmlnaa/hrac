/* eslint-disable no-console */
'use client'

import { useState } from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

import ContactFormInput from '@/views/about-us/contact-us/components/ContactFormInput';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  company: string;
  inquiry: string;
  message: string;
}

const initialFormData: FormData = {
  firstname: '',
  lastname: '',
  email: '',
  telephone: '',
  company: '',
  inquiry: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-96">
      <div className="bg-[#004AAD] content-start text-white py-10">
        <div className="flex flex-wrap px-6 md:px-3 max-w-screen-xl gap-3 flex-col  sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <h1>Contact Us</h1>
          <p className='w-full md:w-2/4'>Please fill out the form below with your inquiry details. We'll reach out to schedule an appointment via phone or email. Please be detailed in your response.</p>
        </div>
      </div>
      <div className="px-6 xl:px-4">
        <div className="mx-auto max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-2 rounded-md shadow-[16px_0_40px_#e4e4e4] my-10">
          <form onSubmit={handleSubmit} className="flex flex-wrap flex-col gap-3 p-5 md:p-8">
            <div className="flex justify-stretch gap-3">
              <ContactFormInput label="Full Name" name="firstname" required placeholder="Lee" value={formData.firstname} onChange={handleChange} />
              <ContactFormInput label="Last Name" name="lastname" placeholder="Minho" value={formData.lastname} onChange={handleChange} />
            </div>
            <ContactFormInput label="Email" name="email" type="email" placeholder="example@gmail.com" required value={formData.email} onChange={handleChange} />
            <ContactFormInput label="Telephone" name="telephone" placeholder="+62 123 456 789" required value={formData.telephone} onChange={handleChange} />
            <ContactFormInput label="Company" name="company" placeholder="Enter your company name" required value={formData.company} onChange={handleChange} />
            <label htmlFor="inquiry" className="block text-sm font-medium leading-6 text-gray-900">Reason to inquiry <span className="text-red-600">*</span></label>
            <select required name="inquiry" id="inquiry" value={formData.inquiry} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              <option value="" disabled>Select an option</option>
              <option value="Career development">Career development</option>
              <option value="Training & certifications">Training & certifications</option>
              <option value="HR Solutions">HR Solutions</option>
              <option value="Ad-Hoc Consulting">Ad-Hoc Consulting</option>
              <option value="Media / Press Relations">Media / Press Relations</option>
              <option value="Careers">Careers</option>
              <option value="Others">Others</option>
            </select>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">How can we help you? <span className="text-red-600">*</span></label>
            <textarea required name="message" id="message" value={formData.message} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Your Message"></textarea>
            <div className="w-1/4 mt-3">
              <Button type="submit" variant='yellow' size='base' className='border-none' disabled={isSubmitting}>Submit Enquiry</Button>
            </div>
            {responseMessage && <p className="mt-3 text-sm text-red-600">{responseMessage}</p>}
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
