import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => "/todos",
        }),
        // addTodo: builder.mutation({
        //     url: "/todo",
        //     method: "POST",
        //     body: todo
        // })
    }),
})

export const {useGetTodoQuery} = todoApi;