import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const CTAButton = styled(Link)`
	display: inline-block;
	margin-top: 24px;
	padding: 16px 32px;

	background: linear-gradient(90deg, #ff4d6d, #ff7a5c);
	color: white;

	font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;

	border-radius: 40px;
	text-decoration: none;

	box-shadow: 0 10px 20px rgba(255, 77, 109, 0.3);

	transition: all 0.2s ease;

	&:hover {
		transform: scale(1.05);
	}

	@media (min-width: 1024px) {
		font-size: 18px;
		padding: 20px 40px;
	}
`;
export default function Button() {
  return <CTAButton to="/addCat">Почати мур-знайомства</CTAButton>;
}