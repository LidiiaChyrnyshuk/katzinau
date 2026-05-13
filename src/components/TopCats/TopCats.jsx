import {
	Wrapper,
	Title,
	Grid,
	Card,
	Image,
	Badge,
	Score,
} from "./TopCats.styled";

export default function TopCats({ cats }) {
	const sortedCats = [...cats].sort((a, b) => {
		const scoreA =
			(a.stats?.likes || 0) +
			(a.stats?.superLikes || 0) * 3 -
			(a.stats?.dislikes || 0);

		const scoreB =
			(b.stats?.likes || 0) +
			(b.stats?.superLikes || 0) * 3 -
			(b.stats?.dislikes || 0);

		return scoreB - scoreA;
	});

	const top = sortedCats.slice(0, 3);

	return (
		<Wrapper>
			<Title>🏆 ТОП котики тижня</Title>

			<Grid>
				{top.map((cat, index) => {
					const score =
						(cat.stats?.likes || 0) +
						(cat.stats?.superLikes || 0) * 3 -
						(cat.stats?.dislikes || 0);

					return (
						<Card key={cat.id}>
							<Badge>
								{index === 0 && "🥇"}
								{index === 1 && "🥈"}
								{index === 2 && "🥉"}
							</Badge>

							<Image src={cat.img} alt={cat.name} />

							<h3>{cat.name}</h3>

							<Score>❤️ {cat.stats?.likes || 0}</Score>

							<Score>⭐ {cat.stats?.superLikes || 0}</Score>

							<Score>🔥 score: {score}</Score>
						</Card>
					);
				})}
			</Grid>
		</Wrapper>
	);
}
