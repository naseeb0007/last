import React, { useState } from 'react';
import Doctor3 from "../assets/doctor1.jpeg"; // Assuming this image is for the banner

const Nurce1 = () => {
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
        <img src={Doctor3} alt="Doctor" className="w-full h-auto object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold"></h1>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Start Your Career as a Nurse Abroad</h2>
        <p className="mb-6">
          Nursing is a fulfilling and noble profession that opens doors to a wide range of job opportunities worldwide. 
          If you have ever dreamt of working in healthcare across different countries, nursing offers you a chance to explore 
          and make a significant difference in patients' lives no matter where you are. With increasing demand for healthcare professionals globally, 
          nursing positions abroad provide a unique opportunity to grow both personally and professionally. 
          Whether you're interested in exploring a specific country or you want to immerse yourself in various cultures, a nursing career abroad is your chance to make 
          a mark in healthcare, experience new places, and expand your professional horizons.
        </p>
        
        <h3 className="text-xl font-medium mb-4">Why Choose Nursing Abroad?</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Competitive Salary: Many countries offer nurses lucrative pay compared to the domestic salaries, especially in regions with a nursing shortage.</li>
          <li>Travel and Adventure: Nursing abroad allows you to live and work in different parts of the world, experiencing new cultures, people, and places.</li>
          <li>International Experience: Working in diverse healthcare systems expands your knowledge and enhances your skills, opening doors for further job opportunities globally.</li>
          <li>Growth and Development Opportunities: You’ll have the opportunity to further your education and gain specialized skills while also making an impact in healthcare systems around the world.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">What You Need to Work as a Nurse Abroad</h3>
        <p className="mb-6">
          While the qualifications required to work as a nurse abroad can vary by country, there are several common requirements for international nurses. These include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>A registered nursing qualification (RN) from an accredited institution in your home country.</li>
          <li>Relevant nursing licenses, depending on the country you wish to work in. For example, in the United States, a passing score in the NCLEX-RN exam is required.</li>
          <li>Fluency in the language of the country you plan to work in. Many countries require nurses to have proficiency in their official language, especially in patient care settings.</li>
          <li>Experience in specific fields such as critical care, pediatric, emergency, or obstetrics nursing may be required, depending on the job or country.</li>
          <li>Professional references and a criminal background check from your home country, which may be requested by the employer or immigration authorities.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">Top Destinations for Nurses Abroad</h3>
        <p className="mb-6">
          If you're considering a nursing career abroad, some countries stand out for offering strong opportunities and excellent working conditions for nurses.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li><strong>United States:</strong> One of the top destinations for nurses due to high salaries, advanced medical technology, and a diverse healthcare system. The U.S. has a shortage of nurses, which means ample job opportunities for international nurses.</li>
          <li><strong>United Kingdom:</strong> The UK offers competitive salaries and benefits for nurses, along with opportunities to work in some of the most well-known hospitals in the world. The National Health Service (NHS) is one of the largest employers of nurses in the world.</li>
          <li><strong>Australia:</strong> Known for its excellent healthcare system and high demand for nurses, Australia is a popular destination for nurses. The country has a wide variety of nursing specialties and offers a high quality of life.</li>
          <li><strong>Canada:</strong> With a growing demand for healthcare professionals, Canada provides great opportunities for nurses. It also boasts an excellent work-life balance and competitive salaries.</li>
          <li><strong>New Zealand:</strong> Like Australia, New Zealand offers great work opportunities and a fantastic lifestyle. It has a shortage of healthcare workers, making it a great place for international nurses to gain employment.</li>
        </ul>

        <h3 className="text-xl font-medium mb-4">The Application Process</h3>
        <p className="mb-6">
          The process of applying for a nursing job abroad can seem complicated, but it becomes manageable once you break it down. 
          Here are the essential steps to take:
        </p>
        <ol className="list-decimal pl-6 mb-6">
          <li><strong>Research:</strong> Start by researching countries with a demand for nurses and figure out what qualifications and certifications are needed.</li>
          <li><strong>Prepare Your Documentation:</strong> This includes your nursing credentials, references, proof of language proficiency, and any certifications required by the country you're applying to.</li>
          <li><strong>Find Job Listings:</strong> Explore job boards, recruitment agencies, and healthcare institutions in the country you’re interested in. Many employers offer relocation assistance for international nurses.</li>
          <li><strong>Submit Your Application:</strong> Apply for jobs, ensuring you tailor your resume and cover letter to each position. Highlight your international experience, language skills, and certifications.</li>
          <li><strong>Complete Interviews:</strong> If your application is shortlisted, you’ll likely have an interview with the hospital or clinic. Be prepared to answer questions about your qualifications and your motivation for working abroad.</li>
          <li><strong>Secure a Visa:</strong> Once you’ve accepted a job offer, you’ll need to apply for a work visa or other necessary documentation. Make sure to check with the country's embassy for specific visa requirements for nurses.</li>
        </ol>

        <h3 className="text-xl font-medium mb-4">Phone Number Validation for Nurse Job Applications</h3>
        <p className="mb-6">
          To proceed with applying for nursing jobs abroad, you will be required to input your contact information, including a phone number, 
          for follow-up. Below, we provide a basic phone number validation process. While the phone number field won't be visible to you on the page, 
          please make sure your contact number follows a valid format for job applications. For instance, the number should be exactly 10 digits long 
          and free of any spaces or special characters, as only numbers are allowed for the contact details.
        </p>

        <form>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
            />
            {!isPhoneValid && <span className="text-red-500 text-sm mt-2 block">Please enter a valid phone number (10 digits).</span>}
          </div>
        </form>

      </div>
    </div>
  );
};

export default Nurce1;
