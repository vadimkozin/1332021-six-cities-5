import React from 'react';
import OfferCard from '../offer-card/offer-card';

const OfferNear = (props) => {
  // const {classNameMain, classNameImage, nameBookmark, offer} = props;

  return (
    <OfferCard {...props}/>
  );
};

OfferNear.propTypes = {};

export default OfferNear;
