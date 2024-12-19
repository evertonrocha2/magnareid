// src/app/api/save-imc/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db"; // Ajuste conforme sua configuração do db
import { auth } from "../../../../auth";


export async function POST(req: Request) {
  try {
    // Autenticação do usuário
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await db.user.findUnique({
      where: { email: session.user?.email as string },
    });


    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Extrair IMC da requisição
    const { imc } = await req.json();
    console.log(imc)

    // Validar IMC
    if (typeof imc !== "number" || isNaN(imc)) {
      return NextResponse.json({ error: "Invalid IMC value" }, { status: 400 });
    }

    // Inserir ou atualizar o IMC no banco
    const imcData = await db.imcData.upsert({
      where: { userId: user.id },
      update: { imc },
      create: { userId: user.id, imc },
    });

    // Retornar resposta de sucesso
    return NextResponse.json({ success: true, imc: imcData.imc });
  } catch (error) {
    console.error("Error saving IMC:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
