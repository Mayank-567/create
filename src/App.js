import React from 'react';

import './App.css';
import Weather from './component/Weather';
import "weather-icons/css/weather-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./component/Form"
// import Welcome from "./component/greet_class"

// const API_key="05763b18425a3d6373f8a373e1e30b3c";
class App extends React.Component{
  // state={}
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:undefined,
      error:false



    };
    //  

    this.icons={
      Thunderstorm:"wi-thunderstorm",
      Drizzle:"wi-sleet",
      Rain:"wi-storm-showers",
      Snow:"wi-snow",
      Atmosphere:"wi-fog",
      Clear:"wi-day-sunny",
      Clouds:"wi-day-fog",

    }
  }

  get_WeatherIcon(icons,ID){
    switch(true){
      case ID >=200 && ID <= 232:
        this.setState({icon:this.icons.Thunderstorm})
        break;
      case ID >=300 && ID <= 321:
        this.setState({icon:this.icons.Drizzle})
        break;
      case ID >=500 && ID <= 531:
        this.setState({icon:this.icons.Rain})
        break;
      case ID >=600 && ID <= 622:
        this.setState({icon:this.icons.Snow})
        break;
      case ID >=701 && ID <= 781:
        this.setState({icon:this.icons.Atmosphere})
        break;
      case ID ===800:
        this.setState({icon:this.icons.Clear})
        break;
      case ID >=801 && ID <=804:
        this.setState({icon:this.icons.Clouds})
        break;
    }
  }
  calcelsius(temp){
    let cell=Math.floor(temp-273.15);
    return cell
  }

  getWeather = async(e)=>{
    e.preventDefault()

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country){
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=05763b18425a3d6373f8a373e1e30b3c`
      );
      const response= await api_call.json();
      console.log(response)
  
      this.setState({
        city:`${response.name}, ${response.sys.country}`,
        // country:response.sys.country,
        celsius:this.calcelsius(response.main.temp),
        temp_min:this.calcelsius(response.main.temp_min),
        temp_max:this.calcelsius(response.main.temp_max),
        description:response.weather[0].description,
        
        
  
  
      })
      this.get_WeatherIcon(this.icons,response.weather[0].id)
      console.log(response.weather.main)
    // };
  }
    else{
      this.setState({error:true})
      alert("Fill the Require field")
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form loadweather={this.getWeather}/>
        <Weather 
        city={this.state.city} 
        country={this.state.country}
        celsius={this.state.celsius}
        temp_max={this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        icons={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
