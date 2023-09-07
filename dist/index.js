var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { apiKey } from "./apiInfo/apiDate.js";
import { apiUrl } from "./apiInfo/apiDate.js";
import { renderWeather } from "./renders/weatherRender.js";
const btnSearch = document.querySelector(".btn-search");
const userInput = document.querySelector("#city-name");
const errorBox = document.querySelector('.error-modal-container');
const btnErrorModal = document.querySelector('.btn-hidden');
const handlerEvent = (key, url, city) => {
    if (city.length < 3) {
        alert("error name");
    }
    else {
        getDataFromApi(key, url, city);
    }
};
const handleApi = (data) => {
    if (data.cod === "404") {
        errorBox.classList.add('display-error-bar');
    }
    else {
        renderWeather(data);
        errorBox.classList.remove('display-error-bar');
    }
};
const getDataFromApi = (key, url, city) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(url + city + `&appid=${key}`)
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
});
btnSearch.addEventListener("click", () => handlerEvent(apiKey, apiUrl, userInput.value));
btnErrorModal.addEventListener('click', () => {
    errorBox.classList.remove('display-error-bar');
});
