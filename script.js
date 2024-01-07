function reload() {
   location.reload();
}


const getWeather = async (city) => {
   const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
   const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '26d5a20749msh0145fa38b3eed93p18244djsn089d34c0a6ca',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
   };
  
   
   
   try {
      const response = await fetch(url, options);
      const result = await response.json(); // change this line
      console.log(result);
      cityname.innerHTML= city
      // change these lines to access the properties correctly
      cloud_pct.innerHTML = result.cloud_pct
      temp.innerHTML = result.temp
      // temp2.innerHTML = result.temp2
      feels_like.innerHTML = result.feels_like
      humidity.innerHTML = result.humidity
      // humidity2.innerHTML = result.humidity2
      // wind_speed2.innerHTML = result.wind_speed2      // min_temp.innerHTML = result.min_temp
      // max_temp.innerHTML = result.max_temp
      wind_speed.innerHTML = result.wind_speed
      wind_degrees.innerHTML = result.wind_degrees  
      // sunrise.innerHTML = result.sunrise
      // sunset.innerHTML = result.sunset

   } catch (error) {
      console.error(error);
   }
 };
  
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi")