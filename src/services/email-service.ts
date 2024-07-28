import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseResponse } from "../models/response/base-response";

export const emailService = createApi({
  reducerPath: "emailService",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://engine.chopmoney.co/api/v1`,
  }),
  tagTypes: ["Email"],
  endpoints: (build) => ({
    emailVerify: build.mutation<
      BaseResponse<any[]>,
      { userId: string; token: string }
    >({
      query: ({ userId, token }) => ({
        url: `/user/email/verify?userId=${userId}&token=${token}`,
        method: "POST",
        referrerPolicy: "unsafe-url"
      }),
      invalidatesTags: ["Email"],
    }),
  }),
});

export const { useEmailVerifyMutation } = emailService;
