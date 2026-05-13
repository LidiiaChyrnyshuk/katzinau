// src/pages/Profile.styled.js

import styled from "styled-components";

const gradient = "linear-gradient(88.01deg, #fd267a 0%, #ff6036 100%)";

export const Page = styled.section`
	padding: 40px 10px 40px;
	max-width: 500px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	color: #fd2c72;
	font-weight: 900;
	font-size: 24px;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
	margin:0 0 30px 0;
`;

export const OwnerTable = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	gap: 16px;
	padding: 24px;
	border-radius: 28px;
	background: rgba(255, 255, 255, 0.05);
	margin-bottom: 24px;

	@media (max-width: 520px) {
		justify-content: center;
	}
`;

export const TableRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const TableLabel = styled.span`
	font-size: 13px;
	opacity: 0.6;
`;

export const TableValue = styled.div`
	font-size: 18px;
`;

export const CatsTable = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const CatRow = styled.div`
	display: flex;
	gap: 16px;

	padding: 16px;
	border-radius: 28px;

	background: rgba(255, 255, 255, 0.05);

	@media (max-width: 520px) {
		flex-direction: column;
	}
`;

export const CatImage = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 22px;
	object-fit: cover;
	flex-shrink: 0;

	@media (max-width: 520px) {
		width: 100%;
		height: 240px;
	}
`;

export const CatInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const CatName = styled.h3`
	font-size: 22px;
`;

export const CatStats = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	span {
		padding: 8px 14px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.08);
		font-size: 14px;
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	border: none;
	border-radius: 16px;
	padding: 12px 18px;

	background: ${gradient};

	color: white;
	font-size: 14px;
	cursor: pointer;
`;

export const AddButton = styled.button`
	width: 100%;
	margin-top: 30px;

	border: none;
	border-radius: 18px;
	padding: 18px;

	background: ${gradient};

	color: white;
	font-size: 18px;
	cursor: pointer;
`;

export const Empty = styled.p`
	text-align: center;
	font-size: 20px;
	opacity: 0.7;
`;

export const Input = styled.input`
	width: 100%;
	padding: 14px;
	border-radius: 14px;
	border: none;
	background: rgba(255, 255, 255, 0.08);
	color: white;
`;

export const Textarea = styled.textarea`
	width: 100%;
	min-height: 100px;

	padding: 14px;
	border-radius: 14px;
	border: none;

	background: rgba(255, 255, 255, 0.08);

	color: white;
	resize: vertical;
`;
