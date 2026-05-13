// src/pages/Profile.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCats, saveCats } from "../services/catsService";

import {
	Page,
	Title,
	OwnerTable,
	TableRow,
	TableLabel,
	TableValue,
	Input,
	Textarea,
	CatsTable,
	CatRow,
	CatImage,
	CatInfo,
	CatName,
	CatStats,
	Buttons,
	Button,
	AddButton,
	Empty,
} from "./Profile.styled";

export default function Profile() {
	const navigate = useNavigate();

	const [user, setUser] = useState(null);
	const [cats, setCats] = useState([]);

	const [editingOwner, setEditingOwner] = useState(false);
	const [editingCatId, setEditingCatId] = useState(null);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user")) || null;

		setUser(storedUser);

		const allCats = getCats() || [];

		if (storedUser) {
			const myCats = allCats.filter((cat) => cat.ownerId === storedUser.id);

			setCats(myCats);
		}
	}, []);

	// 🐱 update cat
	const handleCatChange = (id, field, value) => {
		setCats((prev) =>
			prev.map((cat) =>
				cat.id === id
					? {
							...cat,
							[field]: value,
						}
					: cat,
			),
		);
	};

	// 👤 update owner
	const handleOwnerChange = (field, value) => {
		setUser((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	// 💾 save owner
	const saveOwner = () => {
		localStorage.setItem("user", JSON.stringify(user));
		setEditingOwner(false);
	};

	// 💾 save cat
	const saveCat = (id) => {
		const allCats = getCats() || [];

		const updated = allCats.map((cat) => {
			const edited = cats.find((c) => c.id === cat.id);

			return edited || cat;
		});

		saveCats(updated);

		setEditingCatId(null);
	};

	// 🗑 delete
	const handleDelete = (id) => {
		const allCats = getCats() || [];

		const updated = allCats.filter((cat) => cat.id !== id);

		saveCats(updated);

		setCats(updated.filter((cat) => cat.ownerId === user.id));
	};

	if (!user) {
		return (
			<Page>
				<Title>🐾 Мої котики</Title>

				<Empty>Поки профіль не створений 🐱</Empty>

				<AddButton onClick={() => navigate("/addCat")}>Додати котика</AddButton>
			</Page>
		);
	}

	return (
		<Page>
			<Title>🐾 Мої котики</Title>

			{/* CATS */}

			<CatsTable>
				{cats.length === 0 ? (
					<Empty>У тебе ще немає котиків 🐾</Empty>
				) : (
					cats.map((cat) => {
						const stats = cat.stats || {
							likes: 0,
							dislikes: 0,
							superLikes: 0,
						};

						const editing = editingCatId === cat.id;

						return (
							<CatRow key={cat.id}>
								<CatImage src={cat.img} alt={cat.name} title="Фото котика 🐾" />

								<CatInfo>
									{editing ? (
										<>
											<Input
												placeholder="Введіть нове ім’я котика"
												value={cat.name}
												onChange={(e) =>
													handleCatChange(cat.id, "name", e.target.value)
												}
											/>

											<Input
												placeholder="Введіть новий вік"
												value={cat.age}
												onChange={(e) =>
													handleCatChange(cat.id, "age", e.target.value)
												}
											/>

											<Textarea
												placeholder="Введіть новий опис"
												value={cat.description}
												onChange={(e) =>
													handleCatChange(cat.id, "description", e.target.value)
												}
											/>

											<Input
												type="file"
												accept="image/*"
												onChange={(e) => {
													const file = e.target.files[0];

													if (!file) return;

													const reader = new FileReader();

													reader.onloadend = () => {
														handleCatChange(cat.id, "img", reader.result);
													};

													reader.readAsDataURL(file);
												}}
											/>
										</>
									) : (
										<>
											<CatName>
												{cat.name}, {cat.age}
											</CatName>

											<p>{cat.description}</p>
										</>
									)}

									<CatStats>
										<span>❤️ {stats.likes}</span>

										<span>⭐ {stats.superLikes}</span>

										<span>❌ {stats.dislikes}</span>
									</CatStats>

									<Buttons>
										{editing ? (
											<Button onClick={() => saveCat(cat.id)}>
												💾 
											</Button>
										) : (
											<Button onClick={() => setEditingCatId(cat.id)}>
												✏️ 
											</Button>
										)}

										<Button onClick={() => handleDelete(cat.id)}>
											🗑 
										</Button>
									</Buttons>
								</CatInfo>
							</CatRow>
						);
					})
				)}
			</CatsTable>
			{/* OWNER */}

			<OwnerTable>
				<TableRow>
					<TableLabel>Власник</TableLabel>

					<TableValue>
						{editingOwner ? (
							<Input
								value={user.name}
								onChange={(e) => handleOwnerChange("name", e.target.value)}
							/>
						) : (
							user.name
						)}
					</TableValue>
				</TableRow>

				<TableRow>
					<TableLabel>Про себе</TableLabel>

					<TableValue>
						{editingOwner ? (
							<Textarea
								value={user.bio}
								onChange={(e) => handleOwnerChange("bio", e.target.value)}
							/>
						) : (
							user.bio || "Люблю котиків 🐾"
						)}
					</TableValue>
				</TableRow>

				<TableRow>
					<TableLabel>Kотиків</TableLabel>

					<TableValue>{cats.length}</TableValue>
				</TableRow>

				<Buttons>
					{editingOwner ? (
						<Button onClick={saveOwner}>💾 </Button>
					) : (
						<Button onClick={() => setEditingOwner(true)}>✏️ </Button>
					)}
				</Buttons>
			</OwnerTable>

			<AddButton onClick={() => navigate("/addCat")}>
				+ Додати ще котика
			</AddButton>
		</Page>
	);
}
