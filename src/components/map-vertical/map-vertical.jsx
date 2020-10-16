import React from 'react';
import Map from '../map/map';
import {MAP_TYPE} from '../../types/types';
import {splitPropsOnClassNameAndRest} from '../../utils';

const MapVertical = (props) => {
  const [className, restProps] = splitPropsOnClassNameAndRest(props);

  return (
    <Map
      className={`map--vertical ${className}` }
      {...restProps}
    />
  );
};

MapVertical.propTypes = MAP_TYPE;

export default MapVertical;
