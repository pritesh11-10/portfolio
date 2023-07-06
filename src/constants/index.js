import {
    mobile,
    backend,
    creator,
    web,
    java,
    javascript,
    typescript,
    html,
    csharp,
    reactjs,
    next,
    tailwind,
    mongodb,
    git,
    tu,
    acc,
    sdsu,
    calculator,
    carrent,
    python,
    springBoot,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Backend Engineer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
    {
      title: "React JS, Next JS Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Spring Boot",
      icon: springBoot,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "TransUnion",
      icon: tu,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2022",
      points: [
        "Developed back-end services using C# programming to reduce 120 minutes of weekly manual efforts for processing consumer data.",
        "Generated Splunk Search Processing language queries, reports and dashboards using XML to improve search features.",
        "Developed REST APIs for CRUD operations on MYSQL database using Spring Data JPA.",
        "Executed a proof-of-concept that involved the storage of financial data from 35+ source systems onto Amazon S3. Built crawlers for each source system based on respective data frequency and utilized Amazon Glue catalog for storage.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Accenture",
      icon: acc,
      iconBg: "#E6DEDD",
      date: "Nov 2018 - Jun 2021",
      points: [
        "Developed an automated data load rule using JYTHON (Java implementation of Python) scripting and stored procedures, which reduced the monthly effort by 5-6 hours.",
        "As a part of platform modernization effort, revamped the UI from JSP to React JS which helped in improving developerturnaround time.",
        "Designed and executed testing strategies that decreased the load on the database by 40% and improved the efficiencyof queries for faster performance.",
        "Gained experience of various utilities like Tailwind CSS, Material UI along with React.",
        "Created REST APIs in Java Spring Boot MVC framework.",
      ],
    },
    {
      title: "Java Teaching Assistant",
      company_name: "San Diego State University",
      icon: sdsu,
      iconBg: "#383E56",
      date: "Aug 2021 - May 2023",
      points: [
        "Conducting weekly classes of 60 students by teaching them object-oriented programming principles in Java.",
        "Teaching the principles of design patterns, advanced topics like Stream API, Generics, Functional Programming and DSA.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "BookMyCar",
      description:
        "Replica of Web-based platform that allows users to search cars using various filters and deployed the application on Vercel",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NextJS",
          color: "white-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Basic calculator",
      description:
        "The Basic Calculator is a simple Windows Forms application written in C#. It allows users to perform basic arithmetic calculations such as addition, subtraction, multiplication, and division.",
      tags: [
        {
          name: "C#",
          color: "black-text-gradient",
        },
        {
          name: ".NET framework",
          color: "white-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };