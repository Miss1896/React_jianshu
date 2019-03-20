import React, { Component } from 'react';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style.js';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
				</HomeRight>

			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData()
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	}
});

export default connect(null, mapDispatch)(Home);
