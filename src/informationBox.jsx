import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AirIcon from '@mui/icons-material/Air';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Grid from '@mui/material/Grid';

export default function InformationBox({ info }) {
  const rain_url = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const hot_url = "https://images.unsplash.com/photo-1663665152158-3dabfd31a1b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1biUyMGhlYXR8ZW58MHx8MHx8fDA%3D";
  const cold_url = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd2ZhbGx8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="informationBox" style={{ padding: '20px', }}>
      <Card sx={{  
            maxWidth: '100%',
            border: '2px solid #ccc', // Add border to the Card
            borderRadius: '1.2rem', // Make Card edges rounded
            overflow: 'hidden', // Prevent content from spilling out of the rounded corners
            boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.2)', // Optional: Add a shadow for better visuals
            m: 2, // Optional: Add margin around the card
       }}>
        <CardMedia
          sx={{ height: { xs: 200, sm: 300 },
            width: '97%',
            border: '2px solid #ccc', // Add border to the image
            borderRadius: '1.2rem', // Make image edges rounded
            margin: '1rem', // Space between the image and card
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            objectFit: 'cover'  }}
            image={info.humidity > 80 ? rain_url : info.temp < 5 ? cold_url : hot_url}
            title="Weather Image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            className="head"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'row',

            }}
          >
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon sx={{ fontSize: 40, marginTop: 1 ,gap:2}} />
            ) : info.temp < 5 ? (
              <AcUnitIcon sx={{ fontSize: 40, marginTop: 1,gap:2 }} />
            ) : (
              <WbSunnyIcon sx={{ fontSize: 40, marginTop: 1,gap:2 }} />
            )}
           </Typography>
          <Grid container spacing={5} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="h5"
                sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}
               >
                <DeviceThermostatIcon /> Temperature: {info.temp}°C
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <WaterDropIcon /> Humidity: {info.humidity}%
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <CloudCircleIcon /> Weather: {info.weather}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <EmojiEmotionsIcon /> Feels like: {info.feels_like}°C
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <WbTwilightIcon /> Max Temp: {info.temp_max}°C
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <NightsStayIcon /> Min Temp: {info.temp_min}°C
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem',ml:5 }}>
                <AirIcon /> Wind Speed: {info.speed} m/s
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 2,fontSize: '1.3rem' ,ml:5}}>
                <VisibilityIcon /> Visibility: {info.visibility / 1000} km
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
