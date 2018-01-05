function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [{
                "stylers": [{
                        "hue": "#ff1a00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 33
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2D333C"
                }]
            }
        ], { name: 'Styled Map' });

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.0765018, lng: -110.9582692 },
        zoom: 20,
        //   mapTypeControlOptions: {
        //     mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        //             'styled_map']
        //   }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var myLatlng = new google.maps.LatLng(29.0765018, -110.9582692);
    var marker = new google.maps.Marker({
        position: myLatlng,
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

    var contentString = '<div id="content">' +
        '<div id="infoWindow">' +
        '<p>2da de Obregon #140, Colonia Centenario Hermosillo, Sonora. C.P. 83260 ' +
        '</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    infowindow.open(map, marker);

}