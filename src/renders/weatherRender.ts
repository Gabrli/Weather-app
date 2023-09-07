import { weather } from "../types/type.js";
import { selectCurrentImage } from "./imageSelect.js";

const titleBox = document.querySelector("#title");
const descryptionBox = document.querySelector("#descryption");
const weatherMoreInfoWrapper = document.querySelector(
  ".weather-informations-wrapper"
);
const windTempText = document.querySelector(".temp");
const humadityText = document.querySelector(".humadity");

const renderWeather = (data: weather) => {
  titleBox.textContent = data.name;
  descryptionBox.textContent = data.weather[0].description;
  windTempText.innerHTML = `${Math.round(data.main.temp)} ℃`;
  humadityText.textContent = `${data.main.humidity}%`;

  weatherMoreInfoWrapper.classList.add("display-elements");
  selectCurrentImage(data);
};

export { renderWeather };
