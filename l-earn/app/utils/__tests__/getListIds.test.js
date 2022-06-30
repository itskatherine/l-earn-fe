const { getListIds } = require("../getListIds");

//check it works
//check it doesnt change the input
//check it only passes unique ids

describe("getListsIds()", () => {
  test("Returns empty array, when passed an empty array", () => {
    expect(getListIds([])).toEqual([]);
  });
  test("Returns an array of unique IDs", () => {
    const input = [
      {
        user_word_id: 1,
        word_id: 1,
        users_id: 1,
        list_id: 1,
        word: "cabbage",
        used: false,
      },
      {
        user_word_id: 1,
        word_id: 2,
        users_id: 5,
        list_id: 2,
        word: "onion",
        used: false,
      },
      {
        user_word_id: 3,
        word_id: 1,
        users_id: 3,
        list_id: 5,
        word: "exponential",
        used: true,
      },
    ];

    expect(getListIds(input)).toEqual([1, 2, 5]);
  });
  test("Should only return unique IDs", () => {
    const input = [
      {
        user_word_id: 1,
        word_id: 1,
        users_id: 1,
        list_id: 1,
        word: "cabbage",
        used: false,
      },
      {
        user_word_id: 1,
        word_id: 2,
        users_id: 5,
        list_id: 1,
        word: "onion",
        used: false,
      },
      {
        user_word_id: 3,
        word_id: 1,
        users_id: 3,
        list_id: 1,
        word: "exponential",
        used: true,
      },
    ];
    expect(getListIds(input)).toEqual([1]);
  });
});
