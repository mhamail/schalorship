import slugify from "slugify";
import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "../../../../backend/db/conn";
import Schalorship from "../../../../backend/models/schalorship";

export async function GET(req: Request, res: Response) {
  connectToDatabase();
  try {
    return NextResponse.json({ ok: "ok" }, { status: 200 });
  } catch (err) {
    console.log("err");
  }
}

export async function POST(req: NextRequest) {
  connectToDatabase();
  try {
    let formData = await req.formData();
    const data: any = {};
    // Iterate through the FormData entries
    for (const [name, value] of formData.entries()) {
      if (name === "image") {
        const bytes = await (value as File).arrayBuffer();
        const buffer = Buffer.from(bytes);
        data.image = value;
        if (data.image && data.image.size > 10000000) {
          return NextResponse.json(
            {
              error: "Image should be less than 1mb in size",
            },
            { status: 200 }
          );
        }
        data.image = {
          data: buffer,
          contentType: (value as File).type, // Set the content type based on the file type
        };
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
    const slug = slugify(title);
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
  } catch (err: any) {
    console.error(err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
