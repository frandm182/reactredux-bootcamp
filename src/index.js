import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
