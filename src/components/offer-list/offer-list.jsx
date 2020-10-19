import React, {PureComponent} from 'react';
import OfferCard from '../offer-card/offer-card';
import {OFFER_LIST_TYPE} from '../../types/types';
import {TypesOfferCard} from '../../const';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null,
    };
  }

  getPropsByType(type) {
    switch (type) {
      case TypesOfferCard.CityPlace:
        return {
          classNameMain: `cities__place-card`,
          classNameImage: `cities__image-wrapper`,
          nameBookmark: `To bookmarks`,
        };
      case TypesOfferCard.NearPlace:
        return {
          classNameMain: `near-places__card`,
          classNameImage: `near-places__image-wrapper`,
          nameBookmark: `In bookmarks`,
        };
      default:
        return {};
    }
  }

  render() {
    const {offers, onOfferClick, type} = this.props;

    const offerList = offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onOfferClick={onOfferClick}
        onHover={(offerActive) => {
          this.setState({
            offer: offerActive,
          });
        }}
        {...this.getPropsByType(type)}
      />
    ));

    return (
      <>
        {offerList}
      </>
    );
  }
}

OfferList.propTypes = OFFER_LIST_TYPE;

export default OfferList;
