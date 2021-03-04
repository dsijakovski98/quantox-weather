import '../../styles/component_styles/weather_section/weather_section.css';
import React from 'react';
import WeatherList from "../WeatherList";
import WeatherWidgetContainer from "../WeatherWidget/WeatherWidgetContainer";

function WeatherSectionPresenter(props) {
    const {
        days,

        selectedDay,
        setSelectedDay,

        temperatureUnit,
        setTemperatureUnit,

        windUnit,
        setWindUnit
    } = props;

    return (
        <div className="weather-container">
            <WeatherList days={days} setSelectedDay={setSelectedDay} temperatureUnit={temperatureUnit}/>
            <WeatherWidgetContainer day={selectedDay} />
        </div>
    )
}

export default WeatherSectionPresenter
