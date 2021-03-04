import React from 'react';
import WeatherDay from './WeatherDay';

function WeatherList({days, setSelectedDay, temperatureUnit}) {
    return (
        <div className="weather-list-container">
            {
                days.map((day, index) => 
                <WeatherDay key={day.day + index} 
                    day={day} setSelectedDay={setSelectedDay} temperatureUnit={temperatureUnit}
                 />)
            }
        </div>
    )
}

export default WeatherList
