'use client'

import { useState } from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import ToastDanger from '@/components/toasts/ToastDanger';
import ToastSuccess from '@/components/toasts/ToastSuccess';

import { ContactData, ContactErrors, hasErrors, validateField } from '@/utils/validation/contactUsValidation';
import ContactFormInput from '@/views/about-us/contact-us/components/ContactFormInput';

const initialFormData: ContactData = {
  firstname: '',
  lastname: '',
  email: '',
  telephone: '',
  company: '',
  inquiry: '',
  message: '',
};

export default function Contact() {
  const [contactData, setContactData] = useState<ContactData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toasts, setToasts] = useState<Array<{ id: number; type: 'success' | 'danger'; message: string }>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'telehone') {
      const telephoneWithoutSpaces = value.replace(/\s/g, '');
      setContactData({ ...contactData, telephone: telephoneWithoutSpaces });
    } else {
      setContactData({ ...contactData, [name]: value });
    }

    if (isSubmitted) {
      const newErrors = validateField({ ...contactData, [name]: value })
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(true);

    const contactValidationErrors = validateField(contactData);
    setErrors(contactValidationErrors);

    if (hasErrors(contactValidationErrors)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      await response.json();

      addToast('success', 'Thank you for contacting us');
    } catch (error) {
      addToast('danger', 'An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const addToast = (type: 'success' | 'danger', message: string) => {
    const newToast = { id: Date.now(), type, message };
    setToasts((prevToasts) => [newToast, ...prevToasts]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
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
              <ContactFormInput label="First Name" name="firstname" required placeholder="Lee" value={contactData.firstname} onChange={handleChange} />
              <ContactFormInput label="Last Name" name="lastname" placeholder="Minho" value={contactData.lastname} onChange={handleChange} />
            </div>
            {isSubmitted && errors.firstname && <p className="text-red-600 text-sm">{errors.firstname}</p>}
            <ContactFormInput label="Email" name="email" type="email" placeholder="example@gmail.com" required value={contactData.email} onChange={handleChange} />
            {isSubmitted && errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            <ContactFormInput label="Telephone" name="telephone" placeholder="+62 123 456 789" required value={contactData.telephone} onChange={handleChange} />
            {isSubmitted && errors.telephone && <p className="text-red-600 text-sm">{errors.telephone}</p>}
            <ContactFormInput label="Company" name="company" placeholder="Enter your company name" required value={contactData.company} onChange={handleChange} />
            {isSubmitted && errors.company && <p className="text-red-600 text-sm">{errors.company}</p>}
            <label htmlFor="inquiry" className="block text-sm font-medium leading-6 text-gray-900">Reason to inquiry <span className="text-red-600">*</span></label>
            <select required name="inquiry" id="inquiry" value={contactData.inquiry} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
              <option value="" disabled>Select an option</option>
              <option value="Career development">Career development</option>
              <option value="Training & certifications">Training & certifications</option>
              <option value="HR Solutions">HR Solutions</option>
              <option value="Ad-Hoc Consulting">Ad-Hoc Consulting</option>
              <option value="Media / Press Relations">Media / Press Relations</option>
              <option value="Careers">Careers</option>
              <option value="Others">Others</option>
            </select>
            {isSubmitted && errors.inquiry && <p className="text-red-600 text-sm">{errors.inquiry}</p>}
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">How can we help you? <span className="text-red-600">*</span></label>
            <textarea required name="message" id="message" value={contactData.message} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" placeholder="Your Message"></textarea>
            {isSubmitted && errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            <div className="w-1/4 mt-3">
              <Button type="submit" variant='yellow' size='base' className='border-none' disabled={isSubmitting}>Submit Enquiry</Button>
            </div>
            {/* {responseMessage && <p className="mt-3 text-sm text-red-600">{responseMessage}</p>} */}
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
      <div className="fixed top-24 right-5">
        {toasts.map((toast) => (
          <div key={toast.id} className={`mt-2 ${toast.type === 'success' ? 'toast-success' : 'toast-danger'}`}>
            {toast.type === 'success' ? (
              <ToastSuccess
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            ) : (
              <ToastDanger
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};