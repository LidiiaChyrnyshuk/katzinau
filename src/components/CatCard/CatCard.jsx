
import { Card, Img, Info, Actions, ActionButton } from "./CatCard.styled";
import { IoCloseSharp, IoHeartSharp, IoStarSharp } from "react-icons/io5";

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
				{/* ❌ Дизлайк — Червоний хрестик */}
				<ActionButton
					onClick={() => onDislike(cat)}
					iconColor="#ff4d4d"
					title="Дизлайк"
				>
					<IoCloseSharp size={18} />
				</ActionButton>

				{/* ⭐ Суперлайк — Жовта зірочка */}
				<ActionButton
					onClick={() => onSuperLike(cat)}
					iconColor="#ffcc00"
					title="Суперлайк"
				>
					<IoStarSharp size={18} />
				</ActionButton>

				{/* ❤️ Лайк — Червоне серце */}
				<ActionButton
					onClick={() => onLike(cat)}
					iconColor="#fd2c72"
					title="Лайк"
				>
					<IoHeartSharp size={18} />
				</ActionButton>
			</Actions>
		</Card>
	);
}
