import React from "react";
import "./Footer.css"; // Adding external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div>
            <h2 className="footer-title">About HUF Charity NGO</h2>
            <p className="footer-text">
              At Hope Unity Foundation, we believe in the power of giving. Our charity is dedicated to uplifting communities by providing essential resources, education, healthcare, and support to those in need. By fostering a spirit of generosity and compassion, we create lasting impacts that enhance the well-being of individuals and communities alike.
            </p>
          </div>

          {/* Recent News */}
          <div>
            <h2 className="footer-title">Recent News</h2>
            <div>
              <div className="news-item">
                <img src="img1.jpg" alt="Recent News 1" className="news-image" />
                <div className="news-content">
                  <a href="#" className="news-link">Donate And Sponsor To Poor People</a>
                  <div className="news-meta">
                    <span className="news-date">Jan 31, 2025</span>
                    <span className="news-comments">
                      <i className="fas fa-comment"></i> 5 Comments
                    </span>
                  </div>
                </div>
              </div>
              <div className="divider"></div> {/* Divider Line */}

              <div className="news-item">
                <img src="img2.jpg" alt="Recent News 2" className="news-image" />
                <div className="news-content">
                  <a href="#" className="news-link">Rise To Uplift Social Disaster</a>
                  <div className="news-meta">
                    <span className="news-date">Jan 28, 2025</span>
                    <span className="news-comments">
                      <i className="fas fa-comment"></i> 3 Comments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="footer-title">Gallery</h2>
            <div className="gallery-grid">
              {[...Array(9)].map((_, index) => (
                <img key={index} src={`img${index + 1}.jpg`} alt="Gallery" className="gallery-image" />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bottom-footer">
          <div>
            <p className="footer-text">
              Copyright © 2021 HUF Charity NGO | Theme by
              <a href="https://hopeunityfoundation.in/" className="footer-link"> Hope Unity Foundation</a>
            </p>
          </div>
          {/* Social Links */}
          <div className="social-icons">
            {["facebook", "twitter", "instagram", "youtube", "linkedin"].map((social) => (
              <a key={social} href="#" className="social-link">
                <i className={`fab fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
