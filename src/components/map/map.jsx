import React, {useRef, useEffect, useState} from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {connect} from "react-redux";
import {Coordinates} from "../../constants";
import {OFFERS_TYPES} from "../types";

const ZOOM = 12;

export const Map = (props) => {
  const {offers, hoveredElement, selectedCity} = props;
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: Coordinates[selectedCity].lat,
        lng: Coordinates[selectedCity].lng,
      },
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    mapRef.current.setView(Coordinates[selectedCity], ZOOM);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;
          <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(mapRef.current);

    setMap(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [selectedCity]);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const isActive = hoveredElement ? point.id === hoveredElement : false;
        const {location} = point;
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [30, 30],
        });

        leaflet
          .marker(
              {
                lat: location.latitude,
                lng: location.longitude,
              },
              {
                icon: customIcon,
              }
          )
          .addTo(mapRef.current)
          .bindPopup(point.title);
      });
    }
  }, [props, map]);

  return <div id="map" style={{height: `100%`}} ref={mapRef} />;
};

Map.propTypes = OFFERS_TYPES;

const mapStateToProps = (state) => {
  return {
    hoveredElement: state.hoveredElement,
    selectedCity: state.selectedCity,
  };
};

export default connect(mapStateToProps)(Map);
