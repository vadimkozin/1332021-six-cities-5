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
    const {offers} = this.props;
    // console.log(`offerList:`, offers);

    const offerList = offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        onHover={(offerActive) => {
          console.log(`::`, offerActive.id);
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
