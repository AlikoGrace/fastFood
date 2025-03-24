const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getMenu() {
  const query = "dessert";
  const res = await fetch(`${API_URL}?query=${query}&apiKey=${API_KEY}`);

  if (!res.ok) throw new Error("Failed getting menu");

  const data = await res.json();
  console.log("API Response:", data);

  if (!data.results || !Array.isArray(data.results)) {
    throw new Error("Unexpected data structure, 'results' is not an array.");
  }

  const foodItems = data.results.map((item) => ({
    name: item.title,
    imageUrl: item.image,
    ingredients: item.usedIngredients
      ? item.usedIngredients.map((i) => i.name)
      : [],
  }));

  return foodItems;
}
