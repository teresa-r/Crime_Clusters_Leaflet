// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
// var myMap = L.map("map").setView([37.09, -87.71], 4);
var myMap = L.map("map", {
  center: [41.8781, -87.6298],
  zoom: 10,
  preferCanvas: true
});


// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
  // id: "mapbox.streets",
  // id: "mapbox.light",
  // id: "mapbox.dark",
  // id: "mapbox.satellite",
  // id: "mapbox.streets-satellite",
  // id: "mapbox.wheatpaste",
  // id: "mapbox.streets-basic",
  // id: "mapbox.comic",
  // id: "mapbox.outdoors", //# this one has transportation and highway
  // id: "mapbox.run-bike-hike", //# this one is good
  // id: "mapbox.pencil",
  // id: "mapbox.pirates",
  // id: "mapbox.emerald", // this one has transportation
  // id: "mapbox.high-contrast", //this one has highway


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.run-bike-hike", 
  updateWhenZooming: false,
  updateWhenIdle: true,
  accessToken: API_KEY
}).addTo(myMap);


//------------------------------------------------------------Income Per Location-------------------------------------
// var incomePerLocation = "Income_per_location.csv"
// d3.csv("Income_per_location.csv", function(d) {
//       console.log ("Test", d)
// // Create a rectangle and pass in some initial options
// L.rectangle([
//   [41.80752727, -87.67344871],
// ], {
//   color: "black",
//   weight: 3,
//   stroke: true
// }).addTo(myMap);


// })


// // Census Tract Geojson//
// var queryUrl = "Boundaries - Census Tracts - 2010.geojson";
// d3.json(queryUrl, function(data) {
// console.log ("Census", data)
// });

//------------------------------------------------------------Cluster file from John-------------------------------------
//Cluster by crime type


// var cluster= ("total_cluster_df_wLocation.json")
// d3.json("total_cluster_df_wLocation.json", function(clusterData) {
//   console.log ("clusterData", clusterData)
//   var cluster = clusterData

// for (var i = 0; i < cluster.length; i++) {
//   var CrimeType = cluster[i];
//   L.marker(CrimeType.location)
//     .bindPopup("<h1>" + CrimeType.name + "</h1> <hr> <h3>Population " + CrimeType.population + "</h3>")
//     .addTo(myMap);
// };
// });

//------------------------------------------------------------Cluster copy and paste-------------------------------------
  var cluster = [
    {
      "index": "0",
      "Longitude": -87.67344871,
      "Latitude": 41.80752727,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.807526,
         -87.67345
      ]
   },
   {
      "index": 1,
      "Longitude": -87.67382751,
      "Latitude": 42.01264977,
      "Crime_type": "HOMICIDE",
      "Location": [
         42.01265,
         -87.67383
      ]
   },
   {
      "index": 2,
      "Longitude": -87.64092074,
      "Latitude": 41.92972657,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.929726,
         -87.64092
      ]
   },
   {
      "index": 3,
      "Longitude": -87.70614999,
      "Latitude": 41.97256537,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.972565,
         -87.70615
      ]
   },
   {
      "index": 4,
      "Longitude": -87.77311239,
      "Latitude": 41.77783091,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.777832,
         -87.77311
      ]
   },
   {
      "index": 5,
      "Longitude": -87.6579085,
      "Latitude": 41.96608155,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.96608,
         -87.657906
      ]
   },
   {
      "index": 6,
      "Longitude": -87.7108242,
      "Latitude": 41.69800198,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.698,
         -87.71082
      ]
   },
   {
      "index": 7,
      "Longitude": -87.76119564,
      "Latitude": 41.97518547,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.975185,
         -87.76119
      ]
   },
   {
      "index": 8,
      "Longitude": -87.80572224,
      "Latitude": 41.93076129,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.93076,
         -87.805725
      ]
   },
   {
      "index": 9,
      "Longitude": -87.6551644,
      "Latitude": 41.98281871,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.98282,
         -87.65517
      ]
   },
   {
      "index": 10,
      "Longitude": -87.52725823,
      "Latitude": 41.65143133,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.651432,
         -87.52726
      ]
   },
   {
      "index": 11,
      "Longitude": -87.68171857,
      "Latitude": 41.94682308,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.946823,
         -87.68172
      ]
   },
   {
      "index": 12,
      "Longitude": -87.83662354,
      "Latitude": 41.97597841,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.97598,
         -87.836624
      ]
   },
   {
      "index": 13,
      "Longitude": -87.74822428,
      "Latitude": 41.95797427,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.957973,
         -87.74822
      ]
   },
   {
      "index": 14,
      "Longitude": -87.5592994,
      "Latitude": 41.65306216,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.65306,
         -87.559296
      ]
   },
   {
      "index": 15,
      "Longitude": -87.79406942,
      "Latitude": 41.77380925,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.773808,
         -87.79407
      ]
   },
   {
      "index": 16,
      "Longitude": -87.79665486,
      "Latitude": 41.97253017,
      "Crime_type": "HOMICIDE",
      "Location": [
         41.97253,
         -87.79665
      ]
   },
   {
      "index": 17,
      "Longitude": -87.68146105,
      "Latitude": 41.83305635,
      "Crime_type": "ARSON",
      "Location": [
         41.833057,
         -87.68146
      ]
   },
   {
      "index": 18,
      "Longitude": -87.53770167,
      "Latitude": 41.6965688,
      "Crime_type": "ARSON",
      "Location": [
         41.696568,
         -87.537704
      ]
   },
   {
      "index": 19,
      "Longitude": -87.68210301,
      "Latitude": 41.72218499,
      "Crime_type": "ARSON",
      "Location": [
         41.722183,
         -87.682106
      ]
   },
   {
      "index": 20,
      "Longitude": -87.60233216,
      "Latitude": 41.65685118,
      "Crime_type": "ARSON",
      "Location": [
         41.656853,
         -87.60233
      ]
   },
   {
      "index": 21,
      "Longitude": -87.82273723,
      "Latitude": 41.97685876,
      "Crime_type": "ARSON",
      "Location": [
         41.97686,
         -87.82274
      ]
   },
   {
      "index": 22,
      "Longitude": -87.8464671,
      "Latitude": 41.97760948,
      "Crime_type": "ARSON",
      "Location": [
         41.977608,
         -87.846466
      ]
   },
   {
      "index": 23,
      "Longitude": -87.60820349,
      "Latitude": 41.81857481,
      "Crime_type": "ARSON",
      "Location": [
         41.818573,
         -87.6082
      ]
   },
   {
      "index": 24,
      "Longitude": -87.54715888,
      "Latitude": 41.65091053,
      "Crime_type": "ARSON",
      "Location": [
         41.65091,
         -87.54716
      ]
   },
   {
      "index": 25,
      "Longitude": -87.817494,
      "Latitude": 41.99995796,
      "Crime_type": "ARSON",
      "Location": [
         41.999958,
         -87.8175
      ]
   },
   {
      "index": 26,
      "Longitude": -87.69824352,
      "Latitude": 42.01845145,
      "Crime_type": "ARSON",
      "Location": [
         42.01845,
         -87.69824
      ]
   },
   {
      "index": 27,
      "Longitude": -87.74833568,
      "Latitude": 41.99401997,
      "Crime_type": "ARSON",
      "Location": [
         41.99402,
         -87.74834
      ]
   },
   {
      "index": 28,
      "Longitude": -87.74152854,
      "Latitude": 41.75459296,
      "Crime_type": "ARSON",
      "Location": [
         41.754593,
         -87.74153
      ]
   },
   {
      "index": 29,
      "Longitude": -87.87023635,
      "Latitude": 41.9740196,
      "Crime_type": "ARSON",
      "Location": [
         41.97402,
         -87.87024
      ]
   },
   {
      "index": 30,
      "Longitude": -87.70794068,
      "Latitude": 41.68570816,
      "Crime_type": "ARSON",
      "Location": [
         41.685707,
         -87.70794
      ]
   },
   {
      "index": 31,
      "Longitude": -87.57663378,
      "Latitude": 41.69548154,
      "Crime_type": "ARSON",
      "Location": [
         41.69548,
         -87.57664
      ]
   },
   {
      "index": 32,
      "Longitude": -87.58874204,
      "Latitude": 41.799545,
      "Crime_type": "ARSON",
      "Location": [
         41.799545,
         -87.588745
      ]
   },
   {
      "index": 33,
      "Longitude": -87.69089557,
      "Latitude": 41.84474794,
      "Crime_type": "NARCOTICS",
      "Location": [
         41.84475,
         -87.690895
      ]
   },
   {
      "index": 34,
      "Longitude": -87.54230442,
      "Latitude": 41.6532154,
      "Crime_type": "NARCOTICS",
      "Location": [
         41.653214,
         -87.542305
      ]
   },
   {
      "index": 35,
      "Longitude": -87.903496,
      "Latitude": 41.97779052,
      "Crime_type": "NARCOTICS",
      "Location": [
         41.97779,
         -87.903496
      ]
   },
   {
      "index": 36,
      "Longitude": -87.9074726,
      "Latitude": 41.95390047,
      "Crime_type": "NARCOTICS",
      "Location": [
         41.9539,
         -87.90747
      ]
   },
   {
      "index": 37,
      "Longitude": -87.92736489,
      "Latitude": 42.00607411,
      "Crime_type": "NARCOTICS",
      "Location": [
         42.006073,
         -87.92737
      ]
   },
   {
      "index": 38,
      "Longitude": -87.66387908,
      "Latitude": 41.86210201,
      "Crime_type": "THEFT",
      "Location": [
         41.862103,
         -87.66388
      ]
   },
   {
      "index": 39,
      "Longitude": -87.903496,
      "Latitude": 41.97779052,
      "Crime_type": "THEFT",
      "Location": [
         41.97779,
         -87.903496
      ]
   },
   {
      "index": 40,
      "Longitude": -87.93427269,
      "Latitude": 42.00816197,
      "Crime_type": "THEFT",
      "Location": [
         42.008163,
         -87.93427
      ]
   },
   {
      "index": 41,
      "Longitude": -87.66803685,
      "Latitude": 41.83391243,
      "Crime_type": "BATTERY",
      "Location": [
         41.83391,
         -87.66804
      ]
   },
   {
      "index": 42,
      "Longitude": -87.90052009,
      "Latitude": 41.97679965,
      "Crime_type": "BATTERY",
      "Location": [
         41.9768,
         -87.90052
      ]
   },
   {
      "index": 43,
      "Longitude": -91.68656568,
      "Latitude": 36.6194464,
      "Crime_type": "BATTERY",
      "Location": [
         36.619446,
         -91.68657
      ]
   },
   {
      "index": 44,
      "Longitude": -87.91510545,
      "Latitude": 41.95378308,
      "Crime_type": "BATTERY",
      "Location": [
         41.953785,
         -87.91511
      ]
   },
   {
      "index": 45,
      "Longitude": -87.66577898,
      "Latitude": 41.83896798,
      "Crime_type": "ROBBERY",
      "Location": [
         41.838966,
         -87.66578
      ]
   },
   {
      "index": 46,
      "Longitude": -87.78673839,
      "Latitude": 42.0114812,
      "Crime_type": "ROBBERY",
      "Location": [
         42.011482,
         -87.786736
      ]
   },
   {
      "index": 47,
      "Longitude": -87.90389884,
      "Latitude": 41.98078321,
      "Crime_type": "ROBBERY",
      "Location": [
         41.98078,
         -87.9039
      ]
   },
   {
      "index": 48,
      "Longitude": -87.91403057,
      "Latitude": 41.96352938,
      "Crime_type": "ROBBERY",
      "Location": [
         41.963528,
         -87.91403
      ]
   },
   {
      "index": 49,
      "Longitude": -87.66709266,
      "Latitude": 41.83048485,
      "Crime_type": "ASSAULT",
      "Location": [
         41.830486,
         -87.66709
      ]
   },
   {
      "index": 50,
      "Longitude": -87.90178291,
      "Latitude": 41.9771392,
      "Crime_type": "ASSAULT",
      "Location": [
         41.97714,
         -87.90178
      ]
   },
   {
      "index": 51,
      "Longitude": -87.92736489,
      "Latitude": 42.00607411,
      "Crime_type": "ASSAULT",
      "Location": [
         42.006073,
         -87.92737
      ]
   },
   {
      "index": 52,
      "Longitude": -87.89900883,
      "Latitude": 42.00544069,
      "Crime_type": "ASSAULT",
      "Location": [
         42.00544,
         -87.89901
      ]
   },
   {
      "index": 53,
      "Longitude": -87.67873166,
      "Latitude": 41.84739607,
      "Crime_type": "MOTOR VEHICLE THEFT",
      "Location": [
         41.847397,
         -87.678734
      ]
   },
   {
      "index": 54,
      "Longitude": -87.91486972,
      "Latitude": 41.99430053,
      "Crime_type": "MOTOR VEHICLE THEFT",
      "Location": [
         41.9943,
         -87.91487
      ]
   }
]

for (var i = 0; i < cluster.length; i++) {
  var CrimeType = cluster[i];
  L.marker(CrimeType.Location)
    .bindPopup("<h1>" + CrimeType.name + "</h1> <hr> <h3>Population " + "</h3>")
    .addTo(myMap);
};

Crime_type
  // https://leafletjs.com/examples/choropleth/
  // http://colorbrewer2.org/#type=sequential&scheme=Greens&n=6
  function getColor(d) {
    return d > 5  ? '#bd0026' :
           d > 4  ? '#f03b20' :
           d > 3  ? '#fd8d3c' :
           d > 2  ? '#feb24c' :
           d > 1  ? '#fed976' :
                    '#c7e9c0';
  }



// Step 3:Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  // console.log("queryurlData", data)


  // Loop through the cities array and create one marker for each city object
    // for (var i = 0; i < data.features.length; i++) {
    //     var coordinates = data.features[i].geometry.coordinates;
    //     var magnitutde = data.features[i].properties.mag;
    //     var location = data.features[i].properties.place;
    //     var event_date = new Date(data.features[i].properties.time);
    //     L.circle([coordinates[1],coordinates[0]],{
    //         fillColor: getColor(magnitutde),
    //         weight: 2, 
    //         opacity: 1,
    //         color: getColor(magnitutde),
    //         fillOpacity: 0.7,
            

            // Setting our circle's radius equal to the output of our markerSize function
            // This will make our marker's size proportionate to its population
            // radius: magnitutde * 29000,
            
            // radius: markerSize(data[i].features)
//         }).bindPopup("<h3>" + location + "</h3><hr><h3> Magnitude: " + magnitutde + "</h5>" + "<p>" + event_date + "</p>") // Add tooltip
//         .addTo(myMap);
//     };
// })



// var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

	var div = L.DomUtil.create('div', 'legend'),
		color = [0,1,2,3,4,5],
		labels = [];

	// loop through our density intervals and generate a label with a colored square for each interval
	for (var i = 0; i < color.length; i++) {
		div.innerHTML +=
			'<i style="background:' + getColor(color[i] + 1) + '"></i> ' +
			color[i] + (color[i + 1] ? '&ndash;' + color[i + 1] + '<br>' : '+');
	}

	return div;
};

legend.addTo(myMap);