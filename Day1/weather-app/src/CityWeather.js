import React, {Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import { Link } from 'react-router-dom';


// CLASS SYNTAX - AVOID THIS, NEW WAY IS FUNCTIONAL SYNTAX
// class CityWeather extends Component {
//     render(){
//         return (
//             <div>My Weather</div>
//         );
//     }
// }

function Hero() {
    return (<div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>My Weather App - React-Redux</h1>
        <p>Overview - Weather Widget</p>
      </div>
    </div>);
  }

function Footer() {
    return (<div id="footer" className="row">
      <div className="col-12">
          {/* <p className="text-muted credit"><br/>
            All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
          </p> */}
      </div>
    </div>);
  }


/*
    city: 'Miami',
    currentTemp: '100',
    lowTemp: '70',
    highTemp: '102',
    humidity: '48%',
    imageURL: '/file.jpg'
*/
function WeatherSummary(cities){
    return (
        <div className="weatherList" style={{backgroundColor: "white"}}>       
            {cities.cityData.map(c =>     
                <div className="col-6">
                    <br/>
                    City: {c.city}<br/>
                    Current Temp: {c.currentTemp} <br/>
                    Low: {c.lowTemp} <br/>
                    High: {c.highTemp} <br/>
                    Humidity: {c.humidity} <br/>
            </div>)}
        </div>);
}

function CityWeather (cityData) {
    return (
        <div className="container-fluid">
        <Hero/>
        <WeatherSummary {...cityData} />
        <p><br/><Link to="/add">Add a City</Link></p>
        <Footer/>
        </div>
    );
}

export default CityWeather;