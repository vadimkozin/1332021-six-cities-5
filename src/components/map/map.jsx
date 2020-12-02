import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import leaflet from 'leaflet';
import {MAP_TYPE} from '../../types/types';
import {MAP_ZOOM_DEFAULT, MapType} from '../../const';
import {getCityCenter} from '../../utils';
import {getHotel} from '../../store/selectors/offers';
import 'leaflet/dist/leaflet.css';
import './map.css';

const FROM_MAPTYPE_TO_CLASSNAME = {
  [MapType.VERTICAL]: `map--vertical`,
  [MapType.HORIZONTAL]: `map--horizontal`,
};

const mapSeed = {
  getCoordinates: (offer) => {
    return offer && offer.position && offer.position.latitude
      ? [offer.position.latitude, offer.position.longitude]
      : null;
  },
  getMapSetting: (props) => {
    return {
      center: getCityCenter(props.city),
      zoom: props.zoom || MAP_ZOOM_DEFAULT,
      zoomControl: props.zoomControl || false,
      marker: props.marker || true,
    };
  },
  getIcon: (type) => {
    return leaflet.icon({
      iconUrl: `img/pin${type === `active` ? `-active` : ``}.svg`,
      iconSize: [30, 30]
    });
  },
  getClassName: (type) => {
    return FROM_MAPTYPE_TO_CLASSNAME[type];
  },
};

let map = null;

const Map = (props) => {
  const {layoutType, offers} = props;
  const mapSetting = mapSeed.getMapSetting(props);
  const offerActive = useSelector(getHotel);

  const addMarkers = (offerCoords, offerActiveCoords) => {
    offerCoords.forEach((coord) => {
      leaflet.marker(coord, {icon: mapSeed.getIcon()}).addTo(map);
    });

    if (offerActiveCoords) {
      leaflet.marker(offerActiveCoords, {icon: mapSeed.getIcon(`active`)}).addTo(map);
    }
  };

  const updateMap = () => {
    const coordinates = offers.map((offer) => mapSeed.getCoordinates(offer));
    const coordinatesActive = mapSeed.getCoordinates(offerActive);

    addMarkers(coordinates, coordinatesActive);
  };

  useEffect(() => {
    map = leaflet.map(`map`, mapSetting)
      .setView(mapSetting.center, mapSetting.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    updateMap();
  }, []);

  useEffect(() => {
    updateMap();
  }, [offerActive]);

  return <div id="map" className={FROM_MAPTYPE_TO_CLASSNAME[layoutType]} />;
};


Map.propTypes = MAP_TYPE;

export default Map;
