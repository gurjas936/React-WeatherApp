import React from 'react'
import './App.css'
import Input from './components/Input'
import Body from './components/Body'
import Location from './components/Location'
import PartlyCloudy from './assets/clouds/partly-cloudy.png';
import ThunderHeavyRain from './assets/thunderstrom/thunderstorm-heavy-rain.png';
import ThunderLightRain from './assets/thunderstrom/thunderstorm-light-rain.png';
import Thunder from './assets/thunderstrom/thunderstorm.png';
import Drizzle from './assets/drizzle/drizzle.png';

import LightRain from './assets/rain/light-rain.png';
import ModerateRain from './assets/rain/moderate-rain.png';
import HeavyRain from './assets/rain/heavy-intensity-rain.png';
import VeryHeavyRain from './assets/rain/very-heavy-rain.png';

import sleet from './assets/snow/sleet.png';
import HeavySnow from './assets/snow/heavy-snow.png';
import LightSnow from './assets/snow/light-snow.png';

import Haze from './assets/haze/haze.png';
import Volcano from './assets/haze/volcano.png';

import Tornado from './assets/tornado/tornado.png';

import Clear from './assets/clear/sun.png';


function App() {

  const[city, setCity] = React.useState("")
  const[ltlg, setLtlg] = React.useState({})


  function setLocation(data){
    setCity(data)
    // console.log(data)
  }

  function fromLocation(lt, lg, isAllowed){
    setLtlg({lt,lg, isAllowed})
  }

  function locationAllowed(isAllowed){


  }

  return (


    <div> 
      <Location fromLocation={fromLocation} />
      <div className="box">
        <Input setLocation={setLocation}/>
        <Body location={city} ltlg={ltlg}/>
      </div>
    </div>
   
  )
}

export default App
