import { NextResponse } from "next/server";
import { jokes } from "@/data/jokes";

export async function GET() {
  return NextResponse.json({ total: jokes.length, jokes });
}
