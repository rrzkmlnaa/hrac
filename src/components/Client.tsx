import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';

export interface propTypes {
    bgColor: string;
    title: string;
    imagUrls: string[];
    alts: string[];
    readMore?: string;
}

export const clients = [
    { src: '/images/dbs-Logo.webp', alt: 'DBS Company' },
    { src: '/images/deloitte.webp', alt: 'Deloitte Company' },
    { src: '/images/pertamina.webp', alt: 'Pertamina Company' },
    { src: '/images/pwc.webp', alt: 'PWC Company' },
    { src: '/images/rsm.webp', alt: 'RSM Company' },
    { src: '/images/sc-johnson.webp', alt: 'SC Johnson Company' },
    { src: '/images/zahir.webp', alt: 'Zahir Company' },
    { src: '/images/bukopin-syariah.webp', alt: 'Bank Bukopin Company' },
    { src: '/images/paragon.webp', alt: 'Paragon Company' },
    { src: '/images/tvri.webp', alt: 'TVRI Company' },
]

const Client = ({ bgColor, title, imagUrls, alts, readMore }: propTypes) => {
    return (
        <section className={`${bgColor}`}>
            <div className="mx-auto max-w-screen-xl">
                <h1 className='text-center text-primary-500'>{title}</h1>
                <div className='flex flex-wrap justify-center items-center gap-10 p-8'>
                    {imagUrls.map((imageUrl, index) => (
                        <NextImage
                            key={index}
                            src={imageUrl}
                            width={100}
                            height={80}
                            alt={alts[index]}
                            useSkeleton={true}
                            className='w-24 h-auto'
                            classNames={{ image: 'object-cover hover:scale-110 duration-150 w-full h-auto', blur: 'blur' }}
                        />
                    ))}
                </div>
                <div className={`text-center ${readMore}`}>
                    <ArrowLink href='/' className='text-primary-500'>
                        Read success stories
                    </ArrowLink>
                </div>
            </div>
        </section>
    );
};

export default Client;
