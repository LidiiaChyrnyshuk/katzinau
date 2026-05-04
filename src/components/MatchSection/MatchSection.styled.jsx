import styled from "@emotion/styled";
import dabl from "../../assets/dabl_herz.png";
import herz from "../../assets/herz.png";

export const Wrapper = styled.section`
	position: relative;
	padding: 40px 16px;
	text-align: center;
	background: #ffffff;

	&::after {
		content: "";
		position: absolute;
		top: 10%;
		left: 0;
		width: 20.66vw;
		height: 20.26vw;

		background-image: url(${dabl});
		background-size: cover;
		background-repeat: no-repeat;
	}

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		right: 5%;
		width: 11.76vw;
		height: 8.78vw;

		background-image: url(${herz});
		background-size: contain;
		background-repeat: no-repeat;
	}

	@media (min-width: 1024px) {
		&::after {
			content: "";
			position: absolute;
			top: 50%;
			left: 5%;
			width: 17vw;
			height: 16.53vw;
      z-index:2;
			background-image: url(${dabl});
			background-size: cover;
			background-repeat: no-repeat;
		}

		&::before {
			content: "";
			position: absolute;
			bottom: 0;
			right: 10%;
			width:13.22vw;
			height: 6.66vw;
      z-index:2;
			background-image: url(${herz});
			background-size: contain;
			background-repeat: no-repeat;
		}
	}
`;

export const Title = styled.h2`
	color: #fd2c72;
	font-size: 24px;
	font-weight: 900;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
	margin-bottom: 24px;

	@media (min-width: 1024px) {
		font-size: 90px;
		margin-bottom: 40px;
	}
`;

export const Cards = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	position: relative;
`;

export const CardWrapper = styled.div`
	position: relative;
	z-index: 5;
	width: 180px;
	height: 260px;
	border-radius: 16px;
	background: linear-gradient( #fd267a 0%, #ff6036 100%);
	padding: 8px;
	overflow: hidden;
	transform: ${({ left, right }) =>
		left ? "rotate(-10deg)" : right ? "rotate(10deg)" : "none"};

	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

	@media (min-width: 1024px) {
		padding: 16px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
	}
`;
