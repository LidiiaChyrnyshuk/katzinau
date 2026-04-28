import { NavigationList, StyledLink } from "./Navigation.styled";

export const Navigation = () => {
	return (
		<NavigationList>
			<StyledLink to="/">Головна</StyledLink>
			<StyledLink to="/addCat">Додати котика</StyledLink>
			<StyledLink to="/profile">Профіль</StyledLink>
		</NavigationList>
	);
};
