import { NextResponse } from "next/server";
import db from "@/lib/db";
import { auth } from "../../../../auth";

export async function GET() {
    try {
        const user = await auth();

        if (!user?.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const userDb = await db.user.findUnique({
            where: { email: user.user.email },
        });

        if (!userDb) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const imcData = await db.imcData.findUnique({
            where: { userId: userDb.id },
        });

        if (!imcData) {
            return NextResponse.json({ error: "IMC data not found" }, { status: 404 });
        }

        return NextResponse.json({ imc: imcData.imc });
    } catch (error) {
        console.error("Error fetching IMC:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
