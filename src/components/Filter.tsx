import { category } from "../utilities/MangaFilters"

const Filter = () => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-orange-200 font-bold border-b-2 border-slate-500/25 mb-2">Genres</h1>
      <div className="text-wrap bg-indigo-200/25 p-2 rounded-md">
        {
          Object.entries(category).map((item, idx) => {
            return <input className="text-sm cursor-pointer text-indigo-200 p-2 hover:bg-indigo-300 hover:text-black hover:px-2" type="button" key={idx} value={item[1].name}/>
          })
        }
      </div>
    </div>
  )
}

export default Filter