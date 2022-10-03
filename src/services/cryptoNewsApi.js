import  { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '1883935112msh84763401ada4ea7p1a7e5djsnca48c8f8d15a',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;