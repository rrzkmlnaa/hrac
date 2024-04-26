import Link from 'next/link'
import React from 'react'
import { GrInstagram, GrLinkedin, GrMail, GrPhone, GrYoutube } from 'react-icons/gr'

import Divider from '@/components/Divider'
import Stack from '@/components/Stack'

const Footer = () => {
  return (
    <div className='px-6 md:px-[7rem] border-t border-gray-200'>
      <div className='py-10 grid grid-cols-1 md:grid-cols-4 md:space-x-10 space-y-7 md:space-y-0 mb-7'>
        <Stack gap={2}>
          <h1 className='text-xl'>OUR LOCATIONS</h1>
          <p className='text-sm'>
            Jalan Rawa Domba Jl. Kav. Dki No.D 9, RT.1/RW.5, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440
          </p>
        </Stack>
        <Stack gap={2}>
          <h1 className='text-xl'>CONTACT US</h1>
          <Stack gap={2}>
            <div className='flex items-center gap-4'>
              <GrPhone />
              <Link href='tel:+6285942210575' className='text-sm'>
                Admin 1
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <GrPhone />
              <Link href='tel:+085942210587' className='text-sm'>
                Admin 2
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <GrMail />
              <Link href='mailto:admin@hracademy.id' className='text-sm'>
                admin@hracademy.id
              </Link>
            </div>
          </Stack>
        </Stack>
        <Stack gap={2}>
          <h1 className='text-xl'>CONNECT WITH US</h1>
          <Stack gap={2}>
            <div className='flex items-center gap-4'>
              <GrInstagram />
              <Link href='https://www.instagram.com/hracademy.id/' className='text-sm'>
                @hracademy.id
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <GrLinkedin />
              <Link href='https://www.linkedin.com/company/hr-academy-id/mycompany/' className='text-sm'>
                @hr-academy-id
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <GrYoutube />
              <Link href='https://www.youtube.com/@hracademy_id' className='text-sm'>
                @hracademy_id
              </Link>
            </div>
          </Stack>
        </Stack>
      </div>
      <Divider color='black' size={2} />
      <p className='pb-8 pt-2 text-sm'>&copy; Copyright HR Academy {new Date().getFullYear()}. Allright reserved.</p>
    </div>
  )
}

export default Footer