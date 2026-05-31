import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
	padding: 5px 5px;
	background: transparent;
	text-decoration: none;
	color: #333333;
	border-radius: 8px;
	font-weight: 500;
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	
	transition: background-color 0.4s ease;

	@media (min-width: 1024px) {
		padding: 15px 30px;
		font-size: 24px;
	}

	&.active {
		color: #ffffff;
		background: linear-gradient(88.01deg, #fd267a 0%, #ff6036 100%);

		&:hover {
			color: #ffffff;
		}
	}
`;

export const NavigationList = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	gap: 0;
	padding-right: 16px;
	width: 100%;

	@media (min-width: 478px) {
		gap: 10px;
	}

	@media (min-width: 1024px) {
		gap: 20px;
	}
`;
