import { weather } from "../types/type";

const imgBox: HTMLElement = document.querySelector(".logo-box");

const selectCurrentImage = (data: weather) => {
  let weatherOptions = data.weather[0].main;
  if (weatherOptions === "Clear") {
    imgBox.style.backgroundImage = "url('https://gabrli.github.io/Weather-app/img/sun.png')";
  } else if (weatherOptions === "Rain") {
    imgBox.style.backgroundImage = "url('https://gabrli.github.io/Weather-app/img/raining.png')";
  } else if (weatherOptions === "Clouds") {
    imgBox.style.backgroundImage = "url('https://gabrli.github.io/Weather-app/img/cloud.png')";
  } else if (weatherOptions === "Mist") {
    imgBox.style.backgroundImage = "url('https://gabrli.github.io/Weather-app/img/img/fog.png')";
  } else {
    imgBox.style.backgroundImage = "url('https://gabrli.github.io/Weather-app/img/img/cloudy.png')";
  }
};

export { selectCurrentImage };
