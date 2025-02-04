import React from "react";
import { FaHandsHelping, FaHandHoldingUsd, FaDonate, FaPrayingHands } from "react-icons/fa";
import "./About.css";
import MissionVision from "./MissionVision";
import Volunteers from "./Volunteers";

export default function AboutCharity() {
  return (
    <div className="about-charity">
      <div className="header">
        <h2>About Our Charity</h2>
      </div>

      <div className="content">
        <div className="about-text">
          
          <p>
            At Hope Unity Foundation, we believe in the power of giving. Our
            charity is dedicated to uplifting communities by providing
            essential resources, education, healthcare, and support to those in
            need. By fostering a spirit of generosity and compassion, we create
            lasting impacts that enhance the well-being of individuals and
            communities alike.
          </p>
        </div>

        <div className="cards">
          <div className="card" >
          <a href="/Contact" className="card-link">
          <div className="icon"><FaHandsHelping /></div>
          <h4>Become a Volunteer</h4>
            </a>

            
          </div>

          <div className="card">
          <a href="/Donation" className="card-link">
          <div className="icon"><FaHandHoldingUsd /></div>
            <h4>Quick Fundraise</h4>
            </a>
            
          </div>

          <div className="card">
          <a href="/Donation" className="card-link">
          <div className="icon"><FaDonate /></div>
            <h4>Give Donation</h4>
            </a>
            
          </div>

          <div className="card">
          <a href="/Blog" className="card-link">
          <div className="icon"><FaPrayingHands /></div>
            <h4>Our Blogs</h4>
            </a>
            
          </div>
        </div>
      </div>
      <MissionVision/>
      <Volunteers/>
    </div>
  );
}
