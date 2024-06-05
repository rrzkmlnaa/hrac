'use client'

import Ready from '@/components/Banner';
import Button from '@/components/buttons/Button';
// import Client from '@/views/landing-page/components/client';
import Client, { clients } from '@/components/Client';
import Jumbotron from '@/components/Jumbotron';
import UnstyledLink from '@/components/links/UnstyledLink';

import Career from '@/views/landing-page/components/career';
import Course from '@/views/landing-page/components/course';
import Featured from '@/views/landing-page/components/featured';
import Learn from '@/views/landing-page/components/learn';
import Resource from '@/views/landing-page/components/resource';
import Role, { roles } from '@/views/landing-page/components/role';
import Solution from '@/views/landing-page/components/solution';
import Why from '@/views/landing-page/components/why';


export default function Index() {
  const selectedClients = clients.slice(0, 7);

  const imagUrls = selectedClients.map(client => client.src);
  const alts = selectedClients.map(client => client.alt);

  // Roles
  const selectedRoles = roles.slice(0, 3);
  return (
    <>
      <Jumbotron
        imageName='banner-landingpage.webp'
      >
        <h1 className='text-5xl font-extrabold text-center md:text-start'>
          Your Path to Success Starts Here
        </h1>

        <p className='mt-4 max-w-lg text-xl/relaxed text-center md:text-start'>
          ELEVATE YOUR COMPETENCE, SECURE YOUR DREAM JOB, AND EXPAND YOUR
          BUSINESS WITH OUR TAILORED COACHING AND TRAINING PROGRAMS
        </p>

        <div className='mt-8 flex flex-wrap text-center justify-center md:justify-start'>
          <UnstyledLink href='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='yellow'
              className='border-0 rounded-l-md rounded-r-none'
            >
              Register Now
            </Button>
          </UnstyledLink>
          <UnstyledLink href='#role'>
            <Button
              isLoading={false}
              variant='primary'
              className='border-0 rounded-r-md rounded-l-none'
            >
              Visit Our Services
            </Button>
          </UnstyledLink>
        </div>
      </Jumbotron>
      <Client
        bgColor='py-20 md:py-32'
        title='Our clients now worked at'
        imagUrls={imagUrls}
        alts={alts}
        readMore=''
      />
      <Role
        title='DISCOVER TAILORED SOLUTIONS FOR YOU'
        bgColor="bg-gray-100"
        titleStyle='absolute bottom-0'
        roles={selectedRoles}
      />
      <Why />
      <Career />
      <Course />
      <Learn />
      <Solution />
      <Resource />
      <Featured
        // colorTitle='text-lime-500'
        head="Featured"
        headColor='text-white'
        sectionStyled='bg-blue-800 text-white'
      />
      <Ready
        colorstyle='bg-blue-700 text-white pt-10'
      >
        <h1 className='text-center'>Ready to level up your success?</h1>
        <div className='my-5 flex flex-wrap justify-center'>
          <UnstyledLink href='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='light'
              size='base'
              className='bg-black text-white border-0 rounded-l-md rounded-r-none p-3'
            >
              Get In Touch
            </Button>
          </UnstyledLink>
          <UnstyledLink href='/#role'>
            <Button
              isLoading={false}
              variant='dark'
              className='bg-white text-black hover:text-white border-0 rounded-r-md rounded-l-none p-3'
            >
              Visit Our Services
            </Button>
          </UnstyledLink>
        </div>
      </Ready>
    </>
  );
};
