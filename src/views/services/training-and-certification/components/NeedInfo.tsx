import Button from "@/components/buttons/Button";
import UnstyledLink from "@/components/links/UnstyledLink";

import { downloadFile } from "@/handler/DownloadFile";

export default function NeedInfo() {
  const handleDownloadClick = () => {
    const documentUrl = '/document/HR-Academy-Pelatihan-Sertifikasi-SDM-BNSP-Double-Degree.pdf';

    downloadFile(documentUrl, 'HR-Certification-Document.pdf')
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-primary-500 text-center py-20">
        <h2 className="text-white py-4">Need more information?</h2>
        <UnstyledLink href='/about-us/contact-us'>
          <Button
            variant="light"
          >
            Contact Us
          </Button>
        </UnstyledLink>
      </div>
      <div className="bg-yellow-500 text-center py-20">
        <h2 className="text-primary-500 py-4">HR Academy’s training catalogue</h2>
        <Button
          onClick={handleDownloadClick}
          variant="light"
        >
          Download
        </Button>
      </div>
    </section>
  )
}
