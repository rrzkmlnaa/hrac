import Button from '@/components/buttons/Button';

import Hra from '@/views/about-us/company/about-hra';
import Coach from '@/views/about-us/company/coach';
import Join from '@/views/about-us/company/join';
import VisiMisi from '@/views/about-us/company/visi-misi';
import Ready from '@/views/landing-page/ready';

export default function Companys() {
  return (
    <>
      <section className='relative bg-[url(/images/banner-aboutus.webp)] bg-cover bg-center bg-no-repeat'>
        <div className='relative text-white mx-auto max-w-screen-xl px-6 py-32 md:px-10 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='text-2xl font-extrabold md:text-5xl'>
              At HR Academy, we believe in
              the significance of enhancing
              human resource aspects to
              shape a brighter future for
              organizations, individuals, and
              society as a whole.
            </h1>
          </div>
        </div>
      </section>
      <Hra />
      <VisiMisi />
      <Join />
      <Coach />
      <Ready 
        colorstyle='bg-blue-800 text-white p-10'
        text='Ready to achieve your success?'  
      >
        <Button
          isLoading={false}
          variant='light'
          size='base'
          className='border-0 rounded-l-md rounded-r-none p-3'
        >
          Get In Touch
        </Button>
        <Button
          isLoading={false}
          variant='dark'
          size='base'
          className='border-0 rounded-r-md rounded-l-none p-3'
        >
          Visit Our Services
        </Button>
      </Ready>
    </>
  )
}