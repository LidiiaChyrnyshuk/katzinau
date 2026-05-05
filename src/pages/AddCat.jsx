import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../services/uploadService";

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
		img: "",
		description: "",
	});

	const [errors, setErrors] = useState({});
	const [preview, setPreview] = useState("");

	// 🔥 upload image (готово під бек)
	const handleImageUpload = async (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const imageUrl = await uploadImage(file);

		setPreview(imageUrl);

		setForm((prev) => ({
			...prev,
			img: imageUrl,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validate = () => {
		const newErrors = {};

		if (!form.name.trim()) newErrors.name = "Введи ім’я";
		if (!form.age.trim()) newErrors.age = "Введи вік";
		if (!form.img) newErrors.img = "Додай фото";
		if (!form.description.trim()) newErrors.description = "Додай опис";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) return;

		const newCat = {
			id: Date.now(),
			...form,
		};

		const currentCats = getCats();
		const updatedCats = [newCat, ...currentCats];

		saveCats(updatedCats);

		navigate("/");
	};

	return (
		<Wrapper>
			<Title>Додай свого котика 🐾</Title>

			<Form onSubmit={handleSubmit}>
				<Input
					name="name"
					placeholder="Ім’я"
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

				{/* 🔥 upload file */}
				<Input type="file" accept="image/*" onChange={handleImageUpload} />
				{errors.img && <ErrorText>{errors.img}</ErrorText>}

				{/* preview */}
				{preview && <Preview src={preview} alt="preview" />}

				<Textarea
					name="description"
					placeholder="Опис"
					value={form.description}
					onChange={handleChange}
				/>
				{errors.description && <ErrorText>{errors.description}</ErrorText>}

				<Button type="submit">Додати котика 🐱</Button>
			</Form>
		</Wrapper>
	);
}
