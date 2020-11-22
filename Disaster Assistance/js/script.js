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



var hlpflt=[];
var reqflt=[];
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


    document.getElementById("reqbtn").addEventListener("click", function() 
    {
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


document.getElementById("submit1").addEventListener("click", function() 
    {
     if(document.getElementById("ipType1").value.length<1)
      {
        alert("Type cannot be empty");
      }
      else if(document.getElementById("ipAdd1").value.length<1)
      {
        alert("Address cannot be empty");
      }
      else if(document.getElementById("ipZip1").value.length<5)
      {
        alert("Zip cannot be less than 5 characters");
      }
      else if(document.getElementById("ipPhone1").value.length<10)
      {
        alert("Phone number cannot be less than 10 characters");
      }  


      else
      {  
      custRequests.push({type:document.getElementById("ipType1").value, address:document.getElementById("ipAdd1").value, zip:document.getElementById("ipZip1").value,contact:document.getElementById("ipPhone1").value,description:document.getElementById("ipDesc1").value});
      alert("Pin for your request is 1234. The request has been posted and will be visible to help providers.");
      updateRequests();
      document.getElementById("home").style.display = "none"; 
      document.getElementById("offh").style.display = "none";
      document.getElementById("askfh").style.display = "block";
      document.getElementById("reqForm").style.display = "none";
      document.getElementById("helpForm").style.display = "none";
      document.getElementById("mapdiv").style.display = "none";
      document.getElementById("ipType1").value="";
      document.getElementById("ipPhone1").value="";
      document.getElementById("ipDesc1").value="";
      document.getElementById("ipZip1").value="";
      document.getElementById("ipAdd1").value="";
      }
    });

    document.getElementById("clear1").addEventListener("click", function() 
    {
      hlpflt=[];
      document.getElementById("clear1").style.visibility =  "hidden"; 
      document.getElementById("tags1").innerHTML="";
      updateHelpers();

    });

    document.getElementById("clear2").addEventListener("click", function() 
    {
      reqflt=[];
      document.getElementById("clear2").style.visibility =  "hidden"; 
      document.getElementById("tags2").innerHTML="";
      updateRequests();

    });


    document.getElementById("submit2").addEventListener("click", function() 
    {
      if(document.getElementById("ipName2").value.length<1)
      {
        alert("Name Cannot be empty");
      }  
      else if(document.getElementById("ipType2").value.length<1)
      {
        alert("Type cannot be empty");
      }
      else if(document.getElementById("ipAdd2").value.length<1)
      {
        alert("Address cannot be empty");
      }
      else if(document.getElementById("ipZip2").value.length<5)
      {
        alert("Zip cannot be less than 5 characters");
      }
      else if(document.getElementById("ipPhone2").value.length<10)
      {
        alert("Phone number cannot be less than 10 characters");
      }  
     

      else
      {  
        
      custHelpers.push({name:document.getElementById("ipName2").value,type:document.getElementById("ipType2").value, address:document.getElementById("ipAdd2").value, zip:document.getElementById("ipZip2").value,contact:document.getElementById("ipPhone2").value,description:document.getElementById("ipDesc2").value});
      
      alert("Pin for your help offer is 1234. The offer to help has been posted and will be visible to help seekers.");
      updateHelpers();
      document.getElementById("home").style.display = "none"; 
      document.getElementById("offh").style.display = "block";
      document.getElementById("askfh").style.display = "none";
      document.getElementById("reqForm").style.display = "none";
      document.getElementById("helpForm").style.display = "none";
      document.getElementById("mapdiv").style.display = "none";

      document.getElementById("ipName2").value="";
      document.getElementById("ipType2").value="";
      document.getElementById("ipPhone2").value="";
      document.getElementById("ipDesc2").value="";
      document.getElementById("ipZip2").value="";
      document.getElementById("ipAdd2").value="";

      }
    });





$("#tagip1").on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) 
  {
    if(document.getElementById("tagip1").value.length>0)
    {
      if(hlpflt.length<4)
      {
      hlpflt.push(document.getElementById("tagip1").value);
      document.getElementById("tags1").innerHTML +=  "<span class='tags' style='border:1px solid black;'>"+document.getElementById("tagip1").value+"</span>";
      document.getElementById("tagip1").value = "";
      document.getElementById("clear1").style.visibility =  "visible"; 
      updateHelpers();
      }
    else{
      alert("Maximum 4 tags allowed, clear by clicking on the cross icon");
    }
    }
  }
});

$("#tagip2").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) 
    {
      if(document.getElementById("tagip2").value.length>0)
      {
        if(reqflt.length<4)
        {
        reqflt.push(document.getElementById("tagip2").value);
        document.getElementById("tags2").innerHTML +=  "<span class='tags' style='border:1px solid black;'>"+document.getElementById("tagip2").value+"</span>";
        document.getElementById("tagip2").value = "";
        document.getElementById("clear2").style.visibility =  "visible"; 
        updateRequests();
        }
      else{
        alert("Maximum 4 tags allowed, clear by clicking on the cross icon");
      }
      }
    }
});







function updateHelpers() {
  document.getElementById("data1").innerHTML="";
  var allhelpers;
  if(custHelpers.length>0)
  allhelpers=custHelpers.concat(helpers);
  else
  allhelpers=helpers;

  if(hlpflt.length>0)
  {
  allhelpers = jQuery.grep(allhelpers, function (n) 
  {
    if(hlpflt.length==1)
    return (!(n.type.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[0],'g')!=-1||n.address.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1));
    else if(hlpflt.length==2)
    return (!(n.type.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[0].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[1].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1));
    else if(hlpflt.length==3)
    return (!(n.type.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[0].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[1].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(hlpflt[2].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[2].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[2].toUpperCase(),'g')!=-1));
    else if(hlpflt.length==4)
    return (!(n.type.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1  ||  n.zip.search(hlpflt[0].toUpperCase(),'g')!=-1 ||  n.address.toUpperCase().search(hlpflt[0].toUpperCase(),'g')!=-1 ||  n.type.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1  ||  n.zip.search(hlpflt[1].toUpperCase(),'g')!=-1 ||  n.address.toUpperCase().search(hlpflt[1].toUpperCase(),'g')!=-1 ||  n.type.toUpperCase().search(hlpflt[2].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[2].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[2].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(hlpflt[3].toUpperCase(),'g')!=-1||n.zip.search(hlpflt[3].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(hlpflt[3].toUpperCase(),'g')!=-1));

  },true);
  }

  for(var i=0;i<allhelpers.length;i++)
  {
    document.getElementById("data1").innerHTML+="Name: "+allhelpers[i].name+"<br>"+"Type: "+allhelpers[i].type+"<br>"+"Phone: "+allhelpers[i].contact+"<br>"+"Address: "+allhelpers[i].address+"<br>"+"Zip: "+allhelpers[i].zip+"<br>"+"Description: "+allhelpers[i].description+"<hr>"  ;
  }
  
}

function updateRequests() {
  document.getElementById("data2").innerHTML="";
  var allrequests;
  if(custRequests.length>0)
  allrequests=custRequests.concat(requests);
  else
  allrequests=requests;


  if(reqflt.length>0)
  {
  allrequests = jQuery.grep(allrequests, function (n) 
  {
    if(reqflt.length==1)
    return (!(n.type.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1||n.zip.search(reqflt[0],'g')!=-1||n.address.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1));
    else if(reqflt.length==2)
    return (!(n.type.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1||n.zip.search(reqflt[0].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1||n.zip.search(reqflt[1].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1));
    else if(reqflt.length==3)
    return (!(n.type.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1||n.zip.search(reqflt[0].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1||n.zip.search(reqflt[1].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(reqflt[2].toUpperCase(),'g')!=-1||n.zip.search(reqflt[2].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[2].toUpperCase(),'g')!=-1));
    else if(reqflt.length==4)
    return (!(n.type.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1  ||  n.zip.search(reqflt[0].toUpperCase(),'g')!=-1 ||  n.address.toUpperCase().search(reqflt[0].toUpperCase(),'g')!=-1 ||  n.type.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1  ||  n.zip.search(reqflt[1].toUpperCase(),'g')!=-1 ||  n.address.toUpperCase().search(reqflt[1].toUpperCase(),'g')!=-1 ||  n.type.toUpperCase().search(reqflt[2].toUpperCase(),'g')!=-1||n.zip.search(reqflt[2].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[2].toUpperCase(),'g')!=-1||n.type.toUpperCase().search(reqflt[3].toUpperCase(),'g')!=-1||n.zip.search(reqflt[3].toUpperCase(),'g')!=-1||n.address.toUpperCase().search(reqflt[3].toUpperCase(),'g')!=-1));

  },true);
  }

  
  for(var i=0;i<allrequests.length;i++)
  {
    document.getElementById("data2").innerHTML+="Type: "+allrequests[i].type+"<br>"+"Phone: "+allrequests[i].contact+"<br>"+"Address: "+allrequests[i].address+"<br>"+"Zip: "+allrequests[i].zip+"<br>"+"Description: "+allrequests[i].description+"<hr>"  ;

  }
  
}


var chiMap = L.map('map').setView([41.869348,-87.648419], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGFyaXNvbHVua2UiLCJhIjoiY2tocTE2cTVxMDF5aDJ4cXF6cXNrYzZjOSJ9.fFttCiuY-CT4ksQEmbdMlw'
}).addTo(chiMap);

var legend = L.control({ position: "bottomright" });

legend.onAdd = function(chiMap) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<svg height='22' width='22'> <circle cx='11' cy='11' r='10' stroke='blue' stroke-width='1' fill='blue' /></svg> You are Here<br>";

  div.innerHTML += "<svg height='22' width='22'> <circle cx='11' cy='11' r='10' stroke='red' stroke-width='1' fill='red' /></svg> Help Needed Here<br>";
  div.innerHTML += "<svg height='22' width='22'> <circle cx='11' cy='11' r='10' stroke='green' stroke-width='1' fill='green' /></svg> Help Available Here<br>";

  return div;
};
legend.addTo(chiMap);

var marker = L.circle([41.869348,-87.648419] ,{    
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 1,
  radius:15
}).addTo(chiMap);

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