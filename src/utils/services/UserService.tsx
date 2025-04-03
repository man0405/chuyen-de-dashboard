import type { Login } from "@/types/UserType";
import { SupabaseService } from "../services/BaseService";
export const UserService = new SupabaseService<Login>("user", "user_id");
