import React from 'react'

import Divider from '@/components/Divider'
import Stack from '@/components/Stack'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-[7rem] border-t border-gray-200'>
      <div className='py-10 grid grid-cols-4 space-x-10 '>
        <Stack gap={4}>
          <h1 className='text-sm'>OUR LOCATIONS</h1>
          <p className='text-sm'>
            Jalan Rawa Domba Jl. Kav. Dki No.D 9, RT.1/RW.5, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13440
          </p>
        </Stack>
        <Stack gap={4}>
          <h1 className='text-sm'>CONTACT US</h1>
          <Stack gap={2.5}>
            <p className='text-sm'>
              0859-4221-0575
            </p>
            <p className='text-sm'>
              0859-4221-0575
            </p>
            <p className='text-sm'>
              0859-4221-0575
            </p>
          </Stack>
        </Stack>
        <Stack gap={4}>
          <h1 className='text-sm'>CONNECT WITH US</h1>
          <Stack gap={2.5}>
            <Link href='https://www.instagram.com/hracademy.id/' className='text-sm'>
              Instagram
            </Link>
            <Link href='https://www.linkedin.com/company/hr-academy-id/mycompany/' className='text-sm'>
              Linkedin
            </Link>
            <Link href='https://www.facebook.com/hracademy1/' className='text-sm'>
              Facebook
            </Link>
            <Link href='mailto:hramanajemen@gmail.com' className='text-sm'>
              Email
            </Link>
          </Stack>
        </Stack>
      </div>
      <Divider color='black' size={2} />
      <p className='pb-8 pt-2'>&copy; Copyright HR Academy {new Date().getFullYear()}. Allright reserved.</p>
    </div>
  )
}

export default Footer