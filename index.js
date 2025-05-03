

const apiKey = "5cf1a79fd6f9129e938db384e43c90c5";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("textSearch");
const searchBtn = document.getElementById("searchButton");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    let data = await response.json();

    console.log(data);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "Images/clouds.png";
        }
        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "Images/clear.png";
        }
        if(data.weather[0].main == "Rain") {
            weatherIcon.src = "Images/rain.png";
        }
        if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Images/drizzle.png";
        }
        if(data.weather[0].main == "Mist") {
            weatherIcon.src = "Images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {-
        checkWeather(searchBox.value);
    }
});






