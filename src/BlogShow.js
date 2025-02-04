import React from 'react';
import { FaComment, FaDonate, FaCalendarAlt } from 'react-icons/fa'; // Import React icons
import './BlogShow.css'; // Add your styles here

const BlowShow = () => {
  return (
    <div className="blowshow-container">
      {/* Image Section */}
      <img src="/img7.jpg" alt="Blog Image" className="blog-img" />

      {/* Title and Text */}
      <h1 className="blog-title">Water For Charity</h1>
      <p className="blog-text">
        Ipsa fusce cillum, mollis donec molestiae, dolor aspernatur deleniti incididunt semper praesent pede
        molestiae gravida laoreet distinctio, mollis aliquid, interdum, ab cupidatat laborum maiores saepe orci
        quo accusamus dictum, libero nihil sem montes hic excepteur fringilla, blanditiis sagittis consequat
        ultrices. Taciti provident cumque,
      </p>

      {/* Date, Comment, Donate Icons Section */}
      <div className="blog-info">
        <span className="info-item">
          <FaCalendarAlt className="icon" /> Jun 8, 2020
        </span>
        <span className="info-item">
          <FaComment className="icon" /> Leave a Comment
        </span>
        <span className="info-item">
          <FaDonate className="icon" /> Donate
        </span>
      </div>

      {/* Leave a Reply Section */}
      <div className="reply-section">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        
        <form className="comment-form">
          <label>Name *</label>
          <input type="text" placeholder="Your Name" required />
          
          <label>Email *</label>
          <input type="email" placeholder="Your Email" required />
          
          <label>Website</label>
          <input type="url" placeholder="Your Website" />
          
          <label>Comment *</label>
          <textarea placeholder="Your Comment" required></textarea>
          
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlowShow;
