//connection to the api//
let weatherRequest = new XMLHttpRequest();
let apiURL ='https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=3cfc97710fcfbb735d8c11bee688c482';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;

}
