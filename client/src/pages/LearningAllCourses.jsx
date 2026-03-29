import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Learning.css';
import { posterCourses } from '../data/courseCatalog';

const LearningAllCourses = () => {
  const categories = [
    'All Courses',
    'English Speaking',
    'Computer Courses',
    'Data & Tech',
    'Internship Programs',
    'Career Support'
  ];

  return (
    <div className="learning-page">
      <section className="learning-hero">
        <div className="learning-hero-content">
          <div className="learning-hero-text">
            <h1>Explore Learning Courses</h1>
            <p>Find the right program and start building your career path.</p>
          </div>
        </div>
      </section>

      <section className="learning-courses">
        <div className="section-container learning-all-layout">
          <div className="learning-courses-grid">
            {posterCourses.map((course) => (
              <div key={course.slug} className="learning-course-card">
                <div className="learning-course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="learning-course-body">
                  <h3>{course.title}</h3>
                  <p>{course.subtitle}</p>
                  <Link
                    to={`/learning/all-courses/${course.slug}`}
                    state={{ course }}
                    className="cta-primary learning-course-action"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <aside className="learning-categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((item, index) => (
                <li key={item} className={index === 0 ? 'active' : ''}>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default LearningAllCourses;
