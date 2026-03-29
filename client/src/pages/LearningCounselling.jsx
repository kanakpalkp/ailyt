import React, { useState } from 'react';
import '../styles/Learning.css';
import { posterCourses } from '../data/courseCatalog';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  course: '',
  qualification: ''
};

const LearningCounselling = () => {
  const [formData, setFormData] = useState(initialForm);
  const whatsappNumber = '8630611232';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      'Free Counselling Enquiry',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Course: ${formData.course}`,
      `Qualification: ${formData.qualification}`
    ].join('\n');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormData(initialForm);
  };

  return (
    <div className="learning-page">
      <section className="learning-contact-section">
        <div className="section-container">
          <div className="learning-contact-grid">
            <aside className="learning-contact-sidepanel">
              <h2>AILYT Learning Centre</h2>
              <p>Professional training with career-focused guidance.</p>

              <div className="learning-contact-reason-list">
                <div className="learning-contact-reason-card">
                  <h3>Address</h3>
                  <p>AILYT Learning Centre, Main Campus, Uttarakhand</p>
                </div>
                <div className="learning-contact-reason-card">
                  <h3>Email</h3>
                  <p>info@ailyt.com</p>
                </div>
                <div className="learning-contact-reason-card">
                  <h3>Phone</h3>
                  <p>+91 86306 11232</p>
                </div>
              </div>
            </aside>

            <form className="learning-enroll-form" onSubmit={handleSubmit}>
              <div className="learning-enroll-form-header">
                <h2>Get Free Counselling</h2>
                <p>Fill the form and we will reach you with guidance.</p>
              </div>

              <div className="learning-enroll-form-grid">
                <div className="learning-form-field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="phone">Your Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="learning-form-field">
                  <label htmlFor="course">Select Course</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {posterCourses.map((course) => (
                      <option key={course.slug} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div className="learning-form-field learning-form-field-full">
                  <label htmlFor="qualification">Qualification</label>
                  <select
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select qualification</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div> */}
              </div>

              <button className="cta-primary" type="submit">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningCounselling;
