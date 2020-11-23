import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import RoomPage from '../../components/room-page/room-page';
import {fetchHotel, fetchHotelsNearby} from '../../store/api-actions';
import {getHotelGist, getHotelsNearbyGist} from '../../store/selectors/offers';
import {HOTELS_NEARBY_MAX} from '@const';
import {isWaitingRequestData, isRequestError} from '@utils';

const RoomPageContainer = ({offerId}) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchHotel(offerId));
    dispatch(fetchHotelsNearby(offerId));
  }, []);

  const hotelGist = useSelector(getHotelGist);
  const nearbyGist = useSelector(getHotelsNearbyGist);
  const gists = [hotelGist, nearbyGist];

  if (isWaitingRequestData(gists)) {
    return <h4>LOADING ..................................</h4>;
  }
  if (isRequestError(gists)) {
    return <h4>Error receiving comments</h4>;
  }

  const hotelsNearby = Array.isArray(nearbyGist.data) ? nearbyGist.data.slice(0, HOTELS_NEARBY_MAX) : [];
  const hotel = hotelGist.data;

  return (
    <RoomPage
      offer={hotel}
      offersNearby={hotelsNearby}
    />
  );
};

RoomPageContainer.propTypes = {
  offerId: PropTypes.string.isRequired,
};

export default RoomPageContainer;
