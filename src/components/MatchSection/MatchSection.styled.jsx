import styled from "@emotion/styled";

export const Wrapper = styled.section`
	padding: 40px 16px;
	text-align: center;
	background: #ffe4ec;
	
`;

export const Title = styled.h2`
	color: #fd2c72;
	font-size: 24px;
	font-weight: 800;
	line-height: 1.2;
	margin-bottom: 24px;
`;

export const Cards = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	position: relative;
`;

export const CardWrapper = styled.div`
	width: 180px;
	height: 260px;
	border-radius: 16px;
	background: linear-gradient(88.01deg, #fd267a 0%, #ff6036 100%);
	padding: 16px;
	overflow: hidden;
	transform: ${({ left, right }) =>
		left ? "rotate(-10deg)" : right ? "rotate(10deg)" : "none"};

	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
	}
`;


