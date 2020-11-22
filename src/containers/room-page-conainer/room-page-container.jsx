import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
// import RoomPage from '../../components/room-page/room-page';
import {fetchHotel, fetchHotelsNearby, fetchComments} from '../../store/api-actions';
import {getHotel, getHotelsNearby, getComments} from '../../store/selectors/offers';
import {getIsAuth} from '../../store/selectors/user';

const print = (obj) => {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value} `).join(`,`);
};

const getError = (gistsList) => gistsList.map((gist) => {
  return gist.error ? gist.error : ``;
}).join();


const RoomPageContainer = ({offerId}) => {
  const dispath = useDispatch();

  React.useEffect(() => {
    dispath(fetchHotel(offerId));
    dispath(fetchHotelsNearby(offerId));
    dispath(fetchComments(offerId));

  }, []);

  const isAuth = useSelector(getIsAuth);
  const hotelGist = useSelector(getHotel);
  const nearbyGist = useSelector(getHotelsNearby);
  const commentsGist = useSelector(getComments);

  if (hotelGist.isLoading || nearbyGist.isLoading || commentsGist.isLoading) {
    return <h3>Loading ...</h3>;
  }

  // if (hotelGist.error) {
  //   return <h3>ERROR_LOAD_HOTEL: {hotelGist.error}</h3>;
  // }
  // if (nearbyGist.error) {
  //   return <h3>ERROR_LOAD_NEARBY: {nearbyGist.error}</h3>;
  // }
  // if (commentsGist.error) {
  //   return <h3>ERROR_LOAD_COMMENTS: {commentsGist.error}</h3>;
  // }

  const error = getError([hotelGist, nearbyGist, commentsGist]);
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const hotelsNearby = nearbyGist.data;
  const comments = commentsGist.data;
  const hotel = hotelGist.data;

  console.log(`isAuth:`, isAuth);
  console.log(`hotel:`, hotel);
  console.log(`hotelsNearby:`, hotelsNearby);
  console.log(`comments:`, comments);

  return (
    <>
    {hotelGist.data && (<p>{`${hotel.id} : ${hotel.title}`}</p>) }
    {nearbyGist.data && (<p>Nearby: {nearbyGist.data.length} offers</p>)}
    {commentsGist.data && (<p>comments: {commentsGist.data.length} all</p>)}
    </>
  );

  // return <RoomPage {...props} />;
};

RoomPageContainer.propTypes = {
  offerId: PropTypes.string.isRequired,
};

export default RoomPageContainer;
