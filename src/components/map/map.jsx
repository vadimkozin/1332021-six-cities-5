import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import leaflet from 'leaflet';
import {MAP_TYPE} from '@types';
import {MAP_ZOOM_DEFAULT, MapType} from '@const';
import {getCityCenter} from '@utils';
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

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = null;
    this.mapSetting = mapSeed.getMapSetting(props);
  }

  addMarkers(map, offerCoords, offerActiveCoords) {
    offerCoords.forEach((coord) => {
      leaflet.marker(coord, {icon: mapSeed.getIcon()}).addTo(map);
    });

    if (offerActiveCoords) {
      leaflet.marker(offerActiveCoords, {icon: mapSeed.getIcon(`active`)}).addTo(map);
    }
  }

  updateMap(map) {
    const {offers, offer: offerActive} = this.props;
    const coordinates = offers.map((offer) => mapSeed.getCoordinates(offer));
    const coordinatesActive = mapSeed.getCoordinates(offerActive);

    this.addMarkers(map, coordinates, coordinatesActive);
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, this.mapSetting)
      .setView(this.mapSetting.center, this.mapSetting.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.updateMap(this.map);
  }

  componentDidUpdate() {
    this.updateMap(this.map);
  }

  render() {
    return <div id="map" className={FROM_MAPTYPE_TO_CLASSNAME[this.props.layoutType]} />;
  }
}

Map.propTypes = MAP_TYPE;

const mapStateToProps = (state) => ({
  offer: state.PROCESS.offer,
});


export {Map};
export default connect(mapStateToProps)(Map);
