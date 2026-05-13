import styled from "styled-components";

export const Wrapper = styled.section`
	padding: 40px 20px;
`;

export const Title = styled.h2`
	text-align: center;
	margin-bottom: 24px;
	color: #ff2e63;
	font-size: clamp(28px, 5vw, 52px);
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 20px;
`;

export const Card = styled.div`
	background: white;
	border-radius: 24px;
	padding: 16px;
	text-align: center;
	position: relative;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
	width: 100%;
	height: 280px;
	object-fit: cover;
	border-radius: 18px;
	margin-bottom: 12px;
`;

export const Badge = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	font-size: 32px;
`;

export const Score = styled.p`
	margin: 6px 0;
`;
