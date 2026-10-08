import { NextRequest, NextResponse } from "next/server";
import { getSinglePublication } from "@/service/sanity-queries";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await getSinglePublication({ slug });

    if (!post?.file) {
      return new NextResponse("PDF not found", { status: 404 });
    }

    // Only allow Sanity CDN files to be fetched
    const fileUrl = new URL(post.file);

    if (
      fileUrl.hostname !== "cdn.sanity.io" &&
      fileUrl.hostname !== "www.sanity.io"
    ) {
      return new NextResponse("Invalid file source", { status: 400 });
    }

    const response = await fetch(post.file);

    if (!response.ok) {
      return new NextResponse("Unable to fetch PDF", { status: 502 });
    }

    const pdf = await response.arrayBuffer();

    const filename =
      `${post.title || "publication"}`
        .replace(/[^a-z0-9]/gi, "-")
        .replace(/-+/g, "-")
        .toLowerCase() + ".pdf";

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("PDF download error:", error);

    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}