import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Destinations.css';
import ACImage from '../assets/AC.jpg';
import CapeMayImage from '../assets/Cape May.jpg';
import LBIImage from '../assets/lighthouse.jpg';

interface WeatherData {
  temperature: string;
  condition: string;
}

const destinations = {
  capemay: {
    name: 'Cape May',
description: 'Cape May County’s rich history spans centuries from Native Americans to the arrival of the whaler yeomen, into the Victorian age, through world wars, to Harriet Tubman, to the Doo Wop era and beyond. Discover the Jersey Cape’s history at unique attractions located in venues throughout the County– and have fun doing it!',
    chamberLink: 'https://www.capemaychamber.com/',
    coordinates: { lat: 38.9351, lon: -74.9060 },
  },
  atlanticcity: {
    name: 'Atlantic City',
    description: 'Atlantic City is the seaside gaming and resort capital of the East Coast, hosting over 27 million visitors a year, making it one of the most popular tourist destinations in the United States.Construction on Atlantic City’s world-famous Boardwalk began in 1870, and from then on it has become an America icon. Stroll along the Boardwalk and enjoy ocean views on one side and shopping on the other, ranging from high-end retail to saltwater taffy shops.More than $1.7 billion in investments in recent years has enhanced Atlantic City’s magnetic appeal with world-renowned casinos resorts and hotels, big name restaurants featuring famous chefs, unique attractions, headline entertainment, luxurious spas, championship golf, elite shopping and more',
    chamberLink: 'https://www.atlanticcitynj.com/',
    coordinates: { lat: 39.3643, lon: -74.4229 },
  },
  longbeachisland: {
    name: 'Long Beach Island',
    description: 'Long Beach Island is a barrier island and summer colony along the Atlantic Ocean coast of Ocean County, New Jersey in the United States. Aligned north-south, the northern portion is generally slightly higher end low density residential, whereas the southern portion possesses higher density housing and considerable commercial development.',
    chamberLink: 'https://visitlbiregion.com/',
    coordinates: { lat: 39.5934, lon: -74.3735 },
  },
};

const Destination: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const destinationKey = name?.toLowerCase().replace(/\s+/g, '') || '';
  const destination = destinationKey ? destinations[destinationKey as keyof typeof destinations] : null;

  // Dynamically determine the background image
  const backgroundImage = destinationKey === 'atlanticcity'
    ? ACImage // Custom background for Atlantic City
    : destinationKey === 'longbeachisland'
    ? LBIImage // Custom background for Long Beach Island
    : CapeMayImage; // Default background for other destinations

  useEffect(() => {
    if (destination) {
      const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        try {
          const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
          if (!API_KEY) {
            setError('API key is missing. Please configure your .env file.');
            return;
          }

          const { lat, lon } = destination.coordinates;
          const requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

          console.log('Fetching weather from:', requestUrl);

          const response = await fetch(requestUrl);
          if (!response.ok) {
            setError(`Failed to fetch weather data: ${response.status} ${response.statusText}`);
            return;
          }

          const data = await response.json();
          console.log('Full API Response:', data);

          setWeather({
            temperature: data?.main?.temp
              ? `${data.main.temp.toFixed(1)}°F`
              : 'N/A',
            condition: data?.weather?.[0]?.description || 'Unknown',
          });
        } catch (err) {
          console.error('Error fetching weather data:', err);
          setError('Failed to load weather data. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [destination]);

  if (!destination) {
    return (
      <div>
        <h1>Destination not found</h1>
        <a href="/destinations">Back to Destinations</a>
      </div>
    );
  }

  return (
    <div
      className="destination-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background image
    >
      <div className="destination-content">
        <h1>{destination.name}</h1>
        <p>{destination.description}</p>
        <a
          href={destination.chamberLink}
          target="_blank"
          rel="noopener noreferrer"
          className="destination-link"
        >
          Visit {destination.name} Chamber of Commerce
        </a>

        {loading ? (
          <div className="spinner">Loading...</div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : weather ? (
          <div className="destination-weather">
            <p>
              <strong>Temperature:</strong> {weather.temperature}
            </p>
            <p>
              <strong>Condition:</strong> {weather.condition}
            </p>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>

      {/* Add Washington Street Mall text for Cape May */}
    {destinationKey === 'capemay' && (
      <div className="bottom-text">
        <h2>Washington Street Mall</h2>
      </div>
    )}

    {/* Add Barnegat Lighthouse text for LBI */}
    {destinationKey === 'longbeachisland' && (
      <div className="bottom-text">
        <h2>Barnegat Lighthouse</h2>
      </div>
    )}
    </div>
  );
};

export default Destination;


