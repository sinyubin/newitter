import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "../routes/Auth";
import { Home } from "../routes/Home";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router exact path="/">
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route>
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
