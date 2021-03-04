import React from 'react'

function WeatherDay({day, setSelectedDay, temperatureUnit}) {

    const unit = temperatureUnit === 'C'
                ?   '°' + temperatureUnit
                :   temperatureUnit;

    return (
        <div className="weather-day-container" onClick={() => setSelectedDay(day)}>
            <h1>{day.day}</h1>
            <br/>
            <h3>{day.temp + " " + unit}</h3>
        </div>
    )
}

export default WeatherDay
