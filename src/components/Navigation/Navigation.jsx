import { NavigationList, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
	return (
		<NavigationList>
			<StyledLink to="/">Home</StyledLink>
			<StyledLink to="/addCat">AddCat</StyledLink>
			<StyledLink to="/profile">Profile</StyledLink>
		</NavigationList>
	);
};
