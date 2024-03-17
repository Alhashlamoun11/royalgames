// pages/api/auth/discord.ts
import { Storage } from '@/hooks/session';
import axios from 'axios';
import { set } from 'local-storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';

const clientId = "1202268878965571604";
const clientSecret = "lDlPJH3be6C3pfUuqvVCil5017p3J7Kc";
const redirectUri = "http://localhost:3000/api/auth/callback";

export default async function handler(req: any, res: NextApiResponse) {
  const code = req.searchParams.code;
  let founded=false;
  let user=null;
  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: code as string,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token, token_type, expires_in, refresh_token, scope } = tokenResponse.data;

    // Fetch user information using the access token
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    });

    const userData = userResponse.data;

    let data = JSON.stringify({
      "username": userData.username,
      "refreach_token": refresh_token,
      "local": userData.local,
      "global_name": userData.global_name,
      "banner": userData.banner,
      "avatare": userData.avatar,
      "discorde_id": userData.id
    });

    try {
      // Make a request to your backend API to create/update user
      const response = await axios.post(process.env.BACKEND_URL+'/create_user', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // console.log(response.data);
      user=response.data;
      // Assuming your backend response has a "found" property
        founded=(response.data.user.activigion_name!=null && response.data.user.activigion_name!='')
        // console.log("response.data.activigion_name "+response.data.user.activigion_name!='')
        // console.log("response.data.activigion_name!=null  "+response.data.user.activigion_name!=null)
        // console.log("founded "+founded)
    } catch (error) {
      console.error('Error during backend API request:', error);
    }

  } catch (error) {

    console.log(error)
  }finally{
    // console.log("finally")
    // console.log(user)
    console.log(user.user._id)

    if(founded){
      set('user',user.user)
      redirect('/?_id='+user.user._id)
    }else{
      // console.log("user.user:; "+user._id)
      redirect('/signin?_id='+user.user._id)
    
    }
  }

}
