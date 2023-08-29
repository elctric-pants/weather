
const apikey = "0ea987aaf82c637a73f6a3f91e0be9a7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".wind").style.display = "none";
        document.querySelector(".wind-icon").style.display = "none";
        document.querySelector(".windp").style.display = "none";
    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " Km/h";


        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Dust") {
            weatherIcon.src = "images/dust.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".wind").style.display = "block";
        document.querySelector(".wind-icon").style.display = "block";
        document.querySelector(".windp").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}



searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);

})

var input = document.getElementById("myinput");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("button").click();
    }
});