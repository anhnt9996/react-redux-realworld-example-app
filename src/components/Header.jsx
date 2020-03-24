import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { appName } = props;
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a href="/" className="navbar-brand">
          {appName.toLowerCase()}
        </a>
      </div>
    </nav>
  );
}

Header.propTypes = {
  appName: PropTypes.string.isRequired,
};

export default Header;
