import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaGithub 
  } from 'react-icons/fa';
  import { FiFileText, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpg';
  import Work2 from './assets/project-2.jpg';
  import Work3 from './assets/project-3.jpg';
  import Work4 from './assets/project-4.jpg';
  import Work5 from './assets/project-5.jpg';
  import Work6 from './assets/project-6.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Shami Kant',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Mourya',
    },
  
    {
      id: 3,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 4,
      title: 'LinkedIn : ',
      description: 'https://www.linkedin.com/in/shami-kant-mourya-a00a711b2',
    },
  
    {
      id: 5,
      title: 'Job availability : ',
      description: 'Open to work',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'New Delhi',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91-7372821936',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'Shamikant300@gmail.com',
    },
  
    {
      id: 9,
      title: 'Language : ',
      description: 'English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1',
      title: 'Year of <br /> Experience',
    },
  
    {
      id: 2,
      no: '10+',
      title: 'Completed <br /> Projects',
    },
  
    // {
    //   id: 3,
    //   no: '81+',
    //   title: 'Happy <br /> Customers',
    // },
  
    // {
    //   id: 4,
    //   no: '53+',
    //   title: ' Awards <br /> Won',
    // },
  ];
  
  export const resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: '2024 - PRESENT',
      title: 'Web Developer <span>Freelance</span>',
      desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
    },
  
    {
      id: 2,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Computer Science Engineering <span> Patel College of Science and Technology </span>',
      desc: 'Scored 8.21 CGPA',
    },
  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2019',
      title: 'Higher Secondary Education <span> Wazirganj College </span>',
      desc: 'Scored 80%',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016',
      title: 'Matriculation <span> Manav Bharti National School </span>',
      desc: 'Scored 8.4 CGPA',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'HTML5',
      percentage: '85',
    },
  
    {
      id: 2,
      title: 'JavaScript',
      percentage: '80',
    },
  
    {
      id: 3,
      title: 'CSS3',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'React JS',
      percentage: '80',
    },
  
    {
      id: 5,
      title: 'TypeScript',
      percentage: '60',
    },
  
    {
      id: 6,
      title: 'Express JS',
      percentage: '70',
    },
  
    {
      id: 7,
      title: 'MongoDB',
      percentage: '65',
    },
  
    {
      id: 8,
      title: 'Tailwind CSS',
      percentage: '75',
    },
    {
      id: 9,
      title: 'Redux toolkit',
      percentage: '75',
    },
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work2,
      title: 'Verma_Creations',
      details: [
        {
          icon: <FiFileText />,
          title: 'Verma_Creations : ',
          desc: 'Website for a signage boards manufacturing company located in New Delhi',
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://github.com/ShamiKantMourya/verma_creations',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Typescript, React JS, Tailwind CSS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://verma-creations.onrender.com/',
        },
      ],
    },
    {
      id: 2,
      img: Work1,
      title: 'Shopper Square',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'E-Commerce website',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS, Redux toolkit, Less',
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://github.com/ShamiKantMourya/shopper-square',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://shopper-square-2968b.web.app/',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Harmony_Of_Words',
      details: [
        {
          icon: <FiFileText />,
          title: 'Harmony_Of_Words : ',
          desc: `A website for people's who love to read and write poetry`,
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://github.com/ShamiKantMourya/Harmony_Of_Word',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS, Redux toolkit',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://harmony-of-words-ca3m.onrender.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: ' Food recipe store',
      details: [
        {
          icon: <FiFileText />,
          title: 'Food recipe store : ',
          desc: 'Website for online recipes book',
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://github.com/ShamiKantMourya/machine_coding_round_5',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS, Tailwind CSS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://onlinerecipebook.netlify.app/',
        },
      ],
    },
  
    {
      id: 5,
      img: Work6,
      title: 'Fitness Tracker',
      details: [
        {
          title: 'Fitness Tracker : ',
          desc: 'A fullstack website developed using Redux, Node JS, Express JS and MongoDB',
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://codesandbox.io/p/sandbox/fitness-tracker-lzkyjz?file=%2Fsrc%2Futils%2Fconstant.js',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'https://lzkyjz.csb.app/',
        },
      ],
    },
  
    {
      id: 6,
      img: Work5,
      title: 'Habit Tracker',
      details: [
        {
          icon: <FiFileText />,
          title: 'Habit Tracker : ',
          desc: 'Habit tracker website ',
        },
        {
          icon: <FaGithub />,
          title: 'Github : ',
          desc: 'https://github.com/ShamiKantMourya/habit_tracker',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Redux toolkit, SASS, React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://trackhabitz.netlify.app/',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  