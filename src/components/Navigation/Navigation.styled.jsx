import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
	padding: 5px 5px;
	background: transparent;

	text-decoration: none;
	color: #333333;
border-radius:8px;
	font-weight: 400;
	font-size: 12px;

	transition: background-color 0.4s ease;

	&.active {
		
		color: #333333;
		background: linear-gradient(88.01deg, #fd267a 0%, #ff6036 100%);

		&:hover {
			color: black;
		}
	}
`;

export const NavigationList = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	
	width: 100%;

	@media (min-width: 1440px) {
		flex-direction: row;
		width: 526px;
	}
`;
