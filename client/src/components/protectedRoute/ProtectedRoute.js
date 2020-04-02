import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  // checks if user is signedIn, if not redirects to login page
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => {
  return { isLoggedIn: state.user.isLoggedIn };
};

export default connect(mapStateToProps)(ProtectedRoute);
