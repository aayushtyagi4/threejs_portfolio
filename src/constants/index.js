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
      namee: 'Anurag Pandey',
      position: 'Frontend Developer',
      img: 'assets/anurag.jfif',
      review:
        'Working with Aayush was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      namee: 'Anuj Rathore',
      position: 'Software Engineer at Paytm',
      img: 'assets/anuj.jfif',
      review:
        'Aayush expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site,  He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      namee: 'Ayush Choudary',
      position: 'Software Engineer at TCS ',
      img: 'assets/ayush.jfif',
      review:
        'I can’t say enough good things about Aayush. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      namee: 'Om Singal',
      position: 'Backend Developer At BlueInventTechnologies',
      img: 'assets/om.jfif',
      review:
        'Aayush was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Edtech Application',
      desc: 'An EdTech platform is a digital solution designed to enhance learning experiences by integrating technology with educational content, tools, and resources. This platform offers an interactive and accessible learning environment, allowing students, educators, and institutions to connect, share resources, and track progress efficiently.',
      subdesc:
        'Built as a Web application Frontend part is created through React.js and styling is apply using Tailwind CSS and backend is created using Express.js and database is connected with it is MongoDB. ',
      href: '',
      texture: '/textures/project/edtech.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Redux',
          path: '/assets/redux.png',
        },
        {
          id: 4,
          name: 'ExpressJs',
          path: '/assets/expressjs.png',
        },
        {
          id: 5,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
        {
          id: 6,
          name: 'Postman',
          path: '/assets/postman.png',
        },
        {
          id: 7,
          name: 'Figma',
          path: '/assets/figma.svg',
        },
      ],
    },
    {
      title: 'Shopping Cart App',
      desc: 'A responsive shopping cart app designed to simplify online purchases, enabling users to easily browse products, add items to their cart, and proceed to checkout.',
      subdesc:
        'Built with ReactJS for a dynamic user interface, Tailwind CSS for sleek, customizable styling, and Redux Toolkit for seamless state management, it ensures a fast, intuitive shopping experience.',
      href: 'https://grand-smakager-4c04c1.netlify.app/',
      texture: '/textures/project/shoping.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Redux',
          path: '/assets/redux.png',
        }
      ],
    },
    {
      title: 'Weather Application',
      desc: 'A weather application that provides real-time weather updates, forecasts, and detailed information on temperature, humidity, and wind conditions for any location. With an intuitive, user-friendly interface, it allows users to quickly check current conditions and plan ahead, offering a reliable resource for weather insights anytime, anywhere.',
      subdesc:
        'Built with JavaScript, HTML, and CSS, this weather application combines responsive design with powerful functionality. It uses fetch for seamless integration with OpenWeather API, ensuring accurate, real-time weather data updates. The interface is clean and easy to navigate, making it simple for users to check forecasts and plan ahead effectively.',
      href: 'https://venerable-sherbet-0a8bd2.netlify.app/',
      texture: '/textures/project/weather.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [


        {
          id: 1,
          name: 'Javascript',
          path: '/assets/javascript.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },

        {
          id: 3,
          name: 'Html',
          path: '/assets/Html.png',
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
      name: 'Applifics Solutions',
      pos: 'Software Engineer ',
      duration: 'August 2024 - Present',
      title: "I am currently working as a Software Engineer at Applifics Solutions, where I have hands-on experience with various web and mobile technologies. My role involves developing and implementing solutions that leverage my expertise in front-end and back-end development, along with mobile app frameworks. I am proficient in working with modern technologies to create responsive, user-friendly applications that meet diverse client needs.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Applogies technologies',
      pos: 'Web Developer',
      duration: 'April 2024 - May 2024',
      title: "During my internship, I had great opportunities to work on different frontend projects such adding catalog section in companey websites",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    }

  ];