import { useState } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import Modal from '@/components/Modal';

import Card from '@/views/services/career-development/components/Card';

export interface SingleServiceType {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    tag?: string;
    body?: string;
}

export const dummyData: SingleServiceType[] = [
    {
        slug: 'career-coacing',
        imageUrl: '/images/career-coacing-icon.png',
        title: 'Career Coacing',
        description: 'Need professional guidance to level up your career? Let’s get you connected with the perfect mentor.',
        price: 'Rp. 300.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'cv-revision',
        imageUrl: '/images/resume-revision-icon.png',
        title: 'CV Revision',
        description: 'Ready to win the resume wars? Our CV are designed to stand out to your recruiters.',
        price: 'Rp. 25.000',
        tag: 'Most Popular',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'linkedin-revision',
        imageUrl: '/images/linkedin-icon.png',
        title: 'Linkedin Revision',
        description: 'Enhance your LinkedIn profile. Stand out professionally and attract potential opportunities.',
        price: 'Rp. 50.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'job-search-strategy',
        imageUrl: '/images/job-search-icon.png',
        title: 'Job Search Strategy',
        description: 'Optimize your networking strategies to get the best referrals.',
        price: 'Rp. 5.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'interview-prep',
        imageUrl: '/images/interview-prep-icon.png',
        title: 'Interview Prep',
        description: 'Prepare for success with our interview coaching. Gain confidence and hone your skills to ace your upcoming interviews.',
        price: 'Rp. 300.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },
    {
        slug: 'cover-letter-revision',
        imageUrl: '/images/cv-icon.png',
        title: 'Cover Letter Revision',
        description: 'We\'ll use your relevant work experience to create the perfect cover letter to land your dream job.',
        price: 'Rp. 50.000',
        body: '<div style={"font-family: Arial, sans-serif; line-height: 1.6; color: #333;"}><p><strong>Get one-on-one guidance to reveal your dream job.</strong></p><p><strong>Learn what to look for in a job</strong><br>Design your career path and understand what industries, companies and roles suit you best as an individual.</p><p><strong>Plan your next career move</strong><br>Once you figure out what you want, get one-on-one guidance that shows you the way.</p><p><strong>No experience required</strong><br>No experience or background required. All underdogs welcome.</p></div>',
    },

];

export default function CareerDevelopment() {
    const [selectedCard, setSelectedCard] = useState<SingleServiceType | null>(null);

    return (
        <section id='careerDevelopment' className="container mx-auto w-full h-auto px-6 py-20">
            <div className="text-center">
                <UnderlineLink href='#careerDevelopment' className='text-base uppercase'>
                    Career development
                </UnderlineLink>
                <h1 className='text-primary-500 py-5'>Quick fix with our single services</h1>
            </div>
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
                            slug={item.slug}
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
