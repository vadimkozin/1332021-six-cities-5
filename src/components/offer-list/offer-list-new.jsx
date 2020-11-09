import React from 'react';
// import OfferCard from '../offer-card/offer-card';
import OfferCardNew from '../offer-card/offer-card-new';

import {OFFER_LIST_NEW_TYPE} from '../../types/types';

const OfferListNew = (props) => {
  // const {offers, type, onOfferClick, onHoverCard} = props;
  const {offers, type} = props;

  const offerList = offers.map((offer) => (
    <OfferCardNew
      key={offer.id}
      offer={offer}
      type={type}
      // onOfferClick={onOfferClick}
      // onHoverCard={onHoverCard}
    />
  ));

  return (
    <>
      {offerList}
    </>
  );
};

OfferListNew.propTypes = OFFER_LIST_NEW_TYPE;

export default OfferListNew;
