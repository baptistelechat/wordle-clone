export const handlePressEnter = (word: string, secretWord: string) => {
  if (word.length < secretWord.length) {
    console.log("📝 You need to type more letters!");
    return word;
  }
  if (word !== secretWord) {
    console.log("❌ Wrong word!");
    return word;
  }
  console.log("🎉 You guessed the word!", word);
  return word;
};
