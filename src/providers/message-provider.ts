import axios from 'axios';
import {
  BACK_URL,
  CreateDream,
  CreateDreamResult,
  Dreams,
  MessageProvider,
  userPath,
} from '.';

export const messageProvider: MessageProvider = {
  createDreamByUserId: async (
    userId: number,
    dream: CreateDream
  ): Promise<CreateDreamResult> => {
    return (await axios.post(`${BACK_URL}/${userPath}/${userId}`, dream)).data;
  },
  getDreamByUserId: async (userId: number): Promise<Dreams[]> => {
    return (await axios.get(`${BACK_URL}/${userPath}/${userId}`)).data;
  },
};
