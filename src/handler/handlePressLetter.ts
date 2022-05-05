export const handlePressLetter = (
  word: string,
  secretWordLength: number,
  key: string
) => {
  if (word.length < secretWordLength) {
    return `${word}${key}`;
  }
  return word;
};
