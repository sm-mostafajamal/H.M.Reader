import { useQuery } from '@tanstack/react-query'
import { fetchMangaList } from '../services/get_all_data';
import Loading from './Loading';

const MangaList = () => {
    const {isSuccess, isError, isLoading, data} = useQuery({ 
        queryKey: ['mangas'], 
        queryFn: fetchMangaList,
        refetchOnWindowFocus: false 
    })

  return (
    <>
        {
            isLoading ? 
            Array.from(Array(24), (_, i) => <Loading key={i}/>) 
            :
            data['mangaList'].map((item, i) => {
                return (
                    <div key={i}
                        className="border border-blue-300 shadow rounded-md max-w-sm w-40 h-50 mx-2">
                        <div className="flex">
                            <div className="flex-1"> 
                                <img src={`${item.image}`} />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default MangaList