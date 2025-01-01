import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationsList.css';
import LavImage from '../assets/Lav.jpg';

const destinations = {
  capemay: {
    name: 'Cape May',
    description: 'The City of Cape May is a city at the southern tip of Cape May Peninsula in Cape May County, New Jersey, where the Delaware Bay meets the Atlantic Ocean. It is one of the country’s oldest vacation resort destinations.',
    chamberLink: 'https://www.capemaychamber.com/',
  },
  atlanticcity: {
    name: 'Atlantic City',
    description: "Atlantic City is a resort city in Atlantic County, New Jersey, known for its casinos, boardwalk, and beaches. It's a popular destination for nightlife, shopping, and entertainment.",
    chamberLink: 'https://www.atlanticcitynj.com/',
  },
  longbeachisland: {
    name: 'Long Beach Island',
    description: 'a barrier island in Ocean County, New Jersey, known for its white sandy beaches, family-friendly environment, and proximity to major population centers such as New York City and Philadelphia.',
    chamberLink: 'https://visitlbiregion.com/',
  },
};

const DestinationsList: React.FC = () => {
  return (
    <div
      className="destinations-page"
      style={{ backgroundImage: `url(${LavImage})` }}
    >
      <h1>Destinations</h1>
      <ul className="destinations-grid">
        {Object.entries(destinations).map(([key, destination]) => (
          <li key={key} className="destination-item">
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <Link to={`/destinations/${key}`}>Learn more about {destination.name}</Link>
          </li>
        ))}
      </ul>

      <div className="bottom-text">
        <h2>Lavallette, New Jersey</h2>
      </div>
    </div>
  );
};

export default DestinationsList;
