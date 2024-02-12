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
import { redirect } from "next/navigation";
import { getUserData } from "@/hooks/userData";
import { auth, signin } from "@/hooks/auth";
import Swal from "sweetalert2";

// export const metadata: Metadata = {
//   title: "Contact Page",
// };

export default function SignIn() {

  const [user,setUser]=useState({});
  const queryString = window.location.search;
  
  // Create a URLSearchParams object from the query string
  const params = new URLSearchParams(queryString);
  const param1 = params.get('_id'); 


  useEffect(()=>{
    if(param1!=null){
      getUserData(user,setUser,param1)
      signin(param1)

      if(user.activigion_name!='' && user.activigion_name!=null){
        
        window.location.href='/'
      }

    }else{
      if(user.activigion_name!='' && user.activigion_name!=null){
        window.location.href='/'
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

    console.log(Data);
    document.querySelector("#contact-form > button").disabled=true;
    document.querySelector("#contact-form > button").style.background="#45f8827d"
    
let data = JSON.stringify({
  "activigion_name": Data.activigion_id,
  "sony_id": Data.sony_id,
  "xbox_id":Data.xbox_id,
  "discorde_id": param1
});
console.log("data "+data)
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
  if(response.data.data.acknowledged){
    console.log("response.data.data.acknowledged "+response.data.data.acknowledged)

  notifySuccess('Message sent successfully!');
    window.location.href='/'
  }

  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


    
  }

  return (
    <Wrapper>
      {/* header start */}
      <Header/>
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
