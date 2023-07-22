const apiKey = "b652fea575ca2bcc4e5f53fa852defe9";
const url1 = "https://api.openweathermap.org/data/2.5/weather?units=metric";

var search_button = document.querySelector(".search-button");
var search_box = document.querySelector(".search");

async function weather(city) {
  const response = await fetch(url1 + `&q=${city}&appid=${apiKey}`);
  var data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".content").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity-per").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".sky").src = `images/${data.weather[0].main}.png`;
    document.querySelector(".content").style.display = "block";
  }
}

search_button.addEventListener("click", () => {
  weather(search_box.value);
});
