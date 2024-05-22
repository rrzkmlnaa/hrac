'use client'

// import NextImage from '@/components/NextImage';

import VideoPlayer from '@/views/success-story/components/VideoPlayer';

export default function VideoTestimoni() {
    const data = [
        {
            videoSrc: '/videos/cepi.mp4',
            thumbnail: '/videos/thumbnail-cepi.png',
            name: 'Pak Cepi',
            pelatihan: 'Pelatihan dan Sertifikasi Manager HR SDM Level 6',
        },
        {
            videoSrc: '/videos/wiwik.mp4',
            thumbnail: '/videos/thumbnail-wiwik.png',
            name: 'Ibu Wiwik',
            pelatihan: 'Pelatihan dan Sertifikasi Supervisor SDM Level 4',
        },
        {
            videoSrc: '/videos/budi.mp4',
            thumbnail: '/videos/thumbnail-budi.png',
            name: 'Pak Budi',
            pelatihan: 'lorem ipsum dor sit amet',
        },
        {
            videoSrc: '/videos/hari.mp4',
            thumbnail: '/videos/thumbnail-hari.png',
            name: 'Pak Hari',
            pelatihan: 'lorem ipsum dor sit amet',
        },
        {
            videoSrc: '/videos/rumi.mp4',
            thumbnail: '/videos/thumbnail-rumi.png',
            name: 'Ibu Rumi',
            pelatihan: 'lorem ipsum dor sit amet',
        },
        {
            videoSrc: '/videos/gina.mp4',
            thumbnail: '/videos/thumbnail-gina.png',
            name: 'Ibu Gina',
            pelatihan: 'lorem ipsum dor sit amet',
        },
        {
            videoSrc: '/videos/6.mp4',
            thumbnail: '/videos/thumbnail-6.png',
            name: 'Lorem Ipsum dor sit amet',
            pelatihan: 'lorem ipsum dor sit amet',
        },
        
    ]
    return (
        <section className="bg-primary-500 text-white py-20">
            <div className="container mx-auto w-full h-auto py-">
                <div className="px-6 text-white text-center flex flex-col gap-4">
                    <h1>HR Training and Certifications</h1>
                    <h4>Video Testimonials</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 py-10 px-5 gap-5">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <VideoPlayer
                                videoSrc={item.videoSrc}
                                thumbnail={item.thumbnail}
                            />
                            <h3>{item.name}</h3>
                            <p>{item.pelatihan}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
