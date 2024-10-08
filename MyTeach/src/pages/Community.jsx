// src/pages/Community.js
import React from 'react';
import './Community.css'; // Import the CSS file for Community page styling

const Community = () => {
  return (
    <div className="community-container">
      <h1>Community Tools</h1>
      <div className="community-sections">
        <div className="community-section">
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub Logo" />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="community-section">
          <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Stack_Overflow-512.png" alt="Stack Overflow Logo" />
          <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        </div>
        <div className="community-section">
          <img src="https://imgix.cosmicjs.com/fbba6cf0-e79b-11ee-b074-b5c8fe3ef189-Bitbucket.png?w=1200&auto=format,compression" alt="Bitbucket Logo" />
          <a href="https://www.bitbucket.org" target="_blank" rel="noopener noreferrer">Bitbucket</a>
        </div>
        <div className="community-section">
          <img src="https://www.iconbolt.com/iconsets/phosphor-regular/codepen-logo.svg" alt="CodePen Logo" />
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">CodePen</a>
        </div>
        <div className="community-section">
          <img src="https://i.pinimg.com/564x/45/89/76/45897678148e5e3b6f2931ab62599ca7.jpg" alt="Repl.it Logo" />
          <a href="https://replit.com" target="_blank" rel="noopener noreferrer">Repl.it</a>
        </div>
      </div>
    </div>
  );
};

export default Community;