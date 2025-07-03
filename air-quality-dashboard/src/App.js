import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AirQualityProvider } from './contexts/AirQualityContext'; // Add this import
import Layout from './components/common/Layout';
import DashboardPage from './components/pages/DashboardPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import DataSourcesPage from './components/pages/DataSourcesPage';

function App() {
  return (
    <AirQualityProvider> {/* Now this will work */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="data-sources" element={<DataSourcesPage />} />
          </Route>
        </Routes>
      </Router>
    </AirQualityProvider>
  );
}

export default App;