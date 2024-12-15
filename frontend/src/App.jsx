import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import UpperNavbar from './Components/UpperNavbar';

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
    <HelmetProvider>
      {/* Global metadata via Helmet */}
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
        {/* Upper Navbar */}
        <UpperNavbar />

        {/* Main Navbar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Cources />} />
          <Route path="/achievment" element={<Achievment />} />
          <Route path="/nurces" element={<Nurces />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/trainning" element={<Trainning />} />
          <Route path="/studyabroad" element={<StudyAbroad />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/ielts" element={<Ielts />} />
          <Route path="/ncle" element={<Ncle />} />
          <Route path="/oet" element={<Oet />} />
          <Route path="/osce" element={<Osce />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Termscondition />} />
          <Route path="/enroll" element={<Login />} />
          <Route path="/joblisting" element={<JobListing />} />
          <Route path="/adminsign" element={<AdminSign />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/job1" element={<Nurse1 />} />
          <Route path="/job2" element={<Nurse2 />} />
          <Route path="/job3" element={<Nurse3 />} />
        </Routes>

        {/* Toast Notifications */}
        <Toaster />

        {/* Footer */}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
