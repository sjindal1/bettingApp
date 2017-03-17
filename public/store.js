import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import createLogger from 'redux-logger'
import reducers from './reducers/reducers'
import thunk from 'redux-thunk'

let logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== '@@redux-form/CHANGE'
})

const middleware = applyMiddleware(promise(), thunk, logger);


const store = createStore(reducers, middleware);

export default store;