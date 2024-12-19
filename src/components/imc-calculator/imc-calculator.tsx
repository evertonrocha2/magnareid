'use client'
import {  useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { saveImcToDatabase } from "@/lib/save-to-db";

export default function ImcCalculator(){

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState(0);

  
  const handleChange = (setter: any) => (event: any) => {
    setter(event.target.value);
  };
  
  function imcCalculate() {
    if (height && weight) {
      const calculatedImc = parseFloat(weight) / Math.pow(parseFloat(height), 2);
      const formattedImc = parseFloat(calculatedImc.toFixed(2)); 
      setImc(formattedImc);
      saveImcToDatabase(formattedImc);
    }
  }

  return (
    <>
    <div className="text-center flex gap-2 flex-col">
        <h1 className="text-4xl font-bolder tracking-tighter text-center text-transparent bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text">
          Calculadora de IMC
        </h1>
        <p className="text-xl text-zinc-400">
          Saiba seu <strong className="text-zinc-100">peso ideal!</strong>
        </p>
      </div>
      <Card className="mx-auto flex flex-col gap-2 p-8 z-[2]">
        <CardContent className="p-0">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              imcCalculate();
            }}
          className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label>Peso (kg)</label>
              <Input
                type="number"
                name="weight"
                placeholder="Digite seu peso (kg)"
                value={weight}
                onChange={handleChange(setWeight)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Altura (m)</label>
              <Input
                type="number"
                placeholder="Digite sua altura (m)"
                value={height}
                onChange={handleChange(setHeight)}
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="submit"
                >
                  Calcular
                </Button>
              </DialogTrigger>
              <DialogContent className="backdrop-blur-3xl bg-zinc-950/15">
                <DialogHeader>
                  <DialogTitle>Resultado do seu IMC</DialogTitle>
                  <DialogDescription>
                    Esses valores são apenas uma base, questões fisiológicas
                    podem influenciar
                  </DialogDescription>
                  <div></div>
                  <div className="mt-4 text-xl">
                    <h1 className="text-zinc-100">IMC: {imc}</h1>
                  </div>
                  <div className="flex items-center justify-center mt-8 relative">
                    <div className="bg-[#FFD9AA] absolute z-[1] w-[100px] h-[100px] rounded-full blur-3xl"></div>
                    <img className="z-[2]" src="/girl.svg" />
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </form>
        </CardContent>
      </Card>
    </>
  )
}