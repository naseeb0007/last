import React, { useState, useEffect } from "react";
import Abroad from "../assets/abroad.jpeg"; 
import Astrelia from "../assets/austrelia.jpeg"; 
import Canada from "../assets/canada.jpeg"; 
import Germany from "../assets/germany.jpeg"; 
import Italy from "../assets/italy.jpeg"; 
import NewZealand from "../assets/newzealand.jpeg"; 
import UK from "../assets/uk.jpeg"; 
import US from "../assets/us.jpeg"; 
import map from "../assets/map.jpeg"; 
import { FaHeart, FaRegLightbulb, FaEye } from 'react-icons/fa';  // Replace FaMission with FaRegLightbulb
import Abouth from "../assets/abouth.jpeg";
 import { FaUserFriends, FaBookOpen, FaPassport, FaUniversity, FaCogs, FaBriefcase } from "react-icons/fa";

const StudyAbroad = () => {
  const [studentCounseled, setStudentCounseled] = useState(0);
  const [courses, setCourses] = useState(0);
  const [universities, setUniversities] = useState(0);

  useEffect(() => {
    const duration = 3000; // Duration for the animation (3 seconds)
    const incrementSpeed = 50; // Speed of increment in milliseconds

    const countUp = (targetValue, setterFunction) => {
      let currentValue = 0;
      const increment = targetValue / (duration / incrementSpeed);

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          clearInterval(interval);
          setterFunction(targetValue); // Set the final value
        } else {
          setterFunction(Math.floor(currentValue)); // Update the state
        }
      }, incrementSpeed);
    };

    countUp(33000, setStudentCounseled);
    countUp(61000, setCourses);
    countUp(3000, setUniversities);
  }, []);

  return (
    <div>
      {/* Full Banner Section */}
<div
  className="w-full h-64 sm:h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${Abroad})` }}
>
  {/* Text positioned below the image on small screens and at the bottom-right on medium and larger screens */}
  <div className="absolute bottom-20 md:bottom-40 right-0 md:right-20 p-6 rounded-lg text-white w-full md:w-auto">
    <h1 className="text-2xl font-bold text-center md:text-left">Simplifying Your Journey to</h1>
    <h1 className="text-3xl md:text-5xl font-bold mt-4 text-red-600 text-center md:text-left">Study-Work Abroad</h1>
    <p className="text-lg mt-4 text-center md:text-left">
      Discover courses & universities abroad and connect with students studying there!
    </p>
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mt-4 space-x-0 md:space-x-8">
      <div className="text-center md:text-left">
        <h1 className="text-red-600 font-bold text-2xl">{studentCounseled}</h1>
        <h1 className="font-bold">Student Counseled</h1>
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-red-600 font-bold text-2xl">{courses}+</h1>
        <h1 className="font-bold">Courses</h1>
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-red-600 font-bold text-2xl">{universities}+</h1>
        <h1 className="font-bold">Universities</h1>
      </div>
    </div>
  </div>
</div>

      
      {/* Global Study Destination Section */}
      <div className="text-center my-12">
        <h1 className="text-5xl font-bold">Global Study Destinations</h1>
      </div>

      {/* Country Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
        {[
          { image: Astrelia, name: "Australia" },
          { image: Canada, name: "Canada" },
          { image: Germany, name: "Germany" },
          { image: Italy, name: "Italy" },
          { image: NewZealand, name: "New Zealand" },
          { image: UK, name: "United Kingdom" },
          
        ].map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold">{country.name}</h2>
            </div>
            
          </div>
        ))}
      </div>
      <div className="text-center my-12">
  <h1 className="text-5xl font-bold">Our Global Presence</h1>
  <img src={map} alt="Global Map" className="mx-auto mt-8 w-full max-w-4xl" />
</div>
<div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">WHAT WE DO</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        We take pride in doing it all, from counseling to test preparations and immigration and visa services. 
        We also provide education loan assistance. Want to know more? Check detailed information about our Services.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Counseling */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaUserFriends className="text-red-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Counseling</h2>
          <p className="text-gray-600 mb-6">
            DHS offers personalized counseling services with one-on-one video sessions. 
            We counsel students within their interests and aptitude and suggest the best courses and universities that suit them.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn More</button>
        </div>

        {/* Card 2: Test Preparation */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaBookOpen className="text-blue-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Test Preparation</h2>
          <p className="text-gray-600 mb-6">
            We provide coaching for IELTS, TOEFL, PTE, GRE, and German language tests. 
            We work individually with students to ensure they score their best and get admitted to their desired universities.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Learn More</button>
        </div>

        {/* Card 3: Immigration & Visa Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaPassport className="text-green-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Immigration & Visa Services</h2>
          <p className="text-gray-600 mb-6">
            Visa/immigration processes can be time-consuming. 
            We provide visa assistance in India and manage visa applications for students.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Learn More</button>
        </div>

        {/* Card 4: Education Loan Assistance */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaUniversity className="text-yellow-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Education Loan Assistance</h2>
          <p className="text-gray-600 mb-6">
            Need financial help to study abroad? 
            We assist students in securing education loans with favorable terms and guide them through the process.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Learn More</button>
        </div>

        {/* Card 5: Other Optional Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaCogs className="text-purple-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Other Optional Services</h2>
          <p className="text-gray-600 mb-6">
            We offer optional services tailored to your needs. 
            These services are designed to be as commendable as our other offerings.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">Learn More</button>
        </div>

        {/* Card 6: 100% Job Guarantee */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <FaBriefcase className="text-orange-500 text-5xl" />
          </div>
          <h2 className="text-2xl font-bold mb-4">100% Job Guarantee</h2>
          <p className="text-gray-600 mb-6">
            We provide 100% job assurance for part-time and full-time roles, helping students secure job offers quickly.
          </p>
          <button onClick={() => window.location.href = "/contact"} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Learn More</button>
        </div>
      </div>
       </div>




       <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-10">
  {/* Left Section: Image */}
  <div className="w-full md:w-1/2">
    <img
      src={Abouth}  // Make sure the image path is correct
      alt="About DHS"
      className="w-full h-auto rounded-lg transform transition-all duration-300 hover:scale-105"
    />
  </div>

  {/* Right Section: Text and Icons */}
  <div className="w-full md:w-1/2 space-y-8">
    {/* About Section */}
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ABOUT BOBBY IELTS</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        You are our highest priority, and we consider the time and money one has to spend to study abroad. Therefore, our dedicated team is constantly working diligently to cater to our client's needs and necessities and provide them the best possible offer.
      </p>
    </div>

    {/* Mission Section */}
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
      <FaRegLightbulb size={60} className="text-3xl text-red-500 transition-transform transform duration-300 hover:rotate-12" />
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to provide the best, transparent, and top-notch services to our clients, with students getting admitted to the best universities and institutions based on their eligibility and career aspirations.
        </p>
      </div>
    </div>

    {/* Vision Section */}
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
      <FaEye size={60} className="text-3xl text-blue-500 transition-transform transform duration-300 hover:rotate-12" />
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-lg text-gray-600">
          Our vision is to be the most trusted partner in providing graduate and undergraduate students aspiring for higher education from the world's best institution or University.
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default StudyAbroad;
