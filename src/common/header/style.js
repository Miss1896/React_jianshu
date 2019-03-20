import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
	width: 100px;
	height: 56px;
	position: absolute;
	top: 0;
	laft: 0;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 960px; 
	height: 100%;
	margin: 0 auto;
`

export const NavItem = styled.div`
	line-height: 38px;
	padding: 0 20px;
	color: #333;
	margin-top: 9px;
	height: 38px;
	&.left{
		float: left;
	}
	&.right{
		float: right;
		color: #969696;
		.iconfont{
			font-size: 20px;
		}
	}
	&.active{
		color: #ea6f5a;
	}
`
export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom{
		color: #777;
		position: absolute;
		right: 5px; 
		top: 15px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		line-height: 30px;
		font-size: 16px;
		text-align: center;
		&.focused{
			background-color: #999;
			color: #fff;
		}
	}

`

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
	padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    color: #666;
    border: 1px solid #eee;
    outline: none;
    border-radius: 40px;
    background: #eee;
    margin-top: 9px;
    margin-left: 20px;
    &::placeholder{
    	color: #999;
    }
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}

`
export const SearchInfo = styled.div`
	width: 270px;
	position: absolute;
	left: 20px;
	top: 60px;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	padding: 15px;
	background: #fff;
	z-index: 99;
`

export const SearchInfoTitle = styled.div`
	font-size: 14px;
	color: #989898;
`

export const SearchInfoSwitch = styled.span`
	float: right;
	position: relative;
	font-size: 13px;
	color: #989898;
	padding-left: 18px;
	cursor: pointer;
	.spin{
		display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		margin-right: 3px;
		transition: all .2s ease-in;
		transform: rotate(0deg);
		transform-origin: center center;
	}
	
`

export const SearchInfoList = styled.div`
	padding: 20px 0 0;

`

export const SearchInfoItem = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    display: inline-block;
    margin-bottom: 10px;
`

export const Addition = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
`

export const Button = styled.button`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    outline: none;
    border-radius: 20px;
    font-size: 15px;
    &.reg{
    	color: #ea6f5a;
  		background-color: transparent;
    }
    &.writting{
    	color: #fff;
   		background-color: #ea6f5a;
   		width: 100px;
    }
    
`