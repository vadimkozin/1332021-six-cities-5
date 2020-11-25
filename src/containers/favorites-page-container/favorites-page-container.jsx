import React from 'react';
import {useSelector} from 'react-redux';
import history from '../../browser-history';
import FavoritesPage from '../../components/favorites-page/favorites-page';
import FavoritesPageEmpty from '../../components/favorites-page-empty/favorites-page-empty';
import {getIsAuth} from '@selectors/user';
import {getOffers} from '@selectors/offers';

const FavoritesPageContainer = () => {
  const offers = useSelector(getOffers);
  const isAuth = useSelector(getIsAuth);
  const isFavorites = offers.some((offer) => offer.isFavorite);

  if (!isAuth) {
    return history.push(`/login`);
  }

  return (
    <>
    {isFavorites
      ? (<FavoritesPage offers={offers} />)
      : (<FavoritesPageEmpty />)
    }
    </>
  );

};

export default FavoritesPageContainer;
