var apiKey = "2da14d851fbbf51548c66f8470821d4c";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
// ("q=kolkata&appid=2da14d851fbbf51548c66f8470821d4c&units=metric");
let cityInput = document.getElementById("searchBox");

async function getWeather() {
    // alert(event);
    if (event.type === "click" || event.key == "Enter") {
        let city = document.getElementById("searchBox").value;
        let url = apiUrl + `q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.message == "city not found") {
            document.querySelector(".weather").style.display = "none";
            document
                .querySelector(".right-city")
                .classList.replace("right-city", "wrong-city");
            // alert("Please enter a valid City Name");
        } else {
            document
                .querySelector("#right-city-id")
                .classList.add("right-city");
        }

        // console.log(data.name);
        document.getElementById("temp").innerHTML = data.main.temp + "&deg;C";
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#humid").innerHTML = data.main.humidity;
        document.querySelector("#spd").innerHTML = data.wind.speed;
        const images = new Map([
            ["Clear", "./images/clear.png"],
            ["Clouds", "./images/clouds.png"],
            ["Drizzle", "./images/drizzle.png"],
            ["Mist", "./images/mist.png"],
            ["Haze", "./images/mist.png"],
            ["Fog", "./images/mist.png"],
            ["Smoke", "./images/mist.png"],
            ["Rain", "./images/rain.png"],
            ["Snow", "./images/snow.png"],
        ]);

        let keyWeather = data.weather[0].main.valueOf();
        console.log(images.get(keyWeather) + " " + keyWeather);
        document.querySelector(".weather-img").src = images.get(keyWeather);
        if (data.name != undefined && data.name != null && data.name != "") {
            document.querySelector(".weather").style.display = "block";
        }
    }

    // return data;
}
let searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", getWeather);
