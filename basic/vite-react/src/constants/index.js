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
        position: 'Owner of Prosper Hauling Services',
        img: 'assets/prosper.jpg',
        review:
          'Tafadzwa helped us create a clean and functional website for our truck rental business. Highly recommend him!',
      },
      {
        id: 2,
        name: 'Vuanza Roger',
        position: 'Independent Artist',
        img: 'assets/roger.jpg',
        review:
          'Tafadzwa designed a modern and professional website to showcase my music. Great work!',
      },
      {
        id: 3,
        name: 'Samuel Muzamindo',
        position: 'Owner of Clear-Site',
        img: 'assets/Samuel.jpg',
        review:
          'Tafadzwa created a user-friendly website for my Clear-Site DSTV business. Very reliable and skilled!',
      },
      {
        id: 4,
        name: 'Irvyn Jonasi',
        position: 'Owner of Jack of All Trades',
        img: 'assets/Irvyn.jpg',
        review:
          'Tafadzwa built a great website for our Jack of All Trades rental business. Highly recommend his services!',
      },

      {
        id: 5,
        name: 'Mergy Machuma',
        position: 'Owner, Mergy’s Kitchen',
        img: 'assets/mergy.jpg',
        
        review:
          'Tafadzwa built a great website for Mergy’s Kitchen. Highly recommend his services!',
      },
      
    ];
    
  
  export const myProjects = [
    {
      title: 'Cache Bank Business Landing Page',
      desc: "Cache Bank's landing page offers tailored banking solutions for software developers. It features a hero section highlighting key offerings, a section showcasing the bank's main features, endorsements from users, and basic information about the bank. The page encourages visitors to join Cache Bank and participate in their Discord community.",
      subdesc: 'Built with HTML, Tailwind CSS, and Google Fonts.',
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
          path: '/assets/html5.svg',
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
      subdesc: 'Built with HTML, CSS, Google Fonts , and JavaScript .',
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
        {
          id: 4,
          name: 'Google Fonts',
          path: '/assets/google-fonts.svg',
        },
      ],
    },

    {
      title: 'PodPulse: A Modern Podcast Application',
      desc: 'PodPulse is a feature-rich podcast application designed to elevate your listening experience. Built with cutting-edge technologies like React and Vite, PodPulse offers a sleek, responsive interface that empowers you to discover, manage, and enjoy your favorite podcasts with ease.',
      subdesc: 'Created using React, Vite, Tailwind CSS, and Heroicons.',
      href: 'https://github.com/TafadzwaTG/TAFMUZ559_FTO2403_GroupB1-Tafadzwa-Muzamindo_DJS11', 
      texture: '/textures/project/pod.png', 
      logo: '/assets/podP.jpg', 
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
          path: '/assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Heroicons',
          path: '/assets/heroicon.png',
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
      duration: '2024 - Present',
      title: 'I am currently working on freelance projects where I apply the skills I learned during my coding course at Codespace. This includes creating responsive, user-friendly websites using HTML, CSS, JavaScript, and React.',
      icon: '/assets/workspace.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Omega Developers',
      pos: 'Junior Web Developer',
      duration: '2024 - Present',
      title: 'As a Junior Web Developer at Omega Developers, I contribute to building websites for small local businesses. My focus is on crafting responsive and user-friendly front-end solutions using React and Tailwind.',
      icon: '/assets/omega.jpeg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Codespace',
      pos: 'Web Development Student',
      duration: '2023 - 2024',
      title: 'I completed my web development course at Codespace, where I gained practical experience in front-end development. The course covered HTML, CSS, JavaScript, React, and other modern web technologies.',
      icon: '/assets/codespace.jpg',
      animation: 'salute',
    },
  ];
  