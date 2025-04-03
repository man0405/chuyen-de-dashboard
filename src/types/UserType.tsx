import { BaseType } from "./BaseType";

export interface User extends BaseType {
  id: string;
  name: string;
  description: string;
  user_details: UserDetails;
}
export interface UserDetails extends BaseType {
  id: string;
  sqare: string;
  bed: string;
  bath: string;
  address: string;
}
