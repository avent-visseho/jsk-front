export interface ILogin {
  phone_number: string;
  password: string;
  user_group: string;
}

export interface IRegister {
  firstname: string;
  lastname: string;
  phone_number: string;
  password: string;
  point_of_sale_id: number;
}
