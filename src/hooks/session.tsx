import { cookies } from "next/dist/client/components/headers"

export function Storage(){
  const setItem=(key:any,val:any)=>{
    cookies().set(key,val)
  }
  const getItem=(key:any)=>{
    window.localStorage.getItem(key)
  }
  return {
    getItem,
    setItem
  }
}