import { NextResponse } from "next/server";
import { getRandomJoke } from "@/data/jokes";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const except = searchParams.get("except");
  const exceptId = except ? parseInt(except, 10) : undefined;
  return NextResponse.json(getRandomJoke(exceptId));
}
