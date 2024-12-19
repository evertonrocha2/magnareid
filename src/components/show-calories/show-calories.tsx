'use client'
import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function ShowCalories(){
  const [calories, setCalories] = useState<number | null>(null);

  useEffect(() => {
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
          return data.imc;
      } catch (error) {
          console.error("Failed to fetch CALORIES:", error);
          return null;
      }
  }
  fetchCalories()
  }, []);

  
  console.log(calories)
  return (
    <div className="text-2xl font-semibold flex gap-4 items-center">
      {calories}
      <RefreshCcw className="cursor-pointer hover:text-zinc-400 transition-all" onClick={()=>window.location.reload()}/>
    </div>
  )
}