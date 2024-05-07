'use client'

import { useEffect, useMemo,useState } from 'react';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

interface Workshop {
  name: string;
  linkUrl: string;
  duration: string;
  date: string;
  category: string;
}

interface TableProps {
  data: Workshop[];
}

const WorkshopPage = ({ data }: TableProps) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Workshop</th>
          <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Duration</th>
          <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((table, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
            <td className="px-6 py-4 whitespace-nowrap text-center">
              <UnderlineLink href={table.linkUrl}>
                {table.name}
              </UnderlineLink>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{table.duration}</td>
            <td className="px-6 py-4 whitespace-nowrap text-center">{table.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const Table = () => {
  const data: Workshop[] = useMemo(() => [
    { category: 'Double Degree Program', name: 'Senior Professional Human Resource', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '6 May - 9 May 2024' },
    { category: 'Double Degree Program', name: 'Senior Professional Human Resource', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '13 May - 16 May 2024' },
    { category: 'Double Degree Program', name: 'Senior Professional Human Resource', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '27 May - 30 May 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resource Professional', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '3 June - 6 June 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resource Professional', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '10 June - 13 June 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resource Professional', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '24 June - 27 June 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resources Supervisor', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '4 June - 6 June 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resources Supervisor', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '11 June - 13 June 2024' },
    { category: 'Double Degree Program', name: 'Certified Human Resources Supervisor', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '25 June - 27 June 2024' },
    
    { category: 'BNSP Program', name: 'HR STAFF', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '7 May - 9 May 2024' },
    { category: 'BNSP Program', name: 'HR STAFF', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '14 May - 16 May 2024' },
    { category: 'BNSP Program', name: 'HR STAFF', linkUrl: '/', duration: '3 day (6-7 hrs)', date: '28 May - 30 May 2024' },
  ], []);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    setCategories(uniqueCategories);
    setSelectedCategory(uniqueCategories[0] || '');
  }, [data]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto w-full h-auto min-h-96 py-16">
      <div className="flex flex-wrap space-x-4 mb-6">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            className="px-4 rounded-xl"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <WorkshopPage data={data.filter(item => item.category === selectedCategory)} />
    </div>
  );
}

export default Table;
