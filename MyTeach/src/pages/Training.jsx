// src/pages/Training.js
import React from 'react';
import './Training.css'; // Import the CSS file

const Training = () => {
  return (
    <div className="training-container">
      <h1>Training Resources</h1>
      <div className="training-sections">
        <div className="training-section">
          <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI" alt="FreeCodeCamp Logo" />
          <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">
            FreeCodeCamp
          </a>
        </div>
        <div className="training-section">
          <img src="https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=1500&fit=crop&q=70&fm=jpg&auto=format&h=935&dpr=2" alt="Codecademy Logo" />
          <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
            Codecademy
          </a>
        </div>
        <div className="training-section">
          <img src="https://www.nasschools.org.uk/wp-content/uploads/2023/11/Social-care-review.png" alt="UK Government Bootcamp Logo" />
          <a href="https://www.skillsforcareers.education.gov.uk/" target="_blank" rel="noopener noreferrer">
            UK Government Bootcamp
          </a>
        </div>
        <div className="training-section">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/fe8d21156738445.Y3JvcCw5ODEsNzY4LDIxLDA.png" alt="Khan Academy Logo" />
          <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" rel="noopener noreferrer">
            Khan Academy
          </a>
        </div>
        <div className="training-section">
          <img src="https://miro.medium.com/v2/resize:fit:1200/1*P_wUre75IHZUQYFjoD7GZA.png" alt="The Odin Project Logo" />
          <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer">
            The Odin Project
          </a>
        </div>
        <div className="training-section">
          <img src="https://logowik.com/content/uploads/images/sololearn8062.jpg" alt="SoloLearn Logo" />
          <a href="https://www.sololearn.com" target="_blank" rel="noopener noreferrer">
            SoloLearn
          </a>
        </div>
        <div className="training-section">
          <img src="https://logowik.com/content/uploads/images/edx-free-online-course-new6759.jpg" alt="edX Logo" />
          <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer">
            edX
          </a>
        </div>
        <div className="training-section">
          <img src="https://cdn.prod.website-files.com/60ffdd9e3c66d71b667eba0b/6470ee2574766c89099e3497_JcqFK_yAO6Av33xfNUmTM0r7f2bXs1HA0eqm_j7VTdw.png" alt="W3Schools Logo" />
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
            W3Schools
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training;