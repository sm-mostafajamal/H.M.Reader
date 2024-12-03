import { useQuery } from "@tanstack/react-query"
import { TFetchedMangaList, TMangaFilter, TMangaItem } from "../utilities/Types"
import { fetchMangaList } from "../services/get_all_data"
import { FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const MangaState = ({id, title} : TMangaFilter) => {
  const { isSuccess, data } : TFetchedMangaList = useQuery({ 
    queryKey: [id], 
    queryFn: () => fetchMangaList({state: id}),
    refetchOnWindowFocus: false 
  })
  const text_color = id == 'all' ? 'text-violet-500' : id == 'Completed' ? 'text-red-500' : 'text-rose-500';

  return (
    <div className="w-1/3">
        <h1 className={`text-2xl font-bold border-b-2 border-slate-500/25 mb-2 w-96 pb-2 ml-4 ${text_color}`}>{title}</h1>
        <section className="mt-4">
          { isSuccess &&
            data?.mangaList?.slice(0,5).map((manga : TMangaItem, i: number) => { 
              return (
                <section key={i} className="mx-2 cursor-pointer mb-4">
                  <div className="flex bg-slate-500/10 h-44">
                      <img src={`${manga.image}`} className='max-w-sm w-32 h-34 rounded-md'/>
                      <section className="flex flex-col ml-8 justify-center">
                        <label className="text-teal-300  text-sm font-mono font-semibold mb-2">{manga.title}</label>
                        <label className="text-gray-300  text-sm font-mono font-semibold mb-2">{manga.chapter}</label>
                        <label className="text-gray-300  text-sm font-mono font-semibold mb-2 flex items-center"><FaRegEye className='mr-2' />{manga.view}</label>
                      </section>
                  </div>
                </section>
              )
          })
          }
        </section>
        <section>
            <Link to="#" className={`text-2xl font-sans font-semibold ${text_color} ml-4 hover:underline`}>View All <KeyboardDoubleArrowRightIcon className="text-2xl font-sans font-semibold "/></Link>
        </section>
    </div>
  )
}

export default MangaState