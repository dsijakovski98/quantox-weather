const getWeatherData = () => {
    const weatherData = {
        tempUnit: 'C',
        windSpeedUnit: 'm/s',
        days: [
            { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny' },
            { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'cloudy' },
            
        ]
    };

    return weatherData;
}

export default getWeatherData;