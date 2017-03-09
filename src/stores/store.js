import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}

module.exports = (reducer, done) => {
    const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

    persistStore(store, { storage: AsyncStorage }, done);

    return store;
}
