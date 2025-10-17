const apikey = "89d6c114ec7bbbfd4be0ebc38e323833"
const des = document.getElementById("weather__des");
const icon = document.getElementById("weather__icon");
const temp = document.getElementById("weather__temp");

navigator.geolocation.getCurrentPosition((position) => {
    const lat = 37.29; // 위도
    const lon = 126.84; // 경도
    getWeather(lat, lon);
},
(error) => {
    const fallbackLat = 37.5665;
    const fallbackLon = 126.9780;
    console.warn("위치 정보를 가져올 수 없어 서울로 설정합니다.");
    getWeather(fallbackLat, fallbackLon);
});

let getWeather = async(lat, lon) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric&lang=kr`);
    let data = await res.json();

    temp.textContent = data.main.temp + " °C"; // 온도
    des.textContent = data.weather[0].description // 설명

    let iconNum = data.weather[0].icon;
    let iconSrc = `http://openweathermap.org/img/wn/${iconNum}@2x.png`
    icon.setAttribute("src", iconSrc);
}