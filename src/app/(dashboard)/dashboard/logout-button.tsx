'use client'
import { handleLogout } from "@/app/(auth)/(logout)/logoutAction";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export default function LogoutButton(){
  const [state, formAction, isPending] = useActionState(handleLogout, null)
  return (
    <form action={formAction}>
    <Button className="mt-4 ml-2">Sair</Button>
    </form>
  )
}