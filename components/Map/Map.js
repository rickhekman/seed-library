import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as data from './seedlibraryData.json';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import Link from 'next/link';

export const icon = new Icon({
  iconUrl: "/images/seedling.svg",
  iconSize: [35, 35]
})

console.log('styles', styles.popuptext)
function Map() {
  return(
    <div>
      <MapContainer 
        center={[52.080190, 4.310130]} 
        zoom={13}
        scrollWheelZoom={true}
        className={styles.container}
        >
         <TileLayer
            url={`https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}`}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            accessToken='u0zxAgsoNfu6Su1TkxbFzjB1SQzU3mwxg2ocSJ5VBMhwiqdnun3DilcasaVFyxT5'
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
              <div className={styles.popup}>
                <h2 className={styles.popuptitle}>
                {seedlibrary.properties.location_name}
                </h2>
                <p className={styles.popuptext}>
                {seedlibrary.properties.street}<br />
                {seedlibrary.properties.zipcode} {seedlibrary.properties.city}<br />
                <Link href={seedlibrary.properties.website}>
                  {seedlibrary.properties.website}
                </Link>
                </p>
              </div>
               
                
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}

export default Map
