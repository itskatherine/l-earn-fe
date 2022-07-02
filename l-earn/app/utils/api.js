import axios from "axios";

const hosted = "https://degrassi-eh-35014.herokuapp.com/api";
const local = "http://localhost:9090/api";

const l_earnAPI = axios.create({
  baseURL: hosted,
});

export const getAllWordLists = () => {
  return l_earnAPI.get("/word-lists").then((response) => {
    return response.data;
  }).catch(err=>console.log(err));
};
 