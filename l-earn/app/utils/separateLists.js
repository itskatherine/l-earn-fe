const separateLists = (allWordLists, listIdArray) => {
  const selectedListArray = [];
  const unselectedListArray = [];

  for (let list of allWordLists) {
    if (listIdArray.includes(list.list_id)) {
      selectedListArray.push(list);
    } else {
      unselectedListArray.push(list);
    }
  }

  return [selectedListArray, unselectedListArray];
};

export default separateLists;
