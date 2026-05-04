import { Card, Img, Info, Actions } from "./CatCard.styled";


export default function CatCard({ cat, onLike, onDislike, onSuperLike }) {
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
				<button onClick={() => onDislike(cat)}>❌</button>
				<button onClick={() => onSuperLike(cat)}>⭐</button>
				<button onClick={() => onLike(cat)}>❤️</button>
			</Actions>
		</Card>
	);
}
