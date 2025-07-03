const AQILegend = () => {
  return (
    <div className="legend-section">
      <div className="legend-title">Air Quality Index (AQI) Legend</div>
      <div className="legend-items">
        <div className="legend-item">
          <div className="legend-color" style={{backgroundColor: 'var(--good)'}}></div>
          <div className="legend-label">0-50 (Good)</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{backgroundColor: 'var(--moderate)'}}></div>
          <div className="legend-label">51-100 (Moderate)</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{backgroundColor: 'var(--unhealthy-sg)'}}></div>
          <div className="legend-label">101-150 (Unhealthy for SG)</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{backgroundColor: 'var(--unhealthy)'}}></div>
          <div className="legend-label">151+ (Unhealthy)</div>
        </div>
      </div>
    </div>
  );
};

export default AQILegend;