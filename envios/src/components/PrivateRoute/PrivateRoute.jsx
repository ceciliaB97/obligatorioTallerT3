import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.userLogged);
  
  if (user!==null && user.apiKey) {
    return (
      <Route>
        <Component {...rest} />
      </Route>
    )
  }
  return (
    <Route>
      <Redirect to='/login' />
    </Route>
  )
}

export default PrivateRoute
