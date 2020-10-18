import React from 'react';
import OfferCard from '../offer-card/offer-card';

const OfferCity = (props) => {
  // const {classNameMain, classNameImage, nameBookmark, offer} = props;

  return (
    <OfferCard {...props}/>
  );
};

OfferCity.propTypes = {};

export default OfferCity;
