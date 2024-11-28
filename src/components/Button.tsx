import { TButtonProps } from "../utilities/Types"

const Button = ({onClick, text_name} : TButtonProps) => {
  return (
    <input
        type='button' 
        onClick={onClick}
        className="ml-4 border-1 border-indigo-300/25 text-indigo-200 border-solid font-medium px-4 py-2 rounded-tl-lg rounded-br-lg hover:bg-slate-900" 
        value={text_name}/>
  )
}

export default Button