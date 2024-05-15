import { useMemo, useState } from 'react';

import TextButton from '@/components/buttons/TextButton';
import NextImage from "@/components/NextImage";

import { workshopData } from '@/constant/trainingCalendar';

interface Workshop {
    detailArticle?: { title: string; body: string }[];
}

export default function Detail() {
    const data: Workshop[] = useMemo(() => workshopData, []);
    const [showDropdown, setShowDropdown] = useState<{ [key: string]: boolean }>({});

    const toggleDropdown = (workshopIndex: number, detailIndex: number) => {
        const key = `${workshopIndex}-${detailIndex}`;
        setShowDropdown(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <section className="container mx-auto w-full h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 p-5">
                <div className="col-span-1 flex flex-col gap-4">
                    <NextImage
                        src='/images/corporate.webp'
                        width={305}
                        height={305}
                        alt='lorem ipsum'
                        useSkeleton={true}
                        classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                    />
                    <NextImage
                        src='/images/corporate.webp'
                        width={305}
                        height={305}
                        alt='lorem ipsum'
                        useSkeleton={true}
                        classNames={{ image: 'object-cover w-full h-auto', blur: 'blur' }}
                    />
                </div>
                <div className="col-span-2 border-t-4 border-primary-500">
                    {data.map((workshop, workshopIndex) => (
                        <div key={workshopIndex}>
                            {workshop.detailArticle && workshop.detailArticle.map((item, detailIndex) => (
                                <div key={detailIndex} className="border-b-2 border-gray-200">
                                    <TextButton variant='basic' className="w-full flex justify-between items-center py-5" onClick={() => toggleDropdown(workshopIndex, detailIndex)}>
                                        <h4>{item.title}</h4>
                                        <svg className={`w-2.5 h-2.5 ml-2.5 ${showDropdown[`${workshopIndex}-${detailIndex}`] ? 'rotate-0' : 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </TextButton>
                                    {showDropdown[`${workshopIndex}-${detailIndex}`] && (
                                        <div key={`dropdown-${workshopIndex}-${detailIndex}`} className="block">
                                            <div className='py-4'>{item.body}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
