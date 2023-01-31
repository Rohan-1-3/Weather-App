import getWeatherInfo, { getCountryFlag } from "./modules/fetchData";

getWeatherInfo()
.then(locationData=> console.log(locationData))
.catch(err=> console.log(err.message));

getCountryFlag();