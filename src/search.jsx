import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function search({updateInfo}) {
    let [city,setCity]=useState("");
    let [error ,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d5e6490e6e8f89c038d86ff03daa3d1b";

    let weatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:jsonResponse.name,
            temp: jsonResponse.main.temp,
            temp_max:jsonResponse.main.temp_max,
            temp_min:jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            feels_like :jsonResponse.main.feels_like,
            speed : jsonResponse.wind.speed,
            weather: jsonResponse.weather[0].description,
            visibility:jsonResponse.visibility
        }
        console.log(result);
        return result;
        }catch(error)
         {throw error};
        
    }

    let handlechange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await weatherInfo();
            updateInfo(newInfo);
        }catch (error){
            setError (true);
        }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <TextField
            className='search' 
            id="outlined-basic" 
            label="City" 
            variant="outlined"
            color="success"
            required
            value={city}
            onChange={handlechange}
             />
            <br></br>
            <br></br>
        <Button variant="contained" color="success" type='submit'>
            Submit
        </Button>
        <br></br>
        <br></br>
        {error && <h1 style={{color:"red"}}>No Such place Exist!</h1>}
        </form>
    
    </div>
  );
}