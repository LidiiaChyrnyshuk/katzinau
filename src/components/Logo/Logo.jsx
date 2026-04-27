import styled from "@emotion/styled";
import logo from "../../assets/katze_logo.png";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
	display: flex;
	align-items: center;
	width: 74px;
	height: 20px;

	@media (min-width: 768px) {
		width: 160px;
		height: 60px;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;

function Logo() {
	return (
		<Wrapper to="/">
			<Img src={logo} alt="katzinau logo" />
		</Wrapper>
	);
}

export default Logo;
