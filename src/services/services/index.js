import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://front-interview.darkube.app/inter/exp/direct/api",
});

export const servisesApi = createApi({
  reducerPath: "ServisesApi",
  baseQuery: customBaseQuery,
  tagTypes: ["services"],
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ zoneId }) => `services?zoneId=${zoneId}`,
      providesTags: ["services"],
    }),
  }),
});
export const { useGetServicesQuery } = servisesApi;
