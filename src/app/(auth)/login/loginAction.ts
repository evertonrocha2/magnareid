"use server";
import { signIn } from "../../../../auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function handleLogin(_prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      redirectTo: '/dashboard'
    })
    return {success: true};
  } catch (e: any){
    if(isRedirectError(e)){
      throw e;
    }
    if(e.type === 'CredentialsSignin'){
      return {success: false, message: "As credenciais estão erradas"}
    }
    return {success: false, message: "Algum erro aconteceu"}
  }
}
