'use client'

import { IconBaseProps } from 'react-icons';
import { FaBriefcase, FaClipboardCheck, FaComments, FaFileAlt, FaGamepad, FaLightbulb, FaTasks, FaUserFriends } from 'react-icons/fa';

interface LearningType {
    title: string;
    icon: React.ElementType<IconBaseProps>;
}

const data: LearningType[] = [
    { title: 'excersices', icon: FaTasks },
    { title: 'key takeaway', icon: FaLightbulb },
    { title: 'case studies', icon: FaBriefcase },
    { title: 'assignments', icon: FaFileAlt },
    { title: 'group discussions', icon: FaUserFriends },
    { title: 'learning logs', icon: FaComments },
    { title: 'scenario-base activities', icon: FaClipboardCheck },
    { title: 'quizzes/gamification', icon: FaGamepad },
];

export default function Learning() {
    return (
        <section className="bg-gray-100 py-24">
            <div className="container mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-auto">
                <h1 className="text-center text-primary-500">Our Learning Method</h1>
                <h4 className="font-normal text-center py-5">Our trainers are skilled practitioners who are directly involved in <br /> the industry and often lead training sessions</h4>
                <div className="grid gid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 px-6 xl:px-0 ">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-5 w-full h-40 bg-primary-500 p-5">
                            <h3 className="capitalize text-white text-center">{item.title}</h3>
                            <item.icon size={44} className="text-white" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
