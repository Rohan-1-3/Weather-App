export default async function getWeatherInfo(){
    
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=chamati&units=metric&appid=d02ff9591aed8d0a11368b857174ac68",
    {mod : "cors"}
    )
    const locationData = await response.json();
    return locationData;
}

const getCountryFlag = async ()=>{
    const country = await getWeatherInfo().then(locationData =>locationData.sys.country);
    const countryFlag = await fetch(`https://countryflagsapi.com/png/${country}`);
    return countryFlag;
}

export {getCountryFlag}
