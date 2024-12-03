import { useQuery } from '@tanstack/react-query'
import { fetchMangaList } from '../services/get_all_data';
import Loading from './Loading';
import { state } from '../utilities/MangaFilters';
import { TFetchedMangaList, TMangaItem } from '../utilities/Types';

const MangaList = () => {
    const { isLoading, data } : TFetchedMangaList = useQuery({ 
        queryKey: ['mangas'], 
        queryFn: () => fetchMangaList({state : state.all.id}),
        refetchOnWindowFocus: false 
    })

    return (
        <div className='flex flex-wrap justify-center'>
            {
                isLoading ? 
                Array.from(Array(24), (_, i) => <Loading key={i}/>) 
                :
                data?.mangaList?.map((manga : TMangaItem, i: number) => {
                    return (
                        <div key={i} className="mx-2 cursor-pointer mb-4">
                            <div className="flex"> 
                                <img src={`${manga.image}`} className='max-w-sm w-40 h-60 rounded-md'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default MangaList