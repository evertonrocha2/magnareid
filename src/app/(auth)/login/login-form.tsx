'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { handleLogin } from "./loginAction";



export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(handleLogin, null)
  
  return (
    <form action={formAction}>
      <div>
        <label>Email</label>
        <Input type="email" name="email" placeholder="eu@exemplo.com" required />
      </div>
      <div>
        <label>Senha</label>
        <Input
          type="password"
          name="password"
          placeholder="********"
          required
        />
      </div>
      <div>
        <Button className="w-full mt-6" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
