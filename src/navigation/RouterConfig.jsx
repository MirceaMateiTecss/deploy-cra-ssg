import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  ABOUT_US_PAGE,
  CONTACT_US_PAGE,
  NOT_FOUND,
  PRODUCT_INFO_PAGE,
  ROOT,
} from './CONSTANTS';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '../pages/HomePage';
import ProductInfoPage from '../pages/ProductInfoPage';
import AboutPage from '../pages/AboutPage';
import ContactUsPage from '../pages/ContactUsPage';
import NotFoundPage from './components/NotFoundPage';

const RouterConfig = () => (
  <>
    <Header />
    <Switch>
      <Route
        exact
        path={ROOT}
        component={HomePage}
      />
      <Route
        path={PRODUCT_INFO_PAGE}
        component={ProductInfoPage}
      />
      <Route
        path={ABOUT_US_PAGE}
        component={AboutPage}
      />
      <Route
        path={CONTACT_US_PAGE}
        component={ContactUsPage}
      />
      <Route
        path={NOT_FOUND}
        component={NotFoundPage}
      />
    </Switch>
    <Footer />
  </>
);

export default RouterConfig;
