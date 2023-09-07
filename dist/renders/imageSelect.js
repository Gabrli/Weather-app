const imgBox = document.querySelector(".logo-box");
const selectCurrentImage = (data) => {
    let weatherOptions = data.weather[0].main;
    if (weatherOptions === "Clear") {
        imgBox.style.backgroundImage = "url('../../img/sun.png')";
    }
    else if (weatherOptions === "Rain") {
        imgBox.style.backgroundImage = "url('../../img/raining.png')";
    }
    else if (weatherOptions === "Clouds") {
        imgBox.style.backgroundImage = "url('../../img/cloud.png')";
    }
    else if (weatherOptions === "Mist") {
        imgBox.style.backgroundImage = "url('../../img/fog.png')";
    }
    else {
        imgBox.style.backgroundImage = "url('../../img/cloudy.png')";
    }
};
export { selectCurrentImage };
