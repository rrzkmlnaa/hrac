import { useState } from 'react';

import Modal from '@/components/Modal';

import Card from '@/views/services/career-development/components/Card';

export interface SingleServiceType {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    tag?: string;
    body?: string;
}

const dummyData: SingleServiceType[] = [
    {   
        imageUrl: '/images/career-consulting-icon.png',
        title: 'Career Consulting',
        description: 'Need professional guidance to level up your career? Let’s get you connected with the perfect mentor.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        imageUrl: '/images/resume-revision-icon.png',
        title: 'Resume Revision',
        description: 'Ready to win the resume wars? Our resumes are designed to stand out to your recruiters.',
        price: 'Rp. 5.000',
        tag: 'Most Popular',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        imageUrl: '/images/linkedin-icon.png',
        title: 'Linkedin Revision',
        description: 'Enhance your LinkedIn profile. Stand out professionally and attract potential opportunities.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        imageUrl: '/images/job-search-icon.png',
        title: 'Job Search Strategy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum ratione, officia animi commodi aut veritatis in asperiores impedit nemo.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        imageUrl: '/images/interview-prep-icon.png',
        title: 'Interview Prep',
        description: 'Prepare for success with our interview coaching. Gain confidence and hone your skills to ace your upcoming interviews.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        imageUrl: '/images/cv-icon.png',
        title: 'CV Revision',
        description: 'Ready to pass the CV selection? Let’s craft your CV to stand out.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    
];

export default function SingleService() {
    const [selectedCard, setSelectedCard] = useState<SingleServiceType | null>(null);

    return (
        <section className="container mx-auto w-full h-auto px-6 py-20">
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-15 py-14 text-center">
                    {dummyData.map((item, index) => (
                        <Card
                            key={index}
                            imageUrl={item.imageUrl}
                            tag={item.tag}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            onClick={() => setSelectedCard(item)}
                        />
                    ))}
                </div>
            </div>
            {selectedCard && (
                <Modal onClose={() => setSelectedCard(null)}>
                    <>
                        <h3 className="text-xl font-semibold text-center pb-3">{selectedCard.title}</h3>
                        {selectedCard.body && <div dangerouslySetInnerHTML={{ __html: selectedCard.body }} />}
                    </>
                </Modal>
            )}
        </section>
    );
}
