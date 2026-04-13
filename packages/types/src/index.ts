export type AuthRegisterInput = {
  fullName: string;
  shopName: string;
  email: string;
  password: string;
};

export type AuthLoginInput = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  fullName: string;
  shopName: string;
  email: string;
  createdAt: string;
};

export type AuthResponse = {
  accessToken: string;
  user: AuthUser;
};

export type CreateLeadInput = {
  fullName: string;
  phone?: string;
  shopName: string;
  note?: string;
};
