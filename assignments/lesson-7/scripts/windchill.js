let hightemp = parseFloat(document.getElementById("hightemp").innerHTML);
let lowtemp = parseFloat(document.getElementById("lowtemp").innerHTML);
let t = (hightemp+lowtemp)/2
let s = parseFloat(document.getElementById("windspeed").innerHTML);
let wcfactor = 35.74 + (0.6215*t) - (35.75* Math.pow(s,0.16)) + (0.4275* t * Math.pow(s,0.16));
let rounded = Math.round( wcfactor * 10 ) / 10;
document.getElementById("windchillfactor").innerHTML = rounded