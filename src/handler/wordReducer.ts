import { initialState } from "../context/wordleContext";
import { authorizedKey } from "./authorizedKey";
import { handlePressBackspace } from "./handlePressBackspace";
import { handlePressEnter } from "./handlePressEnter";
import { handlePressLetter } from "./handlePressLetter";

export const wordReducer = (prevWord: string, key: string) => {
  // if (!/^[a-z]+$/i.test(key)) return prevWord;
  if (!authorizedKey.includes(key)) return prevWord;
  switch (key) {
    case "Backspace":
      return handlePressBackspace(prevWord);
    case "Enter":
      return handlePressEnter(prevWord, initialState.secretWord);
    default:
      return handlePressLetter(prevWord, initialState.secretWord.length, key);
  }
};
