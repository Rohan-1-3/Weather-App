/* eslint-disable no-alert */
export default async function getWeatherInfo(location){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d02ff9591aed8d0a11368b857174ac68`,
    {mod : "cors"}
    )
    const locationData = await response.json();
    if(locationData.cod !== 200){
        alert("No such City or Country!");
        return false;
    }
    return locationData;
}
