import React from "react";
import './Body.css';

import PartlyCloudy from '../assets/clouds/partly-cloudy.png';
import Cloudy from '../assets/clouds/clouds.png';
import ThunderHeavyRain from '../assets/thunderstrom/thunderstorm-heavy-rain.png';
import ThunderLightRain from '../assets/thunderstrom/thunderstorm-light-rain.png';
import Thunder from '../assets/thunderstrom/thunderstorm.png';
import Drizzle from '../assets/drizzle/drizzle.png';

import LightRain from '../assets/rain/light-rain.png';
import ModerateRain from '../assets/rain/moderate-rain.png';
import HeavyRain from '../assets/rain/heavy-intensity-rain.png';
import VeryHeavyRain from '../assets/rain/very-heavy-rain.png';

import sleet from '../assets/snow/sleet.png';
import HeavySnow from '../assets/snow/heavy-snow.png';
import LightSnow from '../assets/snow/light-snow.png';

import Haze from '../assets/haze/haze.png';
import Volcano from '../assets/haze/volcano.png';

import Tornado from '../assets/tornado/tornado.png';

import Clear from '../assets/clear/sun.png';



export default function Body(props){

    const[weather, setWeather] = React.useState("")

    React.useEffect(() =>{
      const apiKey = ""

      const url = props.location ? `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&units=metric&appid=${apiKey}`
                : props.ltlg.lt ? `https://api.openweathermap.org/data/2.5/weather?lat=${props.ltlg.lt}&lon=${props.ltlg.lg}&units=metric&appid=${apiKey}` 
                : `https://api.openweathermap.org/data/2.5/weather?q=New&&delhi&units=metric&appid=${apiKey}`

        fetch(url)
        .then((res) => {
          if(!res.ok){
            throw new Error("Network response was not ok");
        }
          return(res.json())
        })
        .then(data => setWeather(data))
    },[props.location, props.ltlg.isAllowed])
  
    function image(){   


        switch(weather.weather ? weather.weather[0].description : null){
        //    clouds
            case 'few clouds': return PartlyCloudy 
            case 'scattered clouds': return Cloudy
            case 'broken clouds': return PartlyCloudy
            case 'overcast clouds': return PartlyCloudy

            // thunderstorm
            case 'thunderstorm with light rain': return ThunderLightRain
            case 'thunderstorm with rain': return ThunderLightRain
            case 'thunderstorm with heavy rain': return ThunderHeavyRain
            case 'light thunderstorm': return Thunder
            case 'thunderstorm': return Thunder
            case 'heavy thunderstorm': return Thunder
            case 'ragged thunderstorm': return Thunder
            case 'thunderstorm with light drizzle': return ThunderLightRain
            case 'thunderstorm with drizzle': return ThunderLightRain
            case 'thunderstorm with heavy drizzle': return ThunderLightRain

            // drizzle
            case 'light intensity drizzle': return Drizzle
            case 'drizzle': return Drizzle
            case 'heavy intensity drizzle': return Drizzle
            case 'light intensity drizzle rain': return Drizzle
            case 'drizzle rain': return Drizzle
            case 'heavy intensity drizzle rain': return Drizzle
            case 'shower rain and drizzle': return Drizzle
            case 'heavy shower rain and drizzle': return Drizzle
            case 'shower drizzle': return Drizzle

            // rain
            case 'light rain': return LightRain
            case 'moderate rain': return ModerateRain
            case 'heavy intensity rain': return HeavyRain
            case 'very heavy rain': return HeavyRain
            case 'extreme rain': return VeryHeavyRain
            case 'freezing rain': return sleet
            case 'light intensity shower rain': return LightRain
            case 'shower rain': return ModerateRain
            case 'heavy intensity shower rain': return HeavyRain
            case 'ragged shower rain': return VeryHeavyRain

            // snow
            case 'light snow': return LightSnow
            case 'snow': return HeavySnow
            case 'heavy snow': return HeavySnow
            case 'sleet': return sleet
            case 'light shower sleet': return sleet
            case 'shower sleet': return sleet
            case 'rain and snow': return sleet
            case 'light shower snow': return LightSnow
            case 'shower snow': return HeavySnow
            case 'heavy shower snow': return HeavySnow

            // mist
            case 'mist': return Haze
            case 'smoke': return Haze
            case 'haze': return Haze
            case 'sand/dust whirls': return Haze
            case 'fog': return Haze
            case 'sand': return Haze
            case 'dust': return Haze
            case 'volcanic ash': return Volcano
            case 'squalls': return Haze
            case 'tornado': return Tornado

            // clear sky
            case 'clear sky': return Clear


            default: return PartlyCloudy
        }
    }
  
    return(
        <div className="bodyContainer">
            <div className='bodyLocation'>{props.location}</div>
            <div className="top">
                <div className="image">
                    <img src={image()} alt="image" />
                    {weather.main ? <p className="temp">{weather.main.temp.toFixed()}°C</p> : null}
                </div>
               
                {weather.weather ? <p className="weather">{weather.weather[0].description}</p> : null}

            </div>
            
            <div className="bottom">
                {weather.main ? <p className="grid-item">Feels Like {weather.main.feels_like.toFixed()}°C</p> : null}
                {weather.main ? <p className="grid-item">Humidity {weather.main.humidity.toFixed()}%</p> : null}
                {weather.main ? <p className="grid-item">Pressure {weather.main.pressure}mBar</p> : null}
                
            </div>

        </div>
    )
    

}