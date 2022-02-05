import styled from "styled-components";

export const Container = styled.div`
	padding: 31px 40px 14px 58px;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const Title = styled.p`
	font-weight: 600;
	font-size: 17px;
	line-height: 20px;
	letter-spacing: 0.07em;
	color: #222;
	text-transform: capitalize;
	margin-bottom: 10px;
`;

export const SubTitle = styled.p`
	font-size: 11px;
	line-height: 13px;
	letter-spacing: 0.04em;
	color: #aab0bb;
	margin-bottom: 24px;
`;

export const Frame = styled.div``;

export const PaymentTypes = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 40px;
	padding-right: 30px;

	svg {
		height: 17px;
		width: 22px;
	}
`;

export const VisaAndDiscover = styled.div`
	display: flex;
	gap: 13px;
	align-items: center;

	.visa {
		background-color: #0e4595;
	}

	.discover {
		background-color: #eee;
	}
`;

export const PayPal = styled.div`
	display: flex;
	gap: 25px;
	align-items: center;

	svg {
		transform: scale(3);
	}
`;

export const ChoosePaypal = styled.input``;
