const STORAGE_KEY = "cats";

export const getCats = () => {
	try {
		const data = localStorage.getItem(STORAGE_KEY);
		return data ? JSON.parse(data) : [];
	} catch {
		return [];
	}
};

export const saveCats = (cats) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
};

export const addCat = (cat) => {
	const current = getCats();
	const updated = [cat, ...current];

	saveCats(updated);
	return updated;
};
