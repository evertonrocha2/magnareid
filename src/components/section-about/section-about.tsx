'use client'
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function SectionAbout(){

  
  return (
    <div className={`bg-gradient-to-r from-zinc-100 to-zinc-50 flex flex-col gap-2 items-center justify-center h-[100vh] p-[6rem] mt-12`}>
      <div className="w-1/2 flex items-center justify-center flex-col gap-2">
      <h1  className="text-4xl text-center w-[80%] font-semibold tracking-tighter text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text">Quer saber o segredo do emagrecimento?</h1>
      <p className=" text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text font-regular tracking-tighter">É mais simples do que você pode imaginar...</p>
      <Button className="font-semibold tracking-tighter mt-4 bg-zinc-950 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-100">Desejo saber</Button>
      </div>
      <div className="w-1/2 p-8 flex items-center justify-center">
        <img className="w-1/2 " alt="Uma garota!" src="/girl.svg"/>
      </div>
    </div>
  )
}