import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ITServices.css';

const BlogPage = () => {
  const blogs = [
    {
      title: 'Future of AI in Business',
      description: 'How AI is transforming modern enterprises and decision making',
      date: 'Jan 12, 2026',
      author: 'Admin'
    },
    {
      title: 'Startup MVP Guide',
      description: 'Step-by-step process to build and launch your MVP fast',
      date: 'Jan 05, 2026',
      author: 'Team AILYT'
    },
    {
      title: 'Web Performance Optimization',
      description: 'Best practices to make your website blazing fast',
      date: 'Dec 28, 2025',
      author: 'Tech Team'
    }
  ];

  const categories = [
    {
      icon: 'T',
      name: 'Technology',
      description: 'Modern software, cloud, and engineering practices'
    },
    {
      icon: 'S',
      name: 'Startups',
      description: 'Founders stories, MVP lessons, and growth playbooks'
    },
    {
      icon: 'AI',
      name: 'AI & Data',
      description: 'Applied AI, analytics, and data strategy for teams'
    },
    {
      icon: 'TU',
      name: 'Tutorials',
      description: 'Step-by-step guides to build practical tech solutions'
    },
    {
      icon: 'CS',
      name: 'Case Studies',
      description: 'Real implementations and measurable outcomes'
    },
    {
      icon: 'CL',
      name: 'Career & Learning',
      description: 'Career tips, interviews, and upskilling roadmaps'
    }
  ];

  const reasonsToRead = [
    {
      icon: 'EI',
      title: 'Expert Insights',
      description: 'Written by practitioners building products and systems'
    },
    {
      icon: 'PG',
      title: 'Practical Guides',
      description: 'Actionable tutorials you can apply right away'
    },
    {
      icon: 'RC',
      title: 'Real Case Studies',
      description: 'Lessons from delivery, scale, and business impact'
    },
    {
      icon: 'LT',
      title: 'Latest Trends',
      description: 'Timely topics in AI, software, startups, and product'
    },
    {
      icon: 'CG',
      title: 'Career Growth',
      description: 'Skills, habits, and paths to accelerate your growth'
    },
    {
      icon: 'CK',
      title: 'Community Knowledge',
      description: 'Shared ideas and experiences from our ecosystem'
    }
  ];

  const latestArticles = [
    {
      title: 'How To Validate Product Ideas Before You Build',
      preview: 'A practical framework to test assumptions and reduce MVP risk before development.'
    },
    {
      title: 'Building Reliable APIs For Fast Moving Teams',
      preview: 'Patterns for designing robust APIs that scale with products and customers.'
    },
    {
      title: 'Data Storytelling For Better Business Decisions',
      preview: 'Turn dashboards into decision tools with clear narratives and metrics.'
    }
  ];

  const browseBlogs = () => {
    const section = document.getElementById('featured-blogs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="itservices-page">
      <div className="section-container">
        <button className="back-button" onClick={() => window.history.back()}>
          {'\u2190'} Back
        </button>
      </div>

      <section className="itservices-hero">
        <div className="itservices-hero-content">
          <div className="itservices-hero-text">
            <h1>Insights. Ideas. Innovation.</h1>
            <p>Explore articles, tutorials, and stories from our experts</p>
            <div className="itservices-hero-ctas">
              <button className="cta-primary" onClick={browseBlogs}>Browse Blogs</button>
              <Link to="/blog/details" className="cta-secondary">Write for Us</Link>
            </div>
          </div>
          <div className="itservices-hero-visual">
            <div className="hero-box hero-box-1"></div>
            <div className="hero-box hero-box-2"></div>
            <div className="hero-box hero-box-3"></div>
          </div>
        </div>
      </section>

      <section className="itservices-services-overview" id="featured-blogs">
        <div className="section-container">
          <h2>Featured Blogs</h2>
          <p className="section-subtitle">Fresh thinking across technology, product, and growth</p>

          <div className="services-grid">
            {blogs.map((blog, index) => (
              <div key={blog.title} className="service-card">
                <div className="service-icon">{index + 1}</div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p>{blog.date} | {blog.author}</p>
                <Link to="/blog/details" className="service-link">Read More -&gt;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="itservices-industries">
        <div className="section-container">
          <h2>Blog Categories</h2>
          <p className="section-subtitle">Find content by topic and learning goal</p>

          <div className="industries-grid">
            {categories.map((category) => (
              <div key={category.name} className="industry-card">
                <div className="industry-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="itservices-why">
        <div className="section-container">
          <h2>Why Read Our Blog</h2>
          <p className="section-subtitle">Content designed to help you learn and execute faster</p>

          <div className="why-grid">
            {reasonsToRead.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="itservices-projects">
        <div className="section-container">
          <h2>Latest Articles</h2>
          <p className="section-subtitle">New reads from our product, engineering, and AI teams</p>

          <div className="projects-grid">
            {latestArticles.map((article) => (
              <div key={article.title} className="project-card">
                <h3>{article.title}</h3>
                <p>{article.preview}</p>
                <Link to="/blog/details">Read Article -&gt;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="itservices-hire-interns">
        <div className="section-container">
          <div className="hire-content">
            <div className="hire-text">
              <h2>Join Our Learning Community</h2>
              <p>Stay updated with curated insights from our experts</p>
              <ul className="hire-features">
                <li>Get latest blogs in your inbox</li>
                <li>Learn tech, AI, startups & business</li>
                <li>Exclusive community content</li>
              </ul>
              <Link to="/contact" className="cta-primary">Subscribe Now</Link>
            </div>
            <div className="hire-visual">
              <div className="hire-box hire-box-1"></div>
              <div className="hire-box hire-box-2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="itservices-cta">
        <div className="section-container">
          <h2>Have something to share?</h2>
          <p>Write for our blog and reach thousands of readers</p>
          <div className="cta-buttons">
            <Link to="/blog/details" className="cta-primary">Write a Blog</Link>
            <Link to="/contact" className="cta-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="hero-whatsapp-btn"
        title="Chat with us on WhatsApp"
      >
        {'\u{1F4AC}'}
      </a>
    </div>
  );
};

export default BlogPage;
