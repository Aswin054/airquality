const DataSourcesPage = () => {
  return (
    <div className="container">
      <div className="page-content">
        <h1>Data Sources</h1>
        <p>
          Our air quality predictions are based on data from multiple reliable sources:
        </p>
        
        <div className="data-source-card">
          <h2>INSAT Satellite</h2>
          <p>
            The Indian National Satellite System provides atmospheric data and aerosol information
            used in our models.
          </p>
        </div>
        
        <div className="data-source-card">
          <h2>Central Pollution Control Board (CPCB)</h2>
          <p>
            Ground-level air quality monitoring data from CPCB's extensive network of stations
            across India.
          </p>
        </div>
        
        <div className="data-source-card">
          <h2>MERRA-2</h2>
          <p>
            NASA's Modern-Era Retrospective analysis for Research and Applications, Version 2
            provides global meteorological data.
          </p>
        </div>
        
        <div className="data-source-card">
          <h2>SAFAR</h2>
          <p>
            System of Air Quality and Weather Forecasting And Research provides localized
            air quality data for major Indian cities.
          </p>
        </div>
        
        <div className="note">
          <p>
            <strong>Note:</strong> Our predictions combine these data sources with proprietary
            models to generate forecasts. While we strive for accuracy, actual conditions
            may vary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataSourcesPage;