import axios from "axios";
import { DiaryEntry } from "./types";

const baseUrl = "http://localhost:3005/api/diaries";

export const getAllEntries = () => {
  return axios.get<DiaryEntry[]>(baseUrl).then((response) => response.data);
};
