var conifer = L.layerGroup();
var trees = L.layergroup();
// var shrubs = L.layergroup();
// var other = L.layergroup();

function PopUp(hideOrshow) {
    if (hideOrshow == 'show') document.getElementById('ac-wrapper');
    else document.getElementById('ac-wrapper').style.display = "none";
}
var mymap = L.map('mapid', {
    center: [44.6, -78.5],
    zoom: 8,
    layers: [conifer, trees, shrubs, other]   
});
    
var basemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
})
basemap.addTo(mymap);



// var geojsonLayer = new L.GeoJSON.AJAX("validation/result.geojson", {
//     onEachFeature: function (feature, layer) {
//         layer.bindPopup('<h1>'+feature.properties.Species+'</h1>');
// }});


 


//var Conifers = L.layerGroup([geojsonLayer]);

//CONIFERS
var geojsonLayer = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Spruce, Blue"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer.addTo(conifer);

var geojsonLayer2 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Spruce, White"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer2.addTo(conifer);

//DECIDUOUS TREES
var geojsonLayer3 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Apple, Common"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer3.addTo(trees);

var geojsonLayer4 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Cherry, Black"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer4.addTo(trees);

var geojsonLayer5 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Walnut, English"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer5.addTo(trees);

var geojsonLayer6 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Walnut, Black"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer6.addTo(trees);

var geojsonLayer7 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Pear, European"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer7.addTo(trees);

var geojsonLayer8 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Maple, Sugar"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer8.addTo(trees);

var geojsonLayer9 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Maple, Black"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer9.addTo(trees);

var geojsonLayer10 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Cherry, Pin"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer10.addTo(trees);

var geojsonLayer11 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Chestnut, American"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer11.addTo(trees);

var geojsonLayer12 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Chokecherry"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer12.addTo(trees);

var geojsonLayer13 = new L.GeoJSON.AJAX("validation/result.geojson", {
    filter: function(feature) { return feature.properties.Species == "Plum, American"},
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info');
       
        
 				
	//Add points and pop-ups to map			
}});
geojsonLayer13.addTo(trees);
// function trees (feature){
//     if (feature.properties.Species == "Walnut, Black") return true
// };
// //var Conifers = L.layerGroup([geojsonLayer]);

// var geojsonLayer2 = new L.GeoJSON.AJAX("validation/result.geojson", {
//  filter: trees,
//    onEachFeature: function (feature, layer) {
//        layer.bindPopup('<b><center> Species:' + feature.properties.Species + '<br> Species Name if Other: ' + feature.properties.OtherTreeName +
//        '<br> Comments: ' + feature.properties.Comments + '<br>' + 
//        '<img src= "https://kc.humanitarianresponse.info/media/original?media_file=fruittreemap%2Fattachments%2F'+ 
//        feature.properties.Upload_or_take_a_pho_of_the_edible_plant + '"' +' style="height:200px;">' + '<br>' + 'Click' +
//        '<a target="_blank" href=\"plantlist.html' + '"> HERE</a>' + ' for plant info, recipes and harvesting info'); 
                
//    //Add points and pop-ups to map			
// }});
// geojsonLayer2.addTo(trees);



//Attempting GEOJSON filter:
var baseLayers = {
    "basemap": basemap

};

var overlays = {
    "Conifers": conifer
    //"Trees": trees
};

L.control.layers(baseLayers, overlays).addTo(mymap);
// var overlayMaps = {
//     "Conifers": Conifers
// };

// L.control.layers(overlayMaps).addTo(mymap);


//END FILTER

var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<h6>Would you like to add a tree?<h6>" + 
            "</br><a href=\"https://ee.humanitarianresponse.info/single/m7ft93Qv?returnUrl=https://rileysweeneyfleming.github.io/CollabWebPage/fruittreemap.html\">Submission Form</a>")   //This here is just the onclick popup for anywhere on the map
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
// var controlSearch = new L.Control.Search({
//     position:'topright',
//     propertyName: 'Species',		
//     layer: geojsonLayer,
//     initial: false,
//     zoom: 12,
//     marker: false,
//     circleLocation: false
// });

// controlSearch.on('search:locationfound', function(e) {
// if(e.layer._popup)
//     e.layer.openPopup();
// });

// mymap.addControl( controlSearch );

//Search Bar END

// Compass widget script START
var comp = new L.Control.Compass({autoActive: true, showDigit:true});

mymap.addControl(comp);
// Compass widget script END


// BOOTSTRAP NAVBAR
	window.addEventListener("resize", function() {
		"use strict"; window.location.reload(); 
	});


document.addEventListener("DOMContentLoaded", function(){
        

    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
        element.addEventListener('click', function (e) {
          e.stopPropagation();
        });
    })



    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
                      // hide every submenu as well
                      everysubmenu.style.display = 'none';
                  });
            })
        });
        
        document.querySelectorAll('.dropdown-menu a').forEach(function(element){
            element.addEventListener('click', function (e) {
    
                  let nextEl = this.nextElementSibling;
                  if(nextEl && nextEl.classList.contains('submenu')) {	
                      // prevent opening link if link needs to open dropdown
                      e.preventDefault();
                      console.log(nextEl);
                      if(nextEl.style.display == 'block'){
                          nextEl.style.display = 'none';
                      } else {
                          nextEl.style.display = 'block';
                      }

                  }
            });
        })
    }
    // end if innerWidth

}); 
// DOMContentLoaded  end