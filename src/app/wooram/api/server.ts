type Data = {id: number; title: string; author: string;}[]
export async function getData(): Promise<Data> {
  const res = await fetch(`${process.env.API_URL}/posts`, { cache: 'no-store'} )
  // cache default => 'force-cache'
  // const res = await fetch(`${process.env.API_URL}/posts`)
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}