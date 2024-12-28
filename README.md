# Weather App

The Weather App provides real-time weather information for any city entered by the user. It displays detailed weather metrics, including temperature, humidity, weather conditions, and more, in an aesthetically pleasing and responsive interface.

## Features

- **City-Based Search**: Users can enter a city's name to retrieve its current weather data.
- **Weather Metrics**:
  - Temperature (current, maximum, and minimum)
  - Humidity percentage
  - Weather conditions (e.g., sunny, rainy, cloudy)
  - "Feels like" temperature
  - Wind speed
  - Visibility distance
- **Interactive and Responsive Design**:
  - A visually appealing user interface with dynamic icons and images.
  - Responsive layout for all devices (desktop, tablet, and mobile).
- **Dynamic Icons**: Weather icons and background images change based on the city's weather conditions (e.g., sunny, rainy, snowy).

## How to Use

1. **Enter a City Name**: Input the name of the city in the search bar.
2. **View Weather Information**: The app will fetch and display the following details:
   - Current temperature (in Celsius)
   - Humidity percentage
   - Weather condition
   - "Feels like" temperature
   - Maximum and minimum temperatures
   - Wind speed (in meters per second)
   - Visibility distance (in kilometers)
3. **Interactive Display**: The app dynamically adjusts icons and background images based on the weather condition.

## Technologies Used

- **Frontend**:
  - React.js
  - Material-UI for styling and components
- **Backend**:
  - OpenWeatherMap API (for real-time weather data)
- **Icons and Images**:
  - Material-UI Icons
  - Unsplash for weather-based images

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Anup2601/weather.git
   cd weather
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your OpenWeatherMap API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.
   - Create a `.env` file in the root directory and add:
     ```env
     REACT_APP_API_KEY=your_api_key_here
     ```
4. Start the application:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## File Structure

```
weather-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   ├── SearchBar.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── WeatherCard.css
├── .env
├── package.json
└── README.md
```

## Example Output

- **Input**: "New York"
- **Output**:
  - Temperature: 25°C
  - Humidity: 70%
  - Weather: Sunny
  - Feels like: 27°C
  - Max Temp: 30°C
  - Min Temp: 22°C
  - Wind Speed: 5 m/s
  - Visibility: 10 km

## Future Enhancements

- Add support for hourly and weekly weather forecasts.
- Include air quality index (AQI) data.
- Enable location-based weather search using GPS.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
- [Unsplash](https://unsplash.com/) for the background images.
- [Material-UI](https://mui.com/) for the components and icons.

