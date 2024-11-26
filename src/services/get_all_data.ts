import axios, { AxiosError, AxiosResponse } from "axios";

export const fetchMangaList = async () : Promise<AxiosResponse<object> | AxiosError>=> {
    const {data} = await axios({
        methos: 'get',
        url: '/api/mangaList',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        baseURL: import.meta.env.VITE_APP_URL,
        crossDomain: true,
    });

    return data
}

