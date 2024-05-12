import { useState } from "react";
import { useGetServicesQuery } from "../../services/services";

const UseServices = () => {
  const [zoneId, setZoneId] = useState;
  const { data: services } = useGetServicesQuery({ zoneId: zoneId });

  return { zoneId, setZoneId, services };
};
export default UseServices;
