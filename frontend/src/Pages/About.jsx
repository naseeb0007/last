import React, { useState } from "react";
import Sir from "../assets/sir.jpeg";
import { FaAward, FaGraduationCap, FaThumbsUp } from 'react-icons/fa';

function About() {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneChange = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);
    // Validate phone number (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Invalid phone number. Please enter a 10-digit number.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="container mx-auto my-12 p-4 space-y-9 w-full border-l-2 border-r-2 border-gray-300">
      {/* Sir's Image and Introduction */}
      <div className="flex flex-col items-center space-y-4">
        <img
          src={Sir}
          alt="Bobby Sir"
          className="w-40 h-40 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-2xl font-semibold text-center text-blue-600 animate__animated animate__fadeIn">
          Hi, my name is Irwin (Bobby Sir)
        </h2>
        <p className="text-lg text-center max-w-3xl text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          I am your IELTS teacher and the writer of this website. My aim is to help you understand IELTS and TOEFL and Work Abroad and to score high. I have an experience of 20 years in teaching IELTS and TOEFL. I have completed my Training of teaching IELTS and TOEFL with the British Council (United Kingdom) and ETS (Education Testing Services, USA). I am also a nodal partner with IDP Australia.
        </p>
      </div>

      {/* About Section */}
<h1 className="text-3xl font-bold text-center mb-6 text-pink-600 animate__animated animate__fadeIn animate__delay-1s">
  About Covenant Education Institute
</h1>
<p className="text-lg text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s">
  Welcome to
  <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
    Covenant Education Institute
  </strong>
  , a premier educational institution dedicated to empowering students with the skills and guidance needed to excel in international education. With a proven track record of success, we specialize in preparing students for standardized tests like IELTS and TOEFL, nurturing nurses for global opportunities, and facilitating study-abroad programs.
</p>

<p className="text-lg text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-2s">
  At Covenant Education Institute, we don't just teach, we inspire! We guide you through the complexities of international exams, helping you achieve a level of proficiency that opens doors to global opportunities. We pride ourselves on personalized coaching, flexible schedules, and a commitment to your success.
</p>

{/* Mission Section */}
<h2 className="font-semibold text-blue-800 text-xl animate__animated animate__fadeIn animate__delay-3s">Our Mission</h2>
<p className="text-lg text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-3s">
  At Covenant Education Institute, our mission is to provide exceptional training and support to students and professionals, helping them achieve their dreams of studying and working abroad. We aim to be a bridge between ambition and accomplishment, ensuring every student reaches their full potential.
</p>
<p className="text-lg text-gray-700 mb-4 animate__animated animate__fadeIn animate__delay-3s">
  We are committed to delivering world-class education and services, ensuring that our students are prepared for any academic challenges they may face. We have a dedicated team working round the clock to ensure your success.
</p>

{/* Why Choose Us Section */}
<h2 className="font-semibold text-blue-800 text-xl animate__animated animate__fadeIn animate__delay-4s">Why Choose Us?</h2>
<ul className="list-disc ml-6 space-y-2 text-gray-700 animate__animated animate__fadeIn animate__delay-4s">
  <li>
    <strong>Expert Training:</strong> Our experienced instructors deliver comprehensive training for IELTS and TOEFL, tailored to individual learning styles.
  </li>
  <li>
    <strong>Support for Nurses:</strong> We guide nurses through the preparation required to secure international healthcare opportunities.
  </li>
  <li>
    <strong>Study Abroad Guidance:</strong> Our counselors provide end-to-end assistance, from choosing the right course and university to securing visas and accommodation.
  </li>
  <li>
    <strong>Proven Success:</strong> Hundreds of students have achieved their goals with our structured programs and unwavering support.
  </li>
  <li>
    <strong>Personalized Approach:</strong> We understand each student’s unique needs, ensuring every lesson and piece of advice is tailored specifically to you.
  </li>
</ul>

      <div className="flex space-x-4 mt-6">
        <FaAward className="text-4xl text-yellow-500 animate__animated animate__bounceIn" />
        <FaGraduationCap className="text-4xl text-green-500 animate__animated animate__bounceIn animate__delay-1s" />
        <FaThumbsUp className="text-4xl text-blue-500 animate__animated animate__bounceIn animate__delay-2s" />
      </div>
    </div>
  );
}

export default About;
