import React from "react";
import Student1 from "../assets/cr1.jpeg";
import Student2 from "../assets/st1.jpeg";
import Student3 from "../assets/student3.jpeg";
import Student4 from "../assets/student4.jpeg";
import Student5 from "../assets/student5.jpeg";
import Student6 from "../assets/student6.jpeg";
import Student7 from "../assets/student7.jpeg";
import Student8 from "../assets/student1.jpeg";
import Student9 from "../assets/student2.jpeg";

const Achievements = () => {
  const students = [
    { img: Student1, name: "Nitin Samuel", achievement: "Preston, Lancashire" },
    { img: Student2, name: "Akansha Esther", achievement: "Nurse, Manchester" },
    { img: Student3, name: "INDERPREET SINGH", achievement: "BE Seneca College, Canada IELTS:6.5" },
    { img: Student4, name: "AMARDEEP BAINS", achievement: "B.ARCH, Humber College, Canada IELTS : 7.0" },
    { img: Student5, name: "GARIMA GERA", achievement: "BE, Toronto University, Canada IELTS : 7.0" },
    { img: Student6, name: "AMIT SINGH CHAUHAN", achievement: "HM, La Trobe University, Australia, IELTS : 6.5" },
    { img: Student7, name: "DOLLY AGARWAL", achievement: "MBA, Melbourne University, Australia IELTS : 7.5" },
    { img: Student8, name: "ABHISHEK GUPTA", achievement: "PGD, British Columbia, Canada IELTS : 6.5" },
    { img: Student9, name: "HAPPY SINGH", achievement: "BBA, Sydney, Australia IELTS:7.0" },
  ];

  return (
    <div className="container mx-auto my-12 p-6 bg-red-600 text-white rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-center mb-10 animate-fade-in">Our Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-auto">
              <img
                src={student.img}
                alt={student.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold">{student.name}</h2>
              <p className="text-gray-600">{student.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
