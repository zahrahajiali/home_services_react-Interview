import { useGetAllZonesQuery } from "../../services/zones/index";

const UseZone = () => {
  const { data: zones } = useGetAllZonesQuery({});
  return zones;
};

export default UseZone;
