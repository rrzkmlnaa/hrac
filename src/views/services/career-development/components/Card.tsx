import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";
interface propsTypes {
    tag?: string;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    onClick: () => void;
}

export default function Card({ imageUrl, tag, title, description, price, onClick }: propsTypes) {
    return (
        <div id='card' className="relative w-full h-auto rounded-xl border-2 border-primary-500 bg-white p-4 cursor-pointer">
            <div className="absolute -top-9 left-[38%] sm:left-[40%] xl:left-[41%] bg-primary-100 border-2 border-primary-500 rounded-full p-3">
                <NextImage
                    src={imageUrl}
                    width={30}
                    height={30}
                    alt={`Image ${title}`}
                    useSkeleton={true}
                    classNames={{ image: 'object-scale-down w-8 h-8', blur: 'blur' }}
                />
            </div>
            {tag && (
                <p className="absolute z-50 -top-4 end-0 px-1 w-fit h-auto rounded-2xl border-2 border-amber-500 bg-white">{tag}</p>
            )}
            <h3 className='pt-6'>{title}</h3>
            <p className='text-start p-5 min-h-32'>{description}</p>
            <ArrowLink
                href='#card'
                direction='right'
                className='my-4'
                onClick={onClick}
            >
                Learn More
            </ArrowLink>
            <h4 className='py-3'>{price}</h4>
            <UnstyledLink
                href='/'
            >
                <Button>
                    Add to Cart
                </Button>
            </UnstyledLink>
        </div>
    );
}
