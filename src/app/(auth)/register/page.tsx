import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "./register-form";

export default function RegisterPage(){

  return (
    <>
    <div className="flex items-center justify-center h-screen">
    <Card className="max-w-sm w-full max-h-sm rounded-2xl mt-8 mx-auto p-2">
        <CardHeader>
          <h2 className="text-xl font-bold">Boas Vindas</h2>
          <CardDescription>Faça seu registro para acessar o sistema!</CardDescription>
          <div className='text-xs text-gray-500 my-2'>
            Dados de Sessão
          </div>
        </CardHeader>
        <CardContent>
          <RegisterForm/>
          <p className="text-sm text-muted-foreground mt-3">
        Não possui cadastro?{' '}
        <Link className="text-zinc-500 hover:underline" href="/cadastro">
          Registre-se
        </Link>
        .
      </p>
        </CardContent>
   
      </Card>
      </div>
  </>
  )
}