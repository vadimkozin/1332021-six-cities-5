import React from "react";
import {Route, Redirect} from "react-router-dom";
import {SMART_ROUTE_TYPE} from '../../types/types';

const SmartRoute = (props) => {
  const {render, path, exact, redirectTo} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          redirectTo
            ? <Redirect to={redirectTo} />
            : render(routeProps)
        );
      }}
    />
  );
};

SmartRoute.propTypes = SMART_ROUTE_TYPE;

export default SmartRoute;
