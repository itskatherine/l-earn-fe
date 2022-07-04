import axios from "axios";

const hosted = "https://degrassi-eh-35014.herokuapp.com/api";
const local = "http://localhost:9090/api";

const l_earnAPI = axios.create({
  baseURL: hosted,
});

export const getAllWordLists = () => {
  return l_earnAPI
    .get("/word-lists")
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

export const getAllUsersWords = (user_id) => {
  return l_earnAPI.get(`/users/${user_id}/word_bank`).then((response) => {
    return response.data.userWords;
  });
};

export const getUserFromId = (user_id) => {
  return l_earnAPI.get(`/word-lists`).then((response) => {
    //add this endpoint once it works
    //return response.data.users
    const exampleUser = {
      users_id: 1,
      first_name: "toby",
      last_name: "isgreat",
      email: "toby0977@gmail.com",
      amount_earned: "0.3",
      total_amount: null,
      date_started: "2020-07-09T20:11:00.000Z",
      weekly_pocket_money: 6,
      weekly_question_number: 20,
    };
    return exampleUser;
  });
};
