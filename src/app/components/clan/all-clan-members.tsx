import React from "react";
import ClanMember from "./clan-member";

const CLanMembers = ({players}:any) => {
  return (
    <div className="related__product-wrapper">
      <div className="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
        {players.map((item:any) => (
          <div key={item._id} className="col">
            <ClanMember item={item} />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CLanMembers;
