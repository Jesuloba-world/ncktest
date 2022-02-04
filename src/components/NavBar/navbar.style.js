import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	gap: 47px;
	padding-inline: 23px;
	padding-top: 34px;
	margin-bottom: 89px;
`;

export const Link = styled.a`
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.03em;
	color: #353b50;

	text-transform: uppercase;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Image = styled.img`
	height: 43px;
	width: 43px;
	margin-left: 22px;
	object-fit: contain;
`;
