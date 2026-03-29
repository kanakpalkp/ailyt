import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/Learning.css';
import { courseCatalog } from '../data/courseCatalog';

const CourseDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Overview');
  const whatsappLink =
    'https://wa.me/8630611232?text=Hi%20AILYT%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.';

  const course = useMemo(() => {
    if (location.state?.course?.slug === slug) {
      return location.state.course;
    }
    return courseCatalog[slug];
  }, [location.state, slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!course) {
    return (
      <div className="learning-page">
        <section className="learning-hero">
          <div className="learning-hero-content">
            <div className="learning-hero-text">
              <h1>Course Not Found</h1>
              <p>Please return to the Learning page to select a course.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="learning-page">
      {/* <section className="learning-hero">
        <div className="learning-hero-content">
          <div className="learning-hero-text">
            <h1>{course.title}</h1>
            <p>{course.subtitle}</p>
          </div>
        </div>
      </section> */}

      <section className="learning-posters">
        <div className="section-container" style={{ paddingTop: '8px' }}>
          <img
            src={course.image}
            alt={`${course.title} banner`}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              display: 'block'
            }}
          />
        </div>
      </section>

      <section className="learning-courses">
        <div className="section-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              alignItems: 'flex-start'
            }}
          >
            <div style={{ flex: '2 1 320px' }}>
              {/* <h2>{course.title}</h2> */}
              <p className="course-details-overview" style={{ marginBottom: '16px' }}>
                {course.overview}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '16px'
                }}
              >
                <div>
                  <span style={{ display: 'block', fontWeight: 600 }}>
                    Duration
                  </span>
                  <span>{course.duration}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontWeight: 600 }}>
                    Fee
                  </span>
                  <span>₹{course.fee}</span>
                </div>
                {/* <div>
                  <span style={{ display: 'block', fontWeight: 600 }}>
                    Faculty
                  </span>
                  <span>{course.faculty}</span>
                </div> */}
              </div>
            </div>
            <div style={{ flex: '1 1 260px' }}>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <label htmlFor="trainingType" style={{ fontWeight: 600 }}>
                    Training Type
                  </label>
                  <select
                    id="trainingType"
                    style={{
                      width: '100%',
                      marginTop: '6px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <option>Classroom</option>
                    <option>Online Live</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dateSelect" style={{ fontWeight: 600 }}>
                    Select Date
                  </label>
                  <select
                    id="dateSelect"
                    style={{
                      width: '100%',
                      marginTop: '6px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <option>Next Week</option>
                    <option>This Month</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="course-details-actions" style={{ display: 'grid', gap: '10px' }}>
                  <button className="cta-secondary" type="button">
                    Download Curriculum
                  </button>
                  <a
                    className="cta-primary"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Course
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              {[
                'Overview',
                'Curriculum',
                'Certificate',
                'Upcoming Batches',
                'Training Features',
                'Reviews'
              ].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`course-tab ${activeTab === tab ? 'active' : ''}`}
                  style={{
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div style={{ lineHeight: 1.7 }}>
              {activeTab === 'Overview' ? (
                <p className="course-details-overview">{course.overview}</p>
              ) : (
                <p>Content for {activeTab} will be available soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetails;
