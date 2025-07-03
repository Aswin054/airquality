const AboutPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <h1>About the Project</h1>
        <p>
          The Nationwide Air Quality Prediction System is a comprehensive platform designed to monitor
          and predict air quality across India. Our system utilizes advanced machine learning models
          and real-time data from multiple sources to provide accurate air quality forecasts.
        </p>
        
        <h2>Project Goals</h2>
        <ul>
          <li>Provide real-time air quality monitoring across India</li>
          <li>Deliver accurate predictions of PM2.5 and PM10 levels</li>
          <li>Help citizens make informed decisions about outdoor activities</li>
          <li>Support policymakers with data-driven insights</li>
        </ul>

        <h2>Technology Stack</h2>
        <p>
          Our system combines satellite data, ground station measurements, and meteorological data
          to generate comprehensive air quality assessments. The prediction models are continuously
          updated to improve accuracy.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;