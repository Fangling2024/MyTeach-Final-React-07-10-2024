import React, { useState } from 'react';
import './ContactUs.css'; // Importing the CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data:', formData); // Typically you might send this data to a server.
    setTimeout(() => { // Simulate async form submission
      setSubmissionMessage('Your submission was successful!');
      setFormData({ name: '', email: '', message: '' }); // Optionally reset the form fields.
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="grid-container">
        {/* Combined Location and Social Media Section */}
        <section className="box">
          <h2>Connect with Us</h2>
          <div className="location-social">
            <div className="location">
              <img 
                src="https://banner2.cleanpng.com/20240210/uvo/transparent-location-icon-map-with-users-location-and-nearby-1710881914600.webp" 
                alt="Location" 
                className="icon"
              />
              <p>Lancaster Physics Department, LA1 4YW</p>
            </div>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/fangling-w" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://blog.boon.so/wp-content/uploads/2024/03/LinkedIn-Logo-2-2048x1536.jpg" 
                  alt="LinkedIn" 
                  className="icon"
                />
                LinkedIn
              </a>
              <a href="https://github.com/Fangling2024" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" 
                  alt="GitHub" 
                  className="icon"
                />
                GitHub
              </a>
              <a href="mailto:fangling.wu334@outlook.com">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1024px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png" 
                  alt="Email" 
                  className="icon"
                />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="box">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                required
              />
            </label>
            <label>
              Email:
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                required
              />
            </label>
            <label>
              Message:
              <textarea 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                required
              ></textarea>
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
        </section>
      </div>
    </div>
  );
};

export default ContactUs;