import { useState } from "react";
import InforationBox from "./informationBox";
import Search from "./search";
export default function weatherapp(){
    const [weatherInfo,setweatherInfo]=useState({
        city: "Delhi",
        feels_like: 15.22,
        humidity: 100,
        speed: 5.14,
        temp: 15.05,
        temp_max: 15.05,
        temp_min: 15.05,
        weather: "overcast clouds",
        visibility:16000
    })
    let updateInfo=(result)=>{
        setweatherInfo(result);
    }
    return(
        <div>
            <h1>Weather App By Anup Mishra</h1>
            <Search updateInfo={updateInfo}/>
            <InforationBox info={weatherInfo}/>
        </div>
    )
}