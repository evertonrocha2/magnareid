import { BedDouble, ChartNoAxesCombined, SmilePlus, SquareActivity, TriangleRight, Weight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

export default function BenefitsSection() {
  const motives = [
    {
      title: "Emagrecimento",
      description: "Você poderá atingir o peso tão sonhado.",
      icon: <Weight/>
    },
    {
      title: "Manutenção da Saúde",
      description: "Mantenha seu corpo saudável e em equilíbrio, prevenindo doenças.",
      icon: <SquareActivity/>
    },
    {
      title: "Melhora do Bem-Estar",
      description: "Sinta-se mais disposto e com mais energia no dia a dia.",
      icon: <SmilePlus/>
    },
    {
      title: "Aumento da Confiança",
      description: "Ganhe mais confiança ao atingir seus objetivos.",
      icon: <TriangleRight/>
    },
    {
      title: "Melhora no Sono",
      description: "Durma melhor e acorde mais revigorado todos os dias.",
      icon: <BedDouble/>
    },
    {
      title: "Maior Produtividade",
      description: "Tenha mais foco e eficiência em suas tarefas diárias.",
      icon: <ChartNoAxesCombined/>
    },
  ];
  return (
    <div className="p-16 relative flex flex-col items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 border-b border-zinc-700">
      <div className="bg_pattern h-[100%] w-[100%] z-[1] absolute"></div>
      <h1 className="text-4xl tracking-tighter text-center text-transparent bg-gradient-to-r from-zinc-300 to-zinc-100 bg-clip-text mb-8 py-2">Benefícios de seguir nossas dicas</h1>
    <div className="gap-2 grid lg:grid-cols-3 justify-items-center md:grid-cols-2 grid-cols-1">
      {motives.map((motive, index) => (
        <Card key={index} className="p-4 w-96	h-50 z-[2]">
          <CardHeader className="text-xl flex flex-col gap-2">
            <div className="text-[#FFD9AA]">{motive.icon}</div>            
            {motive.title}</CardHeader>
          <CardContent>
            <CardDescription>{motive.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
}
