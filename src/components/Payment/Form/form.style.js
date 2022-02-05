import styled from "styled-components";

export const Container = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 19px;
	row-gap: 24px;

	margin-top: 47px;
`;

export const InputControl = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Label = styled.label`
	font-weight: 500;
	font-size: 11px;
	line-height: 13px;
	letter-spacing: 0.04em;
	color: #252525;
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	background: #eff0f2;
	border: 1px solid #adb3bd;
	border-radius: 3px;
	padding-inline: 20px;

	&:focus {
		outline: none;
	}
`;

export const FormControl = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;
	grid-column: span 2;
`;

export const ReuseCard = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

export const LabelText = styled.p`
	font-weight: 500;
	font-size: 11px;
	line-height: 13px;
	letter-spacing: 0.03em;

	color: #000000;
`;

export const AddCard = styled.button`
	width: 100%;
	height: 50px;
	background: #3f67e9;
	border-radius: 3px;
	border: none;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.02em;
	color: #ffffff;
`;
