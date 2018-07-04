var data = new XMLHttpRequest();
var dataURL =  "https://byui-cit230.github.io/weather/data/towndata.json";
data.open('GET', dataURL, true);
data.send();


  data.onload = function() {
  
    var townData = JSON.parse(data.responseText);
  
    for (i = 0; i < townData.towns.length; i++) {
      console.log(townData);
    
      if ( townData.towns[i].name == "Franklin" || townData.towns[i].name == "Greenville" || townData.towns[i].name == "Springfield"){
      
      
      document.getElementById(townData.towns[i].name + "-motto").innerHTML = townData.towns[i].motto;
      document.getElementById(townData.towns[i].name + "-founded").innerHTML = townData.towns[i].yearFounded;
      document.getElementById(townData.towns[i].name + "-pop").innerHTML = townData.towns[i].currentPopulation;
      document.getElementById(townData.towns[i].name + "-rain").innerHTML = townData.towns[i].averageRainfall;
    }
  
  }
  }