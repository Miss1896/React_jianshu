import * as constants from './constants';
import axios from 'axios';

const changHomeData = (res) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: res.topicList,
	recommendList: res.recommendList,
	articleList: res.articleList
});

export const getHomeInfo = ()=>{
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
};