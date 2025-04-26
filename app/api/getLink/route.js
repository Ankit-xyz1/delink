import { connectDb } from "@/lib/mongodb";
import Url from "@/lib/urlModel";

export async function POST(request) {
  await connectDb();
  const { slug } = await request.json(); // Parse the request body
  console.log(slug);
  let documentFromDb = await Url.findOne({ shortenUrl: slug });
  console.log(documentFromDb);
  if (documentFromDb) {
    return Response.json({ data: documentFromDb.url, success: true });
  }
  return Response.json({ message: "no such link found", success: false });
}
