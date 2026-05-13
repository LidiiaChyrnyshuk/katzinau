import { useState } from "react";
import {
	Card,
	Image,
	Info,
	Buttons,
	Input,
	Textarea,
} from "./CatPassport.styled";

export default function CatPassport({ cat, onDelete, onUpdate }) {
	const [isEditing, setIsEditing] = useState(false);
	const [edited, setEdited] = useState(cat);

	const handleSave = () => {
		onUpdate(edited);
		setIsEditing(false);
	};

	return (
		<Card>
			<Image src={cat.img} alt={cat.name} />

			<Info>
				{isEditing ? (
					<>
						<Input
							value={edited.name}
							onChange={(e) => setEdited({ ...edited, name: e.target.value })}
						/>
						<Input
							value={edited.age}
							onChange={(e) => setEdited({ ...edited, age: e.target.value })}
						/>
						<Textarea
							value={edited.description}
							onChange={(e) =>
								setEdited({
									...edited,
									description: e.target.value,
								})
							}
						/>
					</>
				) : (
					<>
						<h3>{cat.name}</h3>
						<p>{cat.age}</p>
						<p>{cat.description}</p>

						<p>👤 {cat.owner?.name || "Анонім"}</p>
					</>
				)}
			</Info>

			<Buttons>
				{isEditing ? (
					<button onClick={handleSave}>💾</button>
				) : (
					<button onClick={() => setIsEditing(true)}>✏️</button>
				)}

				<button onClick={() => onDelete(cat.id)}>❌</button>
			</Buttons>
		</Card>
	);
}
