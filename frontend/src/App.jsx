import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import UpperNavbar from './Components/UpperNavbar';
import { Helmet } from 'react-helmet-async';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cources from './Pages/Cources';
import Achievment from './Pages/Achievments';
import Testimonials from './Pages/Testimonials';
import Trainning from './Pages/Tranning';
import Countries from './Pages/Countries';
import AdminSign from './Pages/adminsign';
import Admin from './Pages/admin';
import StudyAbroad from './Pages/StudyAbroad';
import Login from './Pages/Login';
import Termscondition from './Pages/Termscondition';
import Privacy from './Pages/Privacy';
import Nurces from './Pages/Nurces';
import JobListing from './Pages/JobListing';
import Nurse1 from './Nurces/Nurce1';
import Nurse2 from './Nurces/Nurse2';
import Nurse3 from './Nurces/Nurse3';

// Cources
import Ielts from './Cources/ielts';
import Ncle from './Cources/ncle';
import Oet from './Cources/oet';
import Osce from './Cources/osce';

const App = () => {
  return (
    <>
      {/* Helmet for Global Metadata */}
      <Helmet>
        <meta name="google-site-verification" content="ibTKJQ2aqRqlLeQ6U2S-V8WRmITjWl7mBKNQXubYbjU" />
        <title>Bobby IELTS - Professional Training</title>
        <meta
          name="description"
          content="Bobby IELTS provides comprehensive training for IELTS, OET, NCLEX, OSCE, and study abroad programs. Unlock your potential today."
        />
        <meta
          name="keywords"
          content="IELTS, OET, NCLEX, OSCE, Bobby IELTS, training, study abroad, nurse training"
        />
        <meta name="author" content="Bobby IELTS" />
      </Helmet>

      <div>
        {/* Navbar */}
        <UpperNavbar />
        <Navbar />

        {/* Route Definitions */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/courses" element={<Cources />} />
          <Route exact path="/achievment" element={<Achievment />} />
          <Route exact path="/nurces" element={<Nurces />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/trainning" element={<Trainning />} />
          <Route exact path="/studyabroad" element={<StudyAbroad />} />
          <Route exact path="/countries" element={<Countries />} />
          <Route exact path="/ielts" element={<Ielts />} />
          <Route exact path="/ncle" element={<Ncle />} />
          <Route exact path="/oet" element={<Oet />} />
          <Route exact path="/osce" element={<Osce />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Termscondition />} />
          <Route exact path="/enroll" element={<Login />} />
          <Route exact path="/joblisting" element={<JobListing />} />
          <Route exact path="/adminsign" element={<AdminSign />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/job1" element={<Nurse1 />} />
          <Route exact path="/job2" element={<Nurse2 />} />
          <Route exact path="/job3" element={<Nurse3 />} />
        </Routes>

        {/* Toast Notifications */}
        <Toaster />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
