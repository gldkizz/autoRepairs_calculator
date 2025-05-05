import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../supabaseSettings/supabaseClient';

export const archiveApi = createApi({
    reducerPath: 'archiveApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Archive'],
    endpoints: (builder) => ({
        getArchive: builder.query({
            queryFn: async () => {
                const {data, error} = await supabase.rpc('get_orders_with_details').select("*")
                if (error) throw error
                return {data}
            }
        })
    })
})

export const {useGetArchiveQuery} = archiveApi