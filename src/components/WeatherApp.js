import React, { useEffect, useState } from "react"
import "./weatherApp.css";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  const [searchCityState, setSearchCityState] = useState("");

  useEffect(() => {
    fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${searchCityState}&appid=75d30f4f1cfe044e81bb37f82ea1b316&units=metric` 

    )
      .then((res) => res.json())
      .then((results) => {
        // console.log(results);
        setWeatherData(results);
      })
      .catch((error) => {
        console.log('orrr',error);
      });
  }, [searchCityState]);

  const searchCity = (e) => {
    setSearchCityState(cityName);
    console.log(cityName)
  };
  return (
    <div className="MainBox">
      <h1>WeatherApp</h1>
      <div
        className="d-flex justify-content-center my-5" 
         style={{ flexDirection: "column", alignItems: "center" }} 
       > 
        <input
          type="text"
          value={cityName}
          className="form-group form-control w-50"
          placeholder="Enter Your City Name"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={searchCity} className="btn btn-info">
        {/* <button onClick={searchCity} className="button"> */}

          search
        </button>
      </div>
      {/* <button>CALL API</button> */}
      <div className="listBox">
      <li>City: {weatherData && weatherData.name} </li>
      <li>Temp: {weatherData && weatherData.main && weatherData.main.temp} </li>
      <li className="">Condition:{weatherData&&weatherData.weather&&weatherData.weather[0]&&weatherData.weather[0].main}</li>
       {/* <li> Condition:{" "}
        {weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].main}
      </li> */}
      </div>
    </div>
  );
};

export default WeatherApp;