import axios from "axios";
import { redirect } from "next/navigation";

const signin=(id:string)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BACKEND_URL}/get_user/${id}`,
        headers: { 
          'Accept': '*/*', 
          'Content-Type': 'application/json'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.data!=null){
          localStorage.setItem('user',JSON.stringify(response.data));
      
        }else{
          window.location.href='/'
        }
        })
      .catch((error) => {
        console.log(error);
      });
  
}
 const auth=()=>{
    return localStorage.getItem('user')!= null || typeof localStorage.getItem('user')!='undefined'
}
const signout=()=>{
    localStorage.clear();
    window.location.href='/'
}
export{
    signout,
    auth,
    signin
}