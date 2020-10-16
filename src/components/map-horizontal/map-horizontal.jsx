import React from 'react';
import Map from '../map/map';
import {MAP_TYPE} from '../../types/types';
import {splitPropsOnClassNameAndRest} from '../../utils';

const MapHorizontal = (props) => {
  const [className, restProps] = splitPropsOnClassNameAndRest(props);

  return (
    <Map
      className={`map--horizontal ${className}` }
      {...restProps}
    />
  );
};

MapHorizontal.propTypes = MAP_TYPE;

export default MapHorizontal;
