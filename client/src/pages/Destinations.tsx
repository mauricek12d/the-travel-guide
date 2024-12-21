
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface WeatherData {
  temperature: string;
  condition: string;
  icon: string;
}

const destinations = {
  capeMay: {
    name: 'Cape May',
    description: 'Cape May is one of the most picturesque and historic towns in New Jersey...',
    image: 'https://example.com/cape-may.jpg',
    chamberLink: 'https://www.capemaychamber.com/',
  },
  atlanticCity: {
    name: 'Atlantic City',
    description: 'Atlantic City is known for its iconic boardwalk and vibrant nightlife...',
    image: 'https://example.com/atlantic-city.jpg',
    chamberLink: 'https://www.atlanticcitynj.com/',
  },
  highPoint: {
    name: 'High Point',
    description: 'High Point State Park is the highest point in New Jersey...',
    image: 'https://example.com/high-point.jpg',
    chamberLink: 'https://www.state.nj.us/dep/parksandforests/parks/highpoint.html',
  },
  wildwood: {
    name: 'Wildwood',
    description: 'Wildwood is a popular vacation destination known for its beaches and boardwalk...',
    image: 'https://example.com/wildwood.jpg',
    chamberLink: 'https://wildwoodsnj.com/',
  },
  longbeachIsland: {
    name: 'Long Beach Island',
    description: 'Long Beach Island is a barrier island off the coast of New Jersey...',
    image: 'https://example.com/long-beach-island.jpg',
    chamberLink: 'https://www.visitlbiregion.com/',
  },
};

const Destination: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const destination = name ? destinations[name as keyof typeof destinations] : null;

  useEffect(() => {
    const fetchWeather = async () => {
      if (!destination) return;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${destination.name}&units=imperial&appid=YOUR_API_KEY`
        );
        const data = await response.json();
        setWeather({
          temperature: `${data.main.temp}°F`,
          condition: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [destination]);

  if (!destination) return <h1>Destination not found</h1>;

  // Inline styles as objects
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const linkStyle = {
    display: 'block',
    margin: '20px 0',
    color: '#007bff',
    textDecoration: 'none',
  };

  const weatherStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: '#f9f9f9',
  };

  return (
    <div style={containerStyle}>
      <h1>{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        style={imageStyle}
      />
      <p>{destination.description}</p>
      <a
        href={destination.chamberLink}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Visit {destination.name} Chamber of Commerce
      </a>
      {weather ? (
        <div style={weatherStyle}>
          <h3>Current Weather</h3>
          <p>
            <strong>Temperature:</strong> {weather.temperature}
          </p>
          <p>
            <strong>Condition:</strong> {weather.condition}
          </p>
          <img src={weather.icon} alt={weather.condition} />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Destination;
