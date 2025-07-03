const ContactPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <h1>Contact Us</h1>
        
        <div className="contact-methods">
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <a href="mailto:contact@airqualityindia.org">contact@airqualityindia.org</a>
          </div>
          
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <a href="tel:+911234567890">+91 12345 67890</a>
          </div>
          
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Air Quality Research Center<br />New Delhi, India 110001</p>
          </div>
        </div>

        <h2>Feedback Form</h2>
        <form className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;