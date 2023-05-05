export const capitalize = (sentence: string) => {
  const text = sentence.toLocaleLowerCase();
  return text[0].toLocaleUpperCase() + text.slice(1);
};
