import React from 'react';

interface PropsType {
    imageName: string;
    children: React.ReactNode;
}

export default function Jumbotron({ imageName, children }: PropsType) {
    const sectionStyle = {
        backgroundImage: `url(/images/${imageName})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <section style={sectionStyle}>
            <div className='relative text-white mx-auto max-w-screen-xl px-6 py-32 md:px-10 lg:flex h-screen lg:items-center lg:px-8'>
                <div className='max-w-xl text-start ltr:sm:text-left rtl:sm:text-right'>
                    {children}
                </div>
            </div>
        </section>
    );
}
