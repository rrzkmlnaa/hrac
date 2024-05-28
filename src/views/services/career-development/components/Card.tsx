import { ReactNode } from "react";

import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import NextImage from "@/components/NextImage";

interface Props {
    tag?: string;
    title: string;
    description: string;
    price?: string;
    imageUrl: string;
    onClick?: () => void;
    slug?: string;
    children?: ReactNode;
}

export default function Card({ imageUrl, tag, title, description, price, onClick, slug, children }: Props) {
    return (
        <div id="card" className="relative w-full h-auto rounded-xl border-2 border-primary-500 bg-white p-4">
            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-primary-100 border-2 border-primary-500 rounded-full p-3">
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
                <p className="absolute z-[20] -top-4 end-0 px-1 w-fit h-auto rounded-2xl border-2 border-amber-500 bg-white">{tag}</p>
            )}
            <h3 className='pt-6 text-center'>{title}</h3>
            <p className='text-start p-5 min-h-32'>{description}</p>
            {onClick && (
                <ArrowLink
                    href='#card'
                    direction='right'
                    className='my-4'
                    onClick={onClick}
                >
                    Learn More
                </ArrowLink>
            )}
            <h4 className='py-3 text-center'>{price}</h4>
            {slug ? (
                <UnstyledLink href={`/services/career-development/${slug}`}>
                    <Button>
                        View More
                    </Button>
                </UnstyledLink>
            ) : (
                onClick && (
                    <Button onClick={onClick}>
                        View More
                    </Button>
                )
            )}
            {children}
        </div>
    );
}
