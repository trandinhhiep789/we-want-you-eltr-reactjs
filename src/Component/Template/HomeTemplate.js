import { Route } from "react-router-dom";
import React from "react";

import Header from "../Header/Header";


export const HomeTemplate = (props) => {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <>
            <div className="">
              <div>
                <Header />
                <Component {...propsRoute} />
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
