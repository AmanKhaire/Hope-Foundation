import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Blog"; // Home component import karo
import Footer from "./Footer"; // Footer component import karo
import Header from './Header'; // Adjust the path based on where your Header component is located
import Contact from './Contact'
import Donation from "./Donation";
import Cause from "./Cause";
import Home from './Home';
import About from './About'
import BlogShow from "./BlogShow";


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />  
          <Route path="/Home" element={<Home />} />  
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Donation" element={<Donation />} />
          <Route path="/Cause" element={<Cause />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogShow" element={<BlogShow />} />

        </Routes>
        <Footer /> {/* Footer ko har page ke neeche dikhana */}
      </div>
    </Router>
  );
};

export default App;
