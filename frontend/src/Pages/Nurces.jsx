import React from 'react';
import Nurse from "../assets/nurse.jpeg";
import Abroad from "../assets/nursee.jpeg"; 
import Nursee from "../assets/nurseee.jpeg";
import Doctor from "../assets/doctor.jpeg";
import Alied from "../assets/alied.jpeg";
import Astrelia from "../assets/austrelia.jpeg"; 
import Canada from "../assets/canada.jpeg"; 
import Germany from "../assets/germany.jpeg"; 
import Italy from "../assets/italy.jpeg"; 
import NewZealand from "../assets/newzealand.jpeg"; 
import UK from "../assets/uk.jpeg"; 
import US from "../assets/us.jpeg"; 

const Nurces = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Banner Section */}
<div className="w-full h-64 sm:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Abroad})` }}>
  {/* For large devices, keep the text positioned at the bottom of the banner */}
  <div className="absolute inset-x-0 bottom-0 p-6 rounded-lg text-white bg-opacity-70 transition-all duration-500 hover:bg-opacity-90 transform hover:scale-105 hidden md:block">
    <h2 className="text-3xl font-bold text-yellow-400 animate__animated animate__fadeIn animate__delay-7s">
      If you are a Registered nurse contact us today
    </h2>
    <p className="text-lg mt-4 animate__animated animate__fadeIn animate__delay-8s">
      We offer personalized counseling services for students seeking to study abroad in top universities worldwide. Let us guide you through the entire process – from course selection to visa applications.
    </p>
  </div>
</div>

{/* Text below the banner for phones */}
<div className="md:hidden p-6 text-center bg-gray-800 text-white">
  <h2 className="text-2xl font-bold text-yellow-400">
    If you are a Registered nurse contact us today
  </h2>
  <p className="text-lg mt-4">
    We offer personalized counseling services for students seeking to study abroad in top universities worldwide. Let us guide you through the entire process – from course selection to visa applications.
  </p>
</div>

      {/* View Current Vacancies Section */}
<div className="flex justify-center mt-10">
  <p className="text-5xl font-bold text-center text-red-600 transition-all duration-300 transform hover:scale-110">
    View Current Vacancies
  </p>
</div>

{/* Image Cards Section */}
<div className="flex flex-wrap justify-center mt-10 space-x-8 gap-6 md:gap-8">
  {/* Nurse Card */}
  <div className="relative w-full sm:w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
    <img src={Nursee} alt="Nurse" className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-opacity-70 text-white rounded-lg text-center">
      <h3 className="text-3xl font-semibold text-red-600">Nurse</h3>
      <button onClick={() => window.location.href = "/job1"} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn More</button>
    </div>
  </div>

  {/* Doctor Card */}
  <div className="relative w-full sm:w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
    <img src={Doctor} alt="Doctor" className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-opacity-70 text-white rounded-lg text-center">
      <h3 className="text-3xl font-semibold text-red-600">Doctor</h3>
      <button onClick={() => window.location.href = "/job2"} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn More</button>
    </div>
  </div>

  {/* Allied Card */}
  <div className="relative w-full sm:w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
    <img src={Alied} alt="Allied" className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-4 bg-opacity-70 text-white rounded-lg text-center">
      <h3 className="text-3xl font-semibold text-red-600">Allied</h3>
      <button onClick={() => window.location.href = "/job3"} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn More</button>
    </div>
  </div>
</div>

      {/* Additional Content Section */}
      {/* Global Study Destination Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold">Which country is right for you?</h1>
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
      
    </div>
  );
};

export default Nurces;
