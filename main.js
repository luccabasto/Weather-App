window.onload = function(){

    const apiKey = "ed8ee71995a93e39f90cb3d3a40ba36a";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=pt_br&q=";
    //functions - input & button
    
    const pesquisaBox = document.querySelector(".search-box input");
    const pesquisaBtn = document.querySelector(".search-box button");
    
    async function checkWeather(localizacao){
        const response = await fetch(apiUrl + localizacao + `&appid=${apiKey}`);
        var data = await response.json();
    
        console.log(data);
///Inserção dos dados da API 
        document.querySelector(".localizacao").innerHTML = data.name;
    
        document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
        document.querySelector(".vento").innerHTML = data.wind.speed + "km/h";
    }
    
    pesquisaBtn.addEventListener("click", ()=>{
        checkWeather(pesquisaBox.value)
    })

} //window.onload





