import Carousel from 'react-bootstrap/Carousel';
import { fetchMangaList } from '../services/get_all_data';
import CoverItem from './CoverItem';
import { useQuery } from '@tanstack/react-query';
import { type } from '../utilities/MangaFilters';
import { TFetchedMangaList, TMangaItem } from '../utilities/Types';


function Cover() {
    const { isSuccess, data } : TFetchedMangaList = useQuery({ 
        queryKey: ['latest_mangas'], 
        queryFn: () => fetchMangaList({type: type.newest.id}),
        refetchOnWindowFocus: false 
    })

    return (
        <>
            {
            isSuccess &&
            <Carousel slide touch indicators={false} className='my-10'>
                {
                    data?.mangaList?.map((manga : TMangaItem, i: number) => { 
                        return (
                            <Carousel.Item  interval={3000} key={i}>
                                <CoverItem manga={manga} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            }
        </>
    );
}

export default Cover;