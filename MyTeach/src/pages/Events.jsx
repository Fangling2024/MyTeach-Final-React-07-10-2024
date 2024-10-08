// src/pages/Events.js
import React from 'react';
import './Events.css'; // Assuming your styles are in this CSS file

const Events = () => {
  return (
    <div className="events-container">
      <h1>Upcoming Tech Events</h1>
      <div className="events-row">
        <a href="https://www.eventbrite.co.uk/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-eventbrite-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-2-pack-logos-icons-2944859.png?f=webp&w=512" alt="Eventbrite Logo" className="logo" />
          Eventbrite
        </a>
        <a href="https://www.meetup.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://logowik.com/content/uploads/images/meetup7438.logowik.com.webp" alt="Meetup Logo" className="logo" />
          Meetup
        </a>
        <a href="https://conferencealert.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://conferencealert.com/images/logo.png" alt="Conference Alerts Logo" className="logo" />
          Conference Alerts
        </a>
        <a href="https://devpost.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://d2dmyh35ffsxbl.cloudfront.net/assets/reimagine2/devpost-logo-25d0005ec83e3b9ef6fce93235bb6d642d7c828f31758ebdb5b7ee87de7d45c3.svg" alt="Devpost Logo" className="logo" />
          Devpost
        </a>
      </div>
    </div>
  );
};

export default Events;