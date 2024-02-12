export default async function getClanData ({id,setData}:any){
    const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `${process.env.BACKEND_URL}/get_clan_data/${id}`,
  headers: { }
};

await axios.request(config)
.then((response:any) => {
    setData({
        clan:response.data.data.clan,
        challenges:response.data.data.challenge,
        players:response.data.data.players
    })
})
.catch((error:string) => {
  console.log(error);
});


}