import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://front-interview.darkube.app/inter/exp/direct/api",
});

export const zonesApi = createApi({
  reducerPath: "ZonesApi",
  baseQuery: customBaseQuery,
  tagTypes: ["services"],
  endpoints: (builder) => ({
    getAllZones: builder.query({
      query: () => ({ url: "zones", method: "GET" }),
      providesTags: ["zones"],
    }),
  }),
});
export const { useGetAllZonesQuery } = zonesApi;
