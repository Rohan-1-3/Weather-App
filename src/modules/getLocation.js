import getWeatherInfo, { getCountryFlag } from "./fetchData";

const location = document.querySelector("#location-name");
const submitButton = document.querySelector("#submit");

const description = document.querySelector("#description");
const placeName = document.querySelector("#location-address");
const humidity = document.querySelector("#humidity");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const windSpeed = document.querySelector("#wind");
const minMax = document.querySelector("#min-max");
location.value = "nepal";
const sth = ()=>{
    const weatherInfo = async ()=>{
        const weatherData = await getWeatherInfo(location.value);
        const flag = await getCountryFlag(weatherData.sys.country);
        console.log(weatherData);
        console.log(flag.url)

        description.textContent = weatherData.weather[0].description;
        placeName.textContent = weatherData.name;
        humidity.textContent = `Humidity: ${weatherData.main.humidity}`;
        temp.textContent = `${Math.round(weatherData.main.temp)}°C`;

        feelsLike.textContent = `Feels Like: ${weatherData.main.feels_like}°C`;
        windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} Km/hr`;
        minMax.textContent = `Temperature(Min/Max): ${weatherData.main.temp_min}°C/${weatherData.main.temp_max}°C`
        location.value = "";
    }
    
    submitButton.addEventListener("click", ()=>{
        weatherInfo();
    })

    weatherInfo();
}

export default sth;