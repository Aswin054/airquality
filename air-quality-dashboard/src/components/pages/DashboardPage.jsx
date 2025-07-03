import RegionSelector from '../dashboard/RegionSelector';
import MapSection from '../dashboard/MapSection';
import PredictionPanel from '../dashboard/PredictionPanel';
import AQILegend from '../dashboard/AQILegend';

const DashboardPage = () => {
  return (
    <div className="container">
      <RegionSelector />
      <div className="main-content">
        <MapSection />
        <PredictionPanel />
      </div>
      <AQILegend />
    </div>
  );
};

export default DashboardPage;