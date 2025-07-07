// export const projectCards = [
//   {
//     title: "FoodMine",
//     type: "Full-Stack Web App",
//     status: "Featured",
//     description:
//       "A comprehensive food delivery platform featuring microservices architecture, real-time tracking, secure payments, and modern UI/UX design.",
//     stars: "45+",
//     users: "500+",
//     duration: "3 months",
//     technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "+4"],
//     demoUrl: "#", // replace with actual demo URL
//     codeUrl: "#", // replace with actual code URL
//   },
//   {
//     title: "ChatApp",
//     type: "Real-time Application",
//     status: "Featured",
//     description:
//       "Modern messaging application with WebSocket integration, theme customization, and secure authentication system.",
//     stars: "32+",
//     users: "200+",
//     duration: "2 months",
//     technologies: ["React.js", "Node.js", "Socket.io", "Redux Toolkit", "+2"],
//     demoUrl: "#", // replace with actual demo URL
//     codeUrl: "#", // replace with actual code URL
//   },
//   {
//     title: "Portfolio Website",
//     type: "Frontend Showcase",
//     status: "",
//     description:
//       "Modern, responsive portfolio website showcasing development skills with smooth animations and professional design.",
//     stars: "28+",
//     users: "100+",
//     duration: "1 month",
//     technologies: ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
//     demoUrl: "#", // replace with actual demo URL
//     codeUrl: "#", // replace with actual code URL
//   },
// ];


export const  ProjectLinks = [
    {
      title: 'FoodMine',
      category: 'Full-Stack Web App',
      description: 'A comprehensive food delivery platform featuring microservices architecture, real-time tracking, secure payments, and modern UI/UX design.',
      longDescription: 'Built with clean architecture patterns, JWT authentication, PayPal gateway integration, Cloudinary for image management, and Leaflet for real-time restaurant tracking.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'PayPal API', 'Cloudinary', 'Leaflet'],
      liveDemo: 'https://foodmine-mernstack-js.onrender.com',
      github: '#',
    //  image: 'bg-gradient-to-br from-orange-400/20 to-red-500/20',
     image: '/ProjectImages/FoodMenu-Img.png',
      stats: {
        stars: '45+',
        users: '500+',
        duration: '3 months'
      },
      featured: true
    },
    {
      title: 'ChatApp',
      category: 'Real-time Application',
      description: 'Modern messaging application with WebSocket integration, theme customization, and secure authentication system.',
      longDescription: 'Features microservices architecture, real-time WebSocket communication, Redux Toolkit for state management, and comprehensive JWT-based security.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'Redux Toolkit', 'JWT', 'MongoDB'],
      liveDemo: 'https://chatapp-tqwn.onrender.com',
      github: '#',
      image: '/ProjectImages/ChatApp.png',
      stats: {
        stars: '32+',
        users: '200+',
        duration: '2 months'
      },
      featured: true
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend Showcase',
      description: 'Modern, responsive portfolio website showcasing development skills with smooth animations and professional design.',
      longDescription: 'Built with modern React patterns, Tailwind CSS for styling, TypeScript for type safety, and optimized for performance and SEO.',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
      liveDemo: '#',
      github: '#',
      image: 'bg-gradient-to-br from-teal-400/20 to-blue-500/20',
      stats: {
        stars: '28+',
        users: '100+',
        duration: '1 month'
      },
      featured: false
    }
  ];
