import axios from 'axios';
import { BACK_URL, CreateUser, Credentials, UserProvider, userPath } from '.';

export const userProvider: UserProvider = {
  onboarding: async (user: CreateUser) => {
    await axios.post(`${BACK_URL}/${userPath}`, user);
  },
  login: async (credentials: Credentials) => {
    return (await axios.post(`${BACK_URL}/${userPath}`, credentials)).data;
  },
  logout: async () => {
    await axios.get(`${BACK_URL}/logout`);
  },
  getAllDreams: async () => {
    return (await axios.get(`${BACK_URL}/dreams`)).data;
  },
};
