const STORAGE_KEY = "cats";

export const getCats = () => {
	const data = localStorage.getItem(STORAGE_KEY);
	return data ? JSON.parse(data) : null;
};

export const saveCats = (cats) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(cats));
};

export const addCat = (cat) => {
	const current = getCats() || [];
	const updated = [cat, ...current];

	saveCats(updated);

	return updated;
};
