import React from 'react';
import OfferCard from '../offer-card/offer-card';
import {OFFER_LIST_TYPE} from '../../types/types';
import {OfferCardType} from '../../const';

const getPropsByType = (type) => {
  switch (type) {
    case OfferCardType.CITY_PLACE:
      return {
        classNameMain: `cities__place-card`,
        classNameImage: `cities__image-wrapper`,
        nameBookmark: `To bookmarks`,
      };
    case OfferCardType.NEAR_PLACE:
      return {
        classNameMain: `near-places__card`,
        classNameImage: `near-places__image-wrapper`,
        nameBookmark: `In bookmarks`,
      };
    default:
      return {};
  }
};

const OfferList = (props) => {
  const {offers, onOfferClick, type, onHoverCard} = props;

  const offerList = offers.map((offer) => (
    <OfferCard
      key={offer.id}
      offer={offer}
      onOfferClick={onOfferClick}
      {...getPropsByType(type)}
      onHoverCard={onHoverCard}
    />
  ));

  return (
    <>
      {offerList}
    </>
  );
};

OfferList.propTypes = OFFER_LIST_TYPE;

export default OfferList;
