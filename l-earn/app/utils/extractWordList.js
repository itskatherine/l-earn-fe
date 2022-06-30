
export default function extractWordList(wordList) {
 
  const copiedWordlist = [...wordList];

  return copiedWordlist.map((wordObj) => {
    return wordObj.word;
  });
}

