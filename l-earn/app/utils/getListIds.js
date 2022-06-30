//This function extracts all unique list IDs from a list of words
const getListIds = (words) => {
  const idList = [];
  for (let word of words) {
    if (!idList.includes(word.list_id)) {
      idList.push(word.list_id);
    }
  }
  return idList;
};

export default getListIds;
