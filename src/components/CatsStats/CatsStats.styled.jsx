import styled from "styled-components";

export const Wrapper = styled.section`
	margin-top: 40px;
`;

export const Title = styled.h2`
	font-size: clamp(28px, 5vw, 44px);
	color: #ff2e7a;
	margin-bottom: 24px;
	text-align: center;
`;

export const Table = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 80px 1fr auto auto;
	align-items: center;
	gap: 16px;

	padding: 16px;
	border-radius: 24px;

	background: white;

	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		text-align: center;
	}
`;

export const Image = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	border-radius: 20px;

	@media (max-width: 768px) {
		margin: 0 auto;
	}
`;

export const Info = styled.div`
	h3 {
		margin: 0;
		color: #ff2e7a;
	}

	p {
		margin-top: 4px;
		opacity: 0.7;
	}
`;

export const Stats = styled.div`
	display: flex;
	gap: 14px;
	flex-wrap: wrap;
`;

export const Stat = styled.div`
	background: #ffe6f0;
	padding: 8px 14px;
	border-radius: 999px;
	font-size: 14px;
`;

export const Actions = styled.div`
	display: flex;
	gap: 10px;
`;

export const Button = styled.button`
	border: none;
	background: #ff2e7a;
	color: white;

	width: 42px;
	height: 42px;

	border-radius: 50%;

	cursor: pointer;

	transition: 0.2s;

	&:hover {
		transform: scale(1.08);
	}
`;
