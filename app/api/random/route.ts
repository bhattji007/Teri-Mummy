import { NextResponse } from "next/server";
import { getRandomJoke } from "@/data/jokes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const except = searchParams.get("except");
  const exceptId = except ? parseInt(except, 10) : undefined;
  if (exceptId !== undefined && (isNaN(exceptId) || exceptId < 0)) {
    return NextResponse.json({ error: "Invalid 'except' parameter" }, { status: 400 });
  }
  return NextResponse.json(getRandomJoke(exceptId));
}
