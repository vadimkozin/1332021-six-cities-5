import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {MAP_TYPE_NEW} from '../../types/types';
import {MAP_ZOOM_DEFAULT, MapType} from '../../const';
import {getCityCenter} from '../../mocks/offers';
import 'leaflet/dist/leaflet.css';
import './map.css';

class MapNew extends PureComponent {
  constructor(props) {
    super(props);

    this.mapSetting = {
      center: getCityCenter(props.city),
      zoom: props.zoom || MAP_ZOOM_DEFAULT,
      zoomControl: props.zoomControl || false,
      marker: props.marker || true
    };
  }

  get icon() {
    return leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  get iconActive() {
    return leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  getClassName(type) {
    switch (type) {
      case MapType.VERTICAL:
        return `map--vertical`;
      case MapType.HORIZONTAL:
        return `map--horizontal`;
      default:
        return ``;
    }
  }

  addMarkers(map, offerCoords, offerActiveCoords) {
    offerCoords.forEach((coord) => {
      leaflet.marker(coord, {icon: this.icon}).addTo(map);
    });

    if (offerActiveCoords) {
      leaflet.marker(offerActiveCoords, {icon: this.iconActive}).addTo(map);
    }
  }

  componentDidMount() {
    const map = leaflet.map(`map`, this.mapSetting)
      .setView(this.mapSetting.center, this.mapSetting.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const getCoordinates = (offer) => {
      return offer && offer.position && offer.position.latitude
        ? [offer.position.latitude, offer.position.longitude]
        : null;
    };

    const {offers, activeOfferId} = this.props;
    const coordinates = offers.map((offer) => getCoordinates(offer));

    console.log(`activeOfferId:`, activeOfferId);

    const offerActive = offers.find((offer) => offer.id === activeOfferId);

    const coordinatesActive = getCoordinates(offerActive);

    this.addMarkers(map, coordinates, coordinatesActive);

  }

  render() {
    return <div id="map" className={this.getClassName(this.props.layoutType)} />;
  }
}

MapNew.propTypes = MAP_TYPE_NEW;

export default MapNew;
