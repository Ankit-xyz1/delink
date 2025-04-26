import { connectDb } from "@/lib/mongodb";
import Url from "@/lib/urlModel";

export async function POST(request) {
    const body = await request.json(); // Parse the request body
    console.log('Request Body:', body);
    await connectDb()
    let AlreadyExist = await Url.findOne({shortenUrl : body.shortenUrl})
    if(AlreadyExist){
        return Response.json({ message: 'Already exist',success:false })
    }
    let data = await Url.insertOne(body);
    return Response.json({ message: 'Shorten Link created',success:true })
  }
export async function GET(request) {
    // const client = await clientPromise
    // const db = client.db('URLdb')
    // const collection = db.collection('UrlCollections')
    // request.params
    return Response.json({ message: 'Hello from Next.js!' })
  }