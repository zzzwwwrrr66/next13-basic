import Lists from "@/app/wooram/components/Lists"
import Post from "@/app/wooram/components/Post"
import { getData } from "./api/server";

export type Data = {id: number; title: string; author: string;}[]

export default async function Wooram () {
  const data = await getData();
  
  return <main className="p-10">
    <Post/>
    <Lists data={data}/>
  </main>
}
