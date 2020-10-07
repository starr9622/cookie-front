import * as React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import * as Page from "../pages";

interface IProps {
  children?: React.ReactNode;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        no match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page.SearchMain} />
        <Route exact path="/list" component={Page.SearchList} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
