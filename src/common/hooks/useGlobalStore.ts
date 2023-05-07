import { produce } from 'immer';
import { create } from 'zustand';
import { State } from './type';

export const useStore = create<State>(set => ({
  sidebar: false,
  notification: null,
  setSidebar: value => set(state => ({ ...state, sidebar: value })),
  setNotification: notification =>
    set(
      produce((state: State) => {
        state.notification = notification;
      })
    ),
}));
