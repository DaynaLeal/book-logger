import React, { Suspense } from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import Landing from '../views/Landing'
import Mybooks from '../views/Mybooks'

const Router = () => {
  return(
    <>
      <Suspense fallback={<div>Loading Content...</div>}>
        <main>
          <Switch>
            <Route path='/mybooks' render={(routeProps: RouteProps) => <Mybooks routeProps={routeProps} />} />
            <Route path='/' component={Landing}/>
            <Redirect from="/" to="/"/>
          </Switch>
        </main>
      </Suspense>
    </>
  )
}

export default Router