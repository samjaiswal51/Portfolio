import React from 'react';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment gateway, admin dashboard, and product management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      liveDemo: "#",
      screenshots: [
        "/images/projects/ecommerce1.jpg",
        "/images/projects/ecommerce2.jpg",
        "/images/projects/ecommerce3.jpg",
        "/images/projects/ecommerce4.jpg"
      ]
    },
    {
      title: "Task Manager Pro",
      description: "Productivity app with drag-n-drop interface, real-time collaboration, and calendar integration.",
      technologies: ["React", "Firebase", "Redux"],
      githubLink: "#",
      liveDemo: "#",
      screenshots: [
        "/images/projects/taskmanager1.jpg",
        "/images/projects/taskmanager2.jpg",
        "/images/projects/taskmanager3.jpg"
      ]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting with interactive maps and 5-day predictions.",
      technologies: ["JavaScript", "API Integration", "CSS3"],
      githubLink: "#",
      liveDemo: "#",
      screenshots: [
        "/images/projects/weather1.jpg",
        "/images/projects/weather2.jpg"
      ]
    }
  ];

  const miniProjects = [
    { title: "Calculator App", githubLink: "#", image: "/images/mini-projects/mini1.jpg" },
    { title: "Quiz Game", githubLink: "#", image: "/images/mini-projects/mini2.jpg" },
    { title: "Recipe Finder", githubLink: "#", image: "/images/mini-projects/mini3.jpg" },
    { title: "Expense Tracker", githubLink: "#", image: "/images/mini-projects/mini4.jpg" },
    { title: "Memory Game", githubLink: "#", image: "/images/mini-projects/mini5.jpg" },
    { title: "Blog Template", githubLink: "#", image: "/images/mini-projects/mini6.jpg" }
  ];

 const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Meta (Coursera)",
      date: "June 2023",
      image: "/images/certificates/java_basic_hr.png",
      link: "#",
      description: "Advanced React concepts including hooks, context API, and performance optimization",
      skills: ["React", "Hooks", "Context API"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "/images/certificates/problem_solving_basic_hr.png",
      link: "#",
      description: "Fundamentals of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "/images/certificates/aws-cert.jpg",
      link: "#",
      description: "Fundamentals of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "/images/certificates/aws-cert.jpg",
      link: "#",
      description: "Fundamentals of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2023",
      image: "/images/certificates/aws-cert.jpg",
      link: "#",
      description: "Fundamentals of AWS cloud services and architecture",
      skills: ["AWS", "Cloud Computing", "EC2", "S3"]
    },
    // Add more certifications with similar structure
  ];

  return (
    <>
      {/* Projects Section */}
      <section 
        id="projects" 
        className="relative w-full min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(45deg, #0b0b0b, #1a1a2e, #4a90e2, #0b0b0b)',
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 15s ease infinite',
        }}
      >
        <style>
          {`
            @keyframes gradientAnimation {
              0% { background-position: 0% 0%; }
              50% { background-position: 100% 100%; }
              100% { background-position: 0% 0%; }
            }
            .wave-bg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, rgba(10, 10, 10, 0.8), rgba(26, 26, 46, 0.8));
              background-size: 200% 100%;
              animation: waveAnimation 8s linear infinite;
              z-index: 0;
            }
            @keyframes waveAnimation {
              0% { background-position: 0 0; }
              100% { background-position: 100% 0; }
            }
            @keyframes dotMove {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
          `}
        </style>

        {/* Background elements */}
        <div className="wave-bg"></div>
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="dot absolute bg-blue-400 rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `dotMove ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.7
            }}
          />
        ))}

        <div className="max-w-6xl w-full z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>

          <Projects projects={projects} miniProjects={miniProjects} />
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications certifications={certifications} />
    </>
  );
};

export default ProjectsPage;