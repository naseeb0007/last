import React, { useState } from 'react';

const JobListing = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    experience: '',
    profession: '',
    jobType: '',
    industry: '',
    contractLength: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-lg p-10 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-10 animate__animated animate__fadeIn animate__delay-1s">
          Job Listing Form
        </h2>

        <form className="space-y-8">
          {/* Job Title */}
          <div>
            <label htmlFor="jobTitle" className="block text-xl font-semibold text-gray-700">
              What job are you looking for?
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter job title"
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-xl font-semibold text-gray-700">
              Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
              <option value="UK">UK</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Japan">Japan</option>
              <option value="South Korea">South Korea</option>
            </select>
          </div>

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block text-xl font-semibold text-gray-700">
              Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select experience</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
            </select>
          </div>

          {/* Profession */}
          <div>
            <label htmlFor="profession" className="block text-xl font-semibold text-gray-700">
              Profession
            </label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Profession</option>
              <option value="Nurse">Nurse</option>
              <option value="Doctor">Doctor</option>
              <option value="Allied">Allied</option>
            </select>
          </div>

          {/* Job Type */}
          <div>
            <label htmlFor="jobType" className="block text-xl font-semibold text-gray-700">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Job Type</option>
              <option value="Staff">Staff</option>
              <option value="Worker">Worker</option>
            </select>
          </div>

          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-xl font-semibold text-gray-700">
              Industry
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Industry</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>

          {/* Contract Length */}
          <div>
            <label htmlFor="contractLength" className="block text-xl font-semibold text-gray-700">
              Contract Length (months)
            </label>
            <select
              id="contractLength"
              name="contractLength"
              value={formData.contractLength}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select Contract Length</option>
              <option value="4">4 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded-full hover:bg-red-700 transform hover:scale-105 transition-all duration-300"
            >
              Submit Job Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobListing;
