import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}

module.exports = (reducer) => {
    const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

    return store;
}
