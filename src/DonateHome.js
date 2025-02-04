import React from "react";
import "./Donation.css";
import { useNavigate } from "react-router-dom";

const campaigns = [
  {
    title: "Education For The Children",
    image: "/img3.jpg", // Use image from public folder
    description:
      "Support children's education and change lives forever. No one has ever become poor by giving. It's not how much we give but how much love we put into giving. If you haven't got any charity in your heart, you have the worst kind of heart trouble. Every good act is charity.",
    donated: 65,
    raised: 195,
    goal: 300,
  },
  {
    title: "Raise Fund To Save Water",
    image: "/img1.jpg", // Use image from public folder
    description:
      "Help provide clean water to those in need. Every drop counts! Clean water is a basic human right, but millions of people around the world still lack access to this precious resource. Water scarcity affects not only human health but also the environment, economy, and social stability.",
    donated: 50,
    raised: 150,
    goal: 300,
  },
  {
    title: "Empowering Young Minds",
    image: "/img2.jpg", // Use image from public folder
    description:
      "Every child deserves access to quality education, but millions are denied this basic right due to poverty, conflict, and social inequality. We believe that education is the key to unlocking a brighter future for these children.",
    donated: 65,
    raised: 195,
    goal: 300,
  },
];

const DonationPage = () => {
  const navigate = useNavigate();

  return (
    <div>
        {/* Two new lines below header */}
        <div className="donation-subheader">
          <p className="help-us-now">Help Us Now</p>
          <h2 className="donate-to-charity">Donate To Charity Campaign</h2>
        </div>
        {campaigns.map((campaign, index) => (
          <div key={index} className="campaign-card">
            <div className="campaign-image-container">
              <img src={campaign.image} alt={campaign.title} className="campaign-image" />
            </div>

            <div className="campaign-text">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${campaign.donated}%` }}></div>
              </div>
              <p>
                Donated: {campaign.donated}% | Raised: ${campaign.raised} | Goal: ${campaign.goal}
              </p>

              <button className="donate-button">
  <a href="/Donation">Donate Now</a>
</button>

            </div>
          </div>
        ))}

        <div className="donation-footer">
          <h2>No One Has Ever Become Poor By Giving</h2>

          <a href="/Donation">
        <button className="btn btn-orange mt-3">Donate Now</button>
                      </a>
        </div>
      </div>
  );
};

export default DonationPage;
