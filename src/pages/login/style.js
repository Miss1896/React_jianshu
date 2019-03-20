import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
	.sign{
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin: 10px auto 30px;
		color: #888;
		font-size: 20px;
		.sign_in{
			margin-right: 30px;
		}
	}
`;

export const LoginBox = styled.div`
	width: 400px;
	margin: 100px auto;
	padding: 20px 60px;
	background: #fff;
	box-sizing: border-box;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
	.user_pwd_box{
		padding: 10px 0;
		background: #eee;
		border-radius: 3px;
		border: 1px solid #ccc;
	}
	.user_box{
		border-bottom: 1px solid #ccc;
		padding: 0 10px 10px;
	}
	.pwd_box{
		padding: 10px 10px 0px;
	}
	.iconfont{
		color: #999;
		font-size: 22px;
		margin-right: 10px;
	}
	h6{
	    position: relative;
	    text-align: center;
	    margin: 20px auto;
	    font-size: 12px;
	    color: #b5b5b5;
	}
`;

export const Input = styled.input`
	background: #eee;
	height: 30px; 
	line-height: 30px;
	border: 0;
	outline: none;
	color: #666;
`;

export const Button = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 30px auto;
	text-align: center;
`;

export const MoreSignWrapper = styled.ul`
    margin-bottom: 10px;
    list-style: none;
    width: 100%;
    height: 30px; 
    line-height: 30px;
    padding: 10px 20px;
`

export const MoreSignItem = styled.li`
	float: left;
	width: 25%;
	text-align: center;
	.iconfont{
		font-size: 30px;
		&.wb{
			color: #e05244;
		}
		&.wx{
			color: #00bb29;
		}
		&.qq{
			color: #498ad5;
			font-size: 24px;
		}
		&.other{
			color: #666;;
			font-size: 14px;
		}
	}
`