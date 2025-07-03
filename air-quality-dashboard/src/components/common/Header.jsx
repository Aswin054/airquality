import Navbar from './Navbar';
import useDateTime from '../../hooks/useDateTime';

const Header = () => {
  const dateTime = useDateTime();

  return (
    <header>
      <div className="container header-content">
        <div className="logo">Nationwide <span>Air Quality</span> Prediction</div>
        <Navbar />
        <div className="datetime">{dateTime}</div>
      </div>
    </header>
  );
};

export default Header;