const btn = document.querySelector("button");

const API_Key = "03d45821ffd443fbb50190512210512";
const API_URL = "http://api.weatherapi.com/v1/current.json?";
// const sky = document.querySelector("#sky");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
// const minMaxTemp = document.querySelector("#minMaxTemp");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  async function success(position) {
    try {
      const response = await fetch(
        `${API_URL}key=${API_Key}&q=${position.coords.latitude},${position.coords.longitude}`
      );
      const data = await response.json();

      console.log(data);

      sky.innerHTML = data.current.condition.text;
      temp.innerHTML = `${Math.floor(data.current.temp_c)}°C`;
      city.innerHTML = data.location.name;

      img.src = `https:${data.current.condition.icon}`;
    } catch (err) {
      console.log(err);
    }
  }
  function error(err) {
    return err;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});

const dateDiv = document.querySelector(".todayDate");

const d = new Date();

const [day, month, year] = [d.getDate(), d.getMonth() + 1, d.getFullYear()];

const newDate = d.toString().slice(0, 16);

dateDiv.innerHTML = newDate;
