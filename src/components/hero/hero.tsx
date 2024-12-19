import DrawerCalories from "../drawer-calories/drawer-calories";


export default function Hero(){
  const text: { title: string; description: string } = {
    title: 'Emagrecer nunca foi tão fácil',
    description: 'Com apenas um click você pode regular a quantidade de calorias que deseja consumir ao longo do dia'
  };
  
  
  return (
    <div className="py-4 mt-6 flex flex-col gap-8 text-center h-[60vh] items-center justify-center bg-gradient-to-t from-zinc-900/80 border-b border-zinc-800 to-zinc-950/10">
      <div className="flex flex-col gap-2">
      <h1 className="text-8xl font-bolder tracking-tighter text-center text-transparent bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text py-3">{text.title}</h1>
      <p className="text-zinc-300 text-xl">{text.description}</p>
      </div>
      <DrawerCalories/>
    </div>
  )
}