import styled from "@emotion/styled";

export const Card = styled.div`
	width: 248px;
	height: 352px;
	flex: 0 0 auto;

	position: relative;
	border-radius: 16px;
	overflow: hidden;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Info = styled.div`
	position: absolute;
	bottom: 60px;
	left: 12px;
	color: white;
`;

export const Actions = styled.div`
	position: absolute;
	bottom: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 10px;
`;
