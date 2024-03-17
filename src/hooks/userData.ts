import axios from "axios";
import { get, set } from "local-storage";

export const getUserData=(user?:any,setUser?:any,param1?:string,first?:any)=>{

    console.log(get('user'))

    const temp_user=(get('user'));
    if(param1==null ){
        if(temp_user==null)           window.location.href=('/')

    param1=temp_user._id    
}
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.BACKEND_URL}/get_user/${param1}`,
      headers: { 
        'Accept': '*/*', 
        'Content-Type': 'application/json'
      }
    };
    
    axios.request(config)
    .then((response) => {

      console.log(JSON.stringify(response.data));
      if(response.data!=null){
        set('user',(response.data));
        console.log(response.data)
        if(user!=null)
          setUser((response.data))
        if(first==null){
          window.location.href='/'

        }

      }else{

        if(first==null){
          window.location.href='/'

        }
      }
      })
    .catch((error) => {
      console.log(error);
    });
    
  }