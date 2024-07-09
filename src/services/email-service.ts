import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../models/response/base-response";

export const emailService = createApi({
  reducerPath: "emailService",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://81.17.102.54:3000/api/v1`,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Headers', 'Content-Type');
      headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      return headers;
    },
    mode: 'no-cors',
  }),
  tagTypes: ["Email"],
  endpoints: (build) => ({
    emailVerify: build.mutation<
      BaseResponse<any[]>,
      { userId: string; token: string }
    >({
      query: ({ userId, token }) => ({
        url: `/user/email/verify?userId=${userId}&token=${token}`,
        method: "GET",
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useEmailVerifyMutation } = emailService;
