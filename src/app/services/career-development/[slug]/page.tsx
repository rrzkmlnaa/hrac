/* eslint-disable no-console */
// 'use client'

// import NotFound from '@/app/not-found';
// import { dummyData } from '@/views/services/career-development/components/SingleService';

// interface PropType {
//   slug: string;
//   imageUrl: string;
//   title: string;
//   description: string;
//   price: string;
//   tag?: string;
//   body?: string;
// }

// interface Query {
//   params: {
//     slug: string;
//   };
// }

// const CareerDevDetail = (query: Query) => {
//   const CareerDev: PropType | undefined = dummyData.find(
//     (item) => item.slug === query?.params?.slug
//   );

//   if (!CareerDev) {
//     return <NotFound />;
//   }

//   return CareerDev ? (
//     <>
//       {/* disini Memanggil file yang berbeda */}
//     </>
//   ) : (
//     <NotFound />
//   );
// };

// export default CareerDevDetail;


// pages/career-development/[slug].tsx

'use client';

import { useEffect, useState } from 'react';

import NotFound from '@/app/not-found';
import { dummyData } from '@/views/services/career-development/components/CareerDevelopment';

interface PropType {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  tag?: string;
  body?: string;
}

interface Query {
  params: {
    slug: string;
  };
}

const CareerDevDetail = ({ params }: Query) => {
  const { slug } = params;
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      const CareerDev: PropType | undefined = dummyData.find(
        (item) => item.slug === slug
      );

      if (!CareerDev) {
        setComponent(() => NotFound);
        return;
      }

      try {
        const loadedModule = await import(`@/views/services/career-development/slug/${CareerDev.slug}`);
        setComponent(() => loadedModule.default);
      } catch (error) {
        console.error(error);
        setComponent(() => NotFound);
      }
    };

    loadComponent();
  }, [slug]);

  if (!Component) {
    return <NotFound />;
  }

  return <Component />;
};

export default CareerDevDetail;
