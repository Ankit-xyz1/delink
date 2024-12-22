import { redirect } from "next/navigation"
import clientPromise from '@/lib/mongodb' 


export default async function Page({ params }) {
    const slug = (await params).slug
    const client = await clientPromise
    const db = client.db('URLdb')
    const collection = db.collection('UrlCollections')
    let doc = await collection.findOne({shortenUrl : slug})
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div></div>
  }