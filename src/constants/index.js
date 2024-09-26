import weatherReport from '../assets/projects/weather report.png';
import weather from '../assets/projects/weather.png';
import weatherApp from '../assets/projects/weatherApp.jpg';
import voiceAssist from '../assets/projects/virtualAssist.jpg'
import voiceAssist2 from '../assets/projects/ai.jpg';
import GoCab1 from '../assets/projects/gocab1 (1).png'
import GoCab2 from '../assets/projects/gocab1 (2).png'
import GoCab3 from '../assets/projects/gocab1 (3).png'
import chatapp1 from '../assets/projects/chatapp1.png'
import chatapp2 from '../assets/projects/chatapp2.png'
import social1 from '../assets/projects/Social (1).png'
import social2 from '../assets/projects/Social (2).png'
import social3 from '../assets/projects/Social (3).png'


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. As a fresher, I have honed my skills in front-end technologies like React, along with back-end technologies including Node.js, MySQL, PostgreSQL, MongoDB, Django, SQLite, and REST framework. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_HEAD = `Empowering innovation through creativity, expertise, and a passion for excellence, we specialize in crafting solutions that redefine possibilities and inspire success.`

export const ABOUT_TEXT = `Driven by a relentless passion for technology and a profound fascination with cars and bikes, I am a Harsh ,a computer engineering student on a mission to innovate and inspire. With a solid foundation in computer languages and a portfolio of projects that showcase my technical prowess, I am poised to carve a niche in the entrepreneurial world. My journey is fueled by a commitment to excellence and a thirst for knowledge that extends beyond the boundaries of my field. I am eager to explore new frontiers, harnessing my skills to create groundbreaking solutions that redefine the automotive and tech industries. Join me on this exhilarating journey as we accelerate towards a future where innovation knows no limits.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "GoCab : Cab booking system",
    image: [GoCab2, GoCab1, GoCab3],
    description:
      `GoCab: Your Ride, Your Way is a cutting-edge cab booking system designed to offer a seamless and personalized transportation experience. At the heart of GoCab is a user-friendly ride booking system that integrates Google Maps for precise navigation and route directions, ensuring that riders always take the best possible path to their destination. Riders can easily book a cab, track their routes in real time, and access a **"My Trips"** section that keeps a record of all their past rides for easy reference.

On the other side, GoCab offers a robust **driver platform**, allowing individuals to earn money by driving for GoCab. Drivers can join the system, accept rides, and use Google Maps to efficiently navigate while earning competitive rates. GoCab empowers drivers by providing them with flexible earning opportunities while maintaining a high standard of service for riders. It's more than just a cab service—it's your ride, your way!`,
    technologies: ["HTML", "CSS", "React", 'Bootstrap', "Python", "Django", 'Sqlite'],
  },
  {
    title: "InstaGlimpse : a Social Media Platform",
    image: [social1, social2, social3],
    description:
      `InstaGlimpse is a dynamic social media platform inspired by the best of Instagram and VSCO, designed to offer users a sleek and engaging experience. InstaGlimpse allows users to create and share posts, browse through a personalized home feed, and discover new content through the **Explore** section. With features like **Find People**, users can easily connect with others, while the **Edit Profile** and **Save Posts** functions provide a customizable and organized user experience.

The platform also includes a secure **authentication system**, powered by JWT (JSON Web Token) and Axios, ensuring that user data is protected, and access to the platform remains seamless. Whether you're posting snapshots, exploring new trends, or managing your profile, InstaGlimpse offers a full-featured, immersive social media experience!`,
    technologies: ["HTML", "CSS", 'React', 'Tailwind', "Python", "Django", 'Sqlite'],
  },
  {
    title: "Weather Report Web",
    image: [weatherReport, weatherApp, weather],
    description:
      `In our project to develop a live weather report application, I played a crucial role as a developer and systems integrator. My main responsibility involved designing and implementing the backend infrastructure to fetch live weather data from diverse sources and ensure its accurate display on the frontend.

Collaborating closely with a multidisciplinary team was essential to achieving our goal of creating a reliable weather reporting system. This team included frontend developers who crafted an intuitive user interface, UX/UI designers who ensured user-friendliness, and data analysts who helped interpret and present weather data effectively.

Throughout the project, I focused on enhancing my programming skills, particularly in backend development and API integration. Challenges included optimizing data retrieval for real-time updates and managing various data formats from multiple weather APIs. Working through these challenges with the team not only contributed to successfully implementing the project but also honed my problem-solving abilities and teamwork skills.`,
    technologies: ["HTML", "CSS", "Bootstrap", 'Vanilla js'],
  },
  {
    title: "Voice Assistant using Python",
    image: [voiceAssist, voiceAssist2],
    description:
      "In the Voice Assistant project for controlling various devices using voice commands, I played a major role as the lead developer. I collaborated closely with a multidisciplinary team, including UI/UX designers to create an intuitive interface, data scientists to enhance natural language processing capabilities, and QA testers to ensure seamless functionality. My responsibilities involved integrating advanced speech recognition and natural language understanding features, and developing core functionalities to manage voice-activated controls. The project successfully delivered a robust voice assistant that significantly improved user interaction with smart home devices, leading to highly beneficial outcomes, including enhanced user satisfaction and increased efficiency in device management.",
    technologies: ["Python", "Python Libraries", 'Api'],
  },
  {
    title: "Chat Application",
    image: [chatapp1, chatapp2],
    description:
      `The Chant App is a real-time chat application built using Java Socket programming, offering seamless communication between users. It implements both a server and client system where users can connect, send, and receive messages instantly through Socket IO. The app facilitates smooth two-way communication, enabling users to chat effortlessly in real time.

To enhance the experience, the app integrates a database system using Java JDBC to store and retrieve chats. This ensures that users can save their conversations for future reference. The combination of Java Socket programming for communication and JDBC for chat persistence makes Chant App a reliable and efficient chat solution.`,
    technologies: ["Java", "Socket Programming", 'JDBC', 'PHP'],
  },
];

export const CONTACT = {
  address: "A/72 Anganvilla Society , Bareja , Ahmedabad , Gujarat , India - 382425",
  phoneNo: "+91 7016967945",
  email: "harshdsh777@gmail.com",
  secondaryEmail: 'harshvaghela289@gmail.com',
};
