const exampleWordList = [
  { word_id: 1, user_id: 1, list_id: 3, word: "Hello", used: true },
  { word_id: 2, user_id: 1, list_id: 3, word: "Hello1", used: false },
  { word_id: 3, user_id: 1, list_id: 3, word: "Bye", used: true },
];

function extractWordList(wordList) {
 
  const copiedWordlist = [...wordList];

  return copiedWordlist.map((wordObj) => {
    return wordObj.word;
  });
}
console.log(extractWordList(exampleWordList));
