import styled from "styled-components";

export const Container = styled.div`
	padding-block: 30px 52px;
	padding-inline: 53px 56px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Part = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Summary = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 16px;
	letter-spacing: 0.02em;
	color: #222;

	span {
		color: #adb3bd;
	}
`;

export const Prize = styled.p`
	font-weight: 600;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: 0.01em;
	color: #222;
`;
