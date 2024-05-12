import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://front-interview.darkube.app/inter/exp/direct/api",
});

export const chooseApi = createApi({
  reducerPath: "ChooseApi",
  baseQuery: customBaseQuery,
  tagTypes: ["choose"],
  endpoints: (builder) => ({
    getServiceBySort: builder.query({
      query: ({ serviceId, zoneId }) =>
        `page?serviceId=${serviceId}&zoneId=${zoneId}`,
      providesTags: ["choose"],
    }),
  }),
});
export const { useGetServiceBySortQuery } = chooseApi;
