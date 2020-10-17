import * as React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import * as Page from "../pages";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Page.Process /> */}
      <Switch>
        <Route exact path="/" component={Page.SearchMain} />
        <Route exact path="/list" component={Page.SearchList} />
        <Route path="*">
          <Page.NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
