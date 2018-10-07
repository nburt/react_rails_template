// Libraries
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Components
import DefaultErrorBoundary from '../shared/components/defaultErrorBoundary';
import Navigation from './containers/navigation';
import Main from './containers/main';

// Constants
import {
  HOME
} from './constants/routes';

// Reducers
import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware, thunk)
);

const renderer = (props, railsContext, domNodeId) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <DefaultErrorBoundary>
            <Navigation currentUser={props.currentUser} />
          </DefaultErrorBoundary>
          <Route path={HOME} render={() => <Main {...props} />} />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById(domNodeId)
  );
};

export default renderer;
