import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
//import createLogger from 'redux-logger'
import index from '../reducers'

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk) //,window.devToolsExtension ? window.devToolsExtension() : undefined
)(createStore);

export default createStoreWithMiddleware(index);