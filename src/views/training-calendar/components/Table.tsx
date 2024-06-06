// 'use client'

// import { useEffect, useMemo, useState } from 'react';

// import Button from '@/components/buttons/Button';
// import UnderlineLink from '@/components/links/UnderlineLink';

// import { TrainingData } from '@/constant/index';

// interface Training {
//   slug: string;
//   name: string;
//   linkUrl: string;
//   duration: string;
//   date: string;
//   category: string;
//   detaiArticle?: { title: string; article: string }[];
// }

// interface TableProps {
//   data: Training[];
// }

// const WorkshopPage = ({ data }: TableProps) => {
//   return (
//     <div className="flex justify-start items-center overflow-x-scroll md:overflow-auto p-6 md:px-6 md:py-3">
//       <table className="min-w-full table-auto bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Workshop</th>
//             <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Duration</th>
//             <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((table, index) => (
//             <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
//               <td className="px-6 py-4 whitespace-nowrap text-center">
//                 <UnderlineLink href={`/training-calendar/${table.slug}`}>
//                   {table.name}
//                 </UnderlineLink>
//               </td>
//               <td className="px-6 py-4 whitespace-nowrap text-center">{table.duration}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-center">{table.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const Table = () => {
//   const data: Training[] = useMemo(() => TrainingData, []);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>('');

//   useEffect(() => {
//     const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
//     setCategories(uniqueCategories);
//     setSelectedCategory(uniqueCategories[0] || '');
//   }, [data]);

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="container mx-auto w-full h-auto min-h-96 py-16">
//       <div className="flex flex-wrap space-x-2  mb-6 px-6 xl:px-4">
//         {categories.map((category, index) => (
//           <Button
//             key={index}
//             variant={selectedCategory === category ? 'primary' : 'outline'}
//             className="px-4 rounded-xl"
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </Button>
//         ))}
//       </div>
//       <WorkshopPage data={data.filter(item => item.category === selectedCategory)} />
//     </div>
//   );
// }

// export default Table;


'use client'

import { useEffect, useMemo, useState } from 'react';

import Button from '@/components/buttons/Button';
import UnderlineLink from '@/components/links/UnderlineLink';

import { TrainingData } from '@/constant/index';

interface Training {
  slug: string;
  name: string;
  linkUrl: string;
  duration: string;
  date: string;
  category: string;
  detaiArticle?: { title: string; article: string }[];
}

interface TableProps {
  data: Training[];
  currentPage: number;
  itemsPerPage: number;
}

const WorkshopPage = ({ data, currentPage, itemsPerPage }: TableProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex justify-start items-center overflow-x-scroll md:overflow-auto p-6 md:px-6 md:py-3">
      <table className="min-w-full table-auto bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Workshop</th>
            <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Duration</th>
            <th className="px-6 py-3 text-center font-bold text-md text-gray-500 uppercase tracking-wider border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((table, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 border-b' : 'bg-white border-b'}>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <UnderlineLink href={`/training-calendar/${table.slug}`}>
                  {table.name}
                </UnderlineLink>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{table.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{table.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Table = () => {
  const data: Training[] = useMemo(() => TrainingData, []);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    setCategories(uniqueCategories);
    setSelectedCategory(uniqueCategories[0] || '');
  }, [data]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredData = data.filter(item => item.category === selectedCategory);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container mx-auto w-full h-auto min-h-96 py-16">
      <div className="flex flex-wrap space-x-2 mb-6 px-6 xl:px-4">
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
      <WorkshopPage data={filteredData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <div className="flex justify-center mt-6">
        <Button className='rounded-xl' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
        <span className="px-4 pt-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <Button className='rounded-xl' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </div>
  );
}

export default Table;
