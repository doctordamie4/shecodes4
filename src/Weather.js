import React from "react";
import "./weather.css";


export default function Weather() {

  return (
      <div>
    <div class="container">
    <div class="card whole">
      <div class="card-body">
        <div class="row">
        <form id="search-form">
          <div class="col-10">
          <input 
          type="search"
          placeholder="search city 🔍"
          class="form-control"
          id="search-input"
        />
        </div>
        </form>
        <div class="col-0.5">
          <span class = "button">
          <button type="submit" id="press" class="btn btn-info">search</button>
        </span>
        </div>
      </div>
        <br/>
        <form id="current-place">
          <div class="col-6">
          <input 
            type="button"
            value="Current "
            class="form-control"
            id="current-form"
          />
          </div>
        </form>
        
        <hr />
        <h1 class="city">
          <span id="place-city"> </span> 
        </h1>
        <h2 class="current">
          Last Updated:<span id= "today-date" > June 27, 10:42pm </span>
          <div class="clearfix weather-temp">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="icon"
          class ="float-left"/>
          <div class="float-left">
            <span class="degree">
              <strong id="grade"></strong>20<span class="symbols">
                <a href="/" id="celsius-temp"class="active">°C</a>
                 | <a href="/" id="fahrenheit-temp">°F</a></span>
             </span>
        </div>
        </div>
          <br />
          <span class="feels"> Feels like </span>
          <span id= "feel-like"> 17°c</span>
        </h2>
        <br />
        <p>
        <div class="details">
          <span id = "weather"> 
            Humidity :   
          </span>
            <br/>
          <span id = "weather-wind">
            Wind :
          </span>
        </div>
      </p>
        <p class="day">
          <span id= "today">
          sunday
        </span>
        <br/> 
          <span id="description"> Light rain </span>
        </p>
        <hr />
        <div class="row weather-forecast" id="forecast">
        </div>
        <div class="row">
    

  <div class="clearfix weather-temp" >
          mon
      <span class="col-6">
          <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" id="icon"
          class ="float-left"/>
          </span>
          </div>
          <div class="clearfix weather-temp" >
          tues
          <span class="col-6">
          <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" id="icon"
          class ="float-left"/>
          </span>
          </div>
          <div class="clearfix weather-temp" >
              wed
          <span class="col-3">
          <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" id="icon"
          class ="float-left"/>
          </span>
          </div>
          <div class="clearfix weather-temp">
          thur
          <span class="col-4">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" id="icon"
          class ="float-left"/>
          </span>
          </div>
          <div class="clearfix weather-temp">
          <small>fri</small>
          <span class="col-3">
          <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="" id="icon"
          class ="float-left"/>
          </span>
          </div>
        
          </div>
      </div>
    </div>
  </div>
  <div class="source">
    <a href="https://github.com/doctordamie4/shecodes4"  target="_blank" rel ="noopener noreferrer" >open source code : coded by Nimah Oyeniran</a>
  </div>
  <script src="src/index.js"></script>
</div>
);
}