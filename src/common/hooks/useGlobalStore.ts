import { produce } from 'immer';
import { create } from 'zustand';
import { State } from './type';

export const useStore = create<State>(set => ({
  backdrop: false,
  notification: null,
  setBackdrop: value => set(state => ({ ...state, backdrop: value })),
  setNotification: notification =>
    set(
      produce((state: State) => {
        state.notification = notification;
      })
    ),
}));
