import React from "react";
import axios from "axios";


export default function Weather (props) {

function showTemperature(response){
    alert(`The weather in ${response.data.name} is  ${response.data.main.temp}°C`);
}

    let apiKey= "1d4b68593b5ef58c6ebeb70b9aa9976d";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);

    return (
    <div>
        Hello Word
    </div>
    );
}