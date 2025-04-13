import React from "react";
import {
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code2,
  GraduationCap,
  Award,
  BookOpen,
  Phone,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Kevin Kondhiya
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100"></p>
          <p className="text-lg md:text-xl mb-12 text-gray-200">
            Passionate about Web Development & Problem Solving
          </p>
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Kevinkondhiya"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Github size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/kevin-soni-aa361426a"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kevinkondhiya@gmail.com"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:9409410893"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Phone size={24} />
            </a>
          </div>
          {/* Download CV/Resume Button */}
          <div className="flex justify-center mb-16">
            <a
              href="/Assets/kevinkondhiya.pdf"
              download
              className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "auto",
              width: "auto",
            }}
          >
            <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} />
            </div>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <img
              src="/Assets/profillogo.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
            />
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
                Objective
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Aspiring software developer with a fresh perspective and strong
                foundation in Computer Science. Bringing expertise in modern web
                technologies, a keen eye for user experience, and an eagerness
                to contribute to innovative projects. Committed to continuous
                learning and ready to apply my technical skills while growing
                alongside experienced professionals in a dynamic team
                environment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Code2 size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Technical Skills
                </h3>
                <p className="text-gray-600">React, HTML/CSS</p>
                <p className="text-gray-500">Node.js-Express.js, PHP</p>
                <p className="text-gray-500">MongoDB, MySQL</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  <Lightbulb size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  Strengths
                </h3>
                <p className="text-gray-600">Adaptability</p>
                <p className="text-gray-600">Problem-solving</p>
                <p className="text-gray-500">Collaborative Team Player</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Projects Work{" "}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Assets/jomslogo.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  Joms
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  This project is a comprehensive solution designed to
                  streamline jewelry order management and customer
                  communication. The system enables users to efficiently track,
                  process, and manage customer orders on a centralized platform.
                </p>
                <p className="text-blue-600 mb-4 text-center">
                  HTML, Css, PHP, Javascript, MySQL
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Assets/mystore.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  My Store
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                The aim of this project is to develop a system that enables authenticated users to efficiently manage product categories and products. It includes secure user authentication, allowing users to add, update, delete, and view categories while assigning products to specific categories. The system integrates MySQL with Eloquent ORM for optimized database management and utilizes Blade templating for a dynamic and user-friendly interface.
                </p>
                <p className="text-blue-600 mb-4 text-center">
                  Laravel, PHP, MySQL
                </p>
              </div>
            </div> */}

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Assets/jimslogo.jpg"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  Jims
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  This project is a powerful solution designed to simplify and
                  streamline jewelry inventory management for businesses. It
                  provides an efficient way to track stock, handle product
                  information, and maintain accurate records
                </p>
                <p className="text-blue-600 mb-4 text-center">
                  Asp.Net, SQL Server, HTML, Css, Javascript
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Assets/urlwebsitelogo.jpg"
                alt="Project 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  Url Shortner
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  A web-based service designed to create shortened URLs that are
                  easy to share, manage, and analyze. This project simplifies
                  long and complex web links, making them more user-friendly for
                  sharing across social media, emails, and text messages.
                </p>
                <p className="text-blue-600 mb-4 text-center">
                  Express, EJS, MongoDB
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Assets/chatapp.jpg"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  ChatApp
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  This project is a dynamic and user-friendly group chat
                  platform designed for seamless real-time communication without
                  user login or registration. Simply accessing the shared URL
                  makes a user part of the conversation.
                </p>
                <p className="text-blue-600 mb-4 text-center">
                  Node.js, Express, HTML, Css, Javascript
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Get In Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/Kevinkondhiya"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="http://www.linkedin.com/in/kevin-soni-aa361426a"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mailto:kevinkondhiya@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Mail size={20} />
            </a>

            <a
              href="tel:9409410893"
              className="hover:text-gray-300 transition-colors"
              target="_blank"
            >
              <Phone size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © 2024 Kevin Kondhiya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
