export const navigations = [
  {
    name: "Services",
    children: [
      {
        name: "Service 1",
        children: [
          {
            name: "Service 1.1",
            path: "#",
          },
          {
            name: "Service 1.2",
            path: "#",
          },
        ],
      },
      {
        name: "Service 2",
        children: [
          {
            name: "Service 1.1",
            path: "#",
          },
        ],
      },
      {
        name: "Service 3",
        path: "#",
      },
    ],
  },
  {
    name: "Resources",
    path: "#",
  },
  {
    name: "Success Story",
    path: "/about",
  },
  {
    name: "Issues",
    path: '#'
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "About Us",
    children: [
      {
        name: "Company",
        path: "/about-us/company",
      },
      {
        name: "Contact Us",
        path: "/about-us/contact-us",
      },
    ],
  },
];
