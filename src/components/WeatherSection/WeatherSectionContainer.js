import React, { useState } from 'react';
import WeatherSectionPresenter from "./WeatherSectionPresenter";
import getWeatherData from "../../assets/weatherData";

function WeatherSectionContainer() {
    const { days, tempUnit, windSpeedUnit } = getWeatherData();
    
    const [selectedDay, setSelectedDay] = useState(null);
    const [temperatureUnit, setTemperatureUnit] = useState(tempUnit);
    const [windUnit, setWindUnit] = useState(windSpeedUnit);

    return (
        <WeatherSectionPresenter
            days={days}

            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            
            temperatureUnit={temperatureUnit}
            setTemperatureUnit={setTemperatureUnit}
            
            windUnit={windUnit}
            setWindUnit={setWindUnit}
        />
    )
}

export default WeatherSectionContainer
