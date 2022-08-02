export interface IUserForm {
  name: string;
  phone: string;
}

export interface IUser extends IUserForm {
  id: string;
}
