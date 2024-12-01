import axios, { AxiosResponse } from "axios";
import { TParams, TResponse } from "../utilities/Types";


export const fetchMangaList = async (params: TParams) : Promise<AxiosResponse<TResponse>> => {
    const {data} = await axios.request({
        method: 'get',
        url: '/api/mangaList',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            'Content-Type': 'application/json'
        },
        baseURL: import.meta.env.VITE_APP_URL,
        params: params
    });

    return data
}

