import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import Home from './Home';

const mapStateToProps = state => ({
  appName: state.appName,
});

function App(props) {
  const { appName } = props;

  return (
    <div className="App">
      <Header appName={appName} />
      <Home />
    </div>
  );
}

App.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, () => ({}))(App);
