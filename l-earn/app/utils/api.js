import axios from "axios";

const hosted = "https://learnbe.herokuapp.com/api";

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
  return l_earnAPI.get(`/users/${user_id}`).then((response) => {
    return response.data.users;
  });
};

export const addListToUsersWordBank = (user_id, list_id) => {
  return l_earnAPI.post(`/users/${user_id}/${list_id}`);
};

export const deleteListFromUsersWordBank = (user_id, list_id) => {
  return l_earnAPI.delete(`/users/${user_id}/${list_id}`);
};
