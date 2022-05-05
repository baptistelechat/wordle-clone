import { initialState } from "../context/wordleContext";
import { handlePressBackspace } from "./handlePressBackspace";
import { handlePressEnter } from "./handlePressEnter";
import { handlePressLetter } from "./handlePressLetter";

export const wordReducer = (prevWord: string, key: string) => {
  if (/^[0-9]$/i.test(key)) return prevWord;

  switch (key) {
    case "Backspace":
      return handlePressBackspace(prevWord);
    case "Enter":
      return handlePressEnter(prevWord, initialState.secretWord);
    default:
      return handlePressLetter(prevWord, initialState.secretWord.length, key);
  }
};
