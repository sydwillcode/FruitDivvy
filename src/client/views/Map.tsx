import React, { useEffect } from 'react'
import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import ProviderDetail from './ProviderDetail';

const containerStyle = {
  width: '100vw',
  height: '91vh'
};
const center = {
  lat: 33.5186,
  lng: -86.8104,
};

const mapStyles = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#ffffff"
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#3e606f"
          },
          {
              "weight": 2
          },
          {
              "gamma": 0.84
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
          {
              "weight": 0.6
          },
          {
              "color": "#1a3541"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2c5a71"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#406d80"
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#2c5a71"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#29768a"
          },
          {
              "lightness": -37
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#406d80"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#193341"
          }
      ]
  }
];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};

function Map() {


  const [markers, setMarkers] = React.useState<providersData[]>([]);

  const [selected, setSelected] = React.useState(null);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("/api/locations", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
        if (res.ok) {
          let data = await res.json();
          var seen = [];
          data = data.filter(function(entry) {
              var previous;

              // Have we seen this label before?
              if (seen.hasOwnProperty(entry.userid)) {
                  // Yes, grab it and add this data to it
                  previous = seen[entry.userid];
                  previous.fruit.push(entry.fruit);

                  // Don't keep this entry, we've merged it into the previous one
                  return false;
              }

              // entry.data probably isn't an array; make it one for consistency
              if (!Array.isArray(entry.fruit)) {
                  entry.fruit = [entry.fruit];
              }

              // Remember that we've seen it
              seen[entry.userid] = entry;

              // Keep this one, we'll merge any others that match into it
              return true;
          });
          console.log(data)
          setMarkers(data)
        } else {
          console.log('something went wrong')
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBa6FOxyZS33BgzNn-xmWuq2JPor7cNroQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={options}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.name}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon = {{
              url: "/assets/map-marker-01.svg",
              scaledSize: new window.google.maps.Size(60,60),
              origin: new window.google.maps.Point(0,0),
              anchor: new window.google.maps.Point(0,0)
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))};

            {selected ? (
          <ProviderDetail selected ={selected} />
        ) : null}
        <></>
      </GoogleMap>
    </LoadScript>
  )

}

interface providersData {
  userid: string,
  name: string,
  lat: number,
  lng: number,
  fruit: []
}
export default React.memo(Map)