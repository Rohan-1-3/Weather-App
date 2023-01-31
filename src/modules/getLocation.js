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

const tempType = document.querySelector(".temp-type");
const weatherFunction = ()=>{
    const weatherInfo = async ()=>{
        if(location.value === ""){// condition for blank input
            alert("enter the name of city");
            return false;
        }
        tempType.checked = false;
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
        const bgImage = await getBackGroundGif(`weather ${finalArray.join(" ")}`);
        mainContainer.style.backgroundImage = `url(${bgImage})`;
        // inserting value in the HTML file
        let mainTemp = weatherData.main.temp;
        let feelsTemp = weatherData.main.feels_like;
        let lowTemp = weatherData.main.temp_min;
        let highTemp = weatherData.main.temp_max;
        description.textContent = finalArray.join(" ");
        placeName.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
        placeName.appendChild(newImage);
        humidity.textContent = `Humidity: ${weatherData.main.humidity}`;
        temp.textContent = `${Math.round(mainTemp)}°C`;
        feelsLike.textContent = `Feels Like: ${feelsTemp}°C`;
        windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} Km/hr`;
        minMax.textContent = `Temperature(Min/Max): ${lowTemp}°C/${highTemp}°C`
        // resetting input value
        location.value = "";

        // function for changing the temp from celcius to fahrenheit and vice-versa
        const celciusToFahrenheit = temperature=> ((temperature *  9/5) +32).toFixed(2);
        const fahrenheitToCelcius = temperature => ((temperature -32) * 5/9).toFixed(2);

        tempType.addEventListener("click", ()=>{
            if(tempType.checked === true){
                temp.textContent = `${Math.round(celciusToFahrenheit(mainTemp))}°F`;
                feelsLike.textContent = `Feels Like: ${celciusToFahrenheit(feelsTemp)}°F`;
                minMax.textContent = `Temperature(Min/Max): ${celciusToFahrenheit(lowTemp)}°F/
                ${celciusToFahrenheit(highTemp)}°F`;
                // storing the new value
                mainTemp = Math.round(celciusToFahrenheit(mainTemp));
                feelsTemp = celciusToFahrenheit(feelsTemp);
                lowTemp = celciusToFahrenheit(lowTemp);
                highTemp = celciusToFahrenheit(highTemp);
            }
            else{
                temp.textContent = `${Math.round(fahrenheitToCelcius(mainTemp))}°C`;
                feelsLike.textContent = `Feels Like: ${fahrenheitToCelcius(feelsTemp)}°C`;
                minMax.textContent = `Temperature(Min/Max): ${fahrenheitToCelcius(lowTemp)}°C/
                ${fahrenheitToCelcius(highTemp)}°C`;
                mainTemp = Math.round(fahrenheitToCelcius(mainTemp));
                feelsTemp = fahrenheitToCelcius(feelsTemp);
                lowTemp = fahrenheitToCelcius(lowTemp);
                highTemp = fahrenheitToCelcius(highTemp);
            }
        })
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