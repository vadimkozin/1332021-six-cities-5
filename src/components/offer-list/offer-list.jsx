import React from 'react';
import OfferCard from '../offer-card/offer-card';

import {OFFER_LIST_TYPE} from '../../types/types';

const OfferList = (props) => {
  const {offers, type, isTrackChangeCard} = props;

  return (
    <>
      {offers.map((offer, i) => (
        <OfferCard
          key={`${offer.id}-${i}`}
          offer={offer}
          type={type}
          isTrackChangeCard={isTrackChangeCard}
        />)
      )}
    </>
  );
};

OfferList.propTypes = OFFER_LIST_TYPE;

export default OfferList;
