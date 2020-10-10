import React, {PureComponent} from 'react';
import {OfferListType} from '../../types/types';
import OfferCard from '../offer-card/offer-card';

class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: null,
    };
  }

  render() {
    const {offers, onOfferClick} = this.props;

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
      />
    ));

    return (
      <div className="cities__places-list places__list tabs__content">
        {offerList}
      </div>
    );
  }
}

OfferList.propTypes = OfferListType;

export default OfferList;
