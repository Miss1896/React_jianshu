import React, { Component } from 'react';
import {
	DetailWrapper,
	Header,
	Content
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
	render(){
		const { title, content } = this.props;
		return (
			<DetailWrapper>
				<Header>
					{title}
				</Header>

				<Content
					dangerouslySetInnerHTML={{__html: content}}
				>
				</Content>
			</DetailWrapper>
		)
	}
	componentDidMount(){
		this.props.getDetail(this.props.match.params.id);
	}
}
const mapSTateToProps = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail','content']) 
});
const mapDispatchToProps = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreators.getDetail(id))
	}
})

export default connect(mapSTateToProps, mapDispatchToProps)(Detail);
