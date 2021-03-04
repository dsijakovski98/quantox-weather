import React from 'react';
import NoDay from './NoDay';
import WidgetDay from './WidgetDay';

function WeatherWidgetContainer({day}) {


    return (
        <div className="weather-widget-container">
            {
                day ? <WidgetDay day={day} /> : <NoDay />
            }
        </div>
    )
}

export default WeatherWidgetContainer
