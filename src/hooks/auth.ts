import axios from "axios";
import { get, remove, set } from "local-storage";
import { redirect } from "next/navigation";

const signin=(id:any)=>{
  console.log(id)
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
          set('user',JSON.stringify(response.data));
      
        }else{
          redirect('/')
        }
        })
      .catch((error) => {
        console.log(error);
      });
  
}
 const auth=()=>{
    return get('user')!= null || typeof get('user')!='undefined'
}
const signout=()=>{
    remove("user");
    window.location.href=('/')
  }
export{
    signout,
    auth,
    signin
}