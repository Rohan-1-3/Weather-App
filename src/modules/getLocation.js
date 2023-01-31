/* eslint-disable no-alert */
import getWeatherInfo, { getBackGroundGif, getCountryFlag } from "./fetchData";

const location = document.querySelector("#location-name");
const submitButton = document.querySelector("#submit");
const mainContainer = document.querySelector(".main");

const description = document.querySelector("#description");
const placeName = document.querySelector("#location-address");
const humidity = document.querySelector("#humidity");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const windSpeed = document.querySelector("#wind");
const minMax = document.querySelector("#min-max");
location.value = "nepal";// initial value for weather display
const weatherFunction = ()=>{
    const weatherInfo = async ()=>{
        if(location.value === ""){// condition for blank input
            alert("enter the name of city");
            return false;
        }
        // fetching data from fetchData.js
        const weatherData = await getWeatherInfo(location.value);
        // capitalize 1st word
        const descriptionCapital = weatherData.weather[0].description.split(" ");
        const finalArray = [];
        for(let i =0; i<descriptionCapital.length;i+=1){
            finalArray[i] = descriptionCapital[i][0].toUpperCase() + descriptionCapital[i].substr(1).toLowerCase();
        }
        // flag of the country
        const newImage = new Image();
        const newImageLink = await getCountryFlag((weatherData.sys.country).toLowerCase());
        console.log(newImageLink)
        newImage.classList.add("flag");
        newImage.src = newImageLink;

        // getting a random gif for background according to description 
        const bgImage = await getBackGroundGif(finalArray.join(" "));
        mainContainer.style.backgroundImage = `url(${bgImage})`;
        // inserting value in the HTML file
        description.textContent = finalArray.join(" ");
        placeName.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        placeName.appendChild(newImage);
        humidity.textContent = `Humidity: ${weatherData.main.humidity}`;
        temp.textContent = `${Math.round(weatherData.main.temp)}°C`;
        feelsLike.textContent = `Feels Like: ${weatherData.main.feels_like}°C`;
        windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} Km/hr`;
        minMax.textContent = `Temperature(Min/Max): ${weatherData.main.temp_min}°C/${weatherData.main.temp_max}°C`
        // resetting input value
        location.value = "";
        return 0;
    }
    
    submitButton.addEventListener("click", ()=>{
        weatherInfo();
    });
    // enter key initiates the function
    location.addEventListener("keydown", (e)=>{
        if(e.keyCode === 13){
            weatherInfo();
        }
    })

    weatherInfo();
}

export default weatherFunction;