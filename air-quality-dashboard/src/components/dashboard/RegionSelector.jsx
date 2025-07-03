import { useContext, useState } from 'react';
import { AirQualityContext } from '../../contexts/AirQualityContext';

const RegionSelector = () => {
  const { setSelectedLocation } = useContext(AirQualityContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSelectedLocation(searchQuery || 'New Delhi');
      setSearchQuery('');
    }
  };

  return (
    <div className="region-selector">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search by State, City or District..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleSearch}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="zoom-controls">
        <button className="zoom-btn"><i className="fas fa-plus"></i></button>
        <button className="zoom-btn"><i className="fas fa-minus"></i></button>
      </div>
    </div>
  );
};

export default RegionSelector;