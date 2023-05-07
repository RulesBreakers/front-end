export type UserProvider = {
  onboarding: (user: CreateUser) => void;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  getAllDreams: () => Promise<Dreams[]>;
};

export type MessageProvider = {
  createDreamByUserId: (
    userId: number,
    dream: CreateDream
  ) => Promise<CreateDreamResult>;
  getDreamByUserId: (userId: number) => Promise<Dreams[]>;
};

export type CreateUser = {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};

export interface User extends CreateUser {
  id: number;
}

export type Credentials = {
  username: string;
  password: string;
};

export type Dreams = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  userId: string;
  updatedAt: string;
};

export type CreateDream = {
  title: string;
  description: string;
};
export type CreateDreamResult = {
  interpretation: string;
  events: DreamEvent[];
};

export type DreamEvent = { info: string; id: number; predictionId: number };
