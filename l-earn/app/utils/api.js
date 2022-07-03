import axios from "axios";
import extractWordList from "./extractWordList";

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
