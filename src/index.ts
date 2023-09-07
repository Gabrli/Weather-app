import { apiKey } from "./apiInfo/apiDate.js";
import { apiUrl } from "./apiInfo/apiDate.js";
import { weather } from "./types/type.js";
import { renderWeather } from "./renders/weatherRender.js";

const btnSearch = document.querySelector(".btn-search");
const userInput: HTMLInputElement = document.querySelector("#city-name");
const errorBox:HTMLElement = document.querySelector('.error-modal-container')
const btnErrorModal = document.querySelector('.btn-hidden')

const handlerEvent = (key: string, url: string, city: string) => {
  if (city.length < 3) {
    alert("error name");
  } else {
    getDataFromApi(key, url, city);
  }
};

const handleApi = (data: weather) => {
  if (data.cod === "404") {
    errorBox.classList.add('display-error-bar')
  } else {
    renderWeather(data);
    errorBox.classList.remove('display-error-bar')
  }
};

const getDataFromApi = async (key: string, url: string, city: string) => {
  await fetch(url + city + `&appid=${key}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      handleApi(data);
      console.log(data);
    })
    .catch((error) => {
      return error;
    });
};

btnSearch.addEventListener("click", () =>
  handlerEvent(apiKey, apiUrl, userInput.value)
);
btnErrorModal.addEventListener('click', () => {
  errorBox.classList.remove('display-error-bar')
})
