const apiKey = "ed8ee71995a93e39f90cb3d3a40ba36a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=pt_br&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)
}
checkWeather();