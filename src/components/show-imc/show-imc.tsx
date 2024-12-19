'use client'
import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

export default function ShowImc(){
  const [imc, setImc] = useState<number | null>(null);

  useEffect(() => {
    async function fetchImc() {
      try {
        const response = await fetch("/api/get-imc", {
          method: "GET",
      });
          if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setImc(data.imc)
          return data.imc;
      } catch (error) {
          console.error("Failed to fetch IMC:", error);
          return null;
      }
  }
  fetchImc()
  }, []);

  
  console.log(imc)
  return (
    <div className="text-2xl font-semibold flex gap-4 items-center">
      {imc}
      <RefreshCcw className="cursor-pointer hover:text-zinc-400 transition-all" onClick={()=>window.location.reload()}/>
    </div>
  )
}