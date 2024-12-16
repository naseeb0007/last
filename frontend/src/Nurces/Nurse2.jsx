import React, { useState } from 'react';
import Doctor4 from "../assets/doctor2.jpeg"; // Image for the banner

const Doctor2 = () => {
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    // Basic phone number validation (example: 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    setIsPhoneValid(phonePattern.test(value));
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full">
        <img src={Doctor4} alt="Doctor" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold"></h1>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Start Your Career as a Doctor Abroad</h2>
        <p className="mb-6">
          The role of a doctor is both rewarding and demanding. As healthcare continues to be a global priority, doctors are highly sought after 
          across various countries. Whether you’re looking for new career opportunities, greater professional growth, or the experience of living 
          in another country, practicing medicine abroad offers you the chance to grow as both a doctor and an individual. 
          The world is in need of skilled medical professionals, and this demand is only expected to increase in the coming years.
        </p>
        
        <h3 className="text-xl font-medium mb-4">Why Choose to Work as a Doctor Abroad?</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Global Opportunities: Doctors are in high demand worldwide. Whether in urban or rural settings, there are always healthcare positions available.</li>
          <li>Higher Salary: Many countries offer competitive salaries, bonuses, and other benefits to attract skilled doctors.</li>
          <li>Cultural Exchange: Working abroad provides an opportunity to explore new cultures, languages, and lifestyles, enhancing your personal and professional experience.</li>
          <li>Professional Development: Experience in diverse healthcare systems and new medical practices will expand your skills and make you a more well-rounded doctor.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">What You Need to Work as a Doctor Abroad</h3>
        <p className="mb-6">
          Before embarking on a career abroad, there are specific qualifications and documentation you will need, which vary from country to country. Some common requirements include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>A medical degree from an accredited institution.</li>
          <li>Medical license or certification in your home country.</li>
          <li>Proof of language proficiency, especially in countries where you will need to interact with patients and colleagues in the local language.</li>
          <li>Experience in the medical field, which could vary based on the job position you are applying for.</li>
          <li>Professional references and a clean background check, which may be requested by employers or immigration authorities.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">Top Destinations for Doctors Abroad</h3>
        <p className="mb-6">
          Countries with advanced healthcare systems and high demand for medical professionals are great destinations for doctors looking to work abroad.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>United States:</strong> The U.S. is a popular destination for doctors with a variety of specialties and a constant demand for skilled healthcare professionals.</li>
          <li><strong>United Kingdom:</strong> The NHS in the UK is one of the largest employers of doctors, with numerous opportunities across different specialties.</li>
          <li><strong>Australia:</strong> Known for its excellent healthcare system, Australia offers doctors great working conditions, good salaries, and a high quality of life.</li>
          <li><strong>Canada:</strong> With a shortage of doctors, Canada provides numerous opportunities for healthcare professionals with competitive pay and excellent work-life balance.</li>
          <li><strong>New Zealand:</strong> A peaceful and beautiful country with a high demand for healthcare professionals, making it an excellent choice for doctors looking for new opportunities.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">The Application Process</h3>
        <p className="mb-6">
          The application process for working as a doctor abroad can be quite detailed, but once you are familiar with it, the steps become much easier.
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li><strong>Research:</strong> Begin by researching which countries are in need of doctors and understand their specific requirements, which may vary significantly.</li>
          <li><strong>Prepare Your Documents:</strong> Gather your medical degree, licensure, experience certificates, language proficiency proof, and professional references.</li>
          <li><strong>Search for Job Opportunities:</strong> Check job listings on international medical job boards, recruitment agencies, or directly through hospitals or clinics.</li>
          <li><strong>Submit Your Application:</strong> Tailor your CV and cover letter to each job, highlighting your qualifications and experience that match the position.</li>
          <li><strong>Interview Process:</strong> After shortlisting, you will be invited for an interview. You should be ready to discuss your skills, experience, and motivation for working abroad.</li>
          <li><strong>Visa and Work Permit:</strong> Once hired, you will need to apply for a work visa and ensure you have all the legal documents to practice in the new country.</li>
        </ol>

        
      </div>
    </div>
  );
};

export default Doctor2;
