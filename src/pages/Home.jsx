// src/pages/Home.jsx

import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import { cats as initialCats } from "../data/cats";
import { getCats, saveCats } from "../services/catsService";

import Slider from "../components/Slider/Slider";
import MatchSection from "../components/MatchSection/MatchSection";

export default function Home() {
	const [cats, setCats] = useState([]);
	const [match, setMatch] = useState(null);

	// 🐱 init cats
	useEffect(() => {
		const stored = getCats() || [];

		if (stored.length > 0) {
			setCats(stored);
		} else {
			saveCats(initialCats);
			setCats(initialCats);
		}
	}, []);

	// 📊 update stats
	const updateStats = (catId, type) => {
		setCats((prev) => {
			const updated = prev.map((cat) => {
				const stats = cat.stats || {
					likes: 0,
					dislikes: 0,
					superLikes: 0,
				};

				if (cat.id === catId) {
					return {
						...cat,
						stats: {
							...stats,
							[type]: (stats[type] || 0) + 1,
						},
					};
				}

				return cat;
			});

			saveCats(updated);

			return updated;
		});
	};

	// 💘 save like history
	const saveLikeHistory = (catId) => {
		const history = JSON.parse(localStorage.getItem("likesHistory")) || [];

		history.push({
			catId,
			date: Date.now(),
		});

		localStorage.setItem("likesHistory", JSON.stringify(history));
	};

	// ❤️ like
	const handleLike = (cat) => {
		updateStats(cat.id, "likes");
		saveLikeHistory(cat.id);
	};

	// ❌ dislike
	const handleDislike = (cat) => {
		updateStats(cat.id, "dislikes");
	};

	// ⭐ superlike
	const handleSuperLike = (cat) => {
		updateStats(cat.id, "superLikes");
		saveLikeHistory(cat.id);
	};

	// 🔥 weekly match
	useEffect(() => {
		if (!cats.length) return;

		const history = JSON.parse(localStorage.getItem("likesHistory")) || [];

		const WEEK = 7 * 24 * 60 * 60 * 1000;

		const recentLikes = history.filter((item) => Date.now() - item.date < WEEK);

		const counts = {};

		recentLikes.forEach((item) => {
			counts[item.catId] = (counts[item.catId] || 0) + 1;
		});

		const sorted = Object.entries(counts)
			.sort((a, b) => b[1] - a[1])
			.slice(0, 2);

		if (sorted.length < 2) return;

		const matchedCats = sorted
			.map(([id]) => cats.find((cat) => cat.id === Number(id)))
			.filter(Boolean);

		if (matchedCats.length === 2) {
			setMatch(matchedCats);
		}
	}, [cats]);

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
