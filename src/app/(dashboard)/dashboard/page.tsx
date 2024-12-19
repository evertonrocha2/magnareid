import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ShowImc from "@/components/show-imc/show-imc";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImcCalculator from "@/components/imc-calculator/imc-calculator";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  
  return (
    <>
      <div className="w-full bg-gradient-to-t from-zinc-950/20 to-zinc-900 border-b border-zinc-600 h-screen">
        <div className="flex justify-center flex-col ml-4">
          <h1 className="text-4xl font-bolder tracking-tighter text-transparent bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text py-2 mt-8">
            Bem vindo a sua dashboard.
          </h1>
        </div>
        <div className="grid-cols-2 grid p-4">
        <Card>
          <CardHeader>
            <CardTitle>Andamento do seu IMC</CardTitle>
            <CardDescription>Registre sua evolução.</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl">Valor atual do seu IMC</h3>
            <ShowImc />
            <Dialog>
          <DialogTrigger className="bg-zinc-50 rounded-lg hover:bg-zinc-200 transition-all text-zinc-950 text-xl py-4 px-8 mt-2">Calcular IMC</DialogTrigger>
          <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle className="text-center text-sm font-normal text-zinc-400">Utilize abaixo nossa Calculadora</DialogTitle>
          </DialogHeader>
            <ImcCalculator />
          </DialogContent>
        </Dialog>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Andamento das suas calorias diárias</CardTitle>
            <CardDescription>Registre sua evolução.</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl">Calorias diárias atuais</h3>
            <p>1500 kcal/d</p>
          </CardContent>
        </Card>
        </div>
      </div>
    </>
  );
}
