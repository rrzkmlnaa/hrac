import { SiHtmlacademy } from "react-icons/si";

import UnderlineLink from '@/components/links/UnderlineLink';

const Resource = () => {
  return (
    <section id='resource' className='bg-blue-400 text-white'>
      <div className="mx-auto max-w-screen-xl min-h-96 content-center py-16">
        <div className='text-center'>
          <UnderlineLink href='#resource' className='text-gray-100'>
            RESOURCES
          </UnderlineLink>
          <h1 className='py-5'>FREE RESOURCES</h1>
          <p className='text-gray-100 pb-10'>
            Find HR Academy’s resume, cover letter, & networking templates below
          </p>
        </div>
        <div className='grid grid-cols-3 pt-5'>
          <div className='flex flex-col justify-center items-center p-5'>
            <SiHtmlacademy size='40%' color='1e40af' />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
          <div className='flex flex-col justify-center items-center p-5'>
            <SiHtmlacademy size='40%' color='1e40af' />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
          <div className='flex flex-col justify-center items-center p-5'>
            <SiHtmlacademy size='40%' color='1e40af' />
            <h3 className='py-3'>Resume</h3>
            <p className='text-center'>
              Use Wonsulting’s ATS-friendly resume template that has helped
              underdogs land interviews at Fortune 500 companies
            </p>
          </div>
        </div>
        <div className='text-center pt-10'>
          <UnderlineLink href='/' className='text-gray-100'>
            Get Resource
            {' >>'}
          </UnderlineLink>
        </div>
      </div>
      
    </section>
  );
};

export default Resource;
