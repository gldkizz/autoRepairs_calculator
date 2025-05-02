import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../supabaseSettings/supabaseClient';

export const SUPABASE_API_TAG = 'SupabaseApi'
export const SETTINGS_TAG = 'Settings'

export const supabaseApi = createApi({
    reducerPath: 'supabaseApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: [SUPABASE_API_TAG, SETTINGS_TAG],
    endpoints: (builder) => ({
        getAllSettings: builder.query({
            queryFn: async () => {
                // TODO: обработать все ошибки and перевести на функцию postgresql get_all_settings
                const {data: standartRepairsSettings_data} = await supabase.from('settings_standart_repairs').select("*").order('id', {ascending:true})
                const {data: roofSettings_data} = await supabase.from('settings_roof').select("*").order('id', {ascending:true})
                const {data: hardRepaisSettings_data} = await supabase.from('settings_hard_repairs').select("*").order('id', {ascending:true})
                const {data: hailSettings_data} = await supabase.from('settings_hail').select("*").order('id', {ascending:true})
                const {data: additionalSettings_data} = await supabase.from('settings_additional').select("*").order('id', {ascending:true})
                
                // if(error) throw error;
                return {data: {
                    standartRepairsSettings: standartRepairsSettings_data,
                    roofSettings: roofSettings_data,
                    hardRepairsSettings: hardRepaisSettings_data,
                    hailSettings: hailSettings_data,
                    additionalSettings: additionalSettings_data
                }}
            },
            providesTags: [SETTINGS_TAG]
        }),

        updateSettings: builder.mutation({
            queryFn: async (data) => {
                const updates = [
                    supabase
                    .from(data.tableName)
                    .update({first_category: data.formState.input11, second_category: data.formState.input12, third_category: data.formState.input13, fourth_category: data.formState.input14, fifth_category: data.formState.input15})
                    .match({id: 1}),
                    supabase
                    .from(data.tableName)
                    .update({first_category: data.formState.input21, second_category: data.formState.input22, third_category: data.formState.input23, fourth_category: data.formState.input24, fifth_category: data.formState.input25})
                    .match({id: 2}),
                    supabase
                    .from(data.tableName)
                    .update({first_category: data.formState.input31, second_category: data.formState.input32, third_category: data.formState.input33, fourth_category: data.formState.input34, fifth_category: data.formState.input35})
                    .match({id: 3}),
                    supabase
                    .from(data.tableName)
                    .update({first_category: data.formState.input41, second_category: data.formState.input42, third_category: data.formState.input43, fourth_category: data.formState.input44, fifth_category: data.formState.input45})
                    .match({id: 4}),
                    supabase
                    .from(data.tableName)
                    .update({first_category: data.formState.input51, second_category: data.formState.input52, third_category: data.formState.input53, fourth_category: data.formState.input54, fifth_category: data.formState.input55})
                    .match({id: 5}),
                ]

                const result = await Promise.all(updates)

                const error = result.find(r => r.error)?.error
                if(error) throw error;

                return {data: {success: true}}
            },
            invalidatesTags: [SETTINGS_TAG]
        }),

        getSettings: builder.query({
            queryFn: async (data) => {
                if(Number(data.category) !== 0 && Number(data.typeOfWork) !== 0) {
                    try {
                      const { data: result, error } = await supabase
                        .rpc('get_settings', {
                          typeofwork: Number(data.typeOfWork),
                          category_num: Number(data.category)
                        })
                        .select('*')
                        .single();
              
                      if(error) throw error;
                      
                      return { data: result };
                    } catch (error) {
                      return { error };
                    }
                  }
                  return { data: null };
            },
            invalidatesTags: [SETTINGS_TAG]
        }),
        getAdditionalSettings: builder.query({
            queryFn: async () => {
                const {data: additionalSettings, error} = await supabase.rpc('get_additional_settings').select("*")
                if(error) throw error
                return {data: additionalSettings}
            }
        })
    })
})


export const {useGetAllSettingsQuery, useUpdateSettingsMutation, useLazyGetSettingsQuery, useGetAdditionalSettingsQuery} = supabaseApi