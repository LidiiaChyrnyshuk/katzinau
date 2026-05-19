
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	Wrapper,
	Title,
	Form,
	Input,
	Textarea,
	Button,
	Preview,
	ErrorText,
} from "./AddCat.styled";

import { getCats, saveCats } from "../services/catsService";

export default function AddCat() {
	const navigate = useNavigate();

	// Перевіряємо, чи є вже створений користувач в системі
	const [existingUser, setExistingUser] = useState(null);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			setExistingUser(user);
		}
	}, []);

	const [form, setForm] = useState({
		name: "",
		age: "",
		description: "",
	});

	const [owner, setOwner] = useState({
		name: "",
		bio: "",
	});

	const [errors, setErrors] = useState({});
	const [preview, setPreview] = useState("");
	const [imageFile, setImageFile] = useState(null);

	// 📸 upload через base64
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setImageFile(file);

		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result);
		};
		reader.readAsDataURL(file);
	};

	// 🐱 дані кота
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// 👤 дані власника
	const handleOwnerChange = (e) => {
		const { name, value } = e.target;
		setOwner((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// ✅ розумна валідація
	const validate = () => {
		const newErrors = {};

		if (!form.name.trim()) newErrors.name = "Введи ім’я котика";
		if (!form.age.trim()) newErrors.age = "Введи вік";
		if (!form.description.trim()) newErrors.description = "Додай опис";
		if (!imageFile) newErrors.img = "Додай фото";

		// Валідуємо власника тільки якщо його ще немає в системі
		if (!existingUser && !owner.name.trim()) {
			newErrors.ownerName = "Введи своє ім’я";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// 🚀 submit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) return;

		let user = existingUser;

		// Якщо користувача немає — створюємо нового
		if (!user) {
			user = {
				id: "user-" + Date.now(),
				name: owner.name,
				bio: owner.bio,
			};
			localStorage.setItem("user", JSON.stringify(user));
		}

		// 🐱 новий котик
		const newCat = {
			id: Date.now(),
			name: form.name,
			age: form.age,
			description: form.description,
			img: preview,
			ownerId: user.id,
			stats: {
				likes: 0,
				dislikes: 0,
				superLikes: 0,
			},
		};

		const currentCats = getCats() || [];
		const updatedCats = [newCat, ...currentCats];

		saveCats(updatedCats);

		// Оновлюємо кастомну подію для синхронізації інших сторінок (якщо треба)
		window.dispatchEvent(new Event("storage"));

		navigate("/");
	};

	return (
		<Wrapper>
			<Title>Додай свого котика 🐾</Title>

			<Form onSubmit={handleSubmit}>
				{/* 🐱 СЕКЦІЯ КОТИКА */}
				<Input
					name="name"
					placeholder="Ім’я котика"
					value={form.name}
					onChange={handleChange}
				/>
				{errors.name && <ErrorText>{errors.name}</ErrorText>}

				<Input
					name="age"
					placeholder="Вік"
					value={form.age}
					onChange={handleChange}
				/>
				{errors.age && <ErrorText>{errors.age}</ErrorText>}

				<Textarea
					name="description"
					placeholder="Що любить твій котик?"
					value={form.description}
					onChange={handleChange}
					rows={3}
				/>
				{errors.description && <ErrorText>{errors.description}</ErrorText>}

				{/* 📸 ФОТО */}
				<Input type="file" accept="image/*" onChange={handleImageUpload} />
				{errors.img && <ErrorText>{errors.img}</ErrorText>}

				{preview && <Preview src={preview} alt="preview" />}

				{/* 👤 СЕКЦІЯ ВЛАСНИКА (показується тільки якщо користувач ще НЕ зареєстрований) */}
				{!existingUser && (
					<>
						<Title style={{ marginTop: 20 }}>Про тебе</Title>

						<Input
							name="name"
							placeholder="Твоє ім’я"
							value={owner.name}
							onChange={
								handleOwnerChange
							} /* Виправлено на загальний обробник */
						/>
						{errors.ownerName && <ErrorText>{errors.ownerName}</ErrorText>}

						<Textarea
							name="bio"
							placeholder="Коротко про себе"
							value={owner.bio}
							onChange={handleOwnerChange}
							rows={2}
						/>
					</>
				)}

				<Button type="submit">Додати котика 🐱</Button>
			</Form>
		</Wrapper>
	);
}
