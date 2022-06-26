const apiKey = "d05a1db75fb3a4ab8851d63befc08c2f";

const getCurrentWeather = function (cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const template = `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.main.temp} F</p>
                  <p class="card-text">${data.wind.speed} mph</p>
              </div>
          </div>
      `;

      document.querySelector("#current").innerHTML = template;
    });
};

document.querySelector("#city-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const cityName = document.querySelector("#city-input").value;
  getCurrentWeather(cityName);
});
