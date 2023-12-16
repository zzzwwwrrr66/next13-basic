"use client"
import type {Data} from '../page'
export default function Lists (props: {data:Data}) {
  
  return <>
  <h2>List</h2>
  <ul>
    {props.data.map((v,i)=><li key={v.id}>{i+1}. {v.title}</li>)}
  </ul>
  </>
}