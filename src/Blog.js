import React, { useState, useEffect } from "react";
import YouMayLike from './YouMayLike';
import './Blog.css';

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
  ];

  
  const textContent = [
    {
      category: "Donation",
      title: "Donate And Sponsor To Poor People",
      date: "Jul 19, 2021",
      author: "demoteam",
      description: "Your Donation Can Transform Lives – Help Us Bring Change.",
      link: "./BlogShow"
    },
    {
      category: "Health",
      title: "Donate To Health Campaigns",
      date: "Aug 5, 2021",
      author: "healthteam",
      description: "Supporting Health and Well-being for a Stronger Future.",
      link: "./BlogShow"
    },
    {
      category: "Education",
      title: "Sponsor A Student For Their Future",
      date: "Sep 1, 2021",
      author: "educationteam",
      description: "Supporting Health, Educating Minds, and Building a Brighter Tomorrow.",
      link: "./BlogShow"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How to Make a Difference in Your Community",
      excerpt: "Learn how small actions can create a big impact in your local community.",
      link: "#",
      date: "Oct 10, 2023",
      author: "communityteam"
    },
    {
      id: 2,
      title: "The Importance of Clean Water",
      excerpt: "Discover why access to clean water is essential for health and development.",
      link: "#",
      date: "Oct 15, 2023",
      author: "healthteam"
    },
    {
      id: 3,
      title: "Education for All: A Global Mission",
      excerpt: "Explore initiatives aimed at providing education to underprivileged children.",
      link: "#",
      date: "Oct 20, 2023",
      author: "educationteam"
    }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    } else if (direction === "right") {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-banner">
      {/* Slider Section */}
      <div className="main-slider-wrap slider-layout-one">
        <div className="main-slider">
          <div className="slick-list">
            <div className="slick-track">
              <div className="slide-item">
                <div
                  className="banner-img"
                  style={{
                    backgroundImage: `url(${images[activeIndex]})`
                  }}
                >
                  <div className="slide-inner">
                    <div className="banner-content text-center">
                      <div className="entry-content">
                        <header className="entry-header">
                          <span className="cat-links">
                            <a href={`#${textContent[activeIndex].category}`}style={{ color: 'white' }}>
                              {textContent[activeIndex].category}
                            </a>
                          </span>
                          <h3 className="entry-title">
                            <a href={textContent[activeIndex].link}style={{ color: 'white', textDecoration: 'none' }}>
                              {textContent[activeIndex].title}
                            </a>
                          </h3>
                        </header>
                        <div className="entry-meta">
                          <span className="posted-on">
                            <a href={`#${textContent[activeIndex].date}`}>
                              <i className="fas fa-calendar-alt" style={{ marginRight: '5px'}}></i>
                              {textContent[activeIndex].date}
                            </a>
                          </span>
                          <span className="byline">
                            <a href={`#${textContent[activeIndex].author}`}>
                              <i className="fas fa-user" style={{ marginRight: '5px' }}></i>
                              {textContent[activeIndex].author}
                            </a>
                          </span>
                          <span className="comments-link">
                            <a href={`#comments`}>
                              <i className="fas fa-comment" style={{ marginRight: '5px' }}></i>
                              Comment
                            </a>
                          </span>
                        </div>
                        <div className="entry-text">
                          <p>{textContent[activeIndex].description}</p>
                          <div className="button-container">
                            <a href={textContent[activeIndex].link} className="button-primary">
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Left Arrow Button */}
          <div
            className="arrow-left"
            onClick={() => handleArrowClick("left")}
            aria-label="Previous Slide"
          >
            <i className="fas fa-arrow-left"></i>
          </div>

          {/* Right Arrow Button */}
          <div
            className="arrow-right"
            onClick={() => handleArrowClick("right")}
            aria-label="Next Slide"
          >
            <i className="fas fa-arrow-right"></i>
          </div>

          {/* Custom Round Dots */}
          <div className="main-slider-dots">
            <ul className="slick-dots" role="tablist">
              {images.map((_, index) => (
                <li
                  className={activeIndex === index ? "slick-active" : ""}
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    display: 'inline-block',
                    margin: '0 10px',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className={`round-dot ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Combined Feature Posts and From Our Blog Section */}
      <section className="blog-sections">
        {/* Feature Posts Section */}
        <div className="feature-posts">
          <h2 className="feature-posts-title">Feature Post</h2>
          <div className="feature-posts-cards">
            {textContent.map((content, index) => (
              <div className="feature-post-card" key={index}>
                <div className="feature-post-img">
                  <img src={images[index]} alt={content.title} />
                </div>
                <div className="feature-post-text">
                  <span className="category">{content.category}</span>
                  <h3 className="title">
                    <a href={content.link}style={{ color: 'white' }}>{content.title}</a>
                  </h3>
                  <div className="entry-meta">
                    <span className="posted-on">
                      <a href={`#${content.date}`}>
                        <i className="fas fa-calendar-alt" style={{ marginRight: '5px'}}></i>
                        {content.date}
                      </a>
                    </span>
                    <span className="byline">
                      <a href={`#${content.author}`}>
                        <i className="fas fa-user" style={{ marginRight: '5px' }}></i>
                        {content.author}
                      </a>
                    </span>
                    <span className="comments-link">
                      <a href={`#comments`}>
                        <i className="fas fa-comment" style={{ marginRight: '5px' }}></i>
                        Comment
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* From Our Blog Section */}
        <section className="from-our-blog">
  <h2 className="from-blog-title">From Our Blog</h2>
  <div className="underline"></div>

  {/* Blog Post Cards */}
  <div className="blog-posts">
    {textContent.map((content, index) => (
      <div className="blog-post-card" key={index}>
        <div className="blog-post-img">
          <img src={images[index]} alt={content.title} />
        </div>
        <div className="blog-post-details">
          <span className="category">
            <a href={`#${content.category}`} className="category-link">
              {content.category}
            </a>
          </span>
          <h3 className="title">
            <a href={content.link} className="title-link">
              {content.title}
            </a>
          </h3>
          <div className="entry-meta">
            <span className="posted-on">
              <i className="fas fa-calendar-alt" style={{ marginRight: '5px'}}></i>
              {content.date}
            </span>
            <span className="byline">
              <i className="fas fa-user" style={{ marginRight: '5px' }}></i>
              {content.author}
            </span>
            <span className="comments-link">
              <i className="fas fa-comment" style={{ marginRight: '5px' }}></i>
              Comment
            </span>
          </div>
          <p className="description">{content.description}</p>
          <a href={content.link} className="read-more-button">Read More</a>
        </div>
      </div>
    ))}
  </div>
</section>


<section className="you-may-like">
  <h2 className="you-may-like-title1">You May Also Like This</h2>
  <div className="underline"></div>
  
  {/* Image Cards Section */}
  <YouMayLike />
</section>

      </section>
    </section>
  );
};

export default Blog;