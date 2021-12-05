const btn = document.querySelector("button");

const API_Key = "6ebc64b5c0cd103501e2e750798f35a9";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
// const sky = document.querySelector("#sky");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  async function success(position) {
    try {
      const response = await fetch(
        `${API_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_Key}&units=metric`
      );
      const data = await response.json();
      // console.log(data);

      sky.innerHTML = data.weather[0].description.toUpperCase();
      temp.innerHTML = `${Math.floor(data.main.temp)} °C`;
      city.innerHTML = data.name;

      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (err) {
      console.log(err);
    }
  }
  function error(err) {
    return err;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});
