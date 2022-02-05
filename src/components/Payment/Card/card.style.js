import styled from "styled-components";

export const Container = styled.div`
	width: 343px;
	height: 225px;
	background: linear-gradient(246.59deg, #696fc8 2.87%, #e25540 100%);
	border-radius: 5px;
	padding: 25px 28px;
	position: relative;

	.mastercard {
		position: absolute;
		bottom: 12px;
		right: 37px;
		height: 39px;
		width: 58px;
		transform: scale(1.2);
	}
`;

export const Title = styled.p`
	font-weight: 500;
	font-size: 10px;
	line-height: 12px;
	letter-spacing: 0.02em;
	color: #ffffff;

	margin-bottom: 9px;
`;

export const CardNumber = styled.p`
	font-weight: 500;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.15em;
	color: #ffffff;
	margin-bottom: 15px;
`;

export const Expiration = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.07em;
	color: #ffffff;
	margin-bottom: 14px;
`;

export const OwnerName = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	letter-spacing: 0.05em;
	color: #ffffff;
`;

export const Micro = styled.div`
	width: 56px;
	height: 43px;
	background: #e99c88;
	border-radius: 25px;
	margin-bottom: 16px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	.wifi {
		height: 17px;
		width: 12px;
		position: absolute;
		top: 12px;
		left: -17px;
	}
`;

export const Chip = styled.img`
	height: 120%;
	width: 100%;
	transform: translateY(1.5px);
`;

export const PlaceHolder = styled.p`
	height: 15px;
	margin-bottom: 15px;
`;
