import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=6285942210575&text=Saya+tertarik+untuk+Menggunakan+Layanan+di+Perusahan+Anda.+Apakah+bisa+dibantu%3F&type=phone_number&app_absent=0"
      className="fixed bottom-5 right-5 bg-green-500 rounded-3xl w-1/7 p-3 text-white h-12 flex justify-center gap-2 items-center z-50 no-underline"
    >
      <FaWhatsapp className="text-white text-2xl" />
      <p>Chat with us</p>
    </Link>
  );
};

export default FloatingWhatsapp;
