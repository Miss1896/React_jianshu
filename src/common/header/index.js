import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { 
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button
} from './style.js';

class Header extends Component {
	getListArea(){
		const { focused, list, mouseIn, page, totalPages, handleMouseEnter, handleMouseLeave, handleChangPage } = this.props;
		const newList = list.toJS(list);
		const pageList = [];
		if(newList.length){
			if(newList.length > page  * 10){
				for (let i = (page - 1) * 10; i <= page * 10; i++) {
					pageList.push(
							<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
						)
				}
			}else{
				for (let i = (page - 1) * 10; i < newList.length; i++) {
					pageList.push(
							<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
						)
				}
			}
			
		}
		
		if(focused || mouseIn){
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}

				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangPage(page, totalPages, this.spinIcon)}>
							<span ref={ (icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe65a;</span>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
				)
		}else{
			return null;
		}
	}
	render(){
		const { focused, handleInputFocus, handleInputBlur, list, loginState, logout } = this.props;
		return (
			<div style={{position: 'fixed', top: 0, width: '100%', background: '#fff'}}>
				<HeaderWrapper>
					<Logo />
					<Nav>
						<NavItem className="left active">首页</NavItem>
						<NavItem className="left">下载APP</NavItem>
						{
							loginState?
								<NavItem onClick={logout} className="right">退出</NavItem>:
								<Link to={'/login'}>
									<NavItem className="right">登录</NavItem>
								</Link>
						}
						
						<NavItem className="right">
							<span className="iconfont">&#xe601;</span>
						</NavItem>
						<SearchWrapper>
							<CSSTransition
								in={focused}
								timeout={200}
								classNames="slide"
							>
								<NavSearch
									className= {focused? 'focused': ''}
									onFocus={ () => { handleInputFocus(list) }}
									onBlur={handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={focused?'iconfont focused zoom': 'iconfont zoom'}>&#xe682;</span>
							{ this.getListArea(focused) }
						</SearchWrapper>
					</Nav>
					<Addition>
						<Button className="writting"><span className="iconfont">&#xe600;</span> 写文章</Button>
						<Button className="reg">注册</Button>
					</Addition>
				</HeaderWrapper>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header', 'page']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalPages: state.getIn(['header', 'totalPages']),
		loginState: state.getIn(['login', 'login'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list){
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur(){
			dispatch(actionCreators.searchBlur());
		},	
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangPage(page, totalPages, spin ){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle){
				originAngle = parseInt(originAngle);
			}else{
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			console.log(spin.style.transform);
			if(page < totalPages){
				dispatch(actionCreators.changePage(page + 1));
			}else{
				dispatch(actionCreators.changePage(1));
			}
		},
		logout(){
			dispatch(loginActionCreators.logout());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);