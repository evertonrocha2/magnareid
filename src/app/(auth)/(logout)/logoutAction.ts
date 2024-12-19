"use server";
import { signOut } from "../../../../auth";

export async function handleLogout(_prevState: any, formData: FormData) {
  return signOut();
}
