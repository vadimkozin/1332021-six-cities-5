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
    let param = null;
    switch (type) {
      case TypesOfferCard.CityPlace:
        param = {
          classNameMain: `cities__place-card`,
          classNameImage: `cities__image-wrapper`,
          nameBookmark: `To bookmarks`,
        };
        break;
      case TypesOfferCard.NearPlace:
        param = {
          classNameMain: `near-places-card`,
          classNameImage: `near-places__image-wrapper`,
          nameBookmark: `In bookmarks`,
        };
        break;
    }

    return param;
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

    // <div className="cities__places-list places__list tabs__content abc1234567">
    // </div>

    return (
      <>
        {offerList}
      </>
    );
  }
}

OfferList.propTypes = OFFER_LIST_TYPE;

export default OfferList;
