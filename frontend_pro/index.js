const api = `https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=6a00609d6ada2701cc774188f7fadf1b`;
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// time updating
let weatherTimeInterval;
function updateTime() {
  const date = new Date();
  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  weatherTime.innerHTML = `${dayName}, ${day}.${month}, ${hours}:${minutes}:${seconds}`;
}

function startUpdatingTime() {
  updateTime();
  weatherTimeInterval = setInterval(updateTime, 1000);
}

// elements creation
const weatherWrapper = document.createElement('div');
weatherWrapper.classList.add('weather__wrapper');

const weatherHeader = document.createElement('div');
weatherHeader.classList.add('weather__header');

const weatherCity = document.createElement('p');
weatherCity.classList.add('weather__city');

const weatherTime = document.createElement('p');
weatherTime.classList.add('weather__time');

const weatherInfo = document.createElement('div');
weatherInfo.classList.add('weather__info');

const weatherTemp = document.createElement('p');
weatherTemp.classList.add('weather__temp');

const weatherFeelsLike = document.createElement('p');
weatherFeelsLike.classList.add('weather__feels-like');

const weatherHumidity = document.createElement('p');
weatherHumidity.classList.add('weather__humidity');

const weatherPressure = document.createElement('p');
weatherPressure.classList.add('weather__pressure');

const weatherWindSpeed = document.createElement('p');
weatherWindSpeed.classList.add('weather__speed');

const weatherFooter = document.createElement('div');
weatherFooter.classList.add('weather__footer');

const weatherState = document.createElement('p');
weatherState.classList.add('weather__state');

const weatherImage = document.createElement('img');
weatherImage.classList.add('weather__image');

const weatherRefreshButton = document.createElement('button');
weatherRefreshButton.classList.add('weather__refresh');

const weatherRefreshButtonIcon = document.createElement('img');
weatherRefreshButtonIcon.src = '../images/refresh.png';
weatherRefreshButton.appendChild(weatherRefreshButtonIcon);

weatherRefreshButton.addEventListener('click', () => {
  getWeatherData();
  rotateRefreshIcon();
});

//refresh button animation
let rotationAngle = 0;

function rotateRefreshIcon(){
  rotationAngle += 360;
  weatherRefreshButtonIcon.style.transform = `rotate(${rotationAngle}deg)`;
  weatherRefreshButtonIcon.style.transition = '1s ease-in-out';
}

//get weather data
getWeatherData();

function getWeatherData() {
  fetch(api)
    .then(response => response.json())
    .then(data => {
      weatherCity.innerHTML = `${data.name}, ${data.sys.country}`;
      startUpdatingTime();
      weatherTemp.innerHTML = `Temperature: ${Math.round(data.main.temp - 273)}°C`;
      weatherFeelsLike.innerHTML = `Feels like ${Math.round(data.main.feels_like - 273)}°C`;
      weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
      weatherPressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
      weatherWindSpeed.innerHTML = `Wind: ${data.wind.speed} km/h`;
      weatherState.innerHTML = `Status: ${data.weather[0].main}`;
      weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    })
    .catch(error => console.log('ERROR:', error));
}

weatherHeader.appendChild(weatherCity);
weatherHeader.appendChild(weatherRefreshButton);

weatherInfo.appendChild(weatherTime);
weatherInfo.appendChild(weatherTemp);
weatherInfo.appendChild(weatherFeelsLike);
weatherInfo.appendChild(weatherHumidity);
weatherInfo.appendChild(weatherPressure);
weatherInfo.appendChild(weatherWindSpeed);

weatherFooter.appendChild(weatherState);
weatherFooter.appendChild(weatherImage);

weatherWrapper.appendChild(weatherHeader);
weatherWrapper.appendChild(weatherInfo);
weatherWrapper.appendChild(weatherFooter);

document.body.appendChild(weatherWrapper);
