import { NextRequest, NextResponse } from "next/server";
import { getLinkClicks, incrementLinkClick } from "@/lib/clicks";

export async function GET() {
  try {
    const counts = await getLinkClicks();
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}

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
