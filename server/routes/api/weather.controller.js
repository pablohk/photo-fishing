require('dotenv').config();
const express  = require('express');
const router   = express.Router();
const loggedIn = require('../../utils/isAuthenticated');

const weather = require('npm-openweathermap');
const APY_KEY = process.env.APY_KEY_WEATHER;
const kelvin=273.15;

weather.api_key = APY_KEY;
weather.temp = 'c';

/*   Get Today weather */
router.post('/today', loggedIn, (req, res, next) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  // const lat="40.400825";
  // const lon="-3.710610";
  const location = { latitude : lat, longitude : lon};

  const BASEURL=`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APY_KEY}`;
  weather.get_weather_custom('coordinates', location, 'weather')
    .then((data)=>{
      let weather ={
        longitude: lon,
        latitude:lat,
        temp_min: Math.floor(data.main.temp_min - kelvin),
        temp_max: Math.floor(data.main.temp_max - kelvin),
        icon: data.weather[0].icon,
        humidity: data.main.humidity ,
        wind: data.wind.speed,
        description: data.weather[0].description,
        name: data.name
      }
      res.status(200).json(weather);})
    .catch( (err)=>{res.status(500).json(err);})
});

/*   Get Forecast weather */
router.post('/forecast', loggedIn, (req, res, next) => {
  const lat = req.body.lat;
  const lon = req.body.lon;
  // const lat="40.400825";
  // const lon="-3.710610";
  const location = { latitude : lat, longitude : lon};
  const BASEURL=`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APY_KEY}`;
  let forecast =[];
  let daily ={};
  let prediction= {"day":'', "hour":''};
  let aux=''

  weather.get_weather_custom('coordinates', location, 'forecast')
    .then((data)=>{
      daily.longitude = lon;
      daily.latitude = lat;

      data.forEach( e=>{
        aux=e.dt_txt.split(" ");
        if(aux[1].split(":")[0] == "12"){
          prediction.day =aux[0];
          prediction.hour=aux[1].split(":")[0];
          daily.temp_min = Math.floor(e.main.temp_min - kelvin);
          daily.temp_max = Math.floor(e.main.temp_max - kelvin);
          daily.icon = e.weather[0].icon;
          daily.humidity = e.main.humidity ;
          daily.wind = e.wind.speed;
          daily.description = e.weather[0].description;
          forecast.push({ "prediction": prediction ,  "daily": daily });
          prediction={};
          daily={};
        }
      });

      res.status(200).json(forecast);})
    .catch( (err)=>{res.status(500).json(err);})
});

module.exports = router;
