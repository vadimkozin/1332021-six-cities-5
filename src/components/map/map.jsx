import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MAP_TYPE} from '../../types/types';
import {MAP_ZOOM_DEFAULT} from '../../const';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapSetting = {
      center: props.center,
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

  addMarkers(map, coordinates) {
    coordinates.forEach((coord) => {
      leaflet.marker(coord, {icon: this.icon}).addTo(map);
    });
  }

  componentDidMount() {
    const map = leaflet.map(`map`, this.mapSetting)
      .setView(this.mapSetting.center, this.mapSetting.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this.addMarkers(map, this.props.offerCoords);
  }

  render() {
    return <div id="map" style={{height: `100vh`}} />;
  }
}

Map.propTypes = MAP_TYPE;

export default Map;
