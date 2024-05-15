export interface Workshop {
    slug: string;
    name: string;
    linkUrl: string;
    duration: string;
    date: string;
    category: string;
    detailArticle?: { title: string; body: string }[];
}

const workshopData: Workshop[] = [
    { 
        slug: 'sphr-6-may',
        category: 'Double Degree Program',
        name: 'Senior Professional Human Resource',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '6 May - 9 May 2024',
        detailArticle: [
            {
                title: "What is this training about?",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Who is it for?",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Topics covered",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Training duration",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Learning platform",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Investment",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Max participants",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
            {
                title: "Contact us",
                body: "Stay Ahead with the Annual Technical Update IFRS 2023!, In the dynamic world of financial reporting, staying up-to-date with International Financial Reporting Standards (IFRS) is crucial. Join us for the Annual Technical Update IFRS 2023, where we bring you the latest developments and changes in IFRS, such as IFRS 16 - Sales and leaseback. This exclusive training event offers in-depth sessions, expert-led workshops, and access to invaluable resources. Network with industry leaders and gain insights into the future of financial reporting. Don't miss out on this opportunity to enhance your skills and knowledge. Stay ahead of the curve with the Annual Technical Update IFRS 2023!",
            },
        ]
    },
    { 
        slug: 'sphr-13-may',
        category: 'Double Degree Program',
        name: 'Senior Professional Human Resource',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '13 May - 16 May 2024',
    },
    { 
        slug: 'sphr-27-may',
        category: 'Double Degree Program',
        name: 'Senior Professional Human Resource',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '27 May - 30 May 2024',
    },
    { 
        slug: 'chrp-3-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resource Professional',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '3 June - 6 June 2024',
    },
    { 
        slug: 'chrp-10-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resource Professional',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '10 June - 13 June 2024',
    },
    { 
        slug: 'chrp-24-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resource Professional',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '24 June - 27 June 2024',
    },
    { 
        slug: 'chrs-4-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resources Supervisor',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '4 June - 6 June 2024',
    },
    { 
        slug: 'chrs-11-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resources Supervisor',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '11 June - 13 June 2024',
    },
    { 
        slug: 'chrs-25-june',
        category: 'Double Degree Program',
        name: 'Certified Human Resources Supervisor',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '25 June - 27 June 2024',
    },
    {
        slug: 'hrs-7-may',
        category: 'BNSP Program',
        name: 'HR STAFF',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '7 May - 9 May 2024',
    },
    {
        slug: 'hrs-14-may',
        category: 'BNSP Program',
        name: 'HR STAFF',
        linkUrl: '/',
        duration: '3 day (6-7 hrs)',
        date: '14 May - 16 May 2024',
    },
];

export { workshopData };
