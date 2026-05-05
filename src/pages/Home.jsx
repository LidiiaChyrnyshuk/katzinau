import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import { cats as initialCats } from "../data/cats";
import { getCats, saveCats } from "../services/catsService";
import Slider from "../components/Slider/Slider";
import MatchSection from "../components/MatchSection/MatchSection";

export default function Home() {
	const [cats, setCats] = useState([]);
	const [likedCats, setLikedCats] = useState([]);
	const [match, setMatch] = useState(null);

	// 🔧 універсальне оновлення статистики
	const updateStats = (catId, type) => {
		const updated = cats.map((c) => {
			const stats = c.stats || {
				likes: 0,
				dislikes: 0,
				superLikes: 0,
			};

			if (c.id === catId) {
				return {
					...c,
					stats: {
						...stats,
						[type]: (stats[type] || 0) + 1,
					},
				};
			}

			return c;
		});

		setCats(updated);
		saveCats(updated);
	};

	// ❤️ лайк
	const handleLike = (cat) => {
		if (match) return;

		setLikedCats((prev) => {
			if (prev.find((c) => c.id === cat.id)) return prev;
			return [...prev, cat].slice(-2);
		});

		updateStats(cat.id, "likes");
	};

	// ❌ дизлайк
	const handleDislike = (cat) => {
		updateStats(cat.id, "dislikes");
	};

	// ⭐ суперлайк
	const handleSuperLike = (cat) => {
		updateStats(cat.id, "superLikes");
	};

	// 🐱 ІНІЦІАЛІЗАЦІЯ (ОДИН ЄДИНИЙ useEffect)
	useEffect(() => {
		const stored = getCats() || [];

		if (stored.length > 0) {
			setCats(stored);
		} else {
			const prepared = initialCats.map((cat) => ({
				...cat,
				description: cat.description || "Без опису 🐾",
				ownerId: cat.ownerId || "user-1",
				stats: cat.stats || {
					likes: 0,
					dislikes: 0,
					superLikes: 0,
				},
			}));

			setCats(prepared);
			saveCats(prepared);
		}
	}, []);

	// 💖 відновлення match
	useEffect(() => {
		const saved = localStorage.getItem("match");

		if (!saved) return;

		try {
			const parsed = JSON.parse(saved);
			const WEEK = 7 * 24 * 60 * 60 * 1000;

			if (Date.now() - parsed.date < WEEK) {
				const matchedCats = cats.filter((cat) => parsed.cats.includes(cat.id));

				setMatch(matchedCats);
			} else {
				localStorage.removeItem("match");
			}
		} catch {
			localStorage.removeItem("match");
		}
	}, [cats]);

	// 💘 створення match
	useEffect(() => {
		if (likedCats.length === 2 && !match) {
			const newMatch = [likedCats[0], likedCats[1]];

			setMatch(newMatch);

localStorage.setItem(
	"match",
	JSON.stringify({
		cats: newMatch.map((cat) => cat.id),
		date: Date.now(),
	}),
);

			setLikedCats([]);
		}
	}, [likedCats, match]);

	return (
		<>
			<Hero />

			<div style={{ overflow: "hidden", width: "100%" }}>
				<Slider
					cats={cats}
					onLike={handleLike}
					onDislike={handleDislike}
					onSuperLike={handleSuperLike}
				/>
			</div>

			{match && <MatchSection cats={match} />}
		</>
	);
}
