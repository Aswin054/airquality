import { useContext } from 'react';
import { AirQualityContext } from '../../contexts/AirQualityContext';

const MapSection = () => {
  const { airQualityData, lastUpdated } = useContext(AirQualityContext);

  return (
    <section className="map-section">
      <div className="map-title">
        <span>India Air Quality Map</span>
        <span id="last-updated">Last Updated: <span id="update-time">
          {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </span></span>
      </div>
      <div className="map-container" id="india-map">
        <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{textAlign:'center'}}>
            <i className="fas fa-map" style={{fontSize:'48px',color:'#3498db',marginBottom:'15px'}}></i>
            <p>Interactive India Map with Color-coded Pollution Zones</p>
            <p>Current Location: {airQualityData?.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;