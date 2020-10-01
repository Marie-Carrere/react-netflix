import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from "./constants/routes"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import { useAuthListener } from "./hooks"

function App() {
  const user = useAuthListener()
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
        >
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  )
}

export default App
