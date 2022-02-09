import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {users} = useAuth();
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        users?.email ? (

          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
            
        </div>
    );
};

export default PrivateRoute;