import { state } from "../utilities/MangaFilters"
import MangaState from "./MangaState"

const MangaStates = () => {

  return (
    <div className="flex">
      { 
        Object.entries(state).map((item, idx) => {
          return <MangaState key={idx} title={item[1].name} id={item[1].id}/>
        })
      }
    </div>
  )
}

export default MangaStates