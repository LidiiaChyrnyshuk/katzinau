
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
	PreviewImage,
} from "./Profile.styled";

export default function Profile() {
	const navigate = useNavigate();

	const [user, setUser] = useState(null);
	const [cats, setCats] = useState([]);

	const [editingOwner, setEditingOwner] = useState(false);
	const [editingCatId, setEditingCatId] = useState(null);

	// Тимчасовий стейт суто для відображення нового вибраного фото
	const [filePreview, setFilePreview] = useState(null);

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
			prev.map((cat) => (cat.id === id ? { ...cat, [field]: value } : cat)),
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
		window.dispatchEvent(new Event("storage"));
	};

	// 💾 save cat
	const saveCat = () => {
		const allCats = getCats() || [];

		const updated = allCats.map((cat) => {
			const edited = cats.find((c) => c.id === cat.id);
			return edited ? edited : cat;
		});

		saveCats(updated);
		setEditingCatId(null);
		setFilePreview(null); // Очищаємо прев'ю після збереження
	};

	// 🗑 delete
	const handleDelete = (id) => {
		const allCats = getCats() || [];
		const updated = allCats.filter((cat) => cat.id !== id);

		saveCats(updated);
		setCats((prev) => prev.filter((cat) => cat.id !== id));
	};

	// 👤 Повне видалення профілю власника та його котиків
	const handleDeleteOwner = () => {
		const confirmDelete = window.confirm(
			"Ви впевнені, що хочете видалити свій профіль та всіх своїх котиків? 🐾",
		);

		if (confirmDelete) {
			// 1. Очищаємо всі дані провайдера з localStorage
			localStorage.removeItem("user");

			// 2. Видаляємо з бази котиків, які належали цьому власнику
			const allCats = getCats() || [];
			const remainingCats = allCats.filter((cat) => cat.ownerId !== user.id);
			saveCats(remainingCats);

			// 3. Скидаємо локальний стейт, щоб спрацював екран "Поки профіль не створений"
			setUser(null);
			setCats([]);
			setEditingOwner(false);

			// Оповіщаємо систему про зміни в сховищі
			window.dispatchEvent(new Event("storage"));
		}
	};

	// Кнопка редагування котика (скидаємо прев'ю перед початком)
	const startEditingCat = (id) => {
		setEditingCatId(id);
		setFilePreview(null);
	};

	if (!user) {
		return (
			<Page>
				<Title>🐾 Мої котики</Title>
				<Empty>Поки профіль не створений 🐱</Empty>
				<AddButton onClick={() => navigate("/addCat")}>
					+ Додати котика
				</AddButton>
			</Page>
		);
	}

	return (
		<Page>
			<Title>🐾 Мої котики</Title>

			<CatsTable>
				{cats.length === 0 ? (
					<Empty>У тебе ще немає котиків 🐾</Empty>
				) : (
					cats.map((cat) => {
						const stats = cat.stats || { likes: 0, dislikes: 0, superLikes: 0 };
						const editing = editingCatId === cat.id;

						return (
							<CatRow key={cat.id}>
								<CatImage src={cat.img} alt={cat.name} />

								<CatInfo>
									{editing ? (
										<>
											<Input
												value={cat.name || ""}
												placeholder="Ім’я"
												onChange={(e) =>
													handleCatChange(cat.id, "name", e.target.value)
												}
											/>

											<Input
												value={cat.age || ""}
												placeholder="Вік"
												onChange={(e) =>
													handleCatChange(cat.id, "age", e.target.value)
												}
											/>

											<Input
												value={cat.description || ""}
												placeholder="Опис котика"
												onChange={(e) =>
													handleCatChange(cat.id, "description", e.target.value)
												}
											/>

											{/* ПРЕВ'Ю: Показується ТІЛЬКИ тоді, коли файл обрано в інпуті */}
											{filePreview && (
												<div>
													<span style={{ fontSize: "12px", opacity: 0.6 }}>
														Нове фото:
													</span>
													<br />
													<PreviewImage
														src={filePreview}
														alt="Попередній перегляд"
													/>
												</div>
											)}

											<Input
												type="file"
												accept="image/*"
												onChange={(e) => {
													const file = e.target.files[0];
													if (!file) return;

													const reader = new FileReader();
													reader.onloadend = () => {
														// 1. Показуємо прев'ю на екрані
														setFilePreview(reader.result);
														// 2. Записуємо дані у стейт котика для майбутнього збереження
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
											<p style={{ margin: 0 }}>{cat.description}</p>
										</>
									)}

									<CatStats>
										<span>❤️ {stats.likes}</span>
										<span>⭐ {stats.superLikes}</span>
										<span>❌ {stats.dislikes}</span>
									</CatStats>

									<Buttons>
										{editing ? (
											<Button onClick={saveCat}>💾</Button>
										) : (
											<Button onClick={() => startEditingCat(cat.id)}>
												✏️
											</Button>
										)}

										<Button
											onClick={() => handleDelete(cat.id)}
											style={{
												background:
													"linear-gradient(88.01deg, #ff4d4d 0%, #ff0000 100%)",
											}}
										>
											🗑
										</Button>
									</Buttons>
								</CatInfo>
							</CatRow>
						);
					})
				)}
			</CatsTable>

			<OwnerTable>
				<TableRow>
					<TableLabel>Власник</TableLabel>
					<TableValue>
						{editingOwner ? (
							<Input
								value={user.name || ""}
								placeholder="Ім’я"
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
							<Input
								value={user.bio || ""}
								placeholder="Про себе"
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
						<Button onClick={saveOwner}>💾</Button>
					) : (
						<>
							<Button onClick={() => setEditingOwner(true)}>✏️</Button>
							{/* Нова кнопка видалення профілю */}
							<Button
								onClick={handleDeleteOwner}
								style={{
									background:
										"linear-gradient(88.01deg, #ff4d4d 0%, #ff0000 100%)",
								}}
							>
								🗑
							</Button>
						</>
					)}
				</Buttons>
			</OwnerTable>

			<AddButton onClick={() => navigate("/addCat")}>
				+ Додати ще котика
			</AddButton>
		</Page>
	);
}
