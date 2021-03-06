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

export const getWordListFromId = (list_id) => {
  return l_earnAPI.get(`word-lists/${list_id}`).then((response) => {
    return response.data;
  });
};

export const patchMoneyAndQuestions = (user_id, request_body) => {
  return l_earnAPI.patch(`/users/${user_id}/settings`, request_body);
};

export const patchAmountEarned = (user_id, request_body) => {
  console.log(request_body, "request body");
  return l_earnAPI.patch(`/users/${user_id}`, request_body);
};

export const postUser = (request_body) => {
  return l_earnAPI.post("/users/", request_body).then((response) => {
    console.log(response.data);
    return response.data;
  });
};
