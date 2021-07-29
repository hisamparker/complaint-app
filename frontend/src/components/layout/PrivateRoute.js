import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export default function PrivateRoute({ children, ...rest }) {
    const { loggedIn } = useContext(AuthContext)
  
    return (
        <Route
        {...rest}
        render={({ location }) =>
            loggedIn? (
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
    );
    }