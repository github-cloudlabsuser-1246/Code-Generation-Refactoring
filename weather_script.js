import axios from 'axios';
import readline from 'readline';

// Fetch weather data from OpenWeatherMap API
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter city name: ', (city) => {
    const apiKey = 'c9dc503067be26864b7a76c61caacb69';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            console.log(`Weather in ${city}:`);
            console.log(`Temperature: ${data.main.temp}°C`);
            console.log(`Humidity: ${data.main.humidity}%`);
            console.log(`Weather: ${data.weather[0].description}`);
        })
        .catch(error => console.error('Error fetching weather data:', error))
        .finally(() => rl.close());
});