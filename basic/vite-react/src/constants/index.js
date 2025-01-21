export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Prosper Marinda',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Tafadzwa was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Vuanza Roger',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Tafadzwa’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Tafadzwa. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Changamire Dombo',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Tafadzwa was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Cache Bank Business Landing Page',
      desc: "Cache Bank's landing page offers tailored banking solutions for software developers. It features a hero section highlighting key offerings, a section showcasing the bank's main features, endorsements from users, and basic information about the bank. The page encourages visitors to join Cache Bank and participate in their Discord community.",
      subdesc: 'Built with HTML, Tailwind CSS, and Google Fonts for custom typography and rapid, consistent UI design.',
      href: 'https://github.com/TafadzwaTG/SDF_Portfolio_Piece_TAFMUZ559_FTO2403_GroupA1_TAFADZWA-MUZAMINDO_SDF11',
      texture: '/textures/project/Cache Bank.jpg',
      logo: '/assets/cacheLogo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Google Fonts',
          path: '/assets/google-fonts.svg',
        },
      ],
    },
    {
      title: 'Kanban Task Management',
      desc: 'This application is designed to help users manage tasks through a Kanban-style interface, organizing tasks into columns based on their status (TODO, DOING, DONE). The main components include a navigation sidebar, a header with options for adding and editing tasks, and modals for creating and editing tasks.',
      subdesc: 'Built with HTML, CSS, Google Fonts for typography, and JavaScript for dynamic functions and interactions.',
      href: 'https://github.com/TafadzwaTG/JSL_Portfolio_Piece_TAFMUZ559_FTO2403_GroupA1_Tafadzwa-Muzamindo_JSL11',
      texture: '/textures/project/Agile Board.jpg',
      logo: '/assets/Agile BoardLogo.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.svg',
        },
      ],
    },

    {
      title: 'PodPulse: A Modern Podcast Application',
      desc: 'PodPulse is a feature-rich podcast application designed to elevate your listening experience. Built with cutting-edge technologies like React and Vite, PodPulse offers a sleek, responsive interface that empowers you to discover, manage, and enjoy your favorite podcasts with ease.',
      subdesc: 'Created by Tafadzwa Muzamindo using React, Vite, Tailwind CSS, and Heroicons for a modern and efficient development process.',
      href: 'https://github.com/TafadzwaTG/TAFMUZ559_FTO2403_GroupB1-Tafadzwa-Muzamindo_DJS11', 
      texture: '/textures/project/PodPulse.jpg', 
      logo: '/assets/PodPulseLogo.jpg', 
      logoStyle: {
        
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight3.png', 
      tags: [
        {
          id: 1,
          name: 'React',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Vite',
          path: '/assets/vite.svg',
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          path: '/assets/tailwind.svg',
        },
        {
          id: 4,
          name: 'Heroicons',
          path: '/assets/heroicons.svg',
        },
      ],
    },
    
  ];
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Freelance Projects',
      pos: 'Web Developer',
      duration: '2023 - Present',
      title: 'I am currently working on freelance projects where I apply the skills I have learned in front-end development. This includes working with HTML, CSS, JavaScript, and frameworks like React and Tailwind to create responsive, user-friendly websites.',
      icon: '/assets/freelance.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Omega Developers',
      pos: 'Junior Web Developer',
      duration: 'August 2024 - Present',
      title: 'As a Junior Web Developer at Omega Developers, I contribute to the creation of websites for small local businesses, focusing on front-end development using modern web technologies.',
      icon: '/assets/omega-developers.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Self-Taught Learning',
      pos: 'Web Developer Trainee',
      duration: '2022 - 2023',
      title: "I began my web development journey as a self-taught learner. Through online resources and hands-on projects, I gained proficiency in HTML, CSS, JavaScript, and React. My dedication to mastering web development led to my enrollment in a formal course.",
      icon: '/assets/self-taught.svg',
      animation: 'salute',
    },
  ];
  