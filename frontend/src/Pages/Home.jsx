import React, { useState, useEffect } from "react";
import Doctor1 from "../assets/abroad.jpeg";
import Doctor2 from "../assets/ielts.jpeg";
import Doctor3 from "../assets/doctor1.jpeg";
import Doctor4 from "../assets/doctor2.jpeg";
import Doctor5 from "../assets/toefll.jpeg";
import Doctor10 from "../assets/doctor3.jpeg";
import Doctor6 from "../assets/doctor4.jpeg";
import Doctor8 from "../assets/ieltsss.jpeg";
import Doctor9 from "../assets/listning.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import directorImage from "../assets/sir.jpeg"
import IELTSH from "../assets/ieltsh.jpeg";
import TOEFLH from "../assets/toeflh.jpeg";
import Reading from "../assets/reading.jpeg";
import Writting from "../assets/writting.jpeg";
import Listning from "../assets/listning.jpeg";
import Speaking from "../assets/speaking.jpeg";

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0); // State for managing current banner

  // Static values for student counseled, courses, and universities
  const targetStudentCounseled = 1200;
  const targetCourses = 100;
  const targetUniversities = 50;

  // States to store the animated values
  const [studentCounseled, setStudentCounseled] = useState(0);
  const [courses, setCourses] = useState(0);
  const [universities, setUniversities] = useState(0);

  // Array of banners with their respective images, titles, descriptions, and buttons
  const banners = [
    {
      image: Doctor1,
      title: "Simplifying Your Journey to",
      subtitle: "Study-Work Abroad",
      description: "Discover courses & universities abroad and connect with students studying there!",
      buttonText: "Explore Now",
      link: "/studyabroad" // Link for the button
    },
    {
      image: Doctor2,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor3,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor4,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor5,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor10,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor6,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor8,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    },
    {
      image: Doctor4,
      title: "Achieve Your Dream Score with",
      subtitle: "IELTS Preparation",
      description: "Get expert guidance and practice material for your IELTS exam preparation!",
      buttonText: "Get Started"
    }
  ];
  // Function to handle the next banner
const nextBanner = () => {
  setCurrentBanner((prev) => (prev + 1) % banners.length);
};

// Function to handle the previous banner
const prevBanner = () => {
  setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
};

// Function to animate the numbers
const animateNumbers = () => {
  let studentCounter = 0;
  let coursesCounter = 0;
  let universitiesCounter = 0;

  const interval = setInterval(() => {
    if (studentCounter < targetStudentCounseled) {
      studentCounter += 1;
      setStudentCounseled(studentCounter);
    }
    if (coursesCounter < targetCourses) {
      coursesCounter += 1;
      setCourses(coursesCounter);
    }
    if (universitiesCounter < targetUniversities) {
      universitiesCounter += 1;
      setUniversities(universitiesCounter);
    }

    if (studentCounter >= targetStudentCounseled && coursesCounter >= targetCourses && universitiesCounter >= targetUniversities) {
      clearInterval(interval);
    }
  }, 50);
};

// useEffect to trigger animation once on page load and banner rotation
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, 4000);

  animateNumbers();

  return () => clearInterval(interval);
}, []);


  return (
    <div className="outer-container">
      <div className="relative overflow-hidden">
  {/* Banner Container */}
  









  <div className="banner-container">
  {currentBanner === 0 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[0].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{banners[0].title}</h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600">{banners[0].subtitle}</h1>
        <p className="text-sm sm:text-base md:text-lg mt-4">{banners[0].description}</p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl">{studentCounseled}</h1>
            <h1 className="font-bold text-sm">Students Counseled</h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl">{courses}+</h1>
            <h1 className="font-bold text-sm">Courses</h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl">{universities}+</h1>
            <h1 className="font-bold text-sm">Universities</h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>

{/* Banner 2 */}
<div className="banner-container">
  {currentBanner === 1 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[1].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>

{/* Banner 3 */}
<div className="banner-container">
  {currentBanner === 2 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[2].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>

{/* Banner 4 */}
<div className="banner-container">
  {currentBanner === 3 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[3].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


{/* Banner 5 */}
<div className="banner-container">
  {currentBanner === 4 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[4].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


{/* Banner 6 */}
<div className="banner-container">
  {currentBanner === 5 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[5].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm">Courses</h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


{/* Banner 7 */}
<div className="banner-container">
  {currentBanner === 6 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[6].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


{/* Banner 8 */}
<div className="banner-container">
  {currentBanner === 7 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[7].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>


{/* Banner 9 */}
<div className="banner-container">
  {currentBanner === 8 && (
    <div className="relative">
      <div
        className="w-full h-64 sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banners[8].image})` }}
      >
        {/* Banner image for small screens */}
      </div>
      <div className="absolute w-full px-4 sm:px-20 bottom-10 sm:bottom-20 text-center md:text-right text-white sm:mt-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"></h1>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4 text-red-600"></h1>
        <p className="text-sm sm:text-base md:text-lg mt-4"></p>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
          <div className="text-center">
            <h1 className="text-red-600 font-bold text-lg sm:text-xl md:text-2xl"></h1>
            <h1 className="font-bold text-sm"></h1>
          </div>
        </div>
        <div className="mt-6">
          <Link to={banners[0].link}>
            <button className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg">
              {banners[0].buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )}
</div>



















  

  {/* Navigation Arrows */}
  <div className="arrow-buttons">
    <button
      onClick={prevBanner}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
    >
      <FaArrowLeft size={20} />
    </button>
    <button
      onClick={nextBanner}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"
    >
      <FaArrowRight size={20} />
    </button>
  </div>
</div>

      {/* New Text Section Below the Banner */}
      <div className="mt-0 p-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800">STRUCTURE</h2>
        <div>
  
  {/* Box Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 shadow">
    {/* Left Box (Blue) */}
    <div
      className="p-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">IELTS Characteristics</h2>
      <p className="mt-4">
        IELTS Academic and IELTS General Training are designed to cover the full range of ability from non-user to expert user. The Academic version is for test takers who want…
      </p>
    </div>

    {/* Middle Box (Red) */}
    <div
      className="p-6 bg-red-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-red-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">IELTS Test Structure</h2>
      <p className="mt-4">
        Modules There are two modules of the IELTS: Academic Module and General Training Module There’s also a separate test offered by the IELTS test partners, called IELTS Life Skills:…
      </p>
    </div>

    {/* Right Box (Blue) */}
    <div
      className="p-6 bg-blue-500 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
      onClick={() => window.location.href = "/ielts"}
    >
      <h2 className="text-xl font-semibold">4 Parts of IELTS Test</h2>
      <p className="mt-4">
        The four parts of the IELTS test Listening: 30 minutes (plus 10 minutes’ transfer time) Reading: 60 minutes Writing: 60 minutes Speaking: 11–14 minutes The test total time is:…
      </p>
    </div>
    </div>


























  
  <div className="flex justify-center mt-16">
  <div className="max-w-6xl w-full bg-red-500 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
    {/* Director Image on the Top (For Mobile) */}
    <div className="w-full md:w-1/2 p-6">
      <img
        src={directorImage}
        alt="Director"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Message on the Bottom (For Mobile) */}
    <div className="w-full md:w-1/2 p-6 mt-6 md:mt-0">
      <h2 className="text-4xl font-bold text-white">Message From Director</h2>
      <p className="mt-6 text-xl text-white">
        "Hi, my name is Irwin (Bobby Sir), I’m your IELTS teacher and the writer of this website. My aim is to help you understand IELTS and TOEFL, Work Abroad and to score high. I have an experience of 20 years in teaching IELTS and TOEFL. I have completed my Training of teaching IELTS and TOEFL with the British Council (United Kingdom) and ETS (Education Testing Services, USA). I am also a nodal partner with IDP Australia."
      </p>
    </div>
  </div>
</div>
























<div className="mt-0 p-8 bg-gray-100">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Academic Departments</h1>
  <div className="flex flex-col md:flex-row items-center justify-center gap-12">

    {/* IELTS Section */}
    <div className="relative group w-full md:w-1/2">
      <img
        className="w-full h-72 md:h-96 object-cover rounded-xl border-4 border-red-600 group-hover:scale-105 transition-transform duration-500"
        src={IELTSH}
        alt="IELTS Program"
        onClick={() => window.location.href = "/ielts"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-4 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-2">IELTS Program</h2>
        <p className="text-sm text-white">
          Elevate your English skills and achieve excellence with our tailored IELTS program. 
          Our comprehensive curriculum focuses on all four modules: Listening, Reading, Writing, and Speaking, 
          ensuring you develop the confidence and expertise to excel in the test. Led by experienced instructors 
          and equipped with cutting-edge resources, our program empowers you to secure high scores and unlock 
          global opportunities in academics and beyond.
        </p>
      </div>
    </div>

    {/* TOEFL Section */}
    <div className="relative group w-full md:w-1/2">
      <img
        className="w-full h-72 md:h-96 object-cover rounded-xl border-4 border-red-600 group-hover:scale-105 transition-transform duration-500"
        src={TOEFLH}
        alt="TOEFL Program"
        onClick={() => window.location.href = "/toefl"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-4 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-2">TOEFL Program</h2>
        <p className="text-sm text-white">
          Prepare for global success with our dedicated TOEFL program, meticulously designed to enhance 
          your English language proficiency. Whether it’s academic excellence or professional growth, 
          our course offers in-depth training in reading, listening, speaking, and writing skills. 
          Learn from industry experts, practice with real-world scenarios, and access interactive tools 
          that help you achieve outstanding results and broaden your horizons.
        </p>
      </div>
    </div>

  </div>
</div>


















<div className="p-8 bg-gray-100">
  <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">OUR COURSES</h1>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* IELTS Listening */}
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        src={Listning} 
        alt="IELTS Listening" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">IELTS Listening</h2>
        <p className="text-sm text-gray-600">
          The Listening test takes around 30 minutes. There are 40 questions divided into four sections. The test is recorded on a CD and played only ONCE.
        </p>
        <button onClick={() => window.location.href = "/ielts"}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* IELTS Reading */}
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        src={Reading} 
        alt="IELTS Reading" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">IELTS Reading</h2>
        <p className="text-sm text-gray-600">
          The Reading test lasts 60 minutes and includes three or four passages of increasing difficulty. It's the second part of the IELTS exam.
        </p>
        <button onClick={() => window.location.href = "/ielts"}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* IELTS Speaking */}
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        src={Speaking} 
        alt="IELTS Speaking" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">IELTS Speaking</h2>
        <p className="text-sm text-gray-600">
          The Speaking Module is a face-to-face interview with an examiner. It includes three parts: introduction, long turn, and discussion.
        </p>
        <button onClick={() => window.location.href = "/ielts"}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* IELTS Writing */}
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        src={Writting} 
        alt="IELTS Writing" 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">IELTS Writing</h2>
        <p className="text-sm text-gray-600">
          This section assesses your writing skills in two tasks. Learn how to structure essays and describe data for high-scoring responses.
        </p>
        <button onClick={() => window.location.href = "/ielts"}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>



</div>

      </div>
      
    </div>
    
  );
};

export default Home;
