const input = document.getElementById("search-input");
const cards = document.querySelectorAll(".recipe-card");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  const searchIngredients = query.split(",").map(i => i.trim()).filter(i => i.length > 0);

  cards.forEach(card => {
    const ingredients = card.dataset.ingredients.toLowerCase();

    // Проверяем, содержатся ли все введённые ингредиенты в карточке
    const isMatch = searchIngredients.every(ing => ingredients.includes(ing));

    if (isMatch) {
      card.style.display = ""; // показываем карточку (по умолчанию)
    } else {
      card.style.display = "none"; // скрываем
    }
  });
});
