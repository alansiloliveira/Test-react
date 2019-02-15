import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_KEY = "34976f22bfca71feff82dac7ad8d25e7";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    temp_min: undefined,
    temp_max: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        temp_min: undefined,
        temp_max: undefined,
        error: "Por favor, insira os valores!"
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <Titles />
              </div>
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                temp_min={this.state.temp_min}
                temp_max={this.state.temp_max}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;