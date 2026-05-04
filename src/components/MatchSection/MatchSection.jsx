import {
	Wrapper,
	Title,
	Cards,
	CardWrapper,
	
} from "./MatchSection.styled";

export default function MatchSection({ cats}) {
	return (
		<Wrapper>
			<Title>
				ІДЕАЛЬНА ПАРА:
				<br />
				МУР-МАТЧ ТИЖНЯ
			</Title>

			<Cards>
				<CardWrapper left>
					<img src={cats[0].img} alt={cats[0].name} />
				</CardWrapper>

				<CardWrapper right>
					<img src={cats[1].img} alt={cats[1].name} />
					
				</CardWrapper>
			</Cards>
		</Wrapper>
	);
}
