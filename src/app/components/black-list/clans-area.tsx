import nft_data from "@/data/nft-data";
import ClanItem from "./clan-item";
import { useEffect, useState } from "react";
import errorMessage from "@/hooks/messageError";
import Pagination from "@/context/pagination";

export default function ClansArea(){

    const [clans,setClans]=useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);

useEffect(()=>{
    const getBlackListClans=()=>{
        const axios = require('axios');

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BACKEND_URL}/get_black_list_clans?page=${currentPage}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response:any) => {

            setTotalPage(Math.ceil((response.data.length)/9))
            if(response.data.success)
                setClans(response.data.data)
            else
                errorMessage(response.data.message)
                // console.log(JSON.stringify(response.data));
        })
        .catch((error:any) => {
            errorMessage(error.message)

          console.log(error);
        });
        
    }
getBlackListClans()
},[currentPage])

console.log("clans")
return (
<section className="nft-item__area">

<div className="container custom-container">
  <div className="row justify-content-center">
    {clans.map((item:any) => (
      <div key={item._id} className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
        <ClanItem item={item} />
      </div>
    )
    )
    }

<Pagination
            setCurrentPage={setCurrentPage}
             totalPage={totalPage}
              currentPage={currentPage}
            />

  </div>

</div>

</section>
)
}