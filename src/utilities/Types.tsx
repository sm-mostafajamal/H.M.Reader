import { MouseEventHandler } from "react";

export type TModalProps = {
    show : boolean,
    onHide: React.MouseEventHandler<HTMLButtonElement>,
};

export type TButtonProps = {
    onClick : MouseEventHandler<HTMLInputElement>,
    text_name : string
};

export type TResponse = {
    mangaList : TMangaItem[]
    metaData : object
};

export type TParams = {
    catagory?: string, 
    state?: string, 
    type?: string
};

export type TMangaItem = {
    image : string,
    title : string,
    chapter : string,
    view : string,
    description : string
}


export type TManga = {
    manga : TMangaItem   
}

export type TFetchedMangaList = { 
    isLoading : boolean, 
    isSuccess : boolean, 
    data: TResponse | undefined
}