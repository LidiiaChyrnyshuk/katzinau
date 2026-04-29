import { Card, Img, Info, Actions } from "./CatCard.styled";


export default function CatCard({ cat }) {
	return (
		<Card>
			<Img src={cat.img} alt={cat.name} />

			<Info>
				<h3>
					{cat.name}, {cat.age}
				</h3>
				<p>{cat.description}</p>
			</Info>

			<Actions>
				<button>❌</button>
				<button>⭐</button>
				<button>❤️</button>
			</Actions>
		</Card>
	);
}
