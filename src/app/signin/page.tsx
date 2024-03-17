'use client'
import { Metadata } from "next";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import BreadcrumbAreaThree from "../components/breadcrumb/breadcrumb-area-3";
import ContactArea from "../components/contact/contact-area";
import axios from "axios";
import { useEffect, useState } from "react";
import { notifySuccess } from "@/utils/toast";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { set } from "local-storage";
import { getUserData } from "@/hooks/userData";

// export const metadata: Metadata = {
//   title: "Contact Page",
// };

export default function SignIn({params}:{params: { id: string }}) {

  const [user,setUser]=useState(null);

  // Create a URLSearchParams object from the query string
  // const params = new URLSearchParams(document.location.search);
  const searchParams = useSearchParams()

  const _id = searchParams.get('_id'); 
const router=useRouter();

  useEffect(()=>{
    if(_id!=null){
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.BACKEND_URL}/get_user/${_id}`,
        headers: { 
          'Accept': '*/*', 
          'Content-Type': 'application/json'
        }
      };
      
      axios.request(config)
      .then((response) => {
  
        console.log("from sign in");
        console.log(JSON.stringify(response.data));
          set('user',(response.data));
          console.log(response.data)
            setUser((response.data))
        })
        // signin(param1)
        if(user&&user.activigion_name!=null&&user.activigion_name!=''){
        console.log(user)
        console.log("if")

          router.push('/')
    

    }else{
      // router.push('/')

    }
  }
  },[])
  function containsHashSymbol(inputString:string) {
    // Define the regular expression
    const regex = /#/;
  
    // Test the input string against the regular expression
    return regex.test(inputString);
  }
  
  function handle(Data: any) {
    
    if(!containsHashSymbol(Data.activigion_id)){
      Swal.fire({
        title:"Error",
        text:"The Activigion Name Should Be Like #test1234",
        icon:"info"
      })
      return 
    }

    // console.log(Data);
    // document.querySelector("#contact-form > button").disabled = true;
    // document.querySelector("#contact-form > button").style.background="#45f8827d"
    
let data = JSON.stringify({
  "activigion_name": Data.activigion_id,
  "sony_id": Data.sony_id,
  "xbox_id":Data.xbox_id,
  "_id": _id
});
console.log("data ")
console.log(data)
let config = {
  method: 'post',
  url: `${process.env.BACKEND_URL}/complete_create_user`,
  headers: { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Credentials':true
  },
  data : data
};

console.log("config "+config)

axios.request(config)
.then((response) => {
    // console.log("response.data.data.acknowledged "+response.data.data.acknowledged)
    console.log("_id")
    console.log(_id)

  notifySuccess('Message sent successfully!');
      // router.push('/')
getUserData(user,setUser,_id!)

  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


    
  }

  return (
    <Wrapper>
      {/* header start */}
      <Header style_2={true}/>
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* breadcrumb area start */}
       <BreadcrumbAreaThree title="Complete SignIn" subtitle="Complete SignIn" />
        {/* breadcrumb area end */}

        {/* contact area start */}
        <ContactArea onSubmitForm={(d: any) => handle(d)}/>
        {/* contact area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
