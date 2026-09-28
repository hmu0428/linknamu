import { NextRequest, NextResponse } from "next/server";
import { incrementLinkClick } from "@/lib/clicks";

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json(
      { error: "linkId가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const count = await incrementLinkClick(linkId);
    return NextResponse.json({ linkId, count });
  } catch (error) {
    console.error("클릭 수 집계 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 기록하지 못했습니다." },
      { status: 500 }
    );
  }
}
