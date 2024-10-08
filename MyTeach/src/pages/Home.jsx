import React from 'react';
import './Home.css'; // We'll style this in Home.css

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Teach</h1>

      <div className="grid-layout">
        {/* User's Posts Section */}
        <div className="section my-posts">
          <h2>My Posts</h2>
          <div className="content-box">
            <p>(My posts will be displayed here)</p>
          </div>
        </div>

        {/* Network's Posts Section */}
        <div className="section network-posts">
          <h2>My Network's Posts</h2>
          <div className="content-box">
            <p>(Network's posts will be displayed here)</p>
          </div>
        </div>

        {/* Enrolled Training Section */}
        <div className="section my-training">
          <h2>My Enrolled Training</h2>
          <div className="content-box">
            <p>(My enrolled training programs will be displayed here)</p>
          </div>
        </div>

        {/* Community Section */}
        <div className="section my-community">
          <h2>My Community</h2>
          <div className="content-box">
            <p>(My community updates will be displayed here)</p>
          </div>
        </div>

        {/* Events Section */}
        <div className="section my-events">
          <h2>My Events</h2>
          <div className="content-box">
            <p>(My events will be displayed here)</p>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="section my-jobs">
          <h2>My Jobs</h2>
          <div className="content-box">
            <p>(My job-related info will be displayed here)</p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="section my-progress">
          <h2>My Progress</h2>
          <div className="content-box">
            <p>(My progress-related information will be displayed here)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;