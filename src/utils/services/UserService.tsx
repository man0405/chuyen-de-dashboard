import type { House } from "@/types/HouseType";
import { SupabaseService } from "../services/BaseService";
export const User = new SupabaseService<House>("house", "id");
