import emojiList from "../data/emojiList";

// shuffling func for random emoji
function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// getting random emoji from a category name
export function getRandomEmoji(categoryName) {
  const category = emojiList.find((cat) => cat.name === categoryName);
  if (!category || !category.emojis.length) return "❓";
  const shuffled = shuffleArray(category.emojis);
  return shuffled[0];
}
