import axios from "axios";
import { TestsResults, User } from "../utils/types";

const BASE_URL = 'https://oski-be-aleksandrs-projects-05725b1e.vercel.app';

export const login = (
  email: string,
  password: string,
  fullName: string
) => {
  return axios.post(`${BASE_URL}/login`, {email, password, fullName});
}

export const logout = () => {
  return axios.delete(`${BASE_URL}/login`);
}

export const setNewResults = (userId: number, result: TestsResults) => {
  return axios.post<TestsResults>(`${BASE_URL}/add-result`, {userId, result});
}

export const initUser = () => {
  return axios.get<User | null>(`${BASE_URL}/init`);
}
