import axios from 'axios';

// Fetch weather data from OpenWeatherMap API

const apiKey = '4fc40efab9b03207d68c3ea6a8f54ab1';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(`Weather in ${city}:`);
            console.log(`Temperature: ${data.main.temp}K`);
            console.log(`Humidity: ${data.main.humidity}%`);
            console.log(`Weather: ${data.weather[0].description}`);
        })
        .catch(error => console.error('Error fetching weather data:', error.message));
    