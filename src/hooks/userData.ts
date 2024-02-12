import axios from "axios";

export const getUserData=(user?:any,setUser?:any,param1?:string)=>{
    console.log(localStorage.getItem('user')!)

    const temp_user=JSON.parse(localStorage.getItem('user')!);
    if(param1==null ){
        if(temp_user==null) window.location.href='/'
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
        localStorage.setItem('user',JSON.stringify(response.data));
        if(user!=null)
          setUser((response.data))
    
      }else{
        window.location.href='/'
      }
      })
    .catch((error) => {
      console.log(error);
    });
    
  }