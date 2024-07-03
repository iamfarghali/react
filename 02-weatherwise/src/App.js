import { useEffect, useState } from "react";

const API_KEY = "32f003e13ef8671797d9841f0ae85bf7";

export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [location, setLocation] = useState("cairo");
  const [coords, setCoords] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeLocation(location) {
    setLocation(location);
  }

  // Get coords
  useEffect(() => {
    const controller = new AbortController();

    async function fetchLocationCoords() {
      try {
        const coordsUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;
        const res = await fetch(coordsUrl, { signal: controller.signal });
        const data = await res.json();

        if (data.length === 0) throw new Error("Invalid Input");

        // Add weather's location info
        setWeatherData({
          location: location,
          state: data[0]?.state,
          country: data[0]?.country,
        });

        setCoords({
          lat: data[0]?.lat,
          lon: data[0]?.lon,
        });
      } catch (err) {
        if (!controller.signal.aborted) console.error(err);
      }
    }

    if (!location || location.length < 2) return;

    fetchLocationCoords();

    // Clean up
    return () => {
      controller.abort();
    };
  }, [location]);

  // Get location's weather data
  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        // Handle Error
        if (data.cod == 400) throw new Error("Invalid Input");

        const obj = {
          temp: data["main"].temp,
          tempMax: data["main"].temp_max,
          tempMin: data["main"].temp_min,
          feelsLike: data["main"].feels_like,
          description: data["weather"][0].description,
          icon: `https://openweathermap.org/img/wn/${data["weather"][0].icon}@4x.png`,
        };

        setWeatherData((weatherData) => ({ ...weatherData, ...obj }));
      } catch (err) {
        console.error(err.message);
      }
    }

    if (Object.keys(coords).length === 0) return;

    fetchWeatherData();
  }, [coords]);

  // Get location's forecast data
  useEffect(() => {
    setForecastData({});
    setIsLoading(true);

    const date = new Date();
    const todayDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];

    async function fetchForecastData() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod == 400) throw new Error("Invalid Input");

        const fcData = {};
        for (let i = 0; i < data["list"].length; i++) {
          const item = data["list"][i];
          let [day, time] = item["dt_txt"].split(" ");

          if (day === todayDate) continue;

          if (!fcData[day]) fcData[day] = {};

          fcData[day][time] = {
            temp: item["main"].temp,
            tempMax: item["main"].temp_max,
            tempMin: item["main"].temp_min,
            feelsLike: item["main"].feels_like,
            description: item["weather"][0].description,
            icon: `https://openweathermap.org/img/wn/${item["weather"][0].icon}@2x.png`,
          };
        }

        setForecastData(fcData);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (Object.keys(coords).length === 0) return;

    fetchForecastData();
  }, [coords]);

  return (
    <div className="container">
      <div className="left-wrapper">
        <div className="card">
          <div className="card__header">
            <SearchBar
              location={location}
              onLocationChange={handleChangeLocation}
            />
          </div>
          <div className="card__body">
            {isLoading ? (
              <Loader />
            ) : (
              <WeatherDisplay weatherData={weatherData} />
            )}
          </div>
        </div>
      </div>
      {!isLoading &&
        (Object.keys(forecastData).length === 0 ? (
          ""
        ) : (
          <ForecastDisplay forecastData={forecastData} />
        ))}
    </div>
  );
}

// Components
function SearchBar({ location, onLocationChange }) {
  return (
    <header>
      <input
        type="text"
        name="location"
        value={location}
        placeholder="Country or location"
        onChange={(e) => onLocationChange(e.target.value)}
      />
    </header>
  );
}

function WeatherDisplay({ weatherData }) {
  const markup =
    Object.keys(weatherData).length <= 3 ? (
      "Error"
    ) : (
      <>
        <h2 className="card__title">
          {weatherData.location}, {weatherData.state}, {weatherData.country}
        </h2>

        <div className="card__temps">
          <p>
            <span>Temp:</span> {weatherData.temp} &deg;C
          </p>

          <p>
            <span>Feels Like:</span> {weatherData.feelsLike} &deg;C
          </p>
        </div>

        <div className="img-container">
          <img src={weatherData.icon} alt="weather icon" />
        </div>

        <p className="card__description">{weatherData.description}</p>
      </>
    );

  return markup;
}

function ForecastDisplay({ forecastData }) {
  function getDayDate(day) {
    return new Date(day).toUTCString().split("00")[0];
  }
  return (
    <div className="right-wrapper">
      {Object.keys(forecastData).map((day, i) => (
        <div className="day" key={i}>
          <h2>{getDayDate(day)}</h2>

          {Object.keys(forecastData[day]).map((time, j) => (
            <ul className="day__times" key={j}>
              <li>{`${time.split(":")[0]}:${time.split(":")[1]}`}</li>
              <li>{forecastData[day][time]["description"]}</li>
              <li>{forecastData[day][time]["temp"]}</li>
              <li>{forecastData[day][time]["feelsLike"]}</li>
              <li>
                <img src={forecastData[day][time]["icon"]} alt="weather icon" />
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}
