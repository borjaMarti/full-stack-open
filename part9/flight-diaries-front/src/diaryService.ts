import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "./types";

const baseUrl = "http://localhost:3005/api/diaries";

export const getAllEntries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((response) => response.data);
};

export const addEntry = (object: NewDiaryEntry) => {
  return axios
    .post<DiaryEntry>(baseUrl, object)
    .then((response) => response.data);
};
