import axios from 'axios';
import { Test } from '../utils/types';

const BASE_URL = 'https://oski-be-aleksandrs-projects-05725b1e.vercel.app';

export const getAll = () => {
  return axios.get<Test[]>(`${BASE_URL}/tests`);
}

export const getTestById = (testId: number) => {
  return axios.get<Test>(`${BASE_URL}/tests/${testId}`);
}
