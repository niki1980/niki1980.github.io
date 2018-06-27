let townDataRequest = new XMLHttpRequest();
let dataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
townDataRequest.open('GET', dataURL, true);
townDataRequest.send();

townDataRequest.onload = function () {
    let towndata = JSON.parse(townDataRequest.responseText);
    console.log(towndata);
    document.getElementById('frank-motto').innerHTML = towndata.towns[0].motto;
    document.getElementById('frank-founded').innerHTML = towndata.towns[0].yearFounded;
    document.getElementById('frank-pop').innerHTML = towndata.towns[0].currentPopulation;
    document.getElementById('frank-rain').innerHTML = towndata.towns[0].averageRainfall;

    document.getElementById('green-motto').innerHTML = towndata.towns[1].motto;
    document.getElementById('green-founded').innerHTML = towndata.towns[1].yearFounded;
    document.getElementById('green-pop').innerHTML = towndata.towns[1].currentPopulation;
    document.getElementById('green-rain').innerHTML = towndata.towns[1].averageRainfall;

    document.getElementById('spring-motto').innerHTML = towndata.towns[3].motto;
    document.getElementById('spring-founded').innerHTML = towndata.towns[3].yearFounded;
    document.getElementById('spring-pop').innerHTML = towndata.towns[3].currentPopulation;
    document.getElementById('spring-rain').innerHTML = towndata.towns[3].averageRainfall;
}
