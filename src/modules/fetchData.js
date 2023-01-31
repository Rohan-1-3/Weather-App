/* eslint-disable no-alert */
export default async function getWeatherInfo(location){
    // fetching locations weather info
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d02ff9591aed8d0a11368b857174ac68`,
    {mode : "cors"}
    )
    const locationData = await response.json();
    if(locationData.cod !== 200){// condition for unavailable city
        alert("No such City or Country!");
        return false;
    }
    return locationData;
}

const getCountryFlag = async (country)=>{
    const flagImage = `https://flagcdn.com/w20/${country}.png`
    return flagImage;
}

const getBackGroundGif = async (GIF)=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=eBhEdHXogjan6ex7lTVAjDCUmubhMM6C&s=${GIF}`, 
                    {mode: "cors"}
          )
    const imagesData = await response.json();
    const imgLink = imagesData.data.images.original.url;
    return imgLink;
}

export {getCountryFlag, getBackGroundGif}
