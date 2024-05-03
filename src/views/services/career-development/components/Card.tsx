import { IconBaseProps } from 'react-icons';

import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink";
import UnstyledLink from "@/components/links/UnstyledLink";

interface propsTypes {
    Icon: React.ElementType<IconBaseProps>;
    tag?: string;
    title: string;
    description: string;
    price: string;
    priceInfo: string;
}

export default function Card({ Icon, tag, title, description, price, priceInfo }: propsTypes) {
    return (
        <div className="relative w-full h-auto rounded-xl shadow-2xl shadow-primary-500 bg-white p-4">
            <div className="absolute -top-8 left-[38%] sm:left-[40%] xl:left-[41%] bg-primary-100 border-2 border-primary-500 rounded-full p-3">
                <Icon size={38} className="text-white" /> 
            </div>
            {tag && (
                <p className="absolute -top-4 end-0 px-1 w-fit h-auto rounded-2xl border-2 border-amber-500">{tag}</p>
            )}
            <h3 className='pt-6'>{title}</h3>
            <p className='text-start py-4'>{description}</p>
            <ArrowLink
                href='/'
                direction='right'
                className='my-4'
            >
                Learn More
            </ArrowLink>
            <h4 className='py-3'>{price}</h4>
            <p className='pb-3'>{priceInfo}</p>
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
