import React from 'react';
import styles from './map.css';
import mapStyle from './map-style.js';

function Map({lat, lng, zoom}) {
    const mapDiv = React.createRef();

    if (lat && lng) {
        const map = new window.google.maps.Map(
            mapDiv.current, {
                zoom: zoom || 12,
                center: {lat, lng},
                disableDefaultUI: true,
                styles: mapStyle
            }
        );
        new window.google.maps.Marker({position: {lat, lng}, map: map})
    }

    return (
        <div ref={mapDiv} className={styles.Map}></div>
    );
}

export default Map;