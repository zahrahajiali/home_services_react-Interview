import React, { useEffect } from "react";
import UseZone from "../../hook/zones/index";

const Zones = () => {
  // const { zones } = UseZone();
  // useEffect(() => {
  //   console.log("zones", zones);
  // }, [zones]);
  return (
    <div className="px-3 py-7 max-w-96 m-auto">
      <h3>شهرمورد نظر را انخاب کنید</h3>
      <select className="border-[1px] border-[black] w-[4rem] rounded-[0.4rem]">
        <option value="a">a</option>
      </select>
    </div>
  );
};

export default Zones;
