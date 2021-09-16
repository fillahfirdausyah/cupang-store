import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  FaqPage,
  HomePage,
  HowToOrderPage,
  ProductPage,
} from "../Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/faq" exact>
          <FaqPage />
        </Route>
        <Route path="/how-to-order" exact>
          <HowToOrderPage />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
