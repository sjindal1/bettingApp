import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from "redux-form"
import register from './registerReduser'
import registerAuth from './registerAuthReduser'
import getUser from './getUser'
import getUserLogin from './getUserLogin'
import matchData from './matchData'
import matchDataSave from './matchDataSave'

const reducers = combineReducers({
        register,
        registerAuth,
        getUserLogin,
        getUser,
        matchData,
        matchDataSave,
        routing : routerReducer,
        form : formReducer
})

export default reducers;           
