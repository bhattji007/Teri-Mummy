import { NextResponse } from "next/server";
import { getRandomJoke } from "@/data/jokes";

export async function GET() {
  return NextResponse.json(getRandomJoke());
}
