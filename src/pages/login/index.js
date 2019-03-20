import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	LoginWrapper,
	LoginBox,
	Input,
	Button,
	MoreSignWrapper,
	MoreSignItem
} from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class login extends Component {
	render(){
		const { loginState } = this.props;
		if(!loginState){
			return <LoginWrapper>
				<LoginBox>
					<div className='sign'>
						<span className='sign_in'>登录</span>
						<span className='sign_up'>注册</span>
					</div>
					<div className='user_pwd_box'>
						<div className='user_box'>
							<span className="iconfont">&#xe611;</span>
							<Input text='text' ref={ (input) => { this.account = input }} placeholder='请输入手机号或邮箱' />
						</div>
						<div className='pwd_box'>
							<span className="iconfont">&#xe6e8;</span>
							<Input type='password' ref={ (input) => { this.password = input }} placeholder='请输入密码' />
						</div>
					</div>
					<Button onClick={ () => { this.props.login(this.account, this.password )}}>登录</Button>
					<h6>社交账号登录</h6>
					<MoreSignWrapper>
						<MoreSignItem><span className="iconfont wb">&#xe65f;</span></MoreSignItem>
						<MoreSignItem><span className="iconfont wx">&#xe656;</span></MoreSignItem>
						<MoreSignItem><span className="iconfont qq">&#xe63b;</span></MoreSignItem>
						<MoreSignItem><span className='iconfont other'>其他</span></MoreSignItem>
					</MoreSignWrapper>
				</LoginBox>
			</LoginWrapper>;
		}else{
			return <Redirect to={'/'}/>
		}
		
	}
}
const mapStateToProps = (state) => ({
	loginState: state.getIn(['login', 'login'])
});
 const mapDispatchToProps = (dispatch) => ({
 	login(accountElem, passwordElem){
 		dispatch( actionCreators.login(accountElem.value, passwordElem.value));
 	}
 });

export default connect(mapStateToProps, mapDispatchToProps)(login);
