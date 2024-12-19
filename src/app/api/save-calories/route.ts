// src/app/api/save-imc/route.ts
import { NextResponse } from "next/server";
import db from "@/lib/db"; // Ajuste conforme sua configuração do db
import { auth } from "../../../../auth";


export async function POST(req: Request) {
  try {
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

    const { calories } = await req.json();
    console.log(calories)

    // Validar IMC
    if (typeof calories !== "number" || isNaN(calories)) {
      return NextResponse.json({ error: "Invalid CALORIES value" }, { status: 400 });
    }

    const caloriesData = await db.caloriesData.upsert({
      where: { userId: user.id },
      update: { calories },
      create: { userId: user.id, calories },
    });

    // Retornar resposta de sucesso
    return NextResponse.json({ success: true, calories: caloriesData.calories });
  } catch (error) {
    console.error("Error saving CALORIES:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
