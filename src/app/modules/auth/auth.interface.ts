export type ISignInUser = {
  email: string;
  password: string;
};

export type ISignInUserResponse = {
  token: string;
  refreshToken?: string;
};
export type ISignInUserResponsess = {
  token: string;
};
