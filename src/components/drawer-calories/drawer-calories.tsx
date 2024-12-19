"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { useToast } from "@/hooks/use-toast" 
import { ToastAction } from "@/components/ui/toast"


import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import InteractiveHoverButton from "../ui/interactive-hover-button"
import { saveCaloriesToDatabase } from "@/lib/save-to-db"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export default function DrawerCalories() {
  const { toast } = useToast()
  const [goal, setGoal] = React.useState(350)
  const [calories, setCalories] = React.useState(0)

  function onClick(adjustment: number) {
    const calculatedGoal = (Math.max(200, Math.min(1600, goal + adjustment)))
    setGoal(calculatedGoal)
    console.log(calculatedGoal)
  }

  function saveDbValue(){
    saveCaloriesToDatabase(goal)
  }

  React.useEffect(() => {
    async function fetchCalories() {
      try {
        const response = await fetch("/api/get-calories", {
          method: "GET",
      });
          if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setCalories(data.calories)
          setGoal(data.calories)
          return data.calories;
      } catch (error) {
          console.error("Failed to fetch CALORIES:", error);
          return null;
      }
  }
  fetchCalories()
  }, []);

  return (
    <Drawer >
      <DrawerTrigger asChild>
        <InteractiveHoverButton className="w-full md:w-1/3 py-2 mx-auto text-lg ">Regular Calorias</InteractiveHoverButton>
      </DrawerTrigger>
      <DrawerContent className="md:w-1/2 mx-auto">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Meta desejada</DrawerTitle>
            <DrawerDescription>Coloque sua meta diária!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Reduzir</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calorias/Dia
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 1600}
              >
                <Plus />
                <span className="sr-only">Aumentar</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
          <Button
              onClick={() => {
                saveDbValue();
                toast({
                  title: "Calorias salvas com sucesso!",
                  description: "Veja em sua dashboard e avalie!",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              Salvar
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
