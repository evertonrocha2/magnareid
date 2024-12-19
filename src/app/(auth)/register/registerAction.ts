"use server";
import db from "@/lib/db"; 
import { hash, hashSync } from "bcrypt-ts"; 

export async function handleRegister(_prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const hashedPassword =  hashSync(password, 10);

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  

  return user;
}
