import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as data from './seedlibraryData.json';

export const icon = new Icon({
  iconUrl: "/images/seedling.svg",
  iconSize: [30, 30]
})
function Map() {
  return(
    <div>
      <MapContainer 
        center={[52.080190, 4.310130]} 
        zoom={13}
        scrollWheelZoom={true}
        className="leaflet-container"
        >
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {data.features.map(seedlibrary => (
             <Marker
              key={seedlibrary.properties.library_ID}
              position={[
                seedlibrary.geometry.coordinates[0],
                seedlibrary.geometry.coordinates[1]
              ]}
              animate={false}
              icon={icon}
              >
              <Popup>
                {seedlibrary.properties.location_name}
                {seedlibrary.properties.street}
                {seedlibrary.properties.zipcode}{seedlibrary.properties.city}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}

export default Map
