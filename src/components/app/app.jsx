import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = ({numberRentalOffer}) => (
  <MainPage numberRentalOffer={numberRentalOffer}></MainPage>
);

App.propTypes = {
  numberRentalOffer: PropTypes.number.isRequired,
};

export default App;
