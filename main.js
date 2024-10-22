document.getElementById("getWeather").addEventListener('click', function() {
    const city = document.getElementById("city").value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Input a city first");
    }
});

function fetchWeather(city) {
    const API_KEY = "f5f80d6f1c61ad7fe7a204974f45dce5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'data');
                if (data.cod === 200) {
                    const weatherInfo = `
                        <h3>${data.name}</h3>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Feels like: ${data.main.feels_like}°C</p>
                        <p>Weather condition: ${data.weather[0].description}</p>
                        <p>Wind speed: ${data.wind.speed}m/s</p>
                    `;
                    document.getElementById('weather-result').innerHTML = weatherInfo;
                } else {
                    document.getElementById('weather-result').innerHTML = `<p>City is not found</p>`;
                }
            });
    } catch(error) {
        document.getElementById("weather-result").innerHTML = `<p>Something went wrong!</p>`;
    }
}