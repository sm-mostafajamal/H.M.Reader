import { useQuery } from '@tanstack/react-query'
import { fetchMangaList } from '../services/get_all_data';
import Loading from './Loading';
import { state } from '../utilities/MangaFilters';
import { TFetchedMangaList } from '../utilities/Types';

const MangaList = () => {
    const { isLoading, data } : TFetchedMangaList = useQuery({ 
        queryKey: ['mangas'], 
        queryFn: () => fetchMangaList({state : state.all.id}),
        refetchOnWindowFocus: false 
    })

    return (
        <div className='flex flex-wrap justify-center mt-4'>
            {
                isLoading ? 
                Array.from(Array(24), (_, i) => <Loading key={i}/>) 
                :
                data?.mangaList?.map((item : {image:string}, i: number) => {
                    return (
                        <div key={i} className="mx-2 cursor-pointer mb-4">
                            <div className="flex"> 
                                <img src={`${item.image}`} className='max-w-sm w-40 h-60 rounded-md'/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default MangaList