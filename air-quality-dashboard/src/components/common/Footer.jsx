const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Data Sources</h3>
            <div className="data-sources">
              <span className="data-source">INSAT Satellite</span>
              <span className="data-source">CPCB</span>
              <span className="data-source">MERRA-2</span>
              <span className="data-source">SAFAR</span>
            </div>
          </div>
          <div className="footer-section">
            <h3>Disclaimer</h3>
            <p>Predictions are estimates based on available data and models. These are not official readings and should not be used as the sole basis for health-related decisions.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Air Quality Research Team</p>
            <a href="mailto:contact@airqualityindia.org">contact@airqualityindia.org</a>
            <a href="tel:+911234567890">+91 12345 67890</a>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Nationwide Air Quality Prediction System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;