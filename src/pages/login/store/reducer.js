import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	loogin: false
});

export default (state = defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_LOGIN:
			return state.set('login', true);
		case constants.LOGOUT:
			return state.set('login', false);
		default: 
			return state;
	}
}