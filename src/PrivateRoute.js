import React, { useContext } from 'react';
import { useNavigate, Navigate, Route } from 'react-router-dom';
import { UserContext } from './userContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { userToken } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return userToken ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;

