const weather_api_key = "d7783ec8fe96acacf8bede71ecdeed2c";

const api_url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

var searchbox = document.querySelector(".search input");

const searchButton = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function weatherCall(city) {
  const resp = await fetch(api_url + city + `&appid=${weather_api_key}`);
  var data = await resp.json();

  console.log(data);

  document.querySelector(".name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".feel").innerHTML =
    Math.round(data.main.feels_like) + "°C";
  document.querySelector(".pressure").innerHTML = data.main.pressure + " mb";
  document.querySelector(".prep").innerHTML = data.weather[0].main;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/haze.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.src = "images/thunderstorm.png";
  } else {
    weatherIcon.src = "images/snow.png";
  }
}

searchButton.addEventListener("click", () => {
  weatherCall(searchbox.value);
});

function handleKeyPress(event) {
  // Check if the key pressed is "Enter" (key code 13)
  if (event.keyCode === 13) {
    // Trigger the button click event
    weatherCall(searchbox.value);
  }
}
