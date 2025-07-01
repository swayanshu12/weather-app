const apiId="899d3841a953892a8571788525bfcd35";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiURL +city+ "&appid="+ apiId)
    let data =await response.json();
    console.log(data);

    let background=""
    let icon=""
if((data.weather[0].main)==='Clouds'){
    background="images/cloudy_img.jpg";
    icon="images/cloudy_icon.png";
}
else if((data.weather[0].main)==='Thunderstorm'){
    background="images/thunder_img.jpg";
    icon="images/thunder_icon.png";
}
else if((data.weather[0].main)==='Clear'){
    background="images/sunny_img.jpg";
    icon="images/sunny_icon.png";
}
else if((data.weather[0].main)==='Rain'){
    background="images/rain_img.jpg";
    icon="images/rain_icon.png";
}
else if((data.weather[0].main)==='Drizzle'){
    background="images/drizzle_img.jpg";
    icon="images/drizzle_icon.png";
}


document.querySelector("#temp").innerHTML=((data.main.temp )+ "°C")
document.querySelector("#humidity").innerHTML=((data.main.humidity )+ "%")
document.querySelector("#city").innerHTML=(city.charAt(0).toUpperCase()+city.slice(1))
document.querySelector("#wind").innerHTML=((data.wind.speed )+ " Km/h")
document.querySelector("#back").style.backgroundImage=`url(${background})`
document.querySelector("#weather").innerHTML=((data.weather[0].main ))
document.querySelector("#image").src=icon
search.value="";
    }
let btn=document.querySelector("#btn");
let search=document.querySelector("#searchbox");
btn.addEventListener('click',()=>{
    checkWeather(search.value);
    
});
search.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        e.preventDefault();
    checkWeather(search.value);
    }
});