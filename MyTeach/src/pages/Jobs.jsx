import React from 'react';
import './Jobs.css';  // Ensure to create and import a CSS file for styling

const Jobs = () => {
  return (
    <div className="job-container">
      <h1>Job Search Websites</h1>
      <div className="jobs-list">
        {[{
          name: "LinkedIn",
          url: "https://www.linkedin.com",
          logo: "https://blog.boon.so/wp-content/uploads/2024/03/LinkedIn-Logo-2-2048x1536.jpg"
        }, {
          name: "Indeed",
          url: "https://www.indeed.com",
          logo: "https://indeed.design/static/9758d70b3b651ae34e001e2afff970cd/06186/Indeed-name-Indeed-Sans.webp"
        }, {
          name: "Glassdoor",
          url: "https://www.glassdoor.com",
          logo: "https://pbs.twimg.com/profile_images/1681236548719714304/aPJTDD41_400x400.jpg"
        }, {
          name: "Monster",
          url: "https://www.monster.com",
          logo: "https://1000logos.net/wp-content/uploads/2024/04/Monster-Logo.png"
        }, {
          name: "CareerBuilder",
          url: "https://www.careerbuilder.com",
          logo: "https://press.careerbuilder.com/image/CB_Newsroom_Tiles_Logo_2021-SkyBlue.jpg"
        }, {
          name: "AngelList",
          url: "https://www.angel.co",
          logo: "https://images.ctfassets.net/e8i6c2002cqg/336jHkunz7PxBObVvPuQ5A/96aee60cdf3eee9f09381682daf56a44/auXY68iA.png"
        }, {
          name: "Dice",
          url: "https://www.dice.com",
          logo: "https://pbs.twimg.com/profile_images/1406466791304359936/DcgQAjCI_400x400.png"
        }, {
          name: "SimplyHired",
          url: "https://www.simplyhired.com",
          logo: "https://yt3.googleusercontent.com/-_mMchCz5FEnww-CJprNzZS_tD7BaK70aJMDlMoFYDdj1ybmKkyr4uIQoGSprg3uZRwYhO81HHQ=s160-c-k-c0x00ffffff-no-rj"
        }, {
          name: "Toptal",
          url: "https://www.toptal.com",
          logo: "https://authenticator.2stable.com/assets/img/2fa-services/Icons/toptal.com.svg"
        }, {
          name: "Remote.co",
          url: "https://remote.co", 
          logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFUr0X9Q0oPcw/company-logo_200_200/company-logo_200_200/0/1631364687661/remote_co_logo?e=1736380800&v=beta&t=oa4_uis26w5SN5Q37fJjfLER22aFlQiza3-XQW7s9rk"
        }].map((job, index) => (
          <div key={index} className="job">
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              <img src={job.logo} alt={`${job.name} logo`} className="logo" />
              <div className="name">{job.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;