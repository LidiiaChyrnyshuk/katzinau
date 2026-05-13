import {
	Wrapper,
	Title,
	Table,
	Row,
	Image,
	Info,
	Stats,
	Stat,
	Actions,
	Button,
} from "./CatsStats.styled";

export default function CatsStats({ cats, onDelete, onEdit }) {
	return (
		<Wrapper>
			<Title>🐾 Мої котики</Title>

			<Table>
				{cats.map((cat) => (
					<Row key={cat.id}>
						<Image src={cat.img} alt={cat.name} />

						<Info>
							<h3>{cat.name}</h3>
							<p>{cat.age}</p>
						</Info>

						<Stats>
							<Stat>❤️ {cat.stats?.likes || 0}</Stat>

							<Stat>⭐ {cat.stats?.superLikes || 0}</Stat>

							<Stat>❌ {cat.stats?.dislikes || 0}</Stat>
						</Stats>

						<Actions>
							<Button onClick={() => onEdit(cat)}>✏️</Button>

							<Button onClick={() => onDelete(cat.id)}>🗑️</Button>
						</Actions>
					</Row>
				))}
			</Table>
		</Wrapper>
	);
}
