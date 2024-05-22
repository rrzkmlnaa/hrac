'use client'

import Banner from '@/components/Banner';
import Button from "@/components/buttons/Button";
import Client, { clients } from '@/components/Client';
import Jumbotron from "@/components/Jumbotron";
import UnstyledLink from "@/components/links/UnstyledLink";

import ActualCareer from "@/views/success-story/components/ActualCareer";

import VideoTestimoni from "./components/VideoTestimoni";

export default function Index() {
  const selectedClients = clients.slice(0, 11);

  const imagUrls = selectedClients.map(client => client.src);
  const alts = selectedClients.map(client => client.alt);
  return (
    <>
        <Jumbotron
        imageName='career-dev-banner.webp'
      >
        <h1 className='text-4xl md:text-6xl font-extrabold text-center text-wrap md:text-start md:text-nowrap'>
            Success Story
        </h1>

        <p className='mt-4 max-w-xl text-xl/relaxed text-center md:text-start'>
            HOW WE ASSISTS OUR CLIENTS, ORGANIZATION LEADER, AND CORPORATIONS 
        </p>
      </Jumbotron>
      <Client
        bgColor='bg-slate-100 py-20 md:py-32'
        title='Our clients now worked at'
        imagUrls={imagUrls}
        alts={alts}
        readMore='hidden'
      />
      <ActualCareer />
      <VideoTestimoni />
      <Banner
        colorstyle='bg-slate-100 text-white pt-10'
      >
        <h1 className='text-center text-primary-500 px-6'>Ready to level up your success? </h1>
        <div className='my-5 flex flex-wrap justify-center'>
          <UnstyledLink href='/about-us/contact-us'>
            <Button
              isLoading={false}
              variant='light'
              size='base'
              className='bg-white text-primary-500 hover:text-primary-500 border-0 rounded-l-md rounded-r-none py-3 px-10'
            >
              Get In Touch
            </Button>
          </UnstyledLink>
          <UnstyledLink href='/#role'>
            <Button
              isLoading={false}
              variant='primary'
              className='text-white border-0 rounded-r-md rounded-l-none py-3 px-6'
            >
              Visit Our Services
            </Button>
          </UnstyledLink>
        </div>
      </Banner>
    </>
  )
}
