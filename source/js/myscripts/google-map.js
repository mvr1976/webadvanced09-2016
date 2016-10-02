
            // google.maps.event.addDomListener(window, 'load', initMap);
        
            // function initMap() {              
            //     var mapOptions = {                    
            //         zoom: 11,                   
            //         center: new google.maps.LatLng(40.6700, -73.9400),                 
            //         styles: [	{"featureType":"landscape",
            //             "stylers":[	{"hue":"#FFBB00"},
            //                         {"saturation":43},
            //                         {"lightness":37	},
            //                         {"gamma":1	}
            //                         ]},

            //                     {"featureType":"road.highway",
            //                  "stylers":[{"hue":"#FFC200"},
            //                             {"saturation":-61.8	},
            //                             {"lightness":45	},
            //                             {"gamma":1	}		]	},

            //                 	{"featureType":"road.arterial",	
            //                 "stylers":[	{"hue":"#FF0300"},
            //                         	{"saturation":-100},
            //                             {"lightness":51},
            //                             {"gamma":1			}		]	},
            //                 	{"featureType":"road.local",
            //                 "stylers":[	{"hue":"#FF0300"},
            //                              {"saturation":-100	},
            //                              {"lightness":52},
            //                              {"gamma":1	}		]	},
            //                 	{"featureType":"water",	
            //                 "stylers":[	{"hue":"#0078FF"},
            //                             {"saturation":-13},
            //                         	{"lightness":2.4},
            //                             {"gamma":1	}		]	},
            //                 	{"featureType":"poi",	
            //                 "stylers":[	{"hue":"#00FF6A"},
            //                             {"saturation":-1},
            //                         	{"lightness":11.2	},
            //                             {"gamma":1}]
            //         	}]
            //     };

            //     // Get the HTML DOM element that will contain your map 
            //     // We are using a div with id="map" seen below in the <body>
            //     var mapElement = document.getElementById('map');

            //     // Create the Google Map using our element and options defined above
            //     var map = new google.maps.Map(mapElement, mapOptions);

            //     // Let's also add a marker while we're at it
            //     var marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(40.6700, -73.9400),
            //         map: map,
            //         title: 'Snazzy!'
            //     });
            // }

            // end of first one
       

            // When the window has finished loading create our google map below
            // google.maps.event.addDomListener(window, 'load', initMap);
        
            // function initMap() {
            //     // Basic options for a simple Google Map
            //     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            //     var mapOptions = {
            //         // How zoomed in you want the map to start at (always required)
            //         zoom: 10,

            //         // The latitude and longitude to center the map (always required)
            //         center: new google.maps.LatLng(44.58527143, 37.98389912), // New York

            //         // How you would like to style the map. 
            //         // This is where you would paste any style found on Snazzy Maps.
            //         styles: [{"featureType":"landscape.natural","elementType":"geometry.fill",
            //                 "stylers":[{"visibility":"on"},{"color":"#e0efef"}]},
            //                 {"featureType":"poi","elementType":"geometry.fill",
            //                 "stylers":[{"visibility":"on"},{"hue":"#07ac99"},{"color":"#07ac99"}]},
            //                 {"featureType":"road","elementType":"geometry",
            //                 "stylers":[{"lightness":100},{"visibility":"simplified"}]},
            //                 {"featureType":"road","elementType":"labels",
            //                 "stylers":[{"visibility":"off"}]},
            //                 {"featureType":"transit.line","elementType":"geometry",
            //                 "stylers":[{"visibility":"on"},{"lightness":700}]},
            //                 {"featureType":"water","elementType":"all",
            //                 "stylers":[{"color":"#7dcdcd"}]}]
            //             };

            //     // Get the HTML DOM element that will contain your map 
            //     // We are using a div with id="map" seen below in the <body>
            //     var mapElement = document.getElementById('map');

            //     // Create the Google Map using our element and options defined above
            //     var map = new google.maps.Map(mapElement, mapOptions);

            //     // Let's also add a marker while we're at it
            //     var marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(44.58527143, 37.98389912),
            //         map: map,
            //         title: 'Snazzy!'
            //     });
            // }


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.58527143, lng: 37.98389912},
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    styles: [{"featureType":"landscape",
            "stylers":[  {"hue":"#FFBB00"},
                        {"saturation":43},
                        {"lightness":37  },
                        {"gamma":1   }
                        ]},
            {"featureType":"water", 
            "stylers":[ {"hue":"#0078FF"},
                        {"saturation":-13},
                        {"lightness":2.4},
                        {"gamma":1}
                        ]}
        ]
  });
  var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(44.58527143, 37.98389912),
                    map: map                    
    });  
}