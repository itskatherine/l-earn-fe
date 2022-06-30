import separateLists from "../separateLists";

describe("separateLists", () => {
  test("should separate the lists", () => {
    const inputLists = [
      { list_id: 1, list_name: "List name 1", list_difficulty: "Easy" },
      { list_id: 2, list_name: "List name 2", list_difficulty: "Medium" },
      { list_id: 3, list_name: "List name 3", list_difficulty: "Hard" },
      { list_id: 4, list_name: "List name 4", list_difficulty: "Easy" },
      { list_id: 5, list_name: "List name 5", list_difficulty: "Medium" },
      { list_id: 6, list_name: "List name 6", list_difficulty: "Harder" },
    ];
    const inputIdArray = [1, 2, 3];
    const expected = [
      [
        { list_id: 1, list_name: "List name 1", list_difficulty: "Easy" },
        { list_id: 2, list_name: "List name 2", list_difficulty: "Medium" },
        { list_id: 3, list_name: "List name 3", list_difficulty: "Hard" },
      ],
      [
        { list_id: 4, list_name: "List name 4", list_difficulty: "Easy" },
        { list_id: 5, list_name: "List name 5", list_difficulty: "Medium" },
        { list_id: 6, list_name: "List name 6", list_difficulty: "Harder" },
      ],
    ];
    expect(separateLists(inputLists, inputIdArray)).toEqual(expected);
  });
});
