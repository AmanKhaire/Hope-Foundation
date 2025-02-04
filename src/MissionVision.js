import React from "react";
import "./MissionVision.css";
   // Replace with your actual vision image file path


const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      {/* Mission Section */}
      <div className="section">
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            Hope Unity Foundation is committed to sharing joy and sending smiles to economically
            disadvantaged communities. Through our initiatives in education, healthcare, and
            community development, we strive to uplift those in need, foster empowerment, and
            promote sustainable change.
          </p>
        </div>
        <div className="image">
      
<img src="/img1.jpg" alt="Vision" />

        </div>
      </div>

      {/* Vision Section */}
      <div className="section reverse">
        <div className="image">
        <img src="/img2.jpg" alt="Mission" />
        </div>
        <div className="text">
          <h2>Our Vision</h2>
          <p>
            To create a world where every individual, regardless of their background, has access
            to the resources, education, and support they need to lead a fulfilling and
            prosperous life. We envision a future filled with hope, unity, and happiness, where
            communities thrive together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;