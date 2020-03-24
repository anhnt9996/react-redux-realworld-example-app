import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import agent from '../../agent';
import Banner from './Banner';
import MainView from './MainView';

const Promise = global.Promise;

const mapStateToProps = state => ({
  appName: state.appName,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: 'HOME_PAGE_LOADED', payload }),
});

class Home extends Component {
  constructor(props) {
    super(props);

    const { onLoad } = this.props;

    onLoad(agent.Articles.all());
  }

  render() {
    const { appName } = this.props;

    return (
      <div className="home-page">
        <Banner appName={appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  appName: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
