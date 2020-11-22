import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import RoomPage from '../../components/room-page/room-page';
import {fetchHotel, fetchHotelsNearby, fetchComments} from '../../store/api-actions';
import {getHotelGist, getHotelsNearbyGist, getCommentsGist} from '../../store/selectors/offers';
import {getIsAuth} from '../../store/selectors/user';
import {HOTELS_NEARBY_MAX, StatusType} from '@const';

const isWaitData = (gistsList) => gistsList.some((gist) => {
  return gist.status === StatusType.IDLE || gist.status === StatusType.LOADING;
});

const getError = (gistsList) => {
  const isError = gistsList.some((gist) => gist.error);

  if (!isError) {
    return ``;
  }

  const content = gistsList
    .map((gist) => gist.error ? gist.error : ``)
    .map((err, i) => <li key={i}>{err}</li>);

  return <ul>{content}</ul>;
};

const RoomPageContainer = ({offerId}) => {
  const dispath = useDispatch();

  React.useEffect(() => {
    dispath(fetchHotel(offerId));
    dispath(fetchHotelsNearby(offerId));
    dispath(fetchComments(offerId));

  }, []);

  const isAuth = useSelector(getIsAuth);
  const hotelGist = useSelector(getHotelGist);
  const nearbyGist = useSelector(getHotelsNearbyGist);
  const commentsGist = useSelector(getCommentsGist);

  const gists = [hotelGist, nearbyGist, commentsGist];

  if (isWaitData(gists)) {
    return <h4>LOADING ..................................</h4>;
  }

  const error = getError(gists);

  if (error) {
    return <h4>Error:{error}</h4>;
  }

  const hotelsNearby = Array.isArray(nearbyGist.data) ? nearbyGist.data.slice(0, HOTELS_NEARBY_MAX) : [];
  const comments = commentsGist.data;
  const hotel = hotelGist.data;

  return (
    <>
      {<p>isAuth: {isAuth.toString()}</p>}
      {hotelGist.data && (<p>{`${hotel.id} : ${hotel.title}`}</p>) }
      {nearbyGist.data && (<p>Nearby: {nearbyGist.data.length} offers</p>)}
      {commentsGist.data && (<p>comments: {commentsGist.data.length} all</p>)}
      <RoomPage
        offer={hotel}
        offers={hotelsNearby}
        offersNearby={hotelsNearby}
        reviews={comments}
      />
    </>
  );
};

RoomPageContainer.propTypes = {
  offerId: PropTypes.string.isRequired,
};

export default RoomPageContainer;
