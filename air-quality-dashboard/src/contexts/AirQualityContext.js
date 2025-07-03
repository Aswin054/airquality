import { createContext, useState, useEffect, useMemo } from 'react';

export const AirQualityContext = createContext();

export const AirQualityProvider = ({ children }) => {
  // Memoize mockData to ensure stable reference
  const mockData = useMemo(() => ({
    location: 'New Delhi',
    coordinates: '28.6139° N, 77.2090° E',
    aqi: 132,
    pm25: 68,
    pm10: 112,
    temperature: 32,
    humidity: 45,
    windSpeed: 12,
    status: 'Moderate',
    description: 'Air quality is acceptable; however, there may be a risk for some people.',
    lastUpdated: new Date()
  }), []);

  const [airQualityData, setAirQualityData] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const refreshData = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const randomAqi = Math.floor(Math.random() * 200);
      const newData = {
        ...mockData,
        aqi: randomAqi,
        pm25: Math.floor(randomAqi * 0.7),
        pm10: Math.floor(randomAqi * 1.2),
        lastUpdated: new Date()
      };
      
      // Determine status based on AQI
      if (randomAqi <= 50) {
        newData.status = 'Good';
        newData.description = 'Air quality is satisfactory, and air pollution poses little or no risk.';
      } else if (randomAqi <= 100) {
        newData.status = 'Moderate';
        newData.description = 'Air quality is acceptable; however, there may be a risk for some people.';
      } else if (randomAqi <= 150) {
        newData.status = 'Unhealthy for SG';
        newData.description = 'Members of sensitive groups may experience health effects.';
      } else {
        newData.status = 'Unhealthy';
        newData.description = 'Some members of the general public may experience health effects.';
      }
      
      setAirQualityData(newData);
      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    // Initialize with mock data
    setAirQualityData(mockData);
  }, [mockData]); // Properly included dependency

  return (
    <AirQualityContext.Provider value={{
      airQualityData,
      selectedLocation,
      lastUpdated,
      isLoading,
      refreshData,
      setSelectedLocation
    }}>
      {children}
    </AirQualityContext.Provider>
  );
};