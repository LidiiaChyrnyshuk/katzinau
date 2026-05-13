import { useState } from "react";
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

	// 📸 upload через base64 (без CSP проблем)
	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setImageFile(file);

		const reader = new FileReader();

		reader.onloadend = () => {
			setPreview(reader.result); // ✅ base64
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

	// ✅ валідація
	const validate = () => {
		const newErrors = {};

		if (!form.name.trim()) newErrors.name = "Введи ім’я котика";
		if (!form.age.trim()) newErrors.age = "Введи вік";
		if (!form.description.trim()) newErrors.description = "Додай опис";
		if (!imageFile) newErrors.img = "Додай фото";
		if (!owner.name.trim()) newErrors.ownerName = "Введи своє ім’я";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// 🚀 submit
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) return;

		let user = JSON.parse(localStorage.getItem("user"));

		if (!user) {
			user = {
				id: "user-" + Date.now(),
				name: owner.name,
				bio: owner.bio,
			};

			localStorage.setItem("user", JSON.stringify(user));
		}

		// 🐱 котик
		const newCat = {
			id: Date.now(),
			name: form.name,
			age: form.age,
			description: form.description,
			img: preview, // base64
			ownerId: user.id,
			stats: {
				likes: 0,
				dislikes: 0,
				superLikes: 0,
			},
		};

		const currentCats = getCats() || []; // ✅ без краша
		const updatedCats = [newCat, ...currentCats];

		saveCats(updatedCats);

		navigate("/");
	};

	return (
		<Wrapper>
			<Title>Додай свого котика 🐾</Title>

			<Form onSubmit={handleSubmit}>
				{/* 🐱 КІТ */}
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
				/>
				{errors.description && <ErrorText>{errors.description}</ErrorText>}

				{/* 📸 ФОТО */}
				<Input type="file" accept="image/*" onChange={handleImageUpload} />
				{errors.img && <ErrorText>{errors.img}</ErrorText>}

				{preview && <Preview src={preview} alt="preview" />}

				{/* 👤 ВЛАСНИК */}
				<Title style={{ marginTop: 20 }}>Про тебе</Title>

				<Input
					name="name"
					placeholder="Твоє ім’я"
					value={owner.name}
					onChange={(e) =>
						setOwner((prev) => ({
							...prev,
							name: e.target.value,
						}))
					}
				/>
				{errors.ownerName && <ErrorText>{errors.ownerName}</ErrorText>}

				<Textarea
					name="bio"
					placeholder="Коротко про себе"
					value={owner.bio}
					onChange={handleOwnerChange}
				/>

				<Button type="submit">Додати котика 🐱</Button>
			</Form>
		</Wrapper>
	);
}
