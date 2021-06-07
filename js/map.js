function PopUp(hideOrshow) {
    if (hideOrshow == 'show') document.getElementById('ac-wrapper');
    else document.getElementById('ac-wrapper').style.display = "none";
}
var mymap = L.map('mapid').setView([44.6, -78.5], 8);
    
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

// var geojsonLayer = new L.GeoJSON.AJAX("validation/result.geojson", {
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup('<h1>'+feature.properties.Species+'</h1>');
// }});

var geojsonLayer = new L.GeoJSON.AJAX("validation/result.geojson", {
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=rilsween%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="width:200px;height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info'); 
// 				
	//Add points and pop-ups to map			
}});
geojsonLayer.addTo(mymap);
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<h6>Would you like to add a tree?<h6>" + 
            "</br><a href=\"https://ee.humanitarianresponse.info/x/WEESKP4c?returnUrl=https://rileysweeneyfleming.github.io/CollabWebPage/fruittreemap.html\">Submission Form</a>")   //This here is just the onclick popup for anywhere on the map
        .openOn(mymap);
}

mymap.on('click', onMapClick);
// Javascript for user current location
L.control.locate().addTo(mymap);
var rainviewer = L.control.rainviewer({
        position: 'topleft',
        nextButtonText: '>',
        playStopButtonText: 'Start/Stop',
        prevButtonText: '<',
        positionSliderLabelText: "Time:",
        opacitySliderLabelText: "Opacity:",
        animationInterval: 500,
        opacity: 0.3
    });
rainviewer.addTo(mymap);
//Adding credit Fleming Logo to bottom corner
L.controlCredits({
    image: "image/FlemingGIS.png",
    link: "https://flemingcollege.ca/programs/geographic-information-systems-applications-specialist",
    text: "Fleming College<br/>GIS Students"
}).addTo(mymap);

//Search Bar START
// Will open most recent point added with selected species name
var controlSearch = new L.Control.Search({
    position:'topright',
    propertyName: 'Species',		
    layer: geojsonLayer,
    initial: false,
    zoom: 12,
    marker: false,
    circleLocation: false
});

controlSearch.on('search:locationfound', function(e) {
if(e.layer._popup)
    e.layer.openPopup();
});

mymap.addControl( controlSearch );

//Search Bar END

// Compass widget script START
var comp = new L.Control.Compass({autoActive: true, showDigit:true});

mymap.addControl(comp);
// Compass widget script END