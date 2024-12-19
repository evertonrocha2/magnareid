"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleRegister } from "./registerAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(handleRegister, null)
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
          Register
        </Button>
      </div>
    </form>
  );
}
