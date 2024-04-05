import Image from 'next/image';
import Link from "next/link";

const FloatingWhatsapp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu%3F&type=phone_number&app_absent=0"
      className="fixed bottom-5 right-5 bg-blue-600 rounded-3xl w-1/9 h-auto p-3 text-white flex justify-center gap-1 items-center z-50 no-underline"
    >
      <Image
        src='/images/whatsapp-icon.webp'
        width={34}
        height={34}
        alt='Whatsapp Icon'
        className='bg-green-500 rounded-full content-center'
      />
      <p className='text-white text-center'>Chat with Us</p>
    </Link>
  );
};

export default FloatingWhatsapp;
