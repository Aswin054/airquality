import { useContext } from 'react';
import { AirQualityContext } from '../../contexts/AirQualityContext';

const PredictionPanel = () => {
  const { airQualityData, isLoading, refreshData } = useContext(AirQualityContext);

  const getAqiClass = (aqi) => {
    if (aqi <= 50) return 'good';
    if (aqi <= 100) return 'moderate';
    if (aqi <= 150) return 'unhealthy-sg';
    return 'unhealthy';
  };

  if (!airQualityData) return <div>Loading...</div>;

  return (
    <section className="prediction-panel">
      <div className="panel-header">
        <div className="panel-title">Real-Time Prediction</div>
        <button 
          className="refresh-btn" 
          onClick={refreshData}
          disabled={isLoading}
        >
          <i className={`fas fa-sync-alt ${isLoading ? 'fa-spin' : ''}`}></i> 
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      <div className="location-info">
        <div className="location-name">{airQualityData.location}</div>
        <div className="location-coords">{airQualityData.coordinates}</div>
      </div>

      <div className="air-quality-status">
        <div className={`aqi-circle ${getAqiClass(airQualityData.aqi)}`}>
          {airQualityData.aqi}
        </div>
        <div>
          <div className="status-text">{airQualityData.status}</div>
          <div className="status-description">{airQualityData.description}</div>
        </div>
      </div>

      <div className="pollution-metrics">
        <div className="metric-card">
          <div className="metric-title">PM2.5</div>
          <div className="metric-value">{airQualityData.pm25} µg/m³</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">PM10</div>
          <div className="metric-value">{airQualityData.pm10} µg/m³</div>
        </div>
      </div>

      <div className="weather-info">
        <div className="weather-card">
          <div className="weather-icon"><i className="fas fa-thermometer-half"></i></div>
          <div className="weather-value">{airQualityData.temperature}°C</div>
          <div className="weather-label">Temperature</div>
        </div>
        <div className="weather-card">
          <div className="weather-icon"><i className="fas fa-tint"></i></div>
          <div className="weather-value">{airQualityData.humidity}%</div>
          <div className="weather-label">Humidity</div>
        </div>
        <div className="weather-card">
          <div className="weather-icon"><i className="fas fa-wind"></i></div>
          <div className="weather-value">{airQualityData.windSpeed} km/h</div>
          <div className="weather-label">Wind Speed</div>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-placeholder">
          <div>
            <i className="fas fa-chart-line" style={{fontSize:'24px',marginBottom:'10px',display:'block',textAlign:'center'}}></i>
            PM Levels Trend (Last 7 Days)
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionPanel;