"use client"
import React, { useState } from "react"

import { postData } from "../api/client"
import { useRouter } from "next/navigation";


export default function Post(){
  const [title, setTitle] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    try {
      const res = await postData(title);
      setTitle("");
      router.refresh();
    } catch (error) {
      // something do (error boundary)
      console.error(error);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  return <div>
  <h2 className="font-bold">Post</h2>
  <form onSubmit={onSubmit}>
    <div className="mb-2">
      <input type="text" className="border-2" value={title} onChange={onChange}/>
    </div>
    <div >
      <button type="submit" className="p-1 border rounded-sm border-black">submit</button>
    </div>
  </form>
  </div>
}