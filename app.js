function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let h1 = document.querySelector("#weather-app-city");
  h1.innerHTML = `${cityInputElement.value}`;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);
