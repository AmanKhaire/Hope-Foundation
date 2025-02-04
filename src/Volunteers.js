import React from "react";
import "./Volunteers.css"; // Import CSS file

const Volunteers = () => {
  return (
    <section className="volunteers">
      <h2>Our Volunteers</h2>
      <p>
      "Our volunteers are the heart and soul of our mission. With passion, dedication, and a deep sense of purpose, they work tirelessly to bring positive change to communities in need. From lending a helping hand to inspiring hope, their selfless contributions make a lasting impact. We are grateful for their unwavering commitment and believe that together, we can create a better and brighter future for all. Join us in celebrating these incredible individuals who dedicate their time and efforts to making a difference!"
      </p>

      <div className="volunteers-grid">
        <img src="/img1.jpg" alt="Volunteer 1" />
        <img src="/img2.jpg" alt="Volunteer 2" />
        <img src="/img3.jpg" alt="Volunteer 3" />
        <img src="/img4.jpg" alt="Volunteer 4" />
      </div>
    </section>
  );
};

export default Volunteers;