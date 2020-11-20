$(function() {
[...document.querySelectorAll('.askbtn')].forEach(function(item) {
  item.addEventListener('click', function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("offh").style.display = "none";
    document.getElementById("mapdiv").style.display = "none";
    document.getElementById("askfh").style.display = "block";
    });


   });

   
[...document.querySelectorAll('.offbtn')].forEach(function(item) {
    item.addEventListener('click', function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "block";
      document.getElementById("mapdiv").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      });
  
      
     });

     document.getElementById("mapbtn").addEventListener("click", function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("mapdiv").style.display = "block";

      chiMap.invalidateSize(true) ;
    });

     

         [...document.querySelectorAll('.homebtn')].forEach(function(item) {
          item.addEventListener('click', function() {
            document.getElementById("home").style.display = "block";
            document.getElementById("offh").style.display = "none";
            document.getElementById("askfh").style.display = "none";
            document.getElementById("mapdiv").style.display = "none";
            });
        
            
           });

/*
var d;
d[0].name="abc";
d[0].type="req";
d[1].type="off";
d[1].name="abcdef"; 
console.log(d);        
*/
var chiMap = L.map('map').setView([41.869348,-87.648419], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGFyaXNvbHVua2UiLCJhIjoiY2tocTE2cTVxMDF5aDJ4cXF6cXNrYzZjOSJ9.fFttCiuY-CT4ksQEmbdMlw'
}).addTo(chiMap);


var marker = L.marker([41.869348,-87.648419]).addTo(chiMap);

var circle1 = L.circle([41.867201,-87.651202], {
    color: '#f03',
    fillColor: '#f03',
    fillOpacity: 1,
    radius:15
}).addTo(chiMap);

var circle2 = L.circle([41.866935,-87.646844], {
  color: 'green',
  fillColor: 'green',
  fillOpacity: 1,
  radius:15
}).addTo(chiMap);


marker.bindPopup("You're Here!", {maxWidth: 800});
circle1.bindPopup("<strong>Help Needed: Water</strong><br />Address: XYZ W Roosevelt St, Chicago<br>Zip:60607<br>Contact:123456789", {maxWidth: 800});
circle2.bindPopup("<strong>Help Available: Food</strong><br />Address: XYZ W Roosevelt St, Chicago<br>Zip:60607<br>Contact:123456789", {maxWidth: 800});

marker.on('mouseover', function(e){
  marker.openPopup();
});
circle1.on('mouseover', function(e){
  circle1.openPopup();
});
circle2.on('mouseover', function(e){
  circle2.openPopup();
});

marker.on('mouseout', function(e){
  console.log("Mouse leave");
  chiMap.closePopup();
});
circle1.on('mouseout', function(e){
  console.log("Mouse leave");
  chiMap.closePopup();
});
circle2.on('mouseout', function(e){
  console.log("Mouse leave");
  chiMap.closePopup();
});

});