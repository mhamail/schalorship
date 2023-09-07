//@ts-nocheck
// @ts-ignore
import slugify from "slugify";
import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/backend/db/conn";
import Schalorship from "@/backend/models/schalorship";

connectToDatabase();

export async function GET(req: Request, res: Response) {
  try {
    return NextResponse.json({ ok: "ok" }, { status: 200 });
  } catch (err) {
    console.log("err");
  }
}

export async function POST(req: NextRequest) {
  try {
    let formData = await req.formData();
    const data = {};
    // Iterate through the FormData entries
    for (const [name, value] of formData.entries()) {
      if (name === "file") {
        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);
        data.image = buffer;
      } else {
        // Handle other form fields
        data[name] = value;
      }
    }
    const {
      title,
      image,
      highlight,
      description,
      country,
      funding,
      university,
      degree,
      subjects,
    } = data;
    const slug = slugify(title)
    const newSchalorship = new Schalorship({
      title,
      slug,
      image,
      highlight,
      description,
      country,
      funding,
      university,
      degree,
      subjects,
    });
    const schalorship = await newSchalorship.save();
    console.log(schalorship);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("err");
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
