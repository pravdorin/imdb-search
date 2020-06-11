import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import App from './pages/App';
import FilmPage from './pages/FilmPage';
import Logo from './components/Logo';
import Notfound from './pages/NotFound';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
        <Provider store={store}>
        <Router>
            <Logo />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/:id" component={FilmPage} />
                    <Route component={Notfound} />
                </Switch>
        </Router>
        </Provider>,
    document.getElementById('root'))