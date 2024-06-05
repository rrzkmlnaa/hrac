import Ready from '@/components/Banner';
import Button from '@/components/buttons/Button';
import Banners from '@/components/Jumbotron';
import UnstyledLink from '@/components/links/UnstyledLink';

import Hra from '@/views/about-us/company/components/about-hra';
import Chart from '@/views/about-us/company/components/Chart';
import Coach from '@/views/about-us/company/components/coach';
import Join from '@/views/about-us/company/components/join';
import VisiMisi from '@/views/about-us/company/components/visi-misi';

export default function Companys() {
  return (
    <>
      <Banners
        imageName='banner-aboutus.webp'
      >
        <h1 className='text-2xl font-extrabold md:text-5xl'>
          At HR Academy, we believe in
          the significance of enhancing
          human resource aspects to
          shape a brighter future for
          organizations, individuals, and
          society as a whole.
        </h1>
      </Banners>
      <Hra />
      <Chart />
      <VisiMisi />
      <Join />
      <Coach />
      <Ready
        colorstyle='bg-blue-800 text-white p-10'
      >
        <h1 className='text-center'>Ready to level up your success?</h1>
        <div className='my-5 flex flex-wrap justify-center'>
          <UnstyledLink href='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='light'
              size='base'
              className='border-0 rounded-l-md rounded-r-none p-3'
            >
              Get In Touch
            </Button>
          </UnstyledLink>
          <UnstyledLink href='/#role'>
            <Button
              isLoading={false}
              variant='dark'
              size='base'
              className='border-0 rounded-r-md rounded-l-none p-3'
            >
              Visit Our Services
            </Button>
          </UnstyledLink>
        </div>
      </Ready>
    </>
  )
}