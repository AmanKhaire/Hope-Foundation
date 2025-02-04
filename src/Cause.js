import React from "react";
import "./Home.css";
import Gallery from "./Gallery";

function Cause() {
  return (
    <div className="donation-container">
        <header className="donation-header">
          <h1>Cause</h1>
        </header>
    <div className="we-work-together container my-5 d-flex align-items-center justify-content-center shadow p-4 rounded">
      <div className="left-img">
        <img src="/img5.jpg" alt="We Work Together" className="img-fluid rounded" style={{ height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="content ms-4">
        <p className="tagline text-warning fw-bold">We Listen, We Advice</p>
        <h2 className="headline fw-bold">We Work Together</h2>
        <p className="description text-muted">
        Compassionate healthcare for all. Our medical care services ensure that everyone, regardless of their circumstances, receives the treatment and support they need to live healthier lives.


        </p>
        <div className="stats d-flex justify-content-between gap-3">
          <div className="stat-box shadow p-3 text-center rounded">
            <i className="fa fa-book fa-2x text-primary"></i>
            <h3>2,048</h3>
            <p>Donation</p>
          </div>
          <div className="stat-box shadow p-3 text-center rounded">
            <i className="fa fa-users fa-2x text-success"></i>
            <h3>3,500</h3>
            <p>Helped People</p>
          </div>
          <div className="stat-box shadow p-3 text-center rounded">
            <i className="fa fa-heart fa-2x text-danger"></i>
            <h3>500</h3>
            <p>Volunteer</p>
          </div>
        </div>
        <a href="/Donation">
        <button className="btn btn-orange mt-3">Donate Now</button>
                      </a>
        
      </div>
    </div>
    <Gallery/>
    </div>
    
  );
}

export default Cause;
