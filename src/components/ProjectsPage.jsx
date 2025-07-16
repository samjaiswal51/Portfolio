import React from "react";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";

const ProjectsPage = () => {
  const projects = [
    
    {
      title: "Hotel The Heaven",
      description:
        "A visually appealing and fully responsive hotel website built with HTML, CSS, and JavaScript. It showcases elegant room listings, image galleries, a booking call-to-action section, and smooth navigation. Designed for modern hospitality businesses, the site provides a clean user interface and an immersive browsing experience.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/samjaiswal51/Hotel-The-Heaven",
      liveDemo: "https://hotel-the-heaven.vercel.app/",
      screenshots: [
        "/images/projects/hotel1.png",
        "/images/projects/hotel2.png",
        "/images/projects/hotel3.png",
        "/images/projects/hotel4.png",
        "/images/projects/hotel5.png",
      ],
    },

    {
      title: "Portfolio Website",
      description:
        "A personal developer portfolio showcasing skills, projects, certifications, and contact with a modern responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      githubLink: "https://github.com/samjaiswal51/Portfolio",
      liveDemo: "https://samarth-jaiswal-portfolio.vercel.app/",
      screenshots: [
        "/images/projects/screenshot1.png",
        "/images/projects/screenshot2.png",
      ],
    },

     {
      title: "Amazon Homepage Clone",
      description:
        "A responsive static clone of Amazon's homepage built using HTML and CSS, replicating the layout, navbar, product grid, and footer.",
      technologies: ["HTML5", "CSS3", "Font Awesome", "Google Fonts"],
      githubLink: "https://github.com/samjaiswal51/Amazon-Clone",
      liveDemo: "#",
      screenshots: [
        "/images/projects/amazon1.png",
        "/images/projects/amazon2.png",
      ],
    },

    
  ];

  const miniProjects = [
    {
      title: "Pawpal",
      githubLink: "https://github.com/samjaiswal51/Pawpal",
      image: "/images/mini/pawpal.png",
    },
    {
      title: "Spotify-clone",
      githubLink: "https://github.com/samjaiswal51/Spotify-Clone",
      image: "/images/projects/spotify1.png",
    },
    {
      title: "Calc-you-later",
      githubLink: "https://github.com/samjaiswal51/Calc-You-Later",
      image: "/images/mini/calc.png",
    },
  ];

  const certifications = [
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "July 2025",
      image: "/images/certificates/problem_solving_basic_hr.png",
      link: "#",
      description:
        "The bearer of this certificate has passed the HackerRank skill certification test for Problem Solving (Basic)",
      skills: ["Problem Solving", "Algorithms", "Data Structures"],
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "July 2025",
      image: "/images/certificates/java_basic_hr.png",
      link: "#",
      description:
        "The bearer of this certificate has passed the HackerRank skill certification test for Java (Basic)",
      skills: ["Java", "Basic Syntax", "OOP Concepts", "Data Structures"],
    },
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte (via Forage)",
      date: "July 2025",
      image: "/images/certificates/deloitte_jobsimulation.png",
      link: "#",
      description:
        "Completed practical tasks in coding and development through Deloitte's job simulation program",
      skills: [
        "Coding",
        "Software Development",
        "Problem Solving",
        "Technical Analysis",
      ],
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      date: "July 2025",
      image: "/images/certificates/python_basic_hr.png",
      link: "#",
      description:
        "The bearer of this certificate has passed the HackerRank skill certification test for Python (Basic)",
      skills: ["Python", "Basic Syntax"],
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
          background:
            "linear-gradient(45deg, #0b0b0b, #1a1a2e, #4a90e2, #0b0b0b)",
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 15s ease infinite",
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
              animation: `dotMove ${
                Math.random() * 3 + 2
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.7,
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
