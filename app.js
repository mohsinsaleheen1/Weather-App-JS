const API_Key = `91475861dde399ee7a686131ff4738e8`;
const searchButton = document.querySelector("#searchbtn");
const Wheather = document.querySelector("#wheather");
Wheather.innerHTML = `<h4>Enter Your City Name In Search Bar</h4>`;
const search = document.querySelector("#search");
const getwheather = async (city) => {
  Wheather.innerHTML = `<h2>Loading...</h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWheather(data);
};
const showWheather = (data) => {
  if (data.cod == "404") {
    Wheather.innerHTML = `<h2>City Not Found</h2>`;
  }
  Wheather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
    </div>
    <div>
        <h2>${data.main.temp}°C</h2>
        <h4>${data.weather[0].main}</h4>
    </div>`;
};
searchButton.addEventListener("click", function (event) {
  getwheather(search.value);
  event.preventDefault();
});
