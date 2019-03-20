import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultSate = fromJS({
	title: '',
	content: ''
})


export default (state= defaultSate, action) => {
	switch(action.type){
		case constants.CHANGE_DETAIL:
			return state.set('title', action.title).set('content', action.content)
		default:
			return state;
	}
} 