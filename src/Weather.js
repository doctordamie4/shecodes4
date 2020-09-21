import React, { useState } from "react";



export default function Weather() {
  let [entry, setEntry] = useState("");
  let [bubble, setBubble] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setBubble(`it is 19°C in ${entry}`);
  }
  function updateInput(event) {
    setEntry(event.target.value);
  }
  return (
    <div className="cards">
    <div className="container">
      <div className="card whole">
        <div className="card-body">
          <div className="row">
          <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateInput} />
        <input type="submit" value="search" />

            </form>
           
            <br />
            <form id="place">
              <div className="col-12">
                <input
                  type="button"
                  value="Current "
                  className="form-control"
                  id="current-form"
                />
              </div>
            </form>
            <hr />
            <h1 className="city">
              <span id="place-city"></span>
            </h1>
            <h2 className="current">
              <small>Last Updated:</small>
              <small id="today-date"> June 27, 10:42pm</small>
              <div className="clearfix weather-temp">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <span className="degree">
                    <strong id="grade">25</strong>
                    <span className="symbols">
                      <a href="<" id="celsius-temp" className="active">
                        °C
                      </a>
                      |{" "}
                      <a href="<" id="fahrenheit-temp">
                        °F
                      </a>
                    </span>
                  </span>
                </div>
              </div>
              <br />
              <span className="feels"> Feels like </span>
              <span id="feel-like"> 17°c</span>
            </h2>
            <br />
            <h3>{bubble}</h3>
              <div className="details">
              <p>
                <span id="weather">Humidity :</span>
                <br />
                <span id="weather-wind">Wind :</span>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}