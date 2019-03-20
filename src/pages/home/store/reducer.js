import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	topicList: [],
	recommendList: [],
	articleList:[]
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		recommendList: fromJS(action.recommendList),
		articleList: fromJS(action.articleList)
	})
}

export default (state=defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		default:
			return state;
	}


} 