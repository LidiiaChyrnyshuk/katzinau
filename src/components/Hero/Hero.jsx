import styled from "@emotion/styled";
import herz from "../../assets/herz.png";
import Button from "../Button/Button";


const TitleText = styled.div`
	position: relative;
	color: #fd2c72;
	font-weight: 900;
	font-size: 24px;
	line-height: 1.2;
	text-align: center;
	text-transform: uppercase;
	text-decoration: none;
	margin: 40px 0 0 0;

	&::after {
		content: "";
		position: absolute;
		top: -25px;
		right: 20%;
		width: 100px;
		height: 52px;

		background-image: url(${herz});
		background-size: contain;
		background-repeat: no-repeat;
	}

	@media (min-width: 1024px) {
		font-size: 90px;

		&::after {
			content: "";
			position: absolute;
			top: -25px;
			right: 20%;
			width: 200px;
			height: 100px;

			background-image: url(${herz});
			background-size: contain;
			background-repeat: no-repeat;
		}
	}
`;
const SubTitleText = styled.div`
  color: #131313;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 auto;
  width:100%;
  max-width: 580px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;


export default function Hero() {
  return (
    <>
      <TitleText>
        Мяу...
        <br /> свайпай лапкою,
        <br /> обирай серцем
      </TitleText>
      <SubTitleText>
        Найди того, з ким можна мурчати під місяцем, ганяти м’ячик чи просто
        валятися на сонечку
      </SubTitleText>
      <Button></Button>
      
    </>
  );
}
