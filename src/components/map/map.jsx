import React, {useRef, useEffect, useState} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {OFFERS_TYPES} from '../types';

export const Map = ({offers, hoveredElement}) => {
  const cityLocation = {
    lat: 52.38333,
    lng: 4.9,
  };
  const currentZoom = 12;

  const mapRef = useRef(null);
  const [mapState, setMapState] = useState(null);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: cityLocation.lat,
        lng: cityLocation.lng,
      },
      zoom: currentZoom,
      zoomControl: false,
      marker: true,
    });

    mapRef.current.setView(cityLocation, currentZoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    setMapState(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, setMapState]);

  useEffect(() => {
    if (mapState) {
      offers.forEach((point) => {
        const isActive = hoveredElement ? point.id === hoveredElement : false;
        const {location} = point;
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [30, 30]
        });

        leaflet.marker({
          lat: location.latitude,
          lng: location.longitude,
        },
        {
          icon: customIcon
        })
        .addTo(mapRef.current)
        .bindPopup(point.title);
      });
    }
  }, [offers, hoveredElement, mapState]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = OFFERS_TYPES;
