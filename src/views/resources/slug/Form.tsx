import React, { useState } from 'react';

import Button from '@/components/buttons/Button';

import { FormErrors, hasErrors, validateForm } from '@/utils/FormValidation';
import ContactFormInput from '@/views/about-us/contact-us/components/ContactFormInput';

interface ContactFormProps {
  fileDownload: string;
}

interface FormData {
  fullname: string;
  email: string;
  whatsapp: string;
  industry: string;
  careerRole: string;
}

const initialFormData: FormData = {
  fullname: '',
  email: '',
  whatsapp: '',
  industry: '',
  careerRole: '',
};

const ContactForm = ({ fileDownload }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      const whatsappWithoutSpaces = value.replace(/\s/g, '');
      setFormData({ ...formData, whatsapp: whatsappWithoutSpaces });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (isSubmitted) {
      const newErrors = validateForm({ ...formData, [name]: value });
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    setIsSubmitted(true);
  
    const formValidationErrors = validateForm(formData);
    setErrors(formValidationErrors);
  
    if (hasErrors(formValidationErrors)) {
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('/api/resourceSubmitForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      const result = await response.json();
      
      setResponseMessage(result.message || 'File downloaded successfully');
      window.open(fileDownload, '_blank');
      
    } catch (error) {
      setResponseMessage('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-3">
      <ContactFormInput label="Full Name" name="fullname" required placeholder="Lee Min Ho" value={formData.fullname} onChange={handleChange} />
      {isSubmitted && errors.fullname && <p className="text-red-600 text-sm">{errors.fullname}</p>}
      <ContactFormInput label="Email" name="email" required placeholder="example@gmail.com" value={formData.email} onChange={handleChange} />
      {isSubmitted && errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      <ContactFormInput label="WhatsApp Number" name="whatsapp" required placeholder="+62 345 678 910" value={formData.whatsapp} onChange={handleChange} />
      {isSubmitted && errors.whatsapp && <p className="text-red-600 text-sm">{errors.whatsapp}</p>}
      <ContactFormInput label="Industry" name="industry" required placeholder="Banking" value={formData.industry} onChange={handleChange} />
      {isSubmitted && errors.industry && <p className="text-red-600 text-sm">{errors.industry}</p>}
      <label htmlFor="careerRole" className="block text-sm font-medium leading-6 text-gray-900">Where Are You In Your Career <span className="text-red-600">*</span></label>
      <select required name="careerRole" id="careerRole" className="block w-full rounded-md border-0 py-1.5 pl-4 pr-8.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={formData.careerRole} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        <option value="Student (< 1 Tahun)">Student ({'<'} 1 Tahun)</option>
        <option value="Early Career (1 - 5 Years)">Early Career (1 - 5 Years)</option>
        <option value="Professionals (6+ years)">Professionals (6+ years)</option>
      </select>
      {isSubmitted && errors.careerRole && <p className="text-red-600 text-sm">{errors.careerRole}</p>}
      <div className="w-full mt-3">
        <Button type="submit" variant="yellow" size="base" className="w-full flex justify-center border-none" disabled={isSubmitting}>Submit Enquiry</Button>
        {responseMessage && <p className="mt-3 text-sm text-red-600">{responseMessage}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
