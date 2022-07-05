const capitalise = (word) => {
  if (!word) {
    return "";
  } else if (word.length === 1) {
    return word.toUpperCase();
  }
  const firstLetter = word.slice(0, 1);
  const restOfWord = word.slice(1);
  return firstLetter.toUpperCase() + restOfWord.toLowerCase();
};

export default capitalise;
