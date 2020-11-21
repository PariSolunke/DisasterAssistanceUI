var helpers = [{name:"John Doe",type:"Food",address:"221B Baker Stret, Chicago",zip:"60607",contact:"1234567890",description:"Lots of Bread and Rice"},
{name:"Richard Roe",type:"Water",address:"ABC Armitage Ave, Chicago",zip:"60657",contact:"1212121212",description:"We're distributing water, 1 quart per person"},
{name:"Elaine Benes",type:"Shelter",address:"ABC Western Ave, Chicago",zip:"66666",contact:"9876543211",description:"Tornado shelter in the basement"},
{name:"Greta Gerwig",type:"Medicine",address:"ABC N Michigan Ave, Chicago",zip:"12345",contact:"0101010101",description:"-"},
{name:"ABC",type:"Food",address:"ABC S Halsted St, Chicago",zip:"67890",contact:"135723456",description:"-"},
{name:"XYZ",type:"Food",address:"XYZ Fullerton Ave, Chicago",zip:"61616",contact:"1313242456",description:"-"},
{name:"Harry Potter",type:"Water",address:"4 Privet Drive, Chicago",zip:"60609",contact:"1297413267",description:"-"},
{name:"Hermoine Granger",type:"Medicine",address:"10 Memory Lane, Chicago",zip:"11111",contact:"8070605040",description:"-"},
{name:"Thor",type:"Shelter",address:"1234 Wonderland Ave, Chicago",zip:"61616",contact:"5040302010",description:"-"},
{name:"Hulk",type:"Food",address:"LMN Diversey Pkway, Chicago",zip:"53454",contact:"1928374656",description:"-"}];


var requests=[{type:"First-Aid",address:"221 B Baker Street, Chicago",zip:"60657",contact:"3213213211",description:"Need First Aid for an arm injury"},
{type:"Shelter",address:"4 Privet Drive, Chicago",zip:"60607",contact:"1231231231",description:"Need a place for an emergency shelter"},
{type:"Food",address:"ABC N Halsted Street, Chicago",zip:"60657",contact:"1234567891",description:"Running out of food"},
{type:"Water",address:"XYZ S Halsted Street, Chicago",zip:"60607",contact:"9876543210",description:"Need Drinking Water"},
{type:"Medicines",address:"LMN N Michgan Ave, Chicago",zip:"60606",contact:"1414151516",description:"-"},
{type:"Food",address:"ABC N Western Ave, Chicago",zip:"60636",contact:"1516141312",description:"Out of food"},
{type:"Food",address:"EFG W Fullerton Ave, Chicago",zip:"60609",contact:"6543210987",description:"Need Food"},
{type:"Water",address:"LMN W Diversey Ave, Chicago",zip:"60607",contact:"5645312345",description:"Drinking Water"},
{type:"Shelter",address:"XYZ S Ashland Ave, Chicago",zip:"12345",contact:"1212343412",description:"Home is waterlogged, need shelter"},
{type:"Water",address:"EFG S Damen Ave, Chicago",zip:"54321",contact:"9090890908",description:"Need drinking water"}];

var custHelpers=[];
var custRequests=[];

$(function() {

updateHelpers();
updateRequests();

[...document.querySelectorAll('.askbtn')].forEach(function(item) {
  item.addEventListener('click', function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("offh").style.display = "none";
    document.getElementById("mapdiv").style.display = "none";
    document.getElementById("askfh").style.display = "block";
    document.getElementById("reqForm").style.display = "none";
    document.getElementById("helpForm").style.display = "none";

    });


   });


[...document.querySelectorAll('.offbtn')].forEach(function(item) {
    item.addEventListener('click', function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "block";
      document.getElementById("mapdiv").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("reqForm").style.display = "none";
      document.getElementById("helpForm").style.display = "none";
      });
  
      
     });

     document.getElementById("mapbtn").addEventListener("click", function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("reqForm").style.display = "none";
      document.getElementById("helpForm").style.display = "none";
      document.getElementById("mapdiv").style.display = "block";

      chiMap.invalidateSize(true) ;
    });


    document.getElementById("reqbtn").addEventListener("click", function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("reqForm").style.display = "block";
      document.getElementById("helpForm").style.display = "none";
      document.getElementById("mapdiv").style.display = "none";
    });

    document.getElementById("helpbtn").addEventListener("click", function() {
      document.getElementById("home").style.display = "none";
      document.getElementById("offh").style.display = "none";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("reqForm").style.display = "none";
      document.getElementById("helpForm").style.display = "block";
      document.getElementById("mapdiv").style.display = "none";
    });
     

[...document.querySelectorAll('.homebtn')].forEach(function(item) {
          item.addEventListener('click', function() {
            document.getElementById("home").style.display = "block";
            document.getElementById("offh").style.display = "none";
            document.getElementById("askfh").style.display = "none";
            document.getElementById("mapdiv").style.display = "none";
            document.getElementById("reqForm").style.display = "none";
            document.getElementById("helpForm").style.display = "none";
            });
        
            
});


$("#tagip1").on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) 
  {
      var filter=document.getElementById("tagip1").value;
      document.getElementById("tagip1").value = "";
      document.getElementById("tags1").innerHTML =  "<span style='border:1px solid black;'>"+filter+"</span>";
      document.getElementById("clear1").style.visibility =  "visible";
      
      ;
  }
});

$("#tagip2").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) 
    {
      var filter=document.getElementById("tagip2").value;
        document.getElementById("tagip2").value = "";
        document.getElementById("tags2").innerHTML = "<span style='border:1px solid black;'>"+filter+"</span>";
        document.getElementById("clear2").style.visibility =  "visible";


    }
});







function updateHelpers() {
  document.getElementById("data1").innerHTML="";
  for(var i=0;i<helpers.length;i++)
  {
    document.getElementById("data1").innerHTML+="Name: "+helpers[i].name+"<br>"+"Type: "+helpers[i].type+"<br>"+"Phone: "+helpers[i].contact+"<br>"+"Address: "+helpers[i].address+"<br>"+"Zip: "+helpers[i].zip+"<br>"+"Description: "+helpers[i].description+"<hr>"  ;

  }
  
}

function updateRequests() {
  document.getElementById("data2").innerHTML="";
  for(var i=0;i<requests.length;i++)
  {
    document.getElementById("data2").innerHTML+="Type: "+requests[i].type+"<br>"+"Phone: "+requests[i].contact+"<br>"+"Address: "+requests[i].address+"<br>"+"Zip: "+requests[i].zip+"<br>"+"Description: "+requests[i].description+"<hr>"  ;

  }
  
}


custHelpers.push({type:"water",description:""});
custHelpers.push({type:"wasar",contact:"121213",description:""});
console.log(custHelpers);

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
  chiMap.closePopup();
});
circle1.on('mouseout', function(e){
 
  chiMap.closePopup();
});
circle2.on('mouseout', function(e){
  
  chiMap.closePopup();
});

});