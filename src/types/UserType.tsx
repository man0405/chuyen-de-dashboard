import { BaseType } from "./BaseType";

export interface Login extends BaseType {
  id: string;
  email: string;
  password: string;
}
