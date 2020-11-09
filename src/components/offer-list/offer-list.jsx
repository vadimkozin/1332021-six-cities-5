import React from 'react';
import OfferCard from '../offer-card/offer-card';

import {OFFER_LIST_TYPE} from '../../types/types';

const OfferList = (props) => {
  const {offers, type} = props;

  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          type={type}
        />)
      )}
    </>
  );
};

OfferList.propTypes = OFFER_LIST_TYPE;

export default OfferList;
