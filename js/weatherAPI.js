const apikey = "89d6c114ec7bbbfd4be0ebc38e323833";
const des = document.getElementById("weather__des");
const temp = document.getElementById("weather__temp");
const icon = document.querySelector("#weather__icon > use");

navigator.geolocation.getCurrentPosition(
  () => {
    const lat = 36.27; // 위도
    const lon = 127.25; // 경도
    getWeather(lat, lon);
  },
  (error) => {
    const fallbackLat = 37.5665;
    const fallbackLon = 126.978;
    console.warn("위치 정보를 가져올 수 없어 서울로 설정합니다.");
    getWeather(fallbackLat, fallbackLon);
  }
);

let getWeather = async (lat, lon) => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric&lang=kr`
  );
  let data = await res.json();

  des.textContent = data.weather[0].description; // 설명
  temp.textContent = Math.floor(data.main.temp) + " °C"; // 온도(소수점 제거)
  // temp.textContent = data.main.temp + " °C"; // 온도

  let iconNum = data.weather[0].icon;
  switch (iconNum.slice(0, 2)) {
    // 맑음
    case "01":
      icon.setAttribute("href", "sprites.xml#weather-sun");
      break;

    // 맑은 구름
    case "02":
    case "03":
      icon.setAttribute("href", "sprites.xml#weather-few-cloudy");
      break;

    // 흐림, 구름 많음
    case "04":
    case "50":
      icon.setAttribute("href", "sprites.xml#weather-cloudy");
      break;

    // 비
    case "09":
    case "10":
    case "11":
      icon.setAttribute("href", "sprites.xml#weather-rainy");
      break;

    // 눈
    case "13":
      icon.setAttribute("href", "sprites.xml#weather-snow");
      break;

    // 기본값
    default:
      icon.setAttribute("href", "sprites.xml#weather-sun");
      break;
  }
  // let iconSrc = `http://openweathermap.org/img/wn/${iconNum}@2x.png`;
  // icon.setAttribute("src", iconSrc);
};
