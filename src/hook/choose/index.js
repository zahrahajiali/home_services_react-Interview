import { useState } from "react";
import { useGetServiceBySortQuery } from "../../services/choose";

const UseChoose = () => {
  const [zoneId, setZoneId] = useState;
  const [serviceId, setServiceId] = useState;
  const { data: serviceBySort } = useGetServiceBySortQuery({
    zoneId: zoneId,
    serviceId: serviceId,
  });

  return { zoneId, setZoneId, serviceId, setServiceId, serviceBySort };
};
export default UseChoose;
