const pickRandomWord = (wordArr) => {
  const length = wordArr.length;
  if (length === 0) {
    return [];
  }
  const index = Math.floor(Math.random() * length);
  return wordArr[index];
};

const example = ["apple", "banana", "carrot", "dill pepper"];

export default pickRandomWord;
