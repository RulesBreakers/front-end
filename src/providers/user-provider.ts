import axios from 'axios';
import { BACK_URL, CreateUser, Credentials, UserProvider, userPath } from '.';

export const userProvider: UserProvider = {
  onboarding: async (user: CreateUser) => {
    await axios.post(`${BACK_URL}/${userPath}`, user);
  },
  login: async (credentials: Credentials) => {
    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    try {
      await axios.post(`${BACK_URL}/login`, formData),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
    } catch {
      throw new Error('Forbidden');
    }
  },
  logout: async () => {
    await axios.get(`${BACK_URL}/logout`);
  },
  getAllDreams: async () => {
    return (await axios.get(`${BACK_URL}/dreams`)).data;
  },
};
