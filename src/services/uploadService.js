export const uploadImage = async (file) => {
	// 🟡 поки немає бекенду — робимо base64
	return new Promise((resolve) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			resolve(reader.result); // base64
		};

		reader.readAsDataURL(file);
	});
};
