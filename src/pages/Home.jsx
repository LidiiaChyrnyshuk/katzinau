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

	// ❤️ лайки
	const handleLike = (cat) => {
		if (match) return;

		setLikedCats((prev) => {
			if (prev.find((c) => c.id === cat.id)) return prev;
			return [...prev, cat].slice(-2);
		});
	};

	const handleDislike = (cat) => {
		console.log("dislike", cat);
	};

	const handleSuperLike = (cat) => {
		console.log("super like ⭐", cat);
	};

	// 🐱 ініціалізація котів
	useEffect(() => {
		const stored = getCats();

		if (stored.length > 0) {
			setCats(stored);
		} else {
			setCats(initialCats);
			saveCats(initialCats);
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
				setMatch(parsed.cats);
			} else {
				localStorage.removeItem("match");
			}
		} catch {
			localStorage.removeItem("match");
		}
	}, []);

	// 💥 створення match
	useEffect(() => {
		if (likedCats.length === 2 && !match) {
			const newMatch = [likedCats[0], likedCats[1]];

			setMatch(newMatch);

			localStorage.setItem(
				"match",
				JSON.stringify({
					cats: newMatch,
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
