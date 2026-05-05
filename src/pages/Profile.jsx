import { useEffect, useState } from "react";
import { getCats, saveCats } from "../services/catsService";

import {
	Wrapper,
	Title,
	UserBlock,
	Avatar,
	UserName,
	Filters,
	Button,
	Grid,
	Card,
	Image,
	Info,
	Stats,
	Actions,
	Input,
	Textarea,
} from "./Profile.styled";

export default function Profile() {
	const [cats, setCats] = useState([]);
	const [editingId, setEditingId] = useState(null);
	const [filter, setFilter] = useState("all");
	const [user, setUser] = useState(null);

	// fake auth
	useEffect(() => {
		let storedUser = localStorage.getItem("user");

		if (!storedUser) {
			const fakeUser = {
				id: "user-1",
				name: "Cat Lover",
				avatar: "https://i.pravatar.cc/150?img=12",
			};

			localStorage.setItem("user", JSON.stringify(fakeUser));
			setUser(fakeUser);
		} else {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	useEffect(() => {
		setCats(getCats());
	}, []);

	// ❌ delete
	const handleDelete = (id) => {
		const updated = cats.filter((c) => c.id !== id);
		setCats(updated);
		saveCats(updated);
	};

	// ✏️ edit
	const handleChange = (id, field, value) => {
		const updated = cats.map((c) =>
			c.id === id ? { ...c, [field]: value } : c,
		);
		setCats(updated);
	};

	const handleSave = () => {
		saveCats(cats);
		setEditingId(null);
	};

	// 🎯 filter
	const filteredCats = cats.filter((cat) => {
		if (filter === "mine") return cat.ownerId === user?.id;
		if (filter === "popular") return (cat.stats?.likes || 0) > 5;
		return true;
	});

	// 💘 history (просто беремо лайкнуті > 0)
	const likedHistory = cats.filter((c) => (c.stats?.likes || 0) > 0);

	return (
		<Wrapper>
			<Title>Профіль 😼</Title>

			{/* USER */}
			{user && (
				<UserBlock>
					<Avatar src={user.avatar} />
					<UserName>{user.name}</UserName>
				</UserBlock>
			)}

			{/* FILTERS */}
			<Filters>
				<Button onClick={() => setFilter("all")}>Всі</Button>
				<Button onClick={() => setFilter("mine")}>Мої</Button>
				<Button onClick={() => setFilter("popular")}>Популярні</Button>
			</Filters>

			{/* CATS */}
			<Grid>
				{filteredCats.map((cat) => {
					const isEditing = editingId === cat.id;

					return (
						<Card key={cat.id}>
							<Image src={cat.img} />

							<Info>
								{isEditing ? (
									<>
										<Input
											value={cat.name}
											onChange={(e) =>
												handleChange(cat.id, "name", e.target.value)
											}
										/>
										<Input
											value={cat.age}
											onChange={(e) =>
												handleChange(cat.id, "age", e.target.value)
											}
										/>
										<Textarea
											value={cat.description}
											onChange={(e) =>
												handleChange(cat.id, "description", e.target.value)
											}
										/>
									</>
								) : (
									<>
										<h3 >
											{cat.name}, {cat.age}
										</h3>
										<p >{cat.description}</p>
									</>
								)}

								{/* 📊 stats */}
								<Stats>
									<span>❤️ {cat.stats?.likes || 0}</span>
									<span>⭐ {cat.stats?.superLikes || 0}</span>
									<span>❌ {cat.stats?.dislikes || 0}</span>
								</Stats>

								{/* actions */}
								<Actions>
									{isEditing ? (
										<Button onClick={handleSave}>💾</Button>
									) : (
										<Button onClick={() => setEditingId(cat.id)}>✏️</Button>
									)}

									<Button onClick={() => handleDelete(cat.id)}>❌</Button>
								</Actions>
							</Info>
						</Card>
					);
				})}
			</Grid>

			{/* 💘 HISTORY */}
			<Title>Історія лайків 💘</Title>

			<Grid>
				{likedHistory.map((cat) => (
					<Card key={cat.id}>
						<Image src={cat.img} />
						<Info>
							<h3>{cat.name}</h3>
							<Stats>
								<span>❤️ {cat.stats?.likes || 0}</span>
							</Stats>
						</Info>
					</Card>
				))}
			</Grid>
		</Wrapper>
	);
}
