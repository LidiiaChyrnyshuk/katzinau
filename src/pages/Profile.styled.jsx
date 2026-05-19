
import styled from "styled-components";

const gradient = "linear-gradient(88.01deg, #fd267a 0%, #ff6036 100%)";

export const Page = styled.section`
	padding: 40px 10px 40px;
	max-width: 500px;
	margin: 0 auto;
	background: #ffffff;
	box-sizing: border-box;
`;

export const Title = styled.h1`
	color: #fd2c72;
	font-weight: 900;
	font-size: 24px;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
	margin: 0 0 30px 0;
`;

// ВИПРАВЛЕНО: тепер це чітка вертикальна колонка
export const OwnerTable = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 24px;
	border-radius: 28px;
	background: rgba(253, 44, 114, 0.1);
	margin-bottom: 24px;
`;

// ВИПРАВЛЕНО: рядок займає 100% ширини, мітка і інпут шикуються красиво
export const TableRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 100%;
	box-sizing: border-box;
`;

export const TableLabel = styled.span`
	font-size: 13px;
	opacity: 0.6;
	font-weight: 600;
	color: #333;
`;

export const TableValue = styled.div`
	font-size: 18px;
	width: 100%;
	box-sizing: border-box;
`;

export const CatsTable = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
`;

export const CatRow = styled.div`
	display: flex;
	gap: 16px;
	padding: 16px;
	border-radius: 28px;
	background: rgba(253, 44, 114, 0.1);

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
	width: 100%;
	box-sizing: border-box;
`;

export const CatName = styled.h3`
	font-size: 22px;
	margin: 0;
`;

export const CatStats = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;

	span {
		padding: 6px 12px;
		border-radius: 999px;
		background: rgba(0, 0, 0, 0.05);
		font-size: 14px;
	}
`;

export const Buttons = styled.div`
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	margin-top: auto;
`;

export const Button = styled.button`
	border: none;
	border-radius: 16px;
	padding: 10px 16px;
	background: ${gradient};
	opacity: 0.8;
	color: white;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		opacity: 1;
	} /* ВИПРАВЛЕНО: додано закриваючу дужку */
`;

export const AddButton = styled.button`
	width: 100%;
	margin-top: 10px;
	border: none;
	border-radius: 18px;
	padding: 18px;
	opacity: 0.8;
	background: ${gradient};
	color: white;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		opacity: 1;
	} /* ВИПРАВЛЕНО: додано закриваючу дужку */
`;

export const Empty = styled.p`
	text-align: center;
	font-size: 20px;
	opacity: 0.7;
`;

// ВИПРАВЛЕНО: додано box-sizing, щоб інпути не вилазили за краї екрану
export const Input = styled.input`
	width: 100%;
	padding: 12px;
	border-radius: 14px;
	border: 1px solid #ff6036;
	background: #ffffff;
	color: #000000;
	box-sizing: border-box;
	font-size: 15px;
`;

export const PreviewImage = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	border-radius: 8px;
	border: 2px dashed #ff6036;
	margin: 5px 0;
`;
